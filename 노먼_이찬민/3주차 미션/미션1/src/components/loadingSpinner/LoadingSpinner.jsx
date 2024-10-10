import styled, { keyframes } from "styled-components";

// spin 애니메이션 정의
const spin = keyframes`
  to {
    transform: rotate(360deg);
  }
`;

// 로딩 컨테이너 스타일
const Container = styled.div`
  width: 80px;
  margin: 0 auto;
`;

// 로딩 스피너 스타일
const MyLoadingSpinner = styled.div`
  display: block;
  width: 50px;
  height: 50px;
  border: 7px solid skyblue; // 테두리 색상
  border-radius: 50%;
  border-top-color: skyblue; // 상단 테두리 색상
  animation: ${spin} 1s linear infinite;
`;

// 로딩 컴포넌트 정의
export default function LoadingSpinner() {
  return (
    <Container>
      <MyLoadingSpinner />
    </Container>
  );
}
