import PostList from "../component/PostList";

const HomePage = () => {
  return (
    <div className="flex flex-col items-center gap-10 w-1000 min-h-[800px]">
      <h1 className="text-25">전체글 보기</h1>
      <PostList />
    </div>
  );
};

export default HomePage;
