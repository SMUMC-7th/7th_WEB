import Lottie from "react-lottie-player";
import loadingJson from "../../../public/lottie/animation_loading.json";

function LoadingLottie() {
  return <Lottie loop animationData={loadingJson} play />;
}

export default LoadingLottie;
