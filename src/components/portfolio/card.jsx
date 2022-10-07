import React, { useState } from "react";
import { GrFormClose } from "react-icons/gr";

function Card(props) {
  const { title, category, details, image } = props;
  const [modal, setModal] = useState(false);
  const [modalText, setModalText] = useState(false);

  const toggleModal = () => {
    setModal(!modal);
  };
  const toggleModalText = () => {
    setModalText(!modalText);
  };

  return (
    <>
      <div onClick={toggleModal} className="portfolio_card">
        <div className="image">
          <img src={image} alt="portfolio" />
        </div>
        <div className="category">
          <span>{category}</span>
        </div>
        <div className="title">
          <h3>{title}</h3>
        </div>
      </div>

      {/* popup modal  */}
      {modal && (
        <div className="modal">
          <div className="container">
            <div className="modal_content">
              <div className={modalText ? "showModal_text" : "hideModal_text"}>
                <div className="modalText_heading">
                  <h2>{title}</h2>
                  <h4>Category : {category}</h4>
                </div>
                <div className="modal_details">
                  <p>{details}</p>
                </div>
                <div className="modal_btns">
                  <a className="modal_btn" href="#xyz">Like It</a>
                  <a className="modal_btn" href="#xyz">See Poroject</a>
                </div>
              </div>
              <div className="modal_header">
                <div
                  onClick={toggleModalText}
                  className="toggle_deateils modal_btn"
                >
                  Project Details <span>{modalText ? "-" : "+"}</span>
                </div>
                <div onClick={toggleModal} className="modal_btn close_modal">
                  <GrFormClose />
                </div>
              </div>

              <div className="modal_image">
                <img src={image} alt="modal" />
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

export default Card;
