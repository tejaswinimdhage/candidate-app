import React, { useEffect } from 'react';
import ListToolbar from './ListToolbar';
import ListPagination from './ListPagination';
import { useCandidateStore } from '../../store/useCandidateStore';
import CandidateCard from './CandidateCard';

interface Props {
    // define your props here, for example:
    // title?: string;
}

const CandidateList: React.FC<Props> = () => {

    const {
        filteredCandidates,
        currentPage,
        perPage,
        totalPages,
        fetchCandidates,
        setPage,
    } = useCandidateStore();

    useEffect(() => {
        fetchCandidates();
    }, []);

    // Calculate items for current page
    const startIndex = (currentPage - 1) * perPage;
    const currentCandidates = filteredCandidates.slice(startIndex, startIndex + perPage);


    console.log("Current Candidates:", currentCandidates, filteredCandidates);
    return (
        <main className="flex-1 px-6 bg-[#f7f8f7]" >
            <ListToolbar />
            <div className="bg-white border border-gray-200 rounded-md overflow-hidden shadow-sm">
                {/* Table Header */}
                <div className="grid grid-cols-[1fr_2fr] text-xs font-medium text-gray-500 uppercase border-b bg-gray-50 px-6 py-3">
                    <div>Name</div>
                    <div className="ml-4">Job / Status</div>
                </div>

                {/* Candidate Rows */}
                {currentCandidates.map((candidate) => (
                    <CandidateCard candidate={candidate} />
                ))}
            </div>
            <ListPagination totalPages={totalPages} onPageChange={setPage} currentPage={currentPage} />
            {/* TODO: Add action buttons here (Generate Report, + Add Candidate, Bulk Actions) */}
            {/* TODO: Add candidate list here */}
            {/* TODO: Add pagination here */}
        </main>
    );
};

export default CandidateList;
