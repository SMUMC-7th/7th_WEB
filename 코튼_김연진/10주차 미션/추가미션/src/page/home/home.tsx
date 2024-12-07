import { useEffect, useState } from 'react';
import { LuLayoutGrid } from 'react-icons/lu';
import { TbLayoutList } from 'react-icons/tb';
import ClipLoader from 'react-spinners/ClipLoader';
import { useInView } from 'react-intersection-observer';

import BlogCard from '../../components/BlogCard/BlogCard';
import BlogCard2 from '../../components/BlogCard2/BlogCard2';
import Loading from '../../components/loading/loading';
import useGetPosts from '../../hooks/posts/queries/useGetPosts';

const Home = () => {
    const [order, setOrder] = useState('id_DESC');
    const [isClicked, setIsClicked] = useState(1);
    const [layout, setLayout] = useState(true);

    useEffect(() => {
        const savedLayout = localStorage.getItem('layout');
        const savedOrder = localStorage.getItem('homeOrder');

        setLayout(savedLayout === 'true' || savedLayout === null);
        if (savedOrder) {
            setOrder(savedOrder);
            setIsClicked(getOrderIndex(savedOrder));
        } else {
            localStorage.setItem('homeOrder', order);
        }
    }, []);

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
                return 1;
        }
    };

    const toggleLayout = () => {
        const newLayout = !layout;
        setLayout(newLayout);
        localStorage.setItem('layout', newLayout.toString());
    };

    const handleOrderChange = (value: string) => {
        setOrder(value);
        setIsClicked(getOrderIndex(value));
        localStorage.setItem('homeOrder', value);
    };

    const { data, isLoading, fetchNextPage, hasNextPage, isFetchingNextPage } =
        useGetPosts({
            cursor: null,
            // order: null,
            order: [order],
            title: null,
        });

    const { ref, inView } = useInView({ threshold: 0 });

    useEffect(() => {
        if (inView && !isFetchingNextPage && hasNextPage) {
            fetchNextPage();
        }
    }, [inView, isFetchingNextPage, hasNextPage, fetchNextPage]);

    if (isLoading) return <Loading />;

    return (
        <div className="flex flex-col items-center w-[90%] h-full mt-[60px] justify-self-center">
            <div className="w-[97%] flex mt-[10px]">
                <div>
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
                            onClick={() => handleOrderChange(item.value)}
                        >
                            {item.label}
                        </button>
                    ))}
                </div>
                <div className="ml-auto self-center">
                    {layout ? (
                        <LuLayoutGrid
                            size={20}
                            strokeWidth="1"
                            onClick={toggleLayout}
                            className="hover:cursor-pointer"
                        />
                    ) : (
                        <TbLayoutList
                            size={20}
                            strokeWidth="1"
                            onClick={toggleLayout}
                            className="hover:cursor-pointer"
                        />
                    )}
                </div>
            </div>

            <div
                className={`flex gap-[10px] flex-wrap mt-[20px] justify-center w-[80%] ${
                    layout ? 'max-w-[1000px]' : ''
                }`}
            >
                {data?.pages.map((page) =>
                    page.data.map((post) =>
                        layout ? (
                            <BlogCard2 key={post.id} {...post} />
                        ) : (
                            <BlogCard key={post.id} {...post} />
                        )
                    )
                )}
            </div>

            <a
                className="fixed bottom-[40px] bg-[#768da3] pl-[15px] pr-[15px] pt-[5px] pb-[5px] rounded-[20px] opacity-90 text-white"
                href="/write"
            >
                글쓰기
            </a>

            {hasNextPage && (
                <div
                    ref={ref}
                    className="flex items-center justify-center w-full h-[50px]"
                >
                    {isFetchingNextPage && <ClipLoader className="mt-[20px]" />}
                </div>
            )}
        </div>
    );
};

export default Home;
