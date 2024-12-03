import { Button } from "@consta/uikit/Button";
import { NavLink, useLocation } from "react-router-dom";
import style from "./Menu.module.css";
import { getToken } from "../../services/token";

const Menu = () => {
  const { pathname } = useLocation();


  const buttonStyle = {
    backgroundColor: "#a084ca", 
    color: "white",
    border: "2px solid transparent",
    borderRadius: "8px",
    padding: "10px 20px",
    cursor: "pointer",
    transition: "background-color 0.3s ease",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    textAlign: "center",
  };

  const activeButtonStyle = {
    backgroundColor: "#7f66b4",
    color: "white",
    border: "2px solid transparent",
    borderRadius: "8px",
    padding: "10px 20px",
    cursor: "pointer",
    transition: "background-color 0.3s ease",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    textAlign: "center",
  };

  return (
    <div className={style.Menu}>
      <NavLink to="/">
        <Button
          view={pathname === "/" ? "primary" : "secondary"}
          label="Main page"
          style={pathname === "/" ? activeButtonStyle : buttonStyle}
        />
      </NavLink>

      {getToken() && (
        <NavLink to="/service" activeclassname={style.active}>
          <Button
            view={pathname === "/service" ? "primary" : "secondary"}
            label="Services page"
            style={pathname === "/service" ? activeButtonStyle : buttonStyle}
          />
        </NavLink>
      )}
    </div>
  );
};

export default Menu;
