import { NavLink } from "react-router-dom";

const Header = () => {
  return (
    <div
      className="header-style"
      style={{
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: "rgb(21,45,47)",
        padding: "10px 20px 30px 10px",
      }}
    >
      <NavLink to="/">Home</NavLink>
      <br />
      <NavLink to="/LogIn">Log In</NavLink>

      <NavLink to="/SignUp">Sign Up</NavLink>

      <NavLink to="/admin">Admin</NavLink>
      <p
        style={{
          paddingTop: "0",
          marginTop: "30px  ",
          // background: "none",
          fontSize: "20px",
          paddingBottom: "0",
          // alignItems: "center",
          // justifyContent: "center",
          // marginLeft: "20px",
          borderRadius: "5px",
          border: "2px solid green",
          backgroundColor: " rgb(0, 126, 106)",
          marginBottom: "0",
          color: "white",
          cursor: "pointer",
        }}
      >
        <span className="material-symbols-outlined ">search</span>
      </p>
    </div>
  );
};

export default Header;
