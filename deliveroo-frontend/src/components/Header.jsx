import "./Header.css";
import deliverooIcon from "../assets/img/logo-teal.svg";

const Header = (props) => {
  return (
    <header className="headerDeliveroo">
      <div className="headerLogo">
        <img src={deliverooIcon} alt="Deliveroo logo" />
      </div>
      <div className="cover">
        <div className="text">
          <h1>{props.restaurantName}</h1>
          <p>{props.restaurantDescription}</p>
        </div>
        <div className="photoResto">
          <img src={props.restaurantPicture} alt="Le Pain Quotidien Menu" />
        </div>
      </div>
    </header>
  );
};

export default Header;
