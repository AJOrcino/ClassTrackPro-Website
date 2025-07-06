import React from "react";

const TeamMemberCard = ({
  name,
  memberRole,
  position,
  contribution,
  imageUrl,
  socialLinks,
}) => {
  return (
    <div className="bg-[#2e2e2f] rounded-lg shadow-lg overflow-hidden flex flex-col md:flex-row items-center p-4">
      <div className="flex-shrink-0 w-24 h-24 sm:w-32 sm:h-32 md:w-40 md:h-40 rounded-lg overflow-hidden bg-gray-700 mb-4 md:mb-0 md:mr-6">
        {/* Profile Picture */}
        <img
          src={imageUrl || ""}
          alt={name}
          className="w-full h-full object-cover"
        />
      </div>
      <div className="flex-grow text-center md:text-left">
        {/* Name */}
        <h3 className="text-xl sm:text-2xl font-semibold text-white mb-1">
          {name}
        </h3>
        {/* Role and Position */}
        <p className="text-sm sm:text-base text-[#1bd421] mb-1">
          {memberRole} &bull; {position}
        </p>
        {/* Contribution Description */}
        <p className="text-gray-300 text-sm sm:text-base leading-relaxed mb-4">
          {contribution ||
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit."}
        </p>
        {socialLinks && Object.keys(socialLinks).length > 0 && (
          <div className="flex justify-center md:justify-start space-x-4 text-gray-400">
            {socialLinks.facebook && (
              <a
                href={socialLinks.facebook}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-blue-500 transition-colors"
              >
                <i className="fab fa-facebook-f text-lg"></i>
              </a>
            )}
            {socialLinks.github && (
              <a
                href={socialLinks.github}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-gray-200 transition-colors"
              >
                <i className="fab fa-github text-lg"></i>
              </a>
            )}
            {socialLinks.linkedin && (
              <a
                href={socialLinks.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-blue-600 transition-colors"
              >
                <i className="fab fa-linkedin-in text-lg"></i>
              </a>
            )}
          </div>
        )}
      </div>
    </div>
  );
};

export default TeamMemberCard;
