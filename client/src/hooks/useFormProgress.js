import { useState } from "react";

const useFormProgress = () => {
  const [currentStep, setCurrentStep] = useState(0);

  const nextStep = () => {
    setCurrentStep(currentStep + 1);
  };

  const prevStep = () => {
    setCurrentStep(currentStep - 1);
  };

  return [currentStep, nextStep, prevStep];
};

export default useFormProgress;
