import React from "react";
import "./ProfileCard.css";

const ProfileCard = ({ photo, name, position }) => {
  return (
    <div className="profile-card">
      <img src={photo} alt={name} className="profile-photo" />
      <div className="profile-details">
        <h3 className="profile-name">{name}</h3>
        <p className="profile-position">{position}</p>
      </div>
    </div>
  );
};

export default ProfileCard;
