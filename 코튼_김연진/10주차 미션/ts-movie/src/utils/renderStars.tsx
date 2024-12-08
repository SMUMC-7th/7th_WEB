import { FaStar, FaStarHalf } from 'react-icons/fa';

const renderStars = (rating: number) => {
    const stars = [];
    const fullStars = Math.floor(rating / 2);
    const halfStars = Math.ceil(rating / 2 - fullStars);

    for (let i = 0; i < fullStars; i++) {
        stars.push(<FaStar key={`full-${i}`} color="gold" />);
    }

    if (halfStars > 0) {
        stars.push(<FaStarHalf key="half" color="gold" />);
    }

    return stars;
};

export default renderStars;
