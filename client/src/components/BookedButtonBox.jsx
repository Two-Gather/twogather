import styled from "styled-components";
import { ImBin } from "react-icons/im";
import { RiEdit2Fill } from "react-icons/ri";

export default function BookedButtonBox() {
  return (
    <ButtonBox>
      <Button
        className="btnModify"
        type="button"
        backGroundColor="#BBD3F2"
        color="white"
      >
        <RiEdit2Fill className="modify" size={"1.5rem"}></RiEdit2Fill>
      </Button>
      <Button
        className="btnDelete"
        type="button"
        backGroundColor="#BBD3F2"
        color="white"
      >
        <ImBin class="delete"></ImBin>
      </Button>
    </ButtonBox>
  );
}

const ButtonBox = styled.div`
  display: flex;
  margin: 0 auto;
  justify-content: center;
  align-items: center;
  padding: 5px;

  &.blockBox {
    padding: 0;
  }
`;

const Button = styled.div`
  width:  2.5rem;

  display: flex;
  justify-content: center;
  align-items: center;
  height: 2.5rem;
  border-radius: 5px;
  font-size: 1rem;

  &:last-child {
    margin-left: 5px;
  }

  &.btnModify{
    background-color:#86B7CA;
    transition-duration: 0.3s;
    .modify {
    }
    &:hover {
      .modify{
        transition-duration:0.3s;
        transform: scale(1.4);
      }
    }


    }
  }

  &.btnDelete{
    background-color:#D80907;
    .delete {
      transform: scale(1.3);
    }

    &:hover {
      .delete{
        transition-duration:0.3s;
        transform: scale(1.5);
      }
    }
  }

  &.btnBlock{
    margin:0;
    background-color:#D80907;
    transition-duration: 0.3s;

    .block {
      transform: scale(1.3);
    }
    &:hover {
      .block{

        transition-duration:0.2s;
        transform: scale(1.5);

      }
    }

  }

}

  background-color: ${(props) => props.backGroundColor};
  color: ${(props) => props.color};
  cursor: pointer;

`;
