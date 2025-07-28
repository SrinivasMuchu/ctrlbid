import React from 'react';

const steps = [
  'Basic Info',
  'Description',
  'Terms & Conditions',
  'Upload',
  'Review & Submit'
];

function StatusBar({ step }) {
  return (
    <div className="vertical-status-bar">
      {steps.map((label, idx) => (
        <div key={label} className="status-step">
          <div
            className={
              step > idx + 1
                ? 'step-circle completed'
                : step === idx + 1
                ? 'step-circle active'
                : 'step-circle'
            }
          >
            {step > idx + 1 ? '✓' : idx + 1}
          </div>
          <div className="step-label">{label}</div>
          {idx < steps.length - 1 && (
            <div className="step-line">
              <div
                className="step-line-progress"
                style={{
                  height: step > idx + 1 ? '100%' : step === idx + 1 ? '50%' : '0%',
                  transition: 'height 0.6s cubic-bezier(.4,0,.2,1)'
                }}
              />
            </div>
          )}
        </div>
      ))}
    </div>
  );
}

export default StatusBar;