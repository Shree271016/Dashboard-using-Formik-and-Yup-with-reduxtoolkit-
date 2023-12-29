import { useSelector, useDispatch } from "react-redux";
import { logout } from "../store/slices/userSlice";
import { useNavigate } from "react-router-dom";
import React from "react";

const UserDashboard: React.FC = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const data = useSelector((state: any) => {
    return state.userData;
  });

  const handleLogout = () => {
    dispatch(logout());
    navigate("/");
  };

  console.log(data);
  return (
    <div
      className="user-detail"
      style={{
        marginLeft: "30px",
        marginTop: "30px",
      }}
    >
      <table
        style={{ padding: "10px", borderRadius: "15px", marginBottom: "30px" }}
      >
        <h1
          style={{
            backgroundColor: "green",
            padding: "15px",
            borderRadius: "15px",
            // margin: "5px",
            marginBottom: "25px",
          }}
        >
          User profile:
        </h1>
        <p
          style={{
            padding: "10px",
            border: "2px solid rgb(28, 89, 28)",
          }}
        >
          Name:{data.name}
        </p>
        <p
          style={{
            padding: "10px",
            border: "2px solid rgb(28, 89, 28)",
          }}
        >
          Email:{data.email}
        </p>
        <p
          style={{
            padding: "10px",
            border: "2px solid rgb(28, 89, 28)",
          }}
        >
          Contact Number:{data.number}
        </p>
      </table>

      <button
        onClick={handleLogout}
        style={{
          // padding: "30px",
          marginLeft: "300px",
        }}
      >
        Logout
      </button>
    </div>
  );
};

export default UserDashboard;
