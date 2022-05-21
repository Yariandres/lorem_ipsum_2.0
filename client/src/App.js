import MultyStepForm from "components/multyStepForm/MultyStepForm";
import { StepFormProvider } from "context/FormState";
import "App.scss";

const App = () => {
  return (
    <StepFormProvider>
      <MultyStepForm />
    </StepFormProvider>
  );
};

export default App;
