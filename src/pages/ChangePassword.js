import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const ChangePassword = () => {
  const [oldPassword, setOldPassword] = useState("");
  const [newPassword, setNewPassword] = useState("");
  let navigate = useNavigate();

  const changePassword = () => {
    axios
      .put(
        "http://localhost:3001/auth/changepassword",
        { oldPassword: oldPassword, newPassword: newPassword },
        { headers: { accessToken: localStorage.getItem("accessToken") } }
      )
      .then((res) => {
        if (res.data.error) {
          alert(res.data.error);
        } else {
          alert("Successfully Changed Password!");
          navigate("/");
        }
      });
  };

  return (
    <div>
      <h1>Change Your Password</h1>
      <input
        type="text"
        placeholder="Old Password..."
        onChange={(e) => {
          setOldPassword(e.target.value);
        }}
      />
      <input
        type="text"
        placeholder="New Password..."
        onChange={(e) => {
          setNewPassword(e.target.value);
        }}
      />
      <button onClick={changePassword}>Save Changes</button>
    </div>
  );
};

export default ChangePassword;
