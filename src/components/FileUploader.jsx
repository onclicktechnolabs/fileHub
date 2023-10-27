import React, { useRef } from "react";
import { AiOutlineClose } from "react-icons/ai";
import { BiFolder, BiUpload } from "react-icons/bi";
import { MdOutlineDocumentScanner } from "react-icons/md";
import useClickOutside from "../helpers/clickOutside";

function FileUploader({ setShowFileUploader }) {
  const icons = [
    { id: "1", name: "folder", icon: <BiFolder /> },
    { id: "2", name: "upload", icon: <BiUpload /> },
    { id: "3", name: "scanner", icon: <MdOutlineDocumentScanner /> },
  ];

  const popup = useRef(null);
  useClickOutside(popup, () => {
    setShowFileUploader(false);
  });
  return (
    <div
      className="block w-screen p-4 bg-white border border-gray-200 rounded-lg shadow "
      ref={popup}
    >
      <div className="flex justify-end px-2 pt-2"></div>
      <div className="flex justify-between items-center flex-wrap">
        {icons.map((item) => (
          <div
            key={item.id}
            className="m-2 text-2xl rounded-xl shadow-lg bg-gray-300 p-2"
          >
            {item.icon}
          </div>
        ))}
      </div>
    </div>
  );
}

export default FileUploader;
