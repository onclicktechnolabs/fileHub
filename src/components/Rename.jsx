import React, { useEffect, useState } from "react";

function Rename({ handleCloseModal }) {
  useEffect(() => {
    console.log("Modal open");
  }, []);
  console.log();
  const [newName, setNewName] = useState("");

  const onRename = () => {
    //api call for Rename
    console.log(newName, "newName");
    setTimeout(() => {
      handleCloseModal(false);
    }, 3000);
  };
  const onCloseModal = () => {
    handleCloseModal(false);
  };
  return (
    <>
      <div className="text-center p-4">
        <h2 className="text-xl font-bold">Rename Folder</h2>
      </div>
      <div className="p-4">
        <input
          type="text"
          value={newName}
          onChange={(e) => setNewName(e.target.value)}
          className="w-full p-2 border border-gray-300 rounded"
          placeholder="Enter new name"
        />
      </div>
      <div className="flex justify-end p-4">
        <button
          onClick={onCloseModal}
          className="px-4 py-2 bg-gray-300 text-gray-700 rounded mr-2"
        >
          Cancel
        </button>
        <button
          onClick={onRename}
          className="px-4 py-2 bg-blue-500 text-white rounded"
        >
          Rename
        </button>
      </div>
    </>
  );
}

export default Rename;
