import React from 'react';
import { ArrowUp } from "lucide-react";

type Candidate = {
    id: number;
    name: string;
    position: string;
    company: string;
    job_title: string;
    job_id: string;
    status: string;
    status_type: string;
    last_activity: string;
    action_link: string;
    has_availability: boolean;
    has_interviews: boolean;
    application_type: string;
    source: string;
    interviews?: Array<object>;
};

const CandidateCard: React.FC<{ candidate: Candidate }> = ({ candidate }) => {
    return (
        <div className="border-b border-gray-200 py-4 px-6">
            {/* Candidate info */}
            <div className="grid grid-cols-[1fr_2fr] gap-6 items-start">
                <div >
                    <p className="font-medium">{candidate.name}</p>
                    <p className="text-sm text-gray-500">{candidate.company}</p>
                    <p className="text-sm text-gray-500">{candidate.status}</p>
                </div>
                <div className="text-left">
                    <p className="font-medium">{candidate.job_title}</p>
                    <p className="flex align-center text-sm text-gray-500">{<ArrowUp size={14} className='inline mr-1 mt-1' />}{candidate.status}</p>
                    <p className="text-[#078361]">{candidate.action_link}</p>
                </div>
            </div>

            {/* Conditional: Availability & Interviews */}
            {candidate.has_interviews && (
                <>
                    <div className="mt-3 grid grid-cols-2 ">
                        {/* Availability Row */}

                        <div className="flex justify-between text-sm mb-2 font-medium">
                            <span>Interviews</span>
                            <div className="space-x-4">
                                <a href="#" className="text-[#10B981]">Schedule manually</a>
                                <a href="#" className="text-[#10B981]">Automated scheduling</a>
                            </div>
                        </div>
                    </div>
                    <div className="mt-3 grid grid-cols-2 ">
                        {/* Interviews */}
                        <div className="text-sm">
                            {candidate.interviews?.map((interview, idx) => (
                                <div key={idx} className="flex justify-between mb-1">
                                    <span>{interview?.name}</span>
                                    <div className="space-x-2">
                                        <a href="#" className="text-[#10B981]">Schedule manually</a>
                                        <a href="#" className="text-[#10B981]">Automated scheduling</a>
                                        <span>...</span>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </>
            )}
        </div>
    );

};

export default CandidateCard;
