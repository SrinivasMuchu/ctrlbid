import React from 'react';

const defaultRows = [
  { lineItem: 'Accountant', qty: 0, rate: 0, units: 0, uom: 'Hours' },
  { lineItem: 'Administrator', qty: 0, rate: 0, units: 0, uom: 'Hours' },
  { lineItem: 'Analyst', qty: 0, rate: 0, units: 0, uom: 'Hours' },
  { lineItem: 'Assistant', qty: 0, rate: 0, units: 0, uom: 'Hours' },
  { lineItem: 'Attorney', qty: 0, rate: 0, units: 0, uom: 'Hours' },
  { lineItem: 'Chief Executive Officer', qty: 0, rate: 0, units: 0, uom: 'Hours' },
  { lineItem: 'Clerk', qty: 0, rate: 0, units: 0, uom: 'Hours' },
];

function StepThree({ formData, onChange, onPrev, onNext }) {
  // Use defaultRows if salaryWages is empty or not set
  const rows =
    Array.isArray(formData.salaryWages) && formData.salaryWages.length > 0
      ? formData.salaryWages
      : defaultRows;

  const handleRowChange = (idx, field, value) => {
    const updated = rows.map((row, i) =>
      i === idx ? { ...row, [field]: field === 'lineItem' || field === 'uom' ? value : Number(value) } : row
    );
    onChange('salaryWages', updated);
  };

  return (
    <div>
      <h2>Step 3: Salary & Wages</h2>
      <table className="salary-table">
        <thead>
          <tr>
            <th>S.no</th>
            <th>Line Item</th>
            <th>Qty</th>
            <th>Rate</th>
            <th>Units</th>
            <th>UOM</th>
            <th>Total</th>
          </tr>
        </thead>
        <tbody>
          {rows.map((row, idx) => (
            <tr key={idx}>
              <td>{idx + 1}</td>
              <td>
                <input
                  type="text"
                  value={row.lineItem}
                  onChange={e => handleRowChange(idx, 'lineItem', e.target.value)}
                  style={{ width: 120 }}
                />
              </td>
              <td>
                <input
                  type="number"
                  value={row.qty}
                  min={0}
                  onChange={e => handleRowChange(idx, 'qty', e.target.value)}
                  style={{ width: 60 }}
                />
              </td>
              <td>
                <input
                  type="number"
                  value={row.rate}
                  min={0}
                  step="0.01"
                  onChange={e => handleRowChange(idx, 'rate', e.target.value)}
                  style={{ width: 80 }}
                />
              </td>
              <td>
                <input
                  type="number"
                  value={row.units}
                  min={0}
                  onChange={e => handleRowChange(idx, 'units', e.target.value)}
                  style={{ width: 60 }}
                />
              </td>
              <td>
                <input
                  type="text"
                  value={row.uom}
                  onChange={e => handleRowChange(idx, 'uom', e.target.value)}
                  style={{ width: 80 }}
                />
              </td>
              <td>
                <input
                  type="text"
                  value={`$${(row.qty * row.rate * row.units).toFixed(2)}`}
                  readOnly
                  style={{ width: 100, background: '#f3f3f3', border: 'none' }}
                  tabIndex={-1}
                />
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <div style={{ marginTop: 24 }}>
        <button onClick={onPrev} style={{ marginRight: 16,background:'green' }} className="form-btn">Prev</button>
        <button className="form-btn" onClick={onNext}>Next</button>
      </div>
    </div>
  );
}

export default StepThree;