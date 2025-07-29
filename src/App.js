import React, { useState } from 'react';
import StepOne from './components/StepOne';
import StepTwo from './components/StepTwo';
import StepThree from './components/StepThree';
import StepFour from './components/StepFour';
import StepFive from './components/StepFive';
import StatusBar from './components/StatusBar';
import './App.css'
import { supabase } from './supabaseClient';

function App() {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    projectTitle: '',
    category: '',
    startDate: '',
    isActive: false,
    budget: '',
    description: '',
    document: null,
    agreeCertifications: false,
    salaryWages: [],
  });

  const nextStep = () => setStep(prev => Math.min(prev + 1, 5));
  const prevStep = () => setStep(prev => Math.max(prev - 1, 1));

  const handleChange = (field, value) => {
    setFormData({ ...formData, [field]: value });
  };

  const handleFileUpload = async (file) => {
    if (!file) {
      console.error('No file provided');
      return;
    }
    
    // Create file path with proper file name
    const filePath = `documents/${Date.now()}_${file.name}`;
    
    const { data, error } = await supabase.storage
      .from('assets')
      .upload(filePath, file);

    if (error) {
      console.error('Upload error:', error);
      throw new Error('File upload failed: ' + error.message);
    }

    const { data: publicUrlData } = supabase
      .storage
      .from('assets')
      .getPublicUrl(filePath);

    handleChange('document', publicUrlData.publicUrl);
    return publicUrlData.publicUrl;
  };

  const handleSubmit = async () => {
    const { data, error } = await supabase
      .from('forms')
      .insert([{
        projectTitle: formData.projectTitle,
        category: formData.category,
        startDate: formData.startDate,
        isActive: formData.isActive,
        budget: formData.budget,
        description: formData.description,
        document: formData.document,
        agreeCertifications: formData.agreeCertifications,
        salaryWages: formData.salaryWages,
      }]);
      
    if (error) {
      alert('Error submitting form: ' + (error.message || JSON.stringify(error)));
    } else {
      alert('Form submitted successfully!');
      
      // Reset form data to initial state
      setFormData({
        projectTitle: '',
        category: '',
        startDate: '',
        isActive: false,
        budget: '',
        description: '',
        document: null,
        agreeCertifications: false,
        salaryWages: [],
      });
      
      // Go back to step 1
      setStep(1);
    }
  };

  return (
    <div className="form-container" >
      <StatusBar step={step} />
      <div>

        {step === 1 && (
          <StepOne formData={formData} onChange={handleChange} onNext={nextStep} />
        )}
        {step === 2 && (
          <StepTwo formData={formData} onChange={handleChange} onPrev={prevStep} onNext={nextStep} />
        )}
        {step === 3 && (
          <StepThree formData={formData} onChange={handleChange} onPrev={prevStep} onNext={nextStep} />
        )}
        {step === 4 && (
          <StepFour supabase={supabase} onFileUpload={handleFileUpload} onPrev={prevStep} onNext={nextStep} />
        )}
        {step === 5 && (
          <StepFive onPrev={prevStep} onSubmit={handleSubmit} />
        )}
      </div>

    </div>
  );
}

export default App;
