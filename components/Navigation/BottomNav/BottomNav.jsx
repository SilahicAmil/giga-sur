import BottomNavItems from "./BottomNavItems";
import { createPortal } from "react-dom";
import { useState } from "react";

const BottomNav = ({}) => {
  const [showModal, setShowModal] = useState(false);
  const modalContent = document.getElementById("modal-content");

  return (
    <div className="z-50 m-auto flex h-24 w-2/6 items-center justify-center gap-14 rounded-lg bg-red-300">
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
          <div
            className="absolute left-0 top-0 right-0 bottom-0 m-auto flex h-64 w-64  items-center justify-center bg-blue-500 "
            onClick={() => setShowModal(false)}
          >
            This is the modal lol
            <button onClick={(prevState) => !prevState}>Close</button>
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
