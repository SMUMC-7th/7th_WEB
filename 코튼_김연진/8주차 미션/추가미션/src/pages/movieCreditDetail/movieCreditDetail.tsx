import Profile from '../../components/profile/profile';
import { useParams } from 'react-router-dom';
import Error from '../../components/error/error';
import Lottie from 'react-lottie-player';
import loadingJson from '../../lottie/Animation-loading.json';
import useGetCredit from '../../hooks/queries/useGetCredit';

const MovieCreditDetail = () => {
    const { movieID } = useParams();

    const { data, error, isLoading } = useGetCredit(movieID!);

    if (error) {
        console.log('Error fetching data', error);
        return <Error />;
    }

    if (isLoading) {
        return (
            <div className="flex text-center w-full h-full font-[20px] text-white items-center justify-center">
                <Lottie loop animationData={loadingJson} play />{' '}
            </div>
        );
    }
    return (
        <div className="flex">
            <div className="flex w-full text-black text-[12px] flex-wrap g-[10px] justify-center">
                {data?.cast.map((cast) => (
                    <Profile {...cast}></Profile>
                ))}
                {data?.crew.map((crew) => (
                    <Profile {...crew}></Profile>
                ))}
            </div>
        </div>
    );
};
export default MovieCreditDetail;
