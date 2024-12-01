import { TBlogPost } from '../../type/type';
import { IoPersonCircleOutline } from 'react-icons/io5';
import { FaHeart } from 'react-icons/fa';
import { timeDifferenceText } from '../../utils/timeDifferenceText';
const BlogCard = ({
    authorId,
    content,
    createdAt,
    id,
    imageUrl,
    likeCount,
    title,
}: TBlogPost) => {
    return (
        <div
            className="w-[330px] h-[380px] relative flex flex-col rounded-[5px] bg-white shadow-md hover:translate-y-[-5px] hover:transition-transform hover:duration-300 hover:ease-linear"
            onClick={() => (window.location.href = `/post/${id}`)}
        >
            {imageUrl && (
                <img
                    className="w-full h-[160px] object-cover rounded-t-[5px]"
                    src={`http://localhost:3000/${imageUrl}`}
                    alt={title}
                />
            )}
            <div className="flex flex-col gap-[5px] p-[15px] pb-[5px] ">
                <div className="text-[18px] font-semibold overflow-hidden max-h-[4rem] w-full text-overflow4">
                    {title}
                </div>
                <div
                    className={`font-thin text-[15px] ${
                        imageUrl
                            ? 'text-overflow1'
                            : 'text-overflow2 max-h-[9rem]'
                    }`}
                >
                    {content}
                </div>
                <div className="flex flex-col absolute bottom-[10px] w-[90%]">
                    <div className="text-[12px] font-thin">
                        {timeDifferenceText(createdAt)}
                    </div>
                    <hr className="my-[8px] border-solid " />
                    <div className="flex items-center justify-between h-[30px]">
                        <div className="flex items-center text-[13px] font-thin">
                            <IoPersonCircleOutline
                                size={24}
                                className="mr-[5px]"
                                strokeWidth={1}
                            />
                            <span>
                                by{' '}
                                <span className="font-semibold">
                                    {authorId}
                                </span>
                            </span>
                        </div>
                        <div className="flex items-center gap-[3px] text-[13px]">
                            <FaHeart />
                            {likeCount}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default BlogCard;
