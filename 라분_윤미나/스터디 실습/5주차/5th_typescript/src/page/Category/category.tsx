import CategoryCardList from "../../components/CCList/CCList";

const CategoryPage = () => {
  return (
    <div className="w-screen flex flex-col ml-5">
      <h3 className="text-white">카테고리</h3>
      <CategoryCardList />
    </div>
  );
};

export default CategoryPage;
