import React from "react";
import profile_pic from '../../assets/images/profile_pic.jpeg';

import { useGetProfile } from "../../hooks/auth.hook";
// import { getUserProfile } from "../../api";
function ProfileSection() {
  const {data,isLoading}=useGetProfile();
  // const {data:userdata,isLoading: isprofileLoading}=getUserProfile(data?.data.username);
  // console.log(isLoading);
  return (

    <div className="flex flex-col items-center ">
    {
      isLoading ? <h1 >Loading...</h1>
      :
    <>
      <img
        src={profile_pic}
        alt="Profile"
        className="rounded-full h-24 w-24 object-cover mb-2"
      />
      <h1 className="text-2xl font-bold text-blue-600 mb-1">{`${data?.data.first_name} ${data?.data.last_name}`}</h1>

      {/* Title */}
      <h2 className="text-md font-semibold text-gray-500 mb-1">
      Web Developer | UI UX Developer 
      </h2>

      {/* Username */}
      <a href="./profile/username">
        <p className="text-sm text-blue-700 hover:text-blue-400 cursor-pointer">
          {/* @johndoe */}
          {data?.data.username}
        </p>
      </a>
      </>}
    </div>
  );
}

export default ProfileSection;
