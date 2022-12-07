import React from "react";

export default function PopUpSuccess({ children, visible, onClose }) {
  if (!visible) return null;
  //  มีไว้่ผื่ออยาก กด backDrop แล้วทำให้ popUp หายไป
  // const handleOnBackDropClick = (e) => {
  //   if (e.target.id === "backdrop") onClose && onClose();  
  // };

  return (
    <div
      id="backdrop"
      // onClick={handleOnBackDropClick}
      className="bg-[#000] bg-opacity-50 backdrop fixed inset-0 flex items-center justify-center"
    >
      {children}
    </div>
  );
}