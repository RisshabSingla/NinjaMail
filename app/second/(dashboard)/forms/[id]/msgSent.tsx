// EmailSentMessage.tsx

import React from 'react';

const EmailSentMessage: React.FC = () => {
  return (
    <div className="bg-green-100 border border-green-400 text-green-700 px-4 py-3 rounded relative" role="alert">
      <strong className="font-bold">Success!</strong>
      <span className="block sm:inline"> Email sent successfully.</span>
      <span className="absolute top-0 bottom-0 right-0 px-4 py-3">
        <svg className="fill-current h-6 w-6 text-green-500" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
          <path
            fillRule="evenodd"
            d="M9.293 14.707a1 1 0 0 1-1.414-1.414L12.586 10 7.88 5.293a1 1 0 1 1 1.414-1.414L14.414 9l4.293-4.293a1 1 0 1 1 1.414 1.414L15.414 10l4.293 4.293a1 1 0 0 1-1.414 1.414L14 11.414l-4.293 4.293a1 1 0 0 1-1.414 0z"
          />
        </svg>
      </span>
    </div>
  );
};

export default EmailSentMessage;
