import { useInfiniteQuery } from '@tanstack/react-query'
import React from 'react'
import { useGetMovies } from './queries/useGetMovies'

function useGetInfiniteMovies(category) {
  return (
    useInfiniteQuery({
        queryFn: ({pageParam}) => useGetMovies({category, pageParam}),
        queryKey: ['movies', category],
        initialPageParam: 1,
        getNextPageParam: (lastPage, allPages) => {
            // const lastMovie = lastPage.results[lastPage.results.length - 1];
            const lastMovie = lastPage?.results.at(-1);
            // console.log(lastMovie,'dddddddd');
            
            
            
            return lastMovie ? allPages?.length + 1: undefined;
            // console.log('dd',lastPage, allPages);
            
        }
    })
  )
}

export {useGetInfiniteMovies}