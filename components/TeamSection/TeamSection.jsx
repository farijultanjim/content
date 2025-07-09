import { ArrowUpRight } from "lucide-react";
import React from "react";

const teamMembersRow1 = [
  {
    name: "Oliver Williams",
    role: "Founder & CEO",
    image: "https://randomuser.me/api/portraits/men/32.jpg",
  },
  {
    name: "Anastasia Doe",
    role: "Founder & COO",
    image: "https://randomuser.me/api/portraits/women/44.jpg",
  },
  {
    name: "Matt Smith",
    role: "Customer Consultant",
    image: "https://randomuser.me/api/portraits/men/65.jpg",
  },
  {
    name: "Alex Brown",
    role: "Creative Director",
    image: "https://randomuser.me/api/portraits/men/54.jpg",
  },
  {
    name: "Oliver Williams",
    role: "Founder & CEO",
    image: "https://randomuser.me/api/portraits/men/32.jpg",
  },
  {
    name: "Anastasia Doe",
    role: "Founder & COO",
    image: "https://randomuser.me/api/portraits/women/44.jpg",
  },
  {
    name: "Matt Smith",
    role: "Customer Consultant",
    image: "https://randomuser.me/api/portraits/men/65.jpg",
  },
  {
    name: "Alex Brown",
    role: "Creative Director",
    image: "https://randomuser.me/api/portraits/men/54.jpg",
  },
  {
    name: "Oliver Williams",
    role: "Founder & CEO",
    image: "https://randomuser.me/api/portraits/men/32.jpg",
  },
  {
    name: "Anastasia Doe",
    role: "Founder & COO",
    image: "https://randomuser.me/api/portraits/women/44.jpg",
  },
  {
    name: "Matt Smith",
    role: "Customer Consultant",
    image: "https://randomuser.me/api/portraits/men/65.jpg",
  },
  {
    name: "Alex Brown",
    role: "Creative Director",
    image: "https://randomuser.me/api/portraits/men/54.jpg",
  },
];

const teamMembersRow2 = [
  {
    name: "David Blackwood",
    role: "Support Specialist",
    image: "https://randomuser.me/api/portraits/men/41.jpg",
  },
  {
    name: "Michael Dale",
    role: "Chief Technology Officer",
    image: "https://randomuser.me/api/portraits/men/72.jpg",
  },
  {
    name: "Isabella Scott",
    role: "Customer Consultant",
    image: "https://randomuser.me/api/portraits/women/76.jpg",
  },
  {
    name: "David Blackwood",
    role: "Support Specialist",
    image: "https://randomuser.me/api/portraits/men/41.jpg",
  },
  {
    name: "Michael Dale",
    role: "Chief Technology Officer",
    image: "https://randomuser.me/api/portraits/men/72.jpg",
  },
  {
    name: "Isabella Scott",
    role: "Customer Consultant",
    image: "https://randomuser.me/api/portraits/women/76.jpg",
  },
  {
    name: "David Blackwood",
    role: "Support Specialist",
    image: "https://randomuser.me/api/portraits/men/41.jpg",
  },
  {
    name: "Michael Dale",
    role: "Chief Technology Officer",
    image: "https://randomuser.me/api/portraits/men/72.jpg",
  },
  {
    name: "Isabella Scott",
    role: "Customer Consultant",
    image: "https://randomuser.me/api/portraits/women/76.jpg",
  },
];

const TeamCard = ({ name, role, image }) => (
  <div className="flex-shrink-0 w-60 sm:w-80 bg-white rounded-full border border-gray-300 flex items-center gap-6 px-3 py-2 mx-2">
    <img
      src={image}
      alt={name}
      className="w-16 h-16 rounded-full object-cover"
    />
    <div className="text-left">
      <h3 className="text-lg font-semibold text-gray-800">{name}</h3>
      <p className="text-xs text-gray-500">{role}</p>
    </div>
  </div>
);

const TeamSection = () => {
  return (
    <section className="w-full py-16 bg-gradient-to-br from-blue-50 via-red-50 to-purple-50 overflow-hidden h-screen flex flex-col justify-center">
      <div className="max-w-5xl mx-auto text-center">
        <h2 className="text-4xl font-medium text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-700 mb-6">
          Meet our team
        </h2>
        <p className="text-gray-500 max-w-2xl mx-auto mb-10 text-sm sm:text-base tracking-wide">
          Our dedicated team works tirelessly every day to ensure your success.
          With a passion for excellence and a commitment to helping you achieve
          your goals.
        </p>
      </div>

      {/* Row 1 */}
      <div className="flex overflow-x-auto no-scrollbar pb-6 pl-4 pr-4">
        {teamMembersRow1.map((member, idx) => (
          <TeamCard key={idx} {...member} />
        ))}
      </div>

      {/* Row 2 */}
      <div className="flex overflow-x-auto no-scrollbar pl-12 pr-4">
        {teamMembersRow2.map((member, idx) => (
          <TeamCard key={idx} {...member} />
        ))}
      </div>

      {/* CTA Button */}
      <div className="mt-16 flex justify-center">
        <button className="px-6 py-3 bg-gradient-to-r from-blue-500 to-purple-500 text-white rounded-full font-medium hover:brightness-110 transition-all flex items-center justify-center gap-2">
          Book free consultation
          <ArrowUpRight />
        </button>
      </div>
    </section>
  );
};

export default TeamSection;
