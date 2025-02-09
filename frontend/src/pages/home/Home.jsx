// Home.jsx
import React from 'react';
import Sidebar from '../../components/sidebar/Sidebar';
import MessageContainer from '../../components/meassages/MessageContainer';

const Home = () => {
  return (
    <div className="flex h-screen bg-base-100">
      <div>
        <Sidebar />
      </div>
      <div className="flex-1">
        <MessageContainer />
      </div>
    </div>
  );
};

export default Home;