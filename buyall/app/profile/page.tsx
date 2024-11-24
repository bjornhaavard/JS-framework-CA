import React from "react";

const ProfilePage: React.FC = () => {
  return (
    <div style={{ padding: "20px", fontFamily: "Arial, sans-serif" }}>
      <h1>Profile Page</h1>
      <div style={{ marginTop: "20px" }}>
        <h2>Username: JohnDoe</h2>
        <p>Email: johndoe@example.com</p>
        <p>Member since: January 2021</p>
      </div>
    </div>
  );
};

export default ProfilePage;
