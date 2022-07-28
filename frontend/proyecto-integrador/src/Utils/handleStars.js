import {FaRegStar, FaStar, FaStarHalfAlt} from "react-icons/fa";

export const handleStars = (value) => {
    let stars = [];
    for (let i = 0; i < value; i++) {
        stars.push(<FaStar key={i}/>);
    }
    if (value - Math.floor(value) > 0) {
        stars.pop();
        stars.push(<FaStarHalfAlt  key={stars.length}/>);
    }
    for(let i = stars.length; i < 5; i++) {
        stars.push(<FaRegStar key={i}/>);
    }
    return stars;
}
