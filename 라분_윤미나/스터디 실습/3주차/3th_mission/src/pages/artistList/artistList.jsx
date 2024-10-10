import * as S from "./artistList.style";
import Button from "../../components/Button/Button";
import { useNavigate } from "react-router-dom";

const ArtistListPage = () => {
  //백예린 아티스트 id : 6dhfy4ByARPJdPtMyrUYJK
  //오아시스 id : 2DaxqgrOhkeH0fpeiQq2f4

  const nav = useNavigate();

  return (
    <S.Container>
      <h3>원하는 아티스트를 클릭하세요!</h3>
      <div>
        <Button
          onClick={() => nav("/artists/6dhfy4ByARPJdPtMyrUYJK")}
          text="백예린"
        ></Button>
        <Button
          onClick={() => nav("/artists/2DaxqgrOhkeH0fpeiQq2f4")}
          text="Oasis"
        ></Button>
      </div>
    </S.Container>
  );
};

export default ArtistListPage;
