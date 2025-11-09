import { type FC } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

interface PaginationProps {
    currentPage: number;
    totalPages: number;
    onPageChange: (page: number) => void;
}

const ListPagination: FC<PaginationProps> = ({ currentPage, totalPages, onPageChange }) => {
    if (totalPages <= 1) return null;

    const handlePrev = () => {
        if (currentPage > 1) onPageChange(currentPage - 1);
    };

    const handleNext = () => {
        if (currentPage < totalPages) onPageChange(currentPage + 1);
    };

    const renderPageNumbers = () => {
        const pages = [];
        for (let i = 1; i <= totalPages; i++) {
            pages.push(
                <button
                    key={i}
                    onClick={() => onPageChange(i)}
                    className={`px-3 py-1  rounded ${i === currentPage
                        ? 'bg-gray-200  border gray-300 text-gray-700 border-gray-300'
                        : 'text-gray-700 hover:bg-gray-100'
                        }`}
                >
                    {i}
                </button>
            );
        }
        return pages;
    };

    return (
        <div className="flex items-center gap-2 mt-6 w-full justify-center pb-4">
            <button
                onClick={handlePrev}
                disabled={currentPage === 1}
                className="p-2  rounded disabled:opacity-50 hover:bg-gray-100"
            >
                <ChevronLeft size={18} />
            </button>

            {renderPageNumbers()}

            <button
                onClick={handleNext}
                disabled={currentPage === totalPages}
                className="p-2 rounded disabled:opacity-50 hover:bg-gray-100"
            >
                <ChevronRight size={18} />
            </button>
        </div>
    );
};

export default ListPagination;
