import React from "react";
import Slider from "react-slick";
import styled from "styled-components";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

ImageSlider.defaultProps = {
  images: [
    {
      id: 1,
      url: "https://moplqfgeemqv2103108.cdn.ntruss.com/service/163843894_d66b9fceb12372601b892c6c4cc66185.jpg?type=m&w=900&h=900&autorotate=true&quality=90",
    },
    {
      id: 2,
      url: "https://moplqfgeemqv2103108.cdn.ntruss.com/service/163844064_5b0c2970fac1ec0dc5e5a424aa6b953c.jpg?type=m&w=900&h=900&autorotate=true&quality=90",
    },
    {
      id: 3,
      url: "https://moplqfgeemqv2103108.cdn.ntruss.com/service/163843890_453b5fd3b9c007d7de127972b184285a.jpg?type=m&w=900&h=900&autorotate=true&quality=90",
    },
  ],
};

export default function ImageSlider({ images }) {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    autoplay: true,
    autoplaySpeed: 2000,
    slidesToShow: 1,
    slidesToScroll: 1,
    centerMode: true,
    centerPadding: "0px",
  };

  return (
    <Container>
      <div>
        <StyledSlider {...settings}>
          {images.map((image) => {
            return (
              <div key={image.id}>
                <img src={image.url} />
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
    left: 10px;
  }
  .slick-next {
    right: 10px;
  }

  .slick-list {
    width: 100%;
    border-radius: 20px;

    .slick-track {
      overflow-x: hidden;

      .slick-slide img {
        width: 100%;
        height: 100%;
        border-radius: 20px;
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
`;
