import React from 'react';

const ErrorPage = () => {
  return (
    <div className="bg-gray-100 min-h-screen flex items-center justify-center">
      <div className="bg-white p-8 rounded shadow-md">
        <h1 className="text-2xl font-bold mb-4">Error</h1>
        <p>An error occurred while sending the email.</p>
      </div>
    </div>
  );
};

export default ErrorPage;
