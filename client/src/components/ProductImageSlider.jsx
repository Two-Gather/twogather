import { useNavigate } from "react-router-dom";
import Slider from "react-slick";
import styled from "styled-components";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export default function ImageSlider({ images, link }) {
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    autoplay: false,
    autoplaySpeed: 2000,
    slidesToShow: 1,
    slidesToScroll: 1,
    centerMode: true,
    centerPadding: "0px",
  };
  const navigate = useNavigate();
  return (
    <Container>
      <div>
        <StyledSlider {...settings}>
          {images.map((image, i) => {
            return (
              <div key={i}>
                <img src={image} onClick={() => navigate(link)} />
              </div>
            );
          })}
        </StyledSlider>
      </div>
    </Container>
  );
}

const Container = styled.div`
  max-width: 100%;
`;

const StyledSlider = styled(Slider)`
  .slick-arrow {
    z-index: 10;
  }
  .slick-prev {
    width: 40%;
    height: 100%;
    visibility: hidden;
  }
  .slick-next {
    width: 40%;
    height: 100%;
    visibility: hidden;
  }

  .slick-list {
    width: 100%;

    .slick-track {
      overflow-x: hidden;
      overflow-y: hidden;

      .slick-slide img {
        width: 100%;
        height: 100%;
        transition: transform 0.5s;
      }
    }
  }

  .slick-dots {
    bottom: 10px;

    li button:before {
      opacity: 1;
      color: #d4d4d4;
    }

    li.slick-active button:before {
      opacity: 1;
      color: #fff;
    }
  }
  &:hover {
    .slick-prev {
      background: linear-gradient(
        to right,
        rgba(0, 0, 0, 0.7),
        rgba(0, 0, 0, 0)
      );
      visibility: visible;
    }
    .slick-next {
      background: linear-gradient(
        to left,
        rgba(0, 0, 0, 0.7),
        rgba(0, 0, 0, 0)
      );
      visibility: visible;
    }
    .slick-slide img {
      transform: scale(1.1);
    }
  }
`;
