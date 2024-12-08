import * as S from './home.style';
import MainLogo from '../../components/home/mainLogo/mainLogo';
import MainInfo from '../../components/home/mainInfo/mainInfo';
import PartSlider from '../../components/home/partSlider/partSlider';
import MainPart from '../../components/home/mainPart/mainPart';
import MainProjectBanner from '../../components/home/mainProjectBanner/mainProjectBanner';
import Next from '../../components/home/next/next';
const HomePage = () => {
    return (
        <S.Container>
            <MainLogo></MainLogo>
            <PartSlider></PartSlider>
            <MainInfo></MainInfo>
            <MainPart></MainPart>
            <MainProjectBanner></MainProjectBanner>
            <Next></Next>
        </S.Container>
    );
};

export default HomePage;
