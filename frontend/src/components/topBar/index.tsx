import React from 'react';

interface Props {
    // define your props here, for example:
    // title?: string;
}

const TopBar: React.FC<Props> = () => {
    return (
        <>
            <header className="flex items-center justify-between px-6 py-1 border-b border-gray-200 bg-white">
                <div className="flex items-center gap-8">
                    <div className="text-sm font-medium text-gray-800">
                        <span className="font-semibold text-green-700">greenhouse</span>
                        <span className="text-gray-500">Recruiting</span>
                    </div>

                    <nav className="flex items-center gap-6 text-sm text-gray-600">
                        <a href="#" className="hover:text-gray-900 transition">Jobs</a>
                        <a href="#" className="text-green-700 font-medium border-b-2 border-green-700 pb-1">
                            Candidates
                        </a>
                        <a href="#" className="hover:text-gray-900 transition">CRM</a>
                        <a href="#" className="hover:text-gray-900 transition">Reports</a>
                        <a href="#" className="hover:text-gray-900 transition">Integrations</a>
                    </nav>
                </div>
                <div className="flex items-center gap-4">
                    <div className="relative">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-gray-400"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                            stroke-width="2"
                        >
                            <path stroke-linecap="round" stroke-linejoin="round" d="M21 21l-4.35-4.35M11 19a8 8 0 100-16 8 8 0 000 16z" />
                        </svg>
                        <input
                            type="text"
                            placeholder="Search"
                            className="pl-9 pr-3 py-1.5 text-sm border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-green-700"
                        />
                    </div>
                    <button className="text-gray-500 hover:text-gray-700 transition">⚙️</button>
                    <button className="text-gray-500 hover:text-gray-700 transition">🔔</button>
                    <button className="text-gray-500 hover:text-gray-700 transition">👤</button>
                </div>
            </header>

            <h1 className="text-[34.59px] font-normal text-[#15372c] px-6 pt-2 pb-3 leading-[46.67px] bg-[#f7f8f7]">All Candidates</h1>

        </>
    );
};

export default TopBar;
