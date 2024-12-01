import usePostStore from "../store/postStore";
import { RiEmotionSadLine } from "react-icons/ri";
import { useEffect } from "react";
import axiosInstance from "../apis/axiosInstance";
import { useNavigate } from "react-router-dom";

const MainPage: React.FC = () => {
  const posts = usePostStore((state) => state.posts);
  const setPosts = usePostStore((state) => state.setPosts);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const response = await axiosInstance.get("/v1/posts", {
          params: {
            cursor: null,
            order: ["id_DESC", "likeCount_DESC"],
            take: 2,
          },
        });
        console.log(response.data.data);
        setPosts(response.data.data || []);
      } catch (error) {
        console.error(error);
      }
    };

    fetchPosts();
  }, [setPosts]);

  if (!posts) return null;
  console.log(posts);

  // 상세페이지 이동
  const handlePostClick = (postId: string) => {
    navigate(`/posts/${postId}`);
  };

  return (
    <div className="p-8">
      {posts.length === 0 ? (
        <div className="flex flex-col items-center">
          <span>
            <RiEmotionSadLine className="text-[150px]" />
          </span>
          <p className="">게시글이 없습니다.</p>
        </div>
      ) : (
        <div className="grid grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">
          {posts.map((post, index) => (
            <div
              key={`${post.id}-${index}`}
              className="border w-[320px] h-[330px] bg-white shadow-sm hover:shadow-md transition-shadow"
              onClick={() => handlePostClick(post.id)}
            >
              {post.imageUrl && (
                <img
                  src={`http://localhost:3000/${post.imageUrl}`}
                  alt={post.title}
                  className="w-[320px] h-[220px] mb-4 object-cover"
                />
              )}
              <div className="p-3">
                <h2 className="text-lg font-bold mb-2">{post.title}</h2>
                <p className="text-sm text-[#888] line-clamp-2">
                  {post.content}
                </p>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default MainPage;
