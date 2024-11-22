import CategoryCard from '../../components/categoryCard/categoryCard';
import CategoryData from '../../constants/Menu';

const Movie = () => {
    return (
        <div className="flex flex-col justify-center items-center w-full">
            <div className="text-white m-5 text-[25px] w-[90%]">카테고리</div>
            <div className="flex flex-row gap-5 ml-5 flex-wrap w-[90%]">
                {CategoryData.map((item, idx) => {
                    return <CategoryCard key={idx} {...item} />;
                })}
            </div>
        </div>
    );
};

export default Movie;
