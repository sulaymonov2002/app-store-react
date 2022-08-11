import { Link } from "react-router-dom";
import { HandleBag, LogOut, StoreFont } from "../../assets/icons";

import "./sidebar.scss";

function Sidebar({ onPageChange, onLogOut }) {
  return (
    <div className="sidebar">
      <div>
        <Link to="/dashboard">
          <button>{StoreFont}</button>
        </Link>
        <Link to="/checkout">
          <button>{HandleBag}</button>
        </Link>
      </div>
      <Link to="/login">
        <button className="logOut">{LogOut}</button>
      </Link>
    </div>
  );
}

export default Sidebar;
