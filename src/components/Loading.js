import React from 'react';
// This component displays only a spinner with the message "Loading".
const Loading = () => {
  return (
    <div className="col-12">
      <span className="fa fa-spinner fa-pulse fa-3x fa-fw text-primary"></span>
      <p>Loading . . .</p>
    </div>
  );
};

export default Loading;
