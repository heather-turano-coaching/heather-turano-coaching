import { GetAllGhostPosts } from "@htc/lib/ghost";
import React, { FC, useCallback, useEffect, useRef, useState } from "react";

import { BlogList } from "./BlogList";

const useInfiniteBlogs = (initialPostsAndMeta: GetAllGhostPosts) => {
  const containerRef = useRef<HTMLDivElement | null>(null);
  const docRef = useRef<HTMLDocument | undefined>(undefined);
  const loadingRef = useRef(false);
  // prettier-ignore
  const [
    { posts: blogPosts, meta },
    setBlogPostsAndMeta
  ] = useState<GetAllGhostPosts>(initialPostsAndMeta);
  const ticking = useRef(false);

  /**
   * The handler for when the container
   * get's to a specific tolerance
   */
  const handleScrollResponse = useCallback(() => {
    console.log("fetching more items", meta);
    setTimeout(() => {
      console.log("done.");
      loadingRef.current = false;
    }, 3000);
  }, []);

  /**
   * Single handler for the animation frame. Simplifies the
   * logic that needs to go into the optimized scrolling mechanism
   */
  const handleAnimationFrame = useCallback<
    (scrollPos: number, windowHeight: number) => void
  >((scrollPosition, windowHeight) => {
    if (containerRef.current) {
      const container = containerRef.current;
      const bottomOfTheRef = Math.abs(
        windowHeight - (container.offsetTop + container.offsetHeight)
      );
      const reachedTheBottomOfTheRef = scrollPosition >= bottomOfTheRef;
      if (reachedTheBottomOfTheRef && !loadingRef.current) {
        loadingRef.current = true;
        handleScrollResponse();
      }
      return;
    }
  }, []);

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
  }, [handleScrollResponse]);

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
    blogPosts
  };
};

export const BlogSectionAll: FC<GetAllGhostPosts> = (props) => {
  // ADD INIFINITE HERE WITH REF
  const { containerRef, blogPosts } = useInfiniteBlogs(props);

  return <BlogList posts={blogPosts} ref={containerRef} />;
};
