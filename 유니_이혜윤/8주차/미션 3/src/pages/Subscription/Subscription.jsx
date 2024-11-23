import { useState } from "react";
import * as S from "./Subscription.style";
import { PiUsersFour, PiUserBold, PiHighDefinitionFill } from "react-icons/pi";
import { BsFillBadge4kFill } from "react-icons/bs";
import { MdOutlineHdrEnhancedSelect } from "react-icons/md";
import { TbXboxXFilled } from "react-icons/tb";

const SubscriptionPage = () => {
  const [selectedPlan, setSelectedPlan] = useState("premium");

  const handlePlanSelect = (plan) => {
    setSelectedPlan(plan);
  };

  return (
    <S.Container>
      <S.Title>구독권을 선택해 주세요</S.Title>
      <S.Subtitle>원할 때 언제든 해지할 수 있어요</S.Subtitle>
      <S.PlanContainer>
        <S.Plan
          selected={selectedPlan === "premium"}
          onClick={() => handlePlanSelect("premium")}
        >
          <S.Price>프리미엄</S.Price>
          <S.Amount>12,900원</S.Amount>
          <S.Feature>
            <PiUsersFour />
            &nbsp; 최대 4대 동시 감상
          </S.Feature>
          <S.Feature>
            <BsFillBadge4kFill />
            &nbsp; Ultra HD 4K 지원
          </S.Feature>
          <S.Feature>
            <MdOutlineHdrEnhancedSelect />
            &nbsp; HDR 10+ 지원
          </S.Feature>
          <S.Feature>비디오 100개 저장</S.Feature>
        </S.Plan>
        <S.Plan
          selected={selectedPlan === "basic"}
          onClick={() => handlePlanSelect("basic")}
        >
          <S.Price>베이직</S.Price>
          <S.Amount>7,900원</S.Amount>
          <S.Feature>
            <PiUserBold />
            &nbsp; 최대 1대 동시 감상
          </S.Feature>
          <S.Feature>
            <PiHighDefinitionFill />
            &nbsp; Full HD 지원
          </S.Feature>
          <S.Feature>
            <TbXboxXFilled />
            &nbsp; HDR 10+ 미지원
          </S.Feature>
          <S.Feature>비디오 5개 저장</S.Feature>
        </S.Plan>
      </S.PlanContainer>
      <S.Button>구독 시작하기</S.Button>
    </S.Container>
  );
};

export default SubscriptionPage;
