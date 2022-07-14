import { useNavigate } from "react-router-dom";
import Slider from "react-slick";
import styled from "styled-components";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

HomeImageSlider.defaultProps = {
  images: [
    {
      id: 1,
      title: "스튜디오",
      url: "https://img.shareit.kr:13443/main/top-banner/2022-06-28/4cc5bbec-2e67-43d5-a16d-7fd005e85ee6.png",
    },
    {
      id: 2,
      title: "연습실",
      url: "https://img.shareit.kr:13443/main/top-banner/2022-07-08/618ab39c-715d-436e-b875-b7d86c17451f.png",
    },
    {
      id: 3,
      title: "파티룸",
      url: "https://img.shareit.kr:13443/main/top-banner/2022-06-28/ab1e0c4d-a5e7-4de5-8b6a-5ad49fc82f0c.png",
    },
  ],
};

export default function HomeImageSlider({ images }) {
  const nav = useNavigate();
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
              <div onClick={() => nav(`/list/${image.title}`)} key={image.id}>
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
  width: 20%;
  visibility: hidden;
}
.slick-next {
  width: 20%;
  visibility: hidden;
}

.slick-list {
  width: 100%;
  max-height: 62vh;

  .slick-track {
    overflow-x: hidden;

    .slick-slide img {
      width: 100%;
      height: 100%;
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
    visibility: visible;
  }
  .slick-next {
    visibility: visible;
}
`;
