import React from "react";

const ProfilePage: React.FC = () => {
  return (
    <>
      <section className="blue-container">
        <h1 className="heading">Profile Page</h1>
      </section>
      <div className="p-5 font-sans text-gray-800 min-h-[50vh] flex justify-center items-center">
        <div className="bg-white shadow-lg rounded-lg p-10 w-3/4 md:w-1/2 lg:w-1/3">
          <div className="mt-5">
            <h2 className="text-xl">Username: JohnDoe</h2>
            <p className="text-base">Email: johndoe@example.com</p>
            <p className="text-base">Member since: January 2021</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default ProfilePage;
