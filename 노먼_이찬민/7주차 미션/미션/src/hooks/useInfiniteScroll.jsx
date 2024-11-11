import React, { useCallback, useEffect } from "react";

// 목적 : intersection oberver를 위한 훅 정의
function useInfiniteScroll(inView, infiniteQueryObject) {
  // 상태 -> 이 훅에서는 없어도 될 듯
  // api fn = callbackFn을 사용, 영화 api에서는 infiniteData.fetchNextPage 사용
  // useEffect
  useEffect(() => {
    if (inView && !infiniteQueryObject.isLoading) {
      // inView 변화 시 fetchNextPage 하기
      infiniteQueryObject.fetchNextPage();
    }
  }, [inView]);
  // return 필요없음
}

export default useInfiniteScroll;
