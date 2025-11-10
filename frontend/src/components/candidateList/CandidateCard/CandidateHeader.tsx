import React from "react";
import type { Candidate } from "@/types/candidate";

const CandidateHeader: React.FC<{ candidate: Candidate }> = ({ candidate }) => {
  return (
    <div>
      <p className="hover:underline cursor-pointer">
        {candidate.name}
      </p>
      <p className="text-sm text-gray-400">
        {candidate.position} at {candidate.company}
      </p>
      <p className="text-sm pt-2">
        {candidate.status}
      </p>
    </div>
  );
};

export default CandidateHeader;
