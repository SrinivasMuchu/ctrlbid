import React from 'react';

function StepOne({ formData, onChange, onNext }) {
  return (
    <div>
      <h2 style={{ marginBottom: 24 }}>Step 1: Unique Info</h2>
      <div className="form-row">
        <div className="form-col">
          <label className="form-label">
            Project Title:
            <input
              className="form-input"
              type="text"
              value={formData.projectTitle}
              onChange={e => onChange('projectTitle', e.target.value)}
            />
          </label>
          <label className="form-label">
            Category:
            <select
              className="form-select"
              value={formData.category}
              onChange={e => onChange('category', e.target.value)}
            >
              <option value="">Select</option>
              <option value="health">Health</option>
              <option value="education">Education</option>
              <option value="infrastructure">Infrastructure</option>
            </select>
          </label>
          <label className="form-label">
            Start Date:
            <input
              className="form-input"
              type="date"
              value={formData.startDate}
              onChange={e => onChange('startDate', e.target.value)}
            />
          </label>
          <label className="form-label" style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
            Is Active?
            <input
              type="checkbox"
              checked={formData.isActive}
              onChange={e => onChange('isActive', e.target.checked)}
              style={{ width: 18, height: 18 }}
            />
          </label>
        </div>
        <div className="form-col">
          <label className="form-label">
            Budget ($):
            <input
              className="form-input"
              type="number"
              value={formData.budget}
              onChange={e => onChange('budget', e.target.value)}
              min="0"
              step="1000"
            />
          </label>
          <label className="form-label">
            Description:
            <textarea
              className="form-textarea"
              value={formData.description}
              onChange={e => onChange('description', e.target.value)}
              rows={4}
            />
          </label>
        </div>
      </div>
      <div style={{ marginTop: 32 }}>
        <button className="form-btn" onClick={onNext}>Next</button>
      </div>
    </div>
  );
}

export default StepOne;