import {
  makeFlex,
  sharedHorizontalBodyPadding
} from "@heather-turano-coaching/components";
import { useBreakpoints } from "@heather-turano-coaching/core/hooks";
import {
  makeColor,
  makeOutset,
  makeReset,
  makeSize
} from "@heather-turano-coaching/design-system";
import { PostOrPage } from "@tryghost/content-api";
import { graphql, useStaticQuery } from "gatsby";
import { clamp } from "lodash";
import { rgba } from "polished";
import React, { FC, useLayoutEffect, useRef, useState } from "react";
import { animated, useSprings } from "react-spring";
import { useDrag } from "react-use-gesture";
import styled, { CSSProperties } from "styled-components";

import { BlogCardFeature, BlogCardFeatureSelector } from "../../content";
import {
  LayoutBlock,
  LayoutBlockContent,
  LayoutBlockTitle
} from "../../layout";
import { destructureNodes } from "../../utils";

interface BlockFeaturedPostsProps {
  featuredPosts: PostOrPage[];
}

const StyledMobileBlockFeaturedPosts = styled.div`
  width: 100%;
  box-sizing: border-box;
  position: relative;

  & * {
    white-space: initial;
    box-sizing: border-box;
  }
`;

const StyledDesktopBlockFeaturedPosts = styled.div``;

const StyledBubbleContainer = styled.ul`
  ${makeReset("list")};
  ${makeFlex("row", "flex-end", "center")};
`;

const StyledBubble = styled.li<{ isActive: boolean }>`
  height: ${makeSize("xxs")};
  width: ${makeSize("xxs")};
  border-radius: 50%;
  transition: all 0.15s ease-in-out;
  background: ${({ isActive }) =>
    makeColor({
      scalable: {
        color: isActive ? "secondary" : "light"
      }
    })};

  &:not(:first-child) {
    ${makeOutset({ left: "xxs" })}
  }
`;

type CardAnimationLayoutType = "middle" | "full";

type BlogFeaturedMobileProps = BlockFeaturedPostsProps & {
  gutterWidth: number;
  layoutType: CardAnimationLayoutType;
};

const getWindowValue = (): number => {
  if (typeof window !== "undefined") {
    return window.innerWidth;
  }
  return 300;
};

