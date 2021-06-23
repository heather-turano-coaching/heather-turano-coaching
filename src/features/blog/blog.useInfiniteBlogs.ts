import { getEndpoint } from "@htc/lib/endpoint";
import { useQueryString, useUpdateUrl } from "@htc/utils";
import { useCallback, useEffect, useRef, useState } from "react";
import { GetAllPostsApiResponse, PaginationQueryParams } from "src/models";
import useSWR from "swr";

export const useInfiniteBlogs = (
  initialPostsAndMeta: GetAllPostsApiResponse
) => {
  const containerRef = useRef<HTMLDivElement | null>(null);
  const docRef = useRef<HTMLDocument | undefined>(undefined);
  const loadingRef = useRef(false);
  const updateUrl = useUpdateUrl<PaginationQueryParams>();
  const { queryObj } = useQueryString<PaginationQueryParams>();
  // prettier-ignore
  const [
    { posts: blogPosts, meta },
    setBlogPostsAndMeta
  ] = useState<GetAllPostsApiResponse>(initialPostsAndMeta);
  const ticking = useRef(false);

  const { data, isValidating: loading } = useSWR<GetAllPostsApiResponse>(
    queryObj.page
      ? getEndpoint<PaginationQueryParams>({
          root: "/posts",
          queryParams: {
            page: queryObj.page
          }
        })
      : null
  );

  useEffect(() => {
    if (data) {
      setBlogPostsAndMeta((prevData) => ({
        meta: data.meta,
        posts: [...prevData.posts, ...data.posts]
      }));
      loadingRef.current = false;
    }
  }, [data]);

  /**
   * The handler for when the container
   * gets to a specific tolerance
   */
  const handleScrollResponse = useCallback(() => {
    if (meta.pagination.next) {
      updateUrl({
        page: meta.pagination.next
      });
    }
  }, [meta.pagination.next, updateUrl]);

  /**
   * Single handler for the animation frame. Simplifies the
   * logic that needs to go into the optimized scrolling mechanism
   */
  const handleAnimationFrame = useCallback<
    (scrollPos: number, windowHeight: number) => void
  >(
    (scrollPosition, windowHeight) => {
      if (containerRef.current) {
        const container = containerRef.current;
        const bottomOfTheRef = Math.abs(
          windowHeight - (container.offsetTop + container.offsetHeight)
        );
        const reachedTheBottomOfTheRef = scrollPosition >= bottomOfTheRef - 500;
        if (reachedTheBottomOfTheRef && !loadingRef.current) {
          loadingRef.current = true;
          handleScrollResponse();
        }
        return;
      }
    },
    [handleScrollResponse]
  );

  /**
   * The scroll handler for what is called when
   * the container is scrolled
   */
  const handleScroll = useCallback(() => {
    const scrollPosition = window.scrollY;
    const windowHeight = window.innerHeight;

    // optimize scrolling
    if (!ticking.current) {
      window.requestAnimationFrame(() => {
        handleAnimationFrame(scrollPosition, windowHeight);
        ticking.current = false;
      });

      ticking.current = true;
    }
  }, [handleAnimationFrame]);

  /**
   * Add the scrollHandler to the containerRef
   */
  useEffect(() => {
    if (typeof document !== "undefined" && typeof window !== "undefined") {
      docRef.current = document;
    }

    const doc = docRef.current;

    if (doc) {
      // doc.scrollTop.valueOf();
      doc.addEventListener("scroll", handleScroll);
    }
    return () => {
      if (doc) doc.removeEventListener("scroll", handleScroll);
    };
  }, [handleScroll, containerRef]);

  return {
    containerRef,
    blogPosts,
    loading
  };
};
