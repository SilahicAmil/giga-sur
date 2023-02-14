import BottomNavItems from "./BottomNavItems";
import EmailIcon from "../../../public/static/images/email-icon.png";
import FinderIcon from "../../../public/static/images/macos-finder-icon.jpg";
import GithubIcon from "../../../public/static/images/github-logo.png";
import ModalContent from "../../ModalForm/ModalContent";
import SafariIcon from "../../../public/static/images/safari-icon.png";
import SettingsIcon from "../../../public/static/images/settings-icon.png";
import { createPortal } from "react-dom";
import { useState } from "react";

const BottomNav = ({}) => {
  const [showModal, setShowModal] = useState(false);
  const modalContent = document.getElementById("modal-content");

  return (
    <div className="z-50 m-auto  flex h-24 w-4/6 items-center justify-around  rounded-lg bg-slate-700 shadow-2xl">
      <BottomNavItems>
        <a href="../../../public/static/AMIL-SILAHIC-RESUME.pdf" download>
          <img
            alt="finder image icon"
            src={FinderIcon}
            className="rounded-lg"
          />
        </a>
      </BottomNavItems>

      <BottomNavItems>
        <a href="https://amil.dev" target="_blank">
          <img alt="safari icon" src={SafariIcon} className="rounded-lg" />
        </a>
      </BottomNavItems>

      <BottomNavItems>
        <a href="https://github.com/silahicamil" target="_blank">
          <img alt="github icon" src={GithubIcon} className="rounded-lg" />
        </a>
      </BottomNavItems>

      <BottomNavItems>
        <button onClick={(e) => setShowModal(true)}>
          <img alt="mac os email icon" src={EmailIcon} className="rounded-lg" />
        </button>
      </BottomNavItems>
      {showModal &&
        createPortal(
          <ModalContent>
            <button onClick={() => setShowModal(false)}>x</button>
          </ModalContent>,

          modalContent
        )}

      <BottomNavItems>
        <p>
          <img
            alt="mac os settings icon"
            src={SettingsIcon}
            className=" rounded-lg"
          />
        </p>
      </BottomNavItems>
    </div>
  );
};

export default BottomNav;
