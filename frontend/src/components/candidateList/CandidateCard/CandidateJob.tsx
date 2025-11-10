import React from "react";
import { ArrowUp } from "lucide-react";
import type { Candidate } from "@/types/candidate";

const CandidateJob: React.FC<{ candidate: Candidate }> = ({ candidate }) => {
    return (
        <div className="text-left">
            <p>{candidate.job_title}</p>
            <p className="flex items-center text-sm text-gray-400">
                <ArrowUp size={14} className="mr-1 mt-[1px]" />
                {candidate.status}
            </p>
            {!candidate.has_interviews && (
                <p className="text-[#078361] text-sm pt-2 hover:underline cursor-pointer">
                    {candidate.action_link}
                </p>
            )}
        </div>
    );
};

export default CandidateJob;
