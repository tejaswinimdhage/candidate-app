import React from "react";
import { ChevronDown, Search, Settings, HelpCircle, User } from "lucide-react";

const TopBar: React.FC = () => {
    return (
        <>
            <header className="flex items-center justify-between px-6 py-1 border-b border-gray-200 bg-white">
                {/* Left Section */}
                <div className="flex items-center gap-8">
                    {/* Logo + Dropdown */}
                    <div className="text-sm font-medium text-gray-800 flex items-center gap-1">
                        <span className="font-semibold text-green-700">greenhouse</span>
                        <span className="text-gray-500 flex items-center gap-1">
                            Recruiting <ChevronDown className="w-4 h-4" />
                        </span>
                    </div>

                    {/* Navigation */}
                    <nav className="flex items-center gap-6 text-sm text-gray-600">
                        <a href="#" className="hover:text-gray-900 transition">Jobs</a>
                        <a
                            href="#"
                            className="text-green-700 font-medium border-b-2 border-green-700"
                        >
                            Candidates
                        </a>
                        <a href="#" className="hover:text-gray-900 transition">CRM</a>
                        <a href="#" className="hover:text-gray-900 transition">Reports</a>
                        <a href="#" className="hover:text-gray-900 transition">Integrations</a>
                    </nav>
                </div>

                {/* Right Section */}
                <div className="flex items-center gap-4">
                    {/* Search Input */}
                    <div className="relative flex items-center w-45">
                        {/* Search Icon */}
                        <Search
                            className="absolute left-2 top-1/2 -translate-y-1/2 text-gray-500"
                            size={18}
                        />

                        {/* Input Field */}
                        <input
                            type="text"
                            placeholder="Search"
                            className="w-full h-8 border border-gray-300 rounded-[4px] pl-[30px] pr-[48px] py-[7px] text-[14px] text-gray-700 placeholder:text-gray-500 focus:outline-none focus:ring-1 focus:ring-green-700"
                        />

                        {/* Shortcut Hint */}
                        <div className="absolute right-2 top-1/2 -translate-y-1/2 flex items-center gap-0.5 border border-gray-200 rounded-[4px] px-[6px] py-[2px] bg-gray-50 text-[12px] text-[#15372c] font-medium">
                            <span>⌘</span>
                            <span>+</span>
                            <span>K</span>
                        </div>
                    </div>


                    {/* Action Icons */}
                    <button className="text-gray-500 hover:text-gray-700 transition">
                        <Settings className="w-5 h-5" />
                    </button>
                    <button className="text-gray-500 hover:text-gray-700 transition">
                        <HelpCircle className="w-5 h-5" />
                    </button>
                    <button className="text-gray-500 hover:text-gray-700 transition">
                        <User className="w-5 h-5" />
                    </button>
                </div>
            </header>

            {/* Page Title */}
            <h1 className="text-[34.59px] font-normal text-[#15372c] px-6 pt-2 pb-3 leading-[46.67px] bg-[#f7f8f7]">
                All Candidates
            </h1>
        </>
    );
};

export default TopBar;
