import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";
const SlideShowPhone = ({images}) => {
  return (
    <Carousel
        showArrows={true}
        autoPlay={true}
        showThumbs={false}
        dynamicHeight={true}>
        {images.map((image, i) => (
            <div key={i} >
                <img src={image.url} alt={i} />
            </div>
        ))}
    </Carousel>
  );
};
export default SlideShowPhone;