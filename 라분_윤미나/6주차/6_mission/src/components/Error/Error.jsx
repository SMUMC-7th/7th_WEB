import Lottie from "react-lottie-player";
import errorJson from "../../../public/lottie/animation_error.json";

function ErrorLottie() {
  return <Lottie loop animationData={errorJson} play />;
}

export default ErrorLottie;
