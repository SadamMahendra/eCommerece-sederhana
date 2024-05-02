import { NavLink } from "react-router-dom";

// eslint-disable-next-line react/prop-types
const NavigateButton = ({ to, name }) => {
  return (
    <NavLink
      to={to}
      className={({ isActive }) => (isActive ? "font-semibold underline" : "")}
    >
      {name}
    </NavLink>
  );
};

export default NavigateButton;
