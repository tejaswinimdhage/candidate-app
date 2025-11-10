import React from "react";
import type { Candidate } from "@/types/candidate";

const CandidateAvailability: React.FC<{ candidate: Candidate }> = () => {
  return (
    <div className="mt-3">
      <div className="flex items-center gap-3">
        <span className="bg-gray-100 text-gray-600 text-xs px-2 py-1 rounded-md">
          Not Requested
        </span>
        <a href="#" className="text-sm text-[#3574d6] hover:underline">
          Request Availability
        </a>
      </div>
    </div>
  );
};

export default CandidateAvailability;
