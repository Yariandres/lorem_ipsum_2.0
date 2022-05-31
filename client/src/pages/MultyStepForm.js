import { useState, useContext, useEffect } from "react";
import useContentful from "hooks/useContentful";

import StageOne from "../components/stages/stageOne/StageOne";
import SatgeTwo from "../components/stages/stageTwo/StageTwo";
import StageThree from "../components/stages/stageThree/StageThree";
import Dashboard from "./Dashboard";
import ImagesPreview from "../components/ImagesPreview";
import { StepFormContext } from "../context/FormState";

const MultyStepForm = () => {
  const [content, setContent] = useState([]);
  const { state, setNextStep, setPrevStep } = useContext(StepFormContext);
  const { step } = state;

  const { getContent } = useContentful();

  useEffect(() => {
    getContent().then((data) => setContent(data));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const filteredPlatform = content.filter((item) => {
    return item.name !== undefined;
  });

  const filteredCategories = content.filter((item) => {
    return item.name === undefined;
  });

  const nextStep = (stp) => {
    setNextStep(stp);
  };

  const prevStep = (stp) => {
    setPrevStep(stp);
  };

  switch (step) {
    case "platform":
      return (
        <StageOne nextStep={nextStep} filteredPlatform={filteredPlatform} />
      );

    case "credentials":
      return <SatgeTwo nextStep={nextStep} />;

    case "categories":
      return (
        <StageThree
          nextStep={nextStep}
          filteredCategories={filteredCategories}
        />
      );

    case "dashboard":
      return <Dashboard prevStep={prevStep} />;

    case "images":
      return <ImagesPreview prevStep={prevStep} />;
    default:
  }
};

export default MultyStepForm;
