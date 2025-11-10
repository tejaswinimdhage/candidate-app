import React from "react";
import CandidateHeader from "./CandidateHeader";
import CandidateJob from "./CandidateJob";
import CandidateAvailability from "./CandidateAvailability";
import CandidateInterviews from "./CandidateInterview";

import type { Candidate } from "@/types/candidate";

const CandidateCard: React.FC<{ candidate: Candidate }> = ({ candidate }) => {
  return (
    <div className="border-b border-gray-200 py-4 px-6">
      {/* Grid layout for info */}
      <div className="grid grid-cols-[1fr_2fr] gap-6 items-start">
        <CandidateHeader candidate={candidate} />
        <CandidateJob candidate={candidate} />
      </div>

      {/* Availability or Interviews */}
      {candidate.has_interviews ? (
        <CandidateInterviews candidate={candidate} />
      ) : candidate.has_availability ? (
        <CandidateAvailability candidate={candidate} />
      ) : null}
    </div>
  );
};

export default CandidateCard;
