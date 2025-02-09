// Sidebar.jsx
import React from 'react';
import SearchInput from './SearchInput';
import Conversations from './Conversations';
import LogoutButton from './LogoutButton';

const Sidebar = () => {
  return (
    <div className="flex flex-col h-full border-r border-base-300 bg-base-200">
      <div className="p-4">
        <SearchInput />
      </div>
      <div className="flex-1 overflow-y-auto">
        <Conversations />
      </div>
      <div className="p-4 border-t border-base-300">
        <LogoutButton />
      </div>
    </div>
  );
};

export default Sidebar;