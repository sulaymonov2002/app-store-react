import { Link } from "react-router-dom";
import "./button.scss";
function Button({ btnIcon, btnLabel, onPageChange, pageName }) {
  return (
    // <button onClick={() => onPageChange(pageName)}>
    //   {btnIcon} {btnLabel}
    // </button>
    <Link to={`/${pageName}`}>
      <button>
        {btnIcon} {btnLabel}
      </button>
    </Link>
  );
}
export default Button;
