import React from 'react';
import { useUser } from '@clerk/clerk-react';

function Dashboard() {
  const { user } = useUser();

  return (
    <div style={{ padding: '2rem' }}>
      <h1>Welcome to your Dashboard, {user.firstName}!</h1>
      <p>This is a protected page only accessible to authenticated users.</p>
    </div>
  );
}

export default Dashboard;
