import CategoryCardList from "../components/CCList/CCList";

const CategoryPage = () => {
  return (
    <div
      style={{
        width: "100vh",
        display: "flex",
        flexDirection: "column",
        marginLeft: "20px",
      }}
    >
      <h3 style={{ color: "white" }}>카테고리</h3>
      <CategoryCardList />
    </div>
  );
};

export default CategoryPage;
