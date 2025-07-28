import React from 'react';

function StepTwo({ formData, onChange, onPrev, onNext }) {
  return (
    <div>
      <h2>Step 2: Special Certifications Agreement</h2>
      <p>
        Please confirm that you have read and agree to the special certifications and policies required for this application.
      </p>
      <label>
        <input
          type="checkbox"
          checked={formData.agreeCertifications}
          onChange={e => onChange('agreeCertifications', e.target.checked)}
        />
        {' '}I have read and agree to the terms above
      </label>
      <div style={{ marginTop: 24 }}>
        <button onClick={onPrev} style={{ marginRight: 16,background:'green' }} className="form-btn">Prev</button>
        <button onClick={onNext} className="form-btn">Next</button>
      </div>
    </div>
  );
}

export default StepTwo;