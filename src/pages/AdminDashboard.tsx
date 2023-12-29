import React, { useEffect, useState } from "react";
import { USER_URL } from "./Registration";

interface UserData {
  id: number;
  name: string;
  email: string;
  number: string;
}

const AdminDashboard: React.FC = () => {
  const [data, setData] = useState<UserData[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(USER_URL);
        const result = await response.json();
        console.log(
          "🚀 ~ file: AdminDashboard.jsx:13 ~ fetchData ~ result:",
          result
        );
        setData(result);
      } catch (error) {
        console.error("Couldnot fetch data", error);
      } finally {
        setLoading(false);
      }
    };
    fetchData();
  }, []);
  return (
    <div>
      <h1
        style={{
          backgroundColor: "green",
          padding: "10px",
          borderRadius: "15px",
          color: "white",
          margin: "10px",
          width: "300px",
          marginLeft: "30px",
        }}
      >
        Registered Users:
      </h1>
      {loading ? (
        <p></p>
      ) : (
        <table
          style={{
            marginLeft: "30px",
          }}
        >
          <thead>
            <tr>
              <th>ID</th>
              <th>Name</th>
              <th>Email</th>
              <th>Number</th>
            </tr>
          </thead>
          <tbody>
            {data.map((item) => (
              <tr key={item.id}>
                <td
                  style={{
                    textAlign: "center",
                    justifyContent: "center ",
                    width: "50px",
                  }}
                >
                  {item.id}
                </td>
                <td>{item.name}</td>
                {/* <td>{item.number}</td> */}
                <td>{item.email}</td>
                <td>{item.number}</td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
};

export default AdminDashboard;
