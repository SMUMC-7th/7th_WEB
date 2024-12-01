import { useInfiniteQuery } from '@tanstack/react-query';
import { useInView } from 'react-intersection-observer';
import { useEffect, useState } from 'react';
import { useSearchParams, useNavigate } from 'react-router-dom';
import BlogCard from '../../components/BlogCard/BlogCard';
import { getPosts } from '../../apis/post';
import { TBlogPost } from '../../type/type';
import ClipLoader from 'react-spinners/ClipLoader';
import { IoSearchOutline } from 'react-icons/io5';
import Loading from '../../components/loading/loading';

const Search = () => {
    const [order, setOrder] = useState('id_DESC');
    const [searchValue, setSearchValue] = useState('');
    const [searchParams, setSearchParams] = useSearchParams();
    const mq = searchParams.get('mq') || '';
    const navigate = useNavigate();
    const [isClicked, setIsClicked] = useState(1);

    // order 값에 따른 isClicked 값을 반환하는 함수
    const getOrderIndex = (order: string) => {
        switch (order) {
            case 'id_DESC':
                return 1;
            case 'likeCount_DESC':
                return 2;
            case 'likeCount_ASC':
                return 3;
            case 'id_ASC':
                return 4;
            default:
                return 1; // 기본값
        }
    };

    useEffect(() => {
        // 초기 값 설정 (localStorage에서 order 값 가져오기)
        const savedOrder = localStorage.getItem('order');
        if (savedOrder) {
            setOrder(savedOrder);
            setIsClicked(getOrderIndex(savedOrder)); // 저장된 order에 맞는 isClicked 설정
        }

        if (mq) {
            setSearchValue(mq);
        }
    }, [mq]);

    const { data, fetchNextPage, hasNextPage, isLoading, isFetching } =
        useInfiniteQuery({
            queryKey: ['posts', mq, order],
            queryFn: ({ pageParam = null }) =>
                getPosts({
                    cursor: pageParam,
                    title: mq,
                    order: [order],
                }),
            enabled: !!mq,
            getNextPageParam: (lastPage) =>
                lastPage.hasNextPage ? lastPage.nextCursor : undefined,
            initialPageParam: null,
        });

    const { ref, inView } = useInView({
        threshold: 0,
    });

    useEffect(() => {
        if (inView && !isFetching && hasNextPage) {
            fetchNextPage();
        }
    }, [inView, isFetching, hasNextPage, fetchNextPage]);

    useEffect(() => {
        const handler = setTimeout(() => {
            if (searchValue.trim() && searchValue !== mq) {
                setSearchParams({ mq: searchValue });
                navigate(`/search?mq=${searchValue}`);
            }
        }, 1000);
        return () => {
            clearTimeout(handler);
        };
    }, [searchValue, mq, navigate, setSearchParams]);

    const onChangeSearchValue = (e: React.ChangeEvent<HTMLInputElement>) => {
        setSearchValue(e.target.value);
    };

    const handleSearchPost = () => {
        if (mq !== searchValue) {
            navigate(`/search?mq=${searchValue}`);
        }
    };

    const handleSearchPostWithKeyboard = (
        e: React.KeyboardEvent<HTMLInputElement>
    ) => {
        if (e.key === 'Enter') {
            handleSearchPost();
        }
    };

    const handleOrderChange = (value: string) => {
        setOrder(value);
        setIsClicked(getOrderIndex(value)); // 클릭한 순서에 맞게 isClicked 업데이트
        localStorage.setItem('order', value); // localStorage에 order 값 저장
    };

    if (isLoading) return <Loading />;

    return (
        <div className="flex flex-wrap w-full p-[20px] justify-center relative mt-[60px]">
            <div className="relative flex h-[40px] ">
                <IoSearchOutline
                    size={20}
                    className="absolute left-[10px] top-[10px] flex "
                    color="gray"
                />
                <input
                    type="text"
                    className="pl-[40px] border border-slate-200 bg-white w-[400px] h-[40px] rounded-[5px] px-[10px] flex focus:outline-none"
                    placeholder="블로그 제목을 검색해주세요!"
                    onChange={onChangeSearchValue}
                    onKeyDown={handleSearchPostWithKeyboard}
                    value={searchValue}
                />
            </div>
            {mq && (
                <div className="w-full flex justify-center mt-[10px] ">
                    {[
                        { label: '최신순', value: 'id_DESC' },
                        { label: '좋아요 순', value: 'likeCount_DESC' },
                        { label: '좋아요 적은 순', value: 'likeCount_ASC' },
                        { label: '오래된순', value: 'id_ASC' },
                    ].map((item, index) => (
                        <button
                            key={index}
                            className={`pl-[10px] pr-[10px] border-b-[1px] hover:font-semibold hover:text-black ${
                                isClicked === index + 1
                                    ? 'font-semibold text-black'
                                    : 'text-gray-600'
                            }`}
                            onClick={() => handleOrderChange(item.value)} // 클릭 시 handleOrderChange 실행
                        >
                            {item.label}
                        </button>
                    ))}
                </div>
            )}
            <div className="flex gap-[10px] flex-wrap justify-center h-auto w-[90%] mt-[20px]">
                {data?.pages.map((page) =>
                    page.data.length > 0 ? (
                        page.data.map((post: TBlogPost) => (
                            <BlogCard key={post.id} {...post} />
                        ))
                    ) : (
                        <div className="w-full text-center text-gray-500">
                            데이터가 없습니다
                        </div>
                    )
                )}
            </div>

            {hasNextPage && (
                <div
                    ref={ref}
                    style={{
                        height: '50px',
                        display: 'flex',
                        justifyContent: 'center',
                        alignItems: 'center',
                        width: '100%',
                    }}
                >
                    {isFetching && <ClipLoader />}
                </div>
            )}
        </div>
    );
};

export default Search;
