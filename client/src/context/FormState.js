import { createContext, useReducer } from "react";
import FormReducer from "./FormReducer";

const StepFormContext = createContext();

const formInitialState = {
  platform: "",
  service: "",
  clientID: "",
  clientSecret: "",
  isSubmitInProgress: false,
  isSubmitSuccess: false,
};

export const StepFormProvider = function ({ children }) {
  const [state, dispatch] = useReducer(FormReducer, formInitialState);

  return (
    <StepFormContext.Provider value={{ state, dispatch }}>
      {children}
    </StepFormContext.Provider>
  );
};
