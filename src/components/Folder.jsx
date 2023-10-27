import React from "react";
import { AiFillFolder } from "react-icons/ai";
import { BsThreeDotsVertical } from "react-icons/bs";

function Folder({ name, handleshowFolderMenu, folderColor }) {
  console.log("🚀 ~ file: Folder.jsx:6 ~ Folder ~ folderColor:", folderColor);
  const onHandleDotIcon = () => {
    handleshowFolderMenu(true);
  };
  return (
    <div className="h-fit flex flex-col justify-center items-center   ">
      {/* <AiFillFolder className={`text-9xl text-orange-600`} /> */}
      <AiFillFolder className={`text-9xl text-${folderColor}`} />
      <div className="flex flex-row justify-between items-center text-black w-full">
        <div className="text-center flex-grow">
          <span className="text-black">{name}</span>
        </div>
        <BsThreeDotsVertical className="" onClick={onHandleDotIcon} />
      </div>
    </div>
  );
}

export default Folder;
