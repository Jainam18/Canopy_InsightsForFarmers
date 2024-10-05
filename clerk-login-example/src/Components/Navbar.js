import React from 'react';
import { Link } from 'react-router-dom';
import { SignedIn, SignedOut, UserButton } from '@clerk/clerk-react';

function Navbar() {
  return (
    <nav style={{ padding: '1rem', backgroundColor: '#f0f0f0' }}>
      <ul style={{ listStyle: 'none', display: 'flex', gap: '1rem' }}>
        <li><Link to="/">Home</Link></li>
        <SignedIn>
          <li><Link to="/dashboard">Dashboard</Link></li>
          <li><UserButton /></li>
        </SignedIn>
        <SignedOut>
          <li><Link to="/login">Login</Link></li>
        </SignedOut>
      </ul>
    </nav>
  );
}

export default Navbar;
