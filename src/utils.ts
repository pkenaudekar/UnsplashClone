import React, { useCallback, useEffect, useRef, useState } from 'react';

export const useInfiniteScroll = (scrollRef: any, action: any) => {
  const observer = useCallback(
    (node: any) => {
      /* eslint-disable */
      const ob = new IntersectionObserver(
        /*eslint-enable */
        (entries) => {
          entries.forEach((en) => {
            if (en.intersectionRatio > 0) {
              action();
            }
          });
        }
      ).observe(node);
    },
    [action]
  );

  useEffect(() => {
    if (scrollRef) {
      observer(scrollRef.current);
    }
  }, [scrollRef, observer]);
};

export const useImageLazyLoad = (): any => {
  const [visibleState, setVisibleState] = useState(false);
  const imageRef = useRef(null);

  const observer = useCallback((node: any) => {
    const ob = new IntersectionObserver(
      (entries) => {
        entries.forEach((en) => {
          if (en.isIntersecting) {
            setVisibleState(true);
            ob.unobserve(node);
          }
        });
      },
      { threshold: 0.15 }
    );
    ob.observe(node);
  }, []);

  useEffect(() => {
    if (imageRef.current) {
      observer(imageRef.current);
    }
  }, [imageRef, observer]);

  return [visibleState, imageRef];
};
