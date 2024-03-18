'use client'
import React from 'react';

const CRMIntegrationButton: React.FC = () => {
  const handleClick = () => {
    window.location.href = 'http://64.23.229.190:8069/web#action=531&model=res.partner&view_type=kanban&cids=1&menu_id=364';
  };

  return (
    <button 
      className="p-4 flex bg-gray-900 hover:bg-black rounded-md text-white" 
      onClick={handleClick}
    >
      CRM Integration
    </button>
  );
};

export default CRMIntegrationButton;
