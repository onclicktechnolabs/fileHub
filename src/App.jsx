import { useState } from "react";
import { AiOutlinePlus } from "react-icons/ai";

import "./App.css";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Folder from "./components/Folder";
import FileUploader from "./components/FileUploader";
import FolderMenu from "./components/FolderMenu";
import Modal from "./components/Modal";
import Rename from "./components/Rename";
import ColorTheme from "./components/ColorTheme";

function App() {
  const [showFileUploader, setShowFileUploader] = useState(false);
  const [showFolderMenu, setShowFolderMenu] = useState(false);
  const [showRenameModal, setShowRenameModal] = useState(false);
  const [showThemeModal, setShowThemeModal] = useState(false);
  const [folderColor, setFolderColor] = useState([]);
  console.log("🚀 ~ file: App.jsx:20 ~ App ~ folderColor:", folderColor);

  //handle Modal
  const handleRenameShowModal = (data) => {
    setShowRenameModal(data);
  };
  const handleRenameCloseModal = (data) => {
    setShowRenameModal(data);
  };
  const handleThemeShowModal = (data) => {
    setShowThemeModal(data);
  };
  const handleThemeCloseModal = (data) => {
    setShowThemeModal(data);
  };
  const handleFolderColorTheme = (item) => {
    console.log("🚀 ~ file: App.jsx:35 ~ handleFolderColorTheme ~ item:", item);
    setFolderColor(item);
  };

  //handle Folder Menu
  const handleshowFolderMenu = (data) => {
    console.log(data, "handleshowFolderMenu");
    setShowFolderMenu(data);
  };
  return (
    <>
      {showRenameModal && (
        <Modal>
          <Rename handleCloseModal={handleRenameCloseModal} />
        </Modal>
      )}
      {showThemeModal && (
        <Modal>
          <ColorTheme
            handleThemeCloseModal={handleThemeCloseModal}
            handleFolderColorTheme={handleFolderColorTheme}
          />
        </Modal>
      )}
      {showFolderMenu && (
        <FolderMenu
          showFolderMenu={showFolderMenu}
          handleshowFolderMenu={handleshowFolderMenu}
          handleRenameShowModal={handleRenameShowModal}
          handleThemeShowModal={handleThemeShowModal}
        />
      )}
      <div className="w-full h-screen  object-cover flex flex-col items-center">
        <Navbar />
        <div div className="h-screen w-full flex-grow overflow-auto relative">
          <div className=" pt-4">
            {/* Add your content here */}
            <div className="flex flex-row flex-wrap justify-evenly items-start h-fit gap-2">
              {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((item, i) => (
                <Folder
                  key={i}
                  name={item.name}
                  handleshowFolderMenu={handleshowFolderMenu}
                  folderColor={
                    folderColor.id === i + 1 ? folderColor.themeColor : "black"
                  }
                />
              ))}
            </div>
          </div>
          {showFileUploader ? (
            <div className="absolute  bottom-0 shadow-md">
              <FileUploader setShowFileUploader={setShowFileUploader} />
            </div>
          ) : (
            <div className="absolute bg-gray-300   rounded-lg shadow-bottom-left mb-4 right-4 bottom-0 shadow-md p-2 cursor-pointer">
              <AiOutlinePlus
                className="text-4xl"
                onClick={() => setShowFileUploader(true)}
              />
            </div>
          )}
        </div>
        <Footer />
      </div>
    </>
  );
}

export default App;
