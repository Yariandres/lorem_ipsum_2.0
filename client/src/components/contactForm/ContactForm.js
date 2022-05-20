import StageOne from "../stages/stageOne/StageOne";
import SatgeTwo from "../stages/stageTwo/StageTwo";
import StageThree from "../stages/stageThree/StageThree";
import StageFour from "../stages/stageFour/StageFour";
import useFormProgress from "hooks/useFormProgress";

const ContactForm = () => {
  const steps = [<StageOne />, <SatgeTwo />, <StageThree />, <StageFour />];
  const [currentStep, nextStep, prevStep] = useFormProgress();

  const isFirst = currentStep === 0;
  const isLast = currentStep === steps.length - 1;

  const handleSubmit = (e) => {
    // TODO: Dispatch action here
  };

  return (
    <div className="container">
      {steps[currentStep]}

      <div>
        {!isFirst && (
          <button className="btn btn-warning" onClick={() => prevStep()}>
            PREVIOUS
          </button>
        )}
        <button
          type="submit"
          className={`btn btn-${isLast ? "primary" : "success"}`}
          onClick={(e) => {
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
    </div>
  );
};

export default ContactForm;
