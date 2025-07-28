import React, { useRef, useState } from 'react';

function StepFour({ onFileUpload, supabase, onPrev, onNext }) {
  const fileInputRef = useRef();
  const [uploadedFile, setUploadedFile] = useState(null);
  const [uploadMsg, setUploadMsg] = useState('');

  const handleButtonClick = () => {
    fileInputRef.current.click();
  };

  const handleFileChange = async (e) => {
    if (e.target.files && e.target.files[0]) {
      const file = e.target.files[0];
      setUploadMsg('Uploading...');
      // Upload to Supabase Storage
      const filePath = `documents/${Date.now()}_${file.name}`;
      const { data, error } = await supabase.storage
        .from('assets')
        .upload(filePath, file);

      if (error) {
        setUploadMsg('File upload failed: ' + error.message);
        return;
      }

      // Get public URL
      const { data: publicUrlData } = supabase
        .storage
        .from('assets')
        .getPublicUrl(filePath);

      onFileUpload(publicUrlData.publicUrl);
      setUploadedFile(file.name);
      setUploadMsg('File uploaded successfully!');
    }
  };

  return (
    <div>
      <h2>Step 4: Review</h2>
      <p>You have gone through all steps. Click submit to finish.</p>
      <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
        <button
          type="button"
          onClick={handleButtonClick}
          style={{
            border: '1px solid #b3b3b3',
            background: '#f8f8f8',
            padding: '6px 16px',
            borderRadius: 4,
            cursor: 'pointer',
            color: '#007bff',
            fontWeight: 500,
            display: 'flex',
            alignItems: 'center'
          }}
        >
          <span style={{ marginRight: 6 }}>⬆️</span> Upload Files
        </button>
        <span>Or drop files</span>
        <input
          type="file"
          ref={fileInputRef}
          style={{ display: 'none' }}
          onChange={handleFileChange}
        />
      </div>
      {uploadedFile && (
        <div style={{ marginTop: 12, color: 'green', fontWeight: 500 }}>
          {uploadMsg} {uploadedFile && <span>({uploadedFile})</span>}
        </div>
      )}
      {!uploadedFile && uploadMsg && (
        <div style={{ marginTop: 12, color: uploadMsg.includes('failed') ? 'red' : 'black' }}>
          {uploadMsg}
        </div>
      )}
      <div style={{ marginTop: 24 }}>
        <button onClick={onPrev} style={{ marginRight: 16,background:'green' }} className="form-btn">Prev</button>
        <button onClick={onNext} className="form-btn">Next</button>
      </div>
    </div>
  );
}

export default StepFour;