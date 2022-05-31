import { Route, Switch } from "react-router-dom";
import MultyStepForm from "./pages/MultyStepForm";
import { StepFormProvider } from "context/FormState";
import "./sass/main.scss";

const App = () => {
  return (
    <main>
      <StepFormProvider>
        <Switch>
          <Route path="/" exact>
            <MultyStepForm />
          </Route>
        </Switch>
      </StepFormProvider>
    </main>
  );
};

export default App;
