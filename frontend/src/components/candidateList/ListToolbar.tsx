import React from 'react';
import Button from '../common/Button';
import { ChevronDown, Plus } from 'lucide-react';

interface Props {
    // define your props here, for example:
    // title?: string;
}

const ListToolbar: React.FC<Props> = () => {
    return (
        <div className="flex items-center justify-between bg-[#f7f8f7] px-0 align-middle ">
            <div>
                Showing 20 candidates application
            </div>
            <div className="flex items-center justify-between bg-[#f7f8f7] px-0 pt-0 ">
                <Button title="Generate Report" className="mb-4 ml-2" icon={<ChevronDown size={14} />} />
                <Button title="Add Candidate" className="mb-4 ml-2" icon={<Plus size={14} />} />
                <Button title="Bulk Actions" className="mb-4 ml-2" />
            </div>
        </div >

    );
};

export default ListToolbar;
