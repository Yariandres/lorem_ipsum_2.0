import StageOne from "../components/stages/stageOne/StageOne";
import SatgeTwo from "../components/stages/stageTwo/StageTwo";
import StageThree from "../components/stages/stageThree/StageThree";
import useFormProgress from "hooks/useFormProgress";

const MultyStepForm = () => {
  const steps = [<StageOne />, <SatgeTwo />, <StageThree />];
  const [currentStep, nextStep, prevStep] = useFormProgress();

  const isFirst = currentStep === 0;
  const isLast = currentStep === steps.length - 1;

  const handleSubmit = (e) => {
    // TODO: Dispatch action here
  };

  return (
    <div>
      <div className="container form-step-container">{steps[currentStep]}</div>
      <div className="d-flex justify-content-center">
        {/* TODO: disable button if nothing has been checked */}
        {!isFirst && (
          <button className="btn btn-warning btn-lg" onClick={() => prevStep()}>
            PREVIOUS
          </button>
        )}

        <button
          type="submit"
          className={`btn btn-${isLast ? "primary" : "success"} btn-lg`}
          onClick={(e) => {
            //   REFACTOR: outsource this logic to a function
            e.preventDefault();
            if (isLast) {
              handleSubmit();
            } else {
              nextStep();
            }
          }}
        >
          {isLast ? "SUBMIT" : "NEXT"}
        </button>
      </div>
      {isLast}
    </div>
  );
};

export default MultyStepForm;