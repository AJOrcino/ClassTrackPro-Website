import React from "react";
import TeamMembers from "./TeamMemberCard";
import Navs from "../../Navbar/LoginNav/Navbars";
import ArrowUps from "../../Button/ArrowUp";

const TeamSection = () => {
  const teamMembers = [
    {
      id: 1,
      name: "Jacob Alocon",
      memberRole: "Leader",
      position: "",
      contribution: "",
      imageUrl: "/images/dany-bailey.jpg",
      socialLinks: { github: "#", linkedin: "#", facebook: "#" },
    },
    {
      id: 2,
      name: "Allen Jefferson C. Orcino",
      memberRole: "Member",
      position: "Fullstack Developer",
      contribution:
        "For the Manage and Development of the Frontend and Backend of the application.",
      imageUrl: "/images/lucy-carter.jpg",
      socialLinks: { github: "#", linkedin: "#", facebook: "#" },
    },
    {
      id: 3,
      name: "Lemuel Doblada",
      memberRole: "Member",
      position: "Frontend Developer",
      contribution: "",
      imageUrl: "/images/jade-bradley.jpg",
      socialLinks: { github: "#", linkedin: "#", facebook: "#" },
    },
  ];

  return (
    <div className="min-h-screen bg-[#1c1c1e] text-white py-16 px-4 sm:px-6 lg:px-8 font-sans">
      <Navs />
      <div className="max-w-6xl mx-auto text-center mb-12">
        <p className="text-[#1bd421] text-2xl sm:text-3xl  mt-3 uppercase font-bold mb-2">
          My Team
        </p>
        <h2 className="text-2xl sm:text-2xl font-bold mt-4">
          Introducing the ClassTrack Pro Development Team
        </h2>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
        {teamMembers.map((member) => (
          <TeamMembers
            key={member.id}
            name={member.name}
            memberRole={member.memberRole}
            position={member.position}
            contribution={member.contribution}
            imageUrl={member.imageUrl}
            socialLinks={member.socialLinks}
          />
        ))}
      </div>
      <ArrowUps />
    </div>
  );
};

export default TeamSection;
