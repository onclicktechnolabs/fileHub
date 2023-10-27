import React, { useEffect, useRef, useState } from "react";
import useClickOutside from "../helpers/clickOutside";
import { MdDriveFileRenameOutline } from "react-icons/md";
import { IoColorPaletteOutline } from "react-icons/io5";
import Modal from "./Modal";

function FolderMenu({
  showFolderMenu,
  handleshowFolderMenu,
  handleRenameShowModal,
  handleThemeShowModal,
}) {
  const [isOpen, setIsOpen] = useState(false);

  const popup = useRef(null);

  useEffect(() => {
    if (showFolderMenu) {
      setIsOpen(true);
    } else {
      setIsOpen(false);
    }
  }, [showFolderMenu]);

  useClickOutside(popup, () => {
    handleshowFolderMenu(false);
  });

  const onRename = () => {
    handleRenameShowModal(true);
  };
  const onColorChange = () => {
    handleThemeShowModal(true);
  };

  return (
    <>
      <div
        className={`absolute bottom-0 transition-transform duration-300 transform z-10 ${
          isOpen ? "translate-y-0 ease-in" : "translate-y-full ease-out"
        } block w-full h-[80%] bg-slate-100 p-4 border border-gray-200 rounded-lg shadow   `}
        ref={popup}
      >
        <div className="flex flex-col justify-between items-start flex-wrap">
          <div className="flex gap-4 cursor-pointer" onClick={onRename}>
            <IoColorPaletteOutline className="text-3xl" />
            <span>Rename</span>
          </div>
          <div className="flex gap-4 cursor-pointer" onClick={onColorChange}>
            <MdDriveFileRenameOutline className="text-3xl" />
            <span>Change Color</span>
          </div>
        </div>
      </div>
    </>
  );
}

export default FolderMenu;
