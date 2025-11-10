import React from 'react';

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
    availability_status: string;
    source: string;
    interviews?: Array<object>;
};

const CandidateInterview: React.FC<{ candidate: Candidate }> = ({ candidate }) => {
    return (candidate.has_interviews && (
        <>
            <div className="mt-3 grid grid-cols-2 ">
                {/* Availability Row */}
                <div className="flex justify-between text-sm mb-2 font-medium">
                    <span>Availability <span className="text-[#078361] underline">{candidate.availability_status}</span></span>
                    <div className="space-x-4">
                        <a href="#" className="text-[#078361]">Request Availability</a>
                    </div>
                </div>
            </div>
            <div className="mt-3 grid grid-cols-2 ">
                {/* Availability Row */}

                <div className="flex justify-between text-sm mb-2 font-medium">
                    <span>Interviews</span>
                    <div className="space-x-4">
                        <a href="#" className="text-[#078361]">Schedule manually</a>
                        <a href="#" className="text-[#078361]">Automated scheduling</a>
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
                                <a href="#" className="text-[#078361]">Schedule manually</a>
                                <a href="#" className="text-[#078361]">Automated scheduling</a>
                                <span>...</span>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </>
    ));

};

export default CandidateInterview;
