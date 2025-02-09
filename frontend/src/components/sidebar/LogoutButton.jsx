// LogoutButton.jsx
import React from 'react';
import { BiLogOut } from 'react-icons/bi';
import useLogout from '../../hooks/useLogout';

const LogoutButton = () => {
  const { loading, logout } = useLogout();

  return (
    <button onClick={logout} className="btn btn-ghost btn-circle" disabled={loading}>
      {loading ? (
        <span className="loading loading-spinner"></span>
      ) : (
        <BiLogOut className="w-6 h-6" />
      )}
    </button>
  );
};

export default LogoutButton;