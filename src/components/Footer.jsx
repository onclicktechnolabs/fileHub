import React, { useState } from "react";
import { AiOutlineStar } from "react-icons/ai";
import { BiFolder } from "react-icons/bi";
import { CgHomeAlt } from "react-icons/cg";
import { RiUserSharedLine } from "react-icons/ri";
import Modal from "./Modal";

function Footer() {
  const icons = [
    { id: "1", name: "Home", icon: <CgHomeAlt /> },
    { id: "2", name: "Starred", icon: <AiOutlineStar /> },
    { id: "3", name: "Shared", icon: <RiUserSharedLine /> },
    { id: "4", name: "Files", icon: <BiFolder /> },
  ];

  // const onOpenModal = () => {
  //   setOpenModal(true);
  // };
  // const closeModal = (data) => {
  //   setOpenModal(false);
  // };

  return (
    <>
      <div className="w-full flex justify-between items-center shadow-inner p-4">
        {icons.map((item) => (
          <div
            key={item.id}
            className="text-3xl p-3 rounded-t-md cursor-pointer hover:bg-gray-400"
          >
            {item.icon}
          </div>
        ))}
      </div>
    </>
  );
}

export default Footer;
