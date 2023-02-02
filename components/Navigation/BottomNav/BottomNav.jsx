import BottomNavItems from "./BottomNavItems";
import ModalContent from "../../Modal/ModalContent";
import { createPortal } from "react-dom";
import { useState } from "react";

const BottomNav = ({}) => {
  const [showModal, setShowModal] = useState(false);
  const modalContent = document.getElementById("modal-content");

  return (
    <div className="z-50 m-auto flex h-24 w-2/6 items-center justify-center gap-14 rounded-lg bg-slate-700 shadow-2xl">
      <BottomNavItems>
        <img
          alt="finder image icon"
          src={"/public/static/images/macos-finder-icon.jpg"}
          className="rounded-lg"
        />
      </BottomNavItems>
      {/* safari takes you to my portfolio */}
      <BottomNavItems>
        <a href="https://amil.dev" target="_blank">
          <img
            alt="safar icon"
            src={"/public/static/images/safari-icon.png"}
            className="rounded-lg"
          />
        </a>
      </BottomNavItems>
      {/* Github goes to my github */}
      <BottomNavItems>
        <a href="https://github.com/silahicamil" target="_blank">
          <img
            alt="github icon"
            src={"/public/static/images/github-logo.png"}
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
            src={"/public/static/images/email-icon.png"}
            className="rounded-lg"
          />
        </button>
      </BottomNavItems>
      {showModal &&
        createPortal(
          <ModalContent>
            <button onClick={() => setShowModal(false)}>Close</button>
          </ModalContent>,

          modalContent
        )}

      <BottomNavItems>
        <p>
          <img
            alt="mac os settings icon"
            src={"/public/static/images/settings-icon.png"}
            className=" rounded-lg"
          />
        </p>
      </BottomNavItems>
    </div>
  );
};

export default BottomNav;
