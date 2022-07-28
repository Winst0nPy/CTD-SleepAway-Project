import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";
const SlideShow = ({images}) => {
    console.log(images);
  return (
    <Carousel showArrows={true} autoPlay={true} thumbWidth={"25%"} >
        {images.map((image, i) => (
            <div key={i} className="slide-img">
                <img src={image.url} alt={i} />
            </div>
        ))}
    </Carousel>
  );
};
export default SlideShow;

