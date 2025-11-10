import React from 'react';
import Button from '../common/Button';
import { ChevronDown, Plus } from 'lucide-react';

interface Props {
  totalCandidates: number;
}

const ListToolbar: React.FC<Props> = ({ totalCandidates = 0 }) => {
  return (
    <div className="flex items-center justify-between bg-[#f7f8f7] py-2">
      {/* Left side */}
      <div className="text-sm text-gray-700">
        Showing {totalCandidates} candidates application
      </div>

      {/* Right side buttons */}
      <div className="flex items-center gap-2">
        <Button
          title="Generate Report"
          className="ml-2"
          icon={<ChevronDown size={14} />}
        />
        <Button
          title="Add Candidate"
          className="ml-2"
          icon={<Plus size={14} />}
        />
        <Button title="Bulk Actions" className="ml-2" />
      </div>
    </div>
  );
};

export default ListToolbar;
