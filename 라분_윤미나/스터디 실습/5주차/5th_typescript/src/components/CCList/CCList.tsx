import CategoryCard from "../CategoryCard/CategoryCard";
import Container from "./CCList.style";

const CategoryCardList = () => {
  return (
    <Container>
      <CategoryCard
        url="https://search.pstatic.net/common/?src=http%3A%2F%2Fimgnews.naver.net%2Fimage%2F469%2F2018%2F10%2F20%2F0000335353_001_20181021044954801.jpg&type=sc960_832"
        text="현재 상영중인"
        path="/movies/now-playing"
      />
      <CategoryCard
        url="https://search.pstatic.net/sunny/?src=https%3A%2F%2Fimg.lovepik.com%2Fphoto%2F40175%2F6944.jpg_wh860.jpg&type=sc960_832"
        text="인기있는"
        path="/movies/popular"
      />
      <CategoryCard
        url="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSJi5M463DLs2HSkSig6m3VxVYR-C5eEt67QA&s"
        text="높은 평가를 받은"
        path="/movies/top-rated"
      />
      <CategoryCard
        url="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTbEhEqaO0thNZUHtw3nC2Jw7mxUV7HV-eZZg&s"
        text="개봉 예정중인"
        path="/movies/up-coming"
      />
    </Container>
  );
};

export default CategoryCardList;
