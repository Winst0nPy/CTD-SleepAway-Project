import React from "react";
import styled from "styled-components";
import SlideShow from "../SlideShows/SlideShow";

const Modal = ({openModal, closeModal,images}) => {
  return (
    <>
      {openModal && 
        <Overlay>
          <ContainerModal>
            <CloseButton onClick={ () => closeModal() }>X</CloseButton>
            <SlideShow images={images}/>
          </ContainerModal>
        </Overlay>
      }
    </>
  );
};
const Overlay = styled.div`
  width: 100%;
  height: calc(100% - 148px);
  background-color: var(--contrast--dark);
  position: fixed;
  top: 90px;
  left: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 10;
`;
const ContainerModal = styled.div`
  width: 800px;
  li.thumb{
    height: 120px;
  }
  .slide-img {
    height: 500px;
  }
  .carousel-status {
    right: 10px;
    top: 80%;
    font-size: 30px;
    color: var(--contrast--light);
  }
 
  .carousel .control-prev.control-arrow:before {
    border-right: 16px solid var(--contrast--light);
  }
  .carousel .control-next.control-arrow:before {
    border-left: 16px solid var(--contrast--light);
  }
  .carousel .thumbs-wrapper {
    overflow-x: scroll;
  }
  .carousel .thumb {
    border: 1px solid var(--contrast--light);
    :hover {
      border: 1px solid var(--contrast--color);
    }
  }
  .carousel .thumbs-wrapper::-webkit-scrollbar {
    height: 8px;
    background-color: var(--contrast--light);
  }
  .carousel .thumbs-wrapper::-webkit-scrollbar-thumb {
    background-color: var(--contrast--color);
  }
`;
const CloseButton = styled.button`
  position: absolute;
  top: 20px;
  right: 20px;
  background-color: transparent;
  border: none;
  color: var(--contrast--light);
  font-size: 30px;
  cursor: pointer;
`;

export default Modal;
