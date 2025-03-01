import React from "react";
import "./TeamPage.css";
import ProfileCard from "../../Components/ProfileCard/ProfileCard";

const teamMembers = [
  {
    name: "Varun",
    position: "Club Secretary",
    photo: "/paul.jpg",
  },
  {
    name: "Niranjana",
    position: "Deputy Secretary",
    photo: "/paul.jpg",
  },
  {
    name: "Lenoy John",
    position: "SAE Captain",
    photo: "/paul.jpg",
  },
  {
    name: "Tejus",
    position: "Treasurer",
    photo: "/paul.jpg",
  },
  {
    name: "Emma Wilson",
    position: "Technical Lead",
    photo: "/paul.jpg",
  },
  {
    name: "Robert White",
    position: "Event Coordinator",
    photo: "/paul.jpg",
  },
];

const TeamPage = () => {
  return (
    <div className="team-page">
      <h1 className="team-title">Meet Our Team</h1>
      <div className="team-grid">
        {teamMembers.map((member, index) => (
          <ProfileCard
            key={index}
            photo={member.photo}
            name={member.name}
            position={member.position}
          />
        ))}
      </div>
    </div>
  );
};

export default TeamPage;
