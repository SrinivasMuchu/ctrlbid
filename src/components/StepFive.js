import React from 'react';

function StepFive({ onPrev, onSubmit }) {
  return (
    <div style={{ textAlign: 'center', marginTop: 40 }}>
      <h2>Final Review</h2>
      <p>Have you checked all the details? If yes, please submit your application.</p>
      <div style={{ marginTop: 24 }}>
        <button onClick={onPrev} style={{ marginRight: 16,background:'green' }} className="form-btn">Prev</button>
        <button onClick={onSubmit}  className="form-btn">Submit</button>
      </div>
    </div>
  );
}

export default StepFive;