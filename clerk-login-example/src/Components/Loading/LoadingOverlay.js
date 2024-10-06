import React from 'react';
import { CircleSpinnerOverlay } from 'react-spinner-overlay';

const LoadingOverlay = ({ isLoading }) => {
  return (
    <CircleSpinnerOverlay 
      loading={isLoading}
      overlayColor="rgba(0,0,0,0.2)"
    />
  );
};

export default LoadingOverlay;