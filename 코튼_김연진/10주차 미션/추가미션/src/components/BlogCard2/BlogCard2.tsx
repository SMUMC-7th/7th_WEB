import { FaHeart } from 'react-icons/fa';
import { IoPersonCircleOutline } from 'react-icons/io5';
import { TBlogPost } from '../../type/type';
import { timeDifferenceText } from '../../utils/timeDifferenceText';
const BlogCard2 = ({
    authorId,
    content,
    createdAt,
    id,
    imageUrl,
    likeCount,
    title,
}: TBlogPost) => {
    const renderHeader = () => (
        <div className="flex w-full items-center">
            <IoPersonCircleOutline
                size={35}
                className="mt-[10px] ml-[10px]"
                strokeWidth={1}
            />
            <div className="flex flex-col ml-[5px] mt-[10px]">
                <div className="flex items-center text-[16px]">{authorId}</div>
                <div className="flex text-[12px] font-thin">
                    {timeDifferenceText(createdAt)}
                </div>
            </div>
        </div>
    );

    const renderContent = () => (
        <div className="flex flex-col w-full h-full gap-[5px] p-[10px]">
            <div className="flex text-[24px] overflow-hidden max-h-[4rem] text-overflow4">
                {title}
            </div>
            <div className="flex-1">
                <div className="text-overflow5 font-thin">{content}</div>
            </div>
            <div className="h-[20px]">
                <div className="flex items-center gap-[3px] text-[13px] absolute bottom-[20px]">
                    <FaHeart />
                    {likeCount}
                </div>
            </div>
        </div>
    );

    return (
        <div
            className="w-[800px] h-[260px] flex bg-white rounded-[10px] p-[10px] relative shadow-md hover:translate-y-[-5px] hover:transition-transform hover:duration-300 hover:ease-linear"
            onClick={() => (window.location.href = `/post/${id}`)}
        >
            <div className="flex flex-col flex-1">
                {renderHeader()}
                {renderContent()}
            </div>

            {imageUrl && (
                <img
                    className="xxs:w-[230px] xxs:h-[230px] xxs:object-cover xxs:rounded-[10px] xxs:self-center hidden xxs:flex"
                    src={`http://localhost:3000/${imageUrl}`}
                    alt={title}
                />
            )}
        </div>
    );
};

export default BlogCard2;
