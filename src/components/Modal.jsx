import React from "react";

function Modal({ children }) {
  return (
    <div className="fixed inset-0 z-50   flex items-center justify-center ">
      <div>
        {/* <div className="modal-overlay bg-blue-400"></div> */}
        <div className="modal-container bg-slate-300 rounded-md">
          {children}
        </div>
      </div>
    </div>
  );
}

export default Modal;
