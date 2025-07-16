import { ArrowRight, MessageCircleMore, X } from "lucide-react";
import React, { useState } from "react";

const FeedbackCard = () => {
  const [selectedRating, setSelectedRating] = useState(null);

  const ratings = [
    { emoji: "🤢", label: "Bad" },
    { emoji: "😒", label: "Bored" },
    { emoji: "😐", label: "Neutral" },
    { emoji: "😬", label: "Confused" },
    { emoji: "🤩", label: "Nice" },
  ];

  return (
    <div className="bg-[#f6f6f6] flex items-center justify-center h-screen font-outfit">
      <div className="rounded-[40px] bg-white shadow-lg border border-gray-200">
        {/* top section  */}
        <div className="flex items-center justify-between px-7 py-5 border-b border-gray-200">
          <div className="flex items-center gap-1 text-sm">
            <MessageCircleMore className="size-5" /> <span>Feedback</span>
          </div>
          <div>
            <X className="size-4 cursor-pointer" />
          </div>
        </div>

        {/* main section  */}
        <div className="p-4 flex flex-col items-center ">
          <div className="flex flex-col items-center mt-3 mb-16 px-12">
            <h1 className="text-2xl">Write your opinion</h1>
            <p className="text-gray-400 mt-2 max-w-[350px] text-center text-sm">
              Your input is valuable in helping us better understand your needs
              and tailor our services accordingly.
            </p>
          </div>
          <div className="w-full bg-[#f3f3f3] px-4 pt-11 pb-4 rounded-4xl relative">
            <div className="flex items-center justify-center p-1.5  bg-[#f3f3f3] rounded-4xl absolute top-[-35px] left-1/2 -translate-x-1/2  border-white border-4">
              {ratings.map((rating, index) => (
                <div key={index} className="flex items-center ">
                  <div
                    onClick={() => setSelectedRating(rating)}
                    className={`flex items-center  px-1 py-1 rounded-full cursor-pointer transition-all duration-100 ${
                      selectedRating?.label === rating.label
                        ? "bg-white px-2"
                        : ""
                    }`}
                  >
                    <span className="text-xl">{rating.emoji}</span>
                    {selectedRating?.label === rating.label && (
                      <span className="text-sm text-gray-600 font-medium pl-0.5">
                        {rating.label}
                      </span>
                    )}
                  </div>
                </div>
              ))}
            </div>
            <textarea
              className="w-full h-30 bg-white rounded-4xl placeholder:text-sm p-5 text-sm outline-none resize-none"
              placeholder="Add a comment..."
            ></textarea>
            <button className="flex items-center gap-1 bg-black text-[#f6f6f6] w-full justify-center py-4 rounded-[20px] mt-3 text-sm cursor-pointer hover:bg-gray-800 transition-colors duration-300">
              Send Feedback <ArrowRight className="size-4" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FeedbackCard;
