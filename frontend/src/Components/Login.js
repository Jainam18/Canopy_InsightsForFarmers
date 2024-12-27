import React from 'react';
import { SignIn } from '@clerk/clerk-react';

function Login() {
  return (
    <div style={{ display: 'flex', justifyContent: 'center', padding: '2rem' }}>
      <SignIn />
    </div>
  );
}

export default Login;
