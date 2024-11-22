import { Link } from 'react-router-dom';

interface CategoryCardProps {
    img_path: string;
    text: string;
    move_path: string;
}
function categoryCard({ img_path, text, move_path }: CategoryCardProps) {
    return (
        <Link className="flex" to={`${move_path}`}>
            <div className="relative gap-[20px]">
                <div className="bg-black text-white opacity-50 z-1 absolute bottom-[10px] left-[10px]">
                    {text}
                </div>
                <img
                    className="w-[245px] h-[130px] rounded-[10px] object-cover"
                    src={`${img_path}`}
                    alt="해당 카테고리로 이동할 수 있는 이미지"
                />
            </div>
        </Link>
    );
}

export default categoryCard;
