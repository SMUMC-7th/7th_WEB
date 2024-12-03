import React from "react";
import { TPost } from "../types/post";

const PostCard = ({ post }: { post: TPost }) => {
  return (
    <div className="w-[400px] h-[140px] mx-auto bg-white rounded-xl shadow-md overflow-hidden ">
      <div className="md:flex">
        {post.imageUrl && (
          <div className="md:shrink-0">
            <img
              className="h-48 w-full object-cover md:h-full md:w-48"
              src={post.imageUrl}
              alt={post.title}
            />
          </div>
        )}
        <div className="p-4">
          <div className="uppercase tracking-wide text-sm text-indigo-500 font-semibold">
            작성자 ID: {post.authorId}
          </div>
          <h1 className="block mt-1 text-lg leading-tight font-medium text-black hover:underline">
            {post.title}
          </h1>
          <p className="mt-2 text-gray-500">{post.content}</p>
          <div className="mt-4 flex items-center justify-between">
            <div className="text-gray-500 text-sm">
              {new Date(post.createdAt).toLocaleDateString()}
              {/* {post.createdAt} */}
            </div>
            <div className="flex items-center space-x-2">
              <span className="text-green-600 font-bold">
                👍 {post.likeCount}
              </span>
              <span className="text-red-600 font-bold">
                👎 {post.dislikeCount}
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PostCard;
