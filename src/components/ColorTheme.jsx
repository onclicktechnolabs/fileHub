import React, { useRef } from "react";
import useClickOutside from "../helpers/clickOutside";

function ColorTheme({ handleThemeCloseModal, handleFolderColorTheme }) {
  const colors = [
    { id: 1, themeColor: "red-600" },
    { id: 2, themeColor: "orange-600" },
    { id: 3, themeColor: "yellow-600" },
    { id: 4, themeColor: "lime-600" },
    { id: 5, themeColor: "emerald-600" },
    { id: 6, themeColor: "blue-600" },
    { id: 7, themeColor: "violet-600" },
    { id: 8, themeColor: "pink-600" },
    { id: 9, themeColor: "purple-600" },
    { id: 10, themeColor: "indigo-600" },
    { id: 2, themeColor: "orange-400" },
    { id: 6, themeColor: "blue-800" },
  ];
  const onColorSelected = (item) => {
    handleFolderColorTheme(item);
  };
  const popup = useRef(null);
  useClickOutside(popup, () => {
    handleThemeCloseModal(false);
  });
  return (
    <div className="flex p-4 gap-2 flex-wrap" ref={popup}>
      {colors.map((item, i) => {
        return (
          <div
            key={i}
            className={`w-16 h-16 rounded shadow-md bg-${item.themeColor}`}
            onClick={() => onColorSelected(item)}
          ></div>
        );
      })}
    </div>
  );
}

export default ColorTheme;
