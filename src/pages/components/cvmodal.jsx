import React from 'react';
import '../../styles/components/cvmodal.css'

const Modalcv = ({ setModalState }) => {

  const closeModal = () => {
    setModalState(false);
  }
  return (
    <div className="modalComponentContainer">
      <div className="modalforeground"></div>
      <div className="cvimg">
      </div>
      <div className="btnModalContainer">
        <button className="modal-buttons" onClick={() => { closeModal() }}>Close</button>
        <button className="modal-buttons">
          <a href="../../images/robertojacobocv.pdf" download>Download</a>
        </button>
      </div>
    </div>
  )
}

export default Modalcv;