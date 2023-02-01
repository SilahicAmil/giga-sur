import BottomNavItems from "./BottomNavItems";
import ModalContent from "../../Modal/ModalContent";
import { createPortal } from "react-dom";
import { useState } from "react";

const BottomNav = ({}) => {
  const [showModal, setShowModal] = useState(false);
  const modalContent = document.getElementById("modal-content");

  return (
    <div className="border-1 z-50 m-auto flex h-24 w-2/6 items-center justify-center gap-14 rounded-lg  bg-slate-700 shadow-2xl">
      <BottomNavItems>
        <img
          alt="finder image icon"
          src="../../../public/images/macos-finder-icon.jpg"
          className="rounded-lg"
        />
      </BottomNavItems>
      {/* safari takes you to my portfolio */}
      <BottomNavItems>
        <a href="https://amil.dev" target="_blank">
          <img
            alt="safar icon"
            src="../../../public/images/safari-icon.png"
            className="rounded-lg"
          />
        </a>
      </BottomNavItems>
      {/* Github goes to my github */}
      <BottomNavItems>
        <a href="https://github.com/silahicamil" target="_blank">
          <img
            alt="github icon"
            src="../../../public/images/github-logo.png"
            className="rounded-lg"
          />
        </a>
      </BottomNavItems>
      {/* this will pop up a modal to email me. will make it look similiar to mac os mail */}
      {/* Might want to make this into its own component later */}
      <BottomNavItems>
        <button onClick={(e) => setShowModal(true)}>
          <img
            alt="mac os email icon"
            src="../../../public/images/email-icon.png"
            className="rounded-lg"
          />
        </button>
      </BottomNavItems>
      {showModal &&
        createPortal(
          <div onClick={(prevState) => !prevState}>
            <ModalContent>
              <button onClick={(prevState) => !prevState}>Close</button>
            </ModalContent>
          </div>,
          modalContent
        )}

      <BottomNavItems>
        <p>
          <img
            alt="mac os settings icon"
            src="../../../public/images/settings-icon.png"
            className=" rounded-lg"
          />
        </p>
      </BottomNavItems>
    </div>
  );
};

export default BottomNav;