const BlogFeaturedMobile: FC<BlogFeaturedMobileProps> = ({
  featuredPosts,
  gutterWidth,
  layoutType = "middle"
}) => {
  const initialSelectedCardIndex = 0;
  const [containerHeight, setContainerHeight] = useState<number>();
  const [currentBubble, setCurrentBubble] = useState(initialSelectedCardIndex);
  const cardRef = useRef<HTMLDivElement>(null);

  useLayoutEffect(() => {
    if (cardRef.current) {
      setContainerHeight(cardRef.current.offsetHeight);
    }
  }, [cardRef, containerHeight]);

  const cardWidth =
    layoutType === "middle"
      ? // where is this magic number coming from?
        getWindowValue() - 48 - gutterWidth * 2
      : getWindowValue() - gutterWidth * 2;
  const halfCardWidth = cardWidth / 2;
  const cardSlice = cardWidth * 0.13;
  const numberOfCards = featuredPosts.length;
  const xOffset =
    layoutType === "middle" ? (getWindowValue() - 48) / 2 - halfCardWidth : 0;
  const index = useRef(initialSelectedCardIndex);
  const cardDragThreshold = 60;

  const getDistance = (cardNum: number): number =>
    Math.abs(index.current - cardNum);

  const getScale = (cardNum: number): number => {
    const scaleFactor = getDistance(cardNum);
    const scaleValue = (100 - scaleFactor * 8) / 100;
    return scaleValue;
  };

  const getFilter = (cardNum: number): number => {
    const filterFactor = getDistance(cardNum);
    const filterValue = cardNum !== index.current ? filterFactor * 1.1 : 0;
    return filterValue;
  };

  const getOverlay = (cardNum: number): number => {
    const overlayFactor = getDistance(cardNum);
    const overlayValue = (overlayFactor * 2.8) / 10;
    return overlayValue;
  };

  const getZ = (cardNum: number): number => {
    const zFactor = 1000 - getDistance(cardNum);
    return zFactor;
  };

  const getPosition = (cardNum: number, movement?: number): number => {
    const position =
      layoutType === "full"
        ? (cardNum - index.current) * cardWidth
        : (cardNum - index.current) * cardSlice + xOffset;
    if (movement) {
      return position + movement;
    }
    return position;
  };

  const setSprings = (
    cardNum: number,
    movement?: number
  ): {
    x: number;
    scale: number;
    overlay: number;
    filter: number;
  } => ({
    x: getPosition(cardNum, movement),
    scale: getScale(cardNum),
    overlay: getOverlay(cardNum),
    filter: getFilter(cardNum)
  });

  const [springProps, set] = useSprings(numberOfCards, (i) => setSprings(i));

  const bind = useDrag(
    ({ down, movement: [xMove], direction: [xDir], cancel, last }) => {
      if (down && Math.abs(xMove) > cardDragThreshold && cancel) {
        index.current = clamp(
          index.current + (xDir > 0 ? -1 : 1),
          0,
          numberOfCards - 1
        );
        cancel();
      }

      //@ts-ignore
      return set((i) => {
        if (last) {
          setCurrentBubble(index.current);
        }
        return setSprings(i, down ? xMove : 0);
      });
    }
  );

  return (
    <LayoutBlock>
      <LayoutBlockTitle title="Featured posts">
        <StyledBubbleContainer>
          {featuredPosts.map((post, i) => (
            <StyledBubble
              key={`${post.id}-bubble`}
              isActive={i === currentBubble}
            />
          ))}
        </StyledBubbleContainer>
      </LayoutBlockTitle>
      <LayoutBlockContent>
        <StyledMobileBlockFeaturedPosts style={{ height: containerHeight }}>
          {springProps.map(({ x, scale, overlay, filter }, i) => {
            // only attach the drag action to the visible card
            const action = i === index.current ? bind : () => ({});

            const absStyle: CSSProperties = {
              position: "absolute",
              width: "100%",
              height: "100%",
              top: 0,
              left: 0
            };
            return (
              <animated.div
                {...action()}
                key={i.toString()}
                style={{
                  position: "absolute",
                  top: 0,
                  bottom: 0,
                  transform: x.interpolate((xv) => `translate3d(${xv}px,0,0)`),
                  zIndex: getZ(i),
                  filter: filter.interpolate((f) => `blur(${f}px)`)
                }}
              >
                <animated.div
                  ref={cardRef}
                  style={{
                    position: "relative",
                    transform: scale.interpolate((s) => `scale(${s})`)
                  }}
                >
                  <BlogCardFeature featuredPost={featuredPosts[i]} />
                  <animated.div
                    style={{
                      ...absStyle,
                      zIndex: 10,
                      pointerEvents: "none",
                      background: overlay.interpolate((ov) =>
                        rgba(makeColor({ fixed: "dark" }), ov)
                      )
                    }}
                  />
                </animated.div>
              </animated.div>
            );
          })}
        </StyledMobileBlockFeaturedPosts>
      </LayoutBlockContent>
    </LayoutBlock>
  );
};

export const BlockFeaturedPosts: FC = () => {
  const {
    allGhostPost: { edges }
  } = useStaticQuery(graphql`
    {
      allGhostPost(filter: { featured: { eq: true } }) {
        edges {
          node {
            ...GhostPostFields
          }
        }
      }
    }
  `);

  const featuredPosts = destructureNodes(edges);
  const [visibleFeaturedPost, setVisibleFeaturedPost] = useState(
    featuredPosts[0]
  );
  const [windowWidth, { tabletPortrait, tabletLandscape }] = useBreakpoints();

  const gutterWidth =
    windowWidth < tabletPortrait ? sharedHorizontalBodyPadding.phone : 100;

  return windowWidth < tabletLandscape ? (
    <BlogFeaturedMobile
      featuredPosts={featuredPosts}
      gutterWidth={gutterWidth}
      layoutType={windowWidth < tabletPortrait ? "full" : "middle"}
    />
  ) : (
    <StyledDesktopBlockFeaturedPosts>
      <BlogCardFeature featuredPost={visibleFeaturedPost} />
      <BlogCardFeatureSelector
        posts={featuredPosts}
        currentlySelectedPost={visibleFeaturedPost}
        setFp={setVisibleFeaturedPost}
      />
    </StyledDesktopBlockFeaturedPosts>
  );
};
