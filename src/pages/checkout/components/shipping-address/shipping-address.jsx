import { Link } from "react-router-dom";
import "./shipping-address.scss";

function ShippingAddress({ userData, onPageChange, onInputLabel }) {
  return (
    <div className="shipping">
      <h1>Shipping Address</h1>
      <div className="data-change">
        <ul className="user-data">
          <li>{userData.userName}</li>
          <li>{userData.userStreetName}</li>
          <li>{userData.userCity}</li>
          <li>{userData.userState}</li>
          <li>{userData.userCountry}</li>
        </ul>

        <Link to="/login">
          <button>Change</button>
        </Link>
      </div>
    </div>
  );
}

export default ShippingAddress;
