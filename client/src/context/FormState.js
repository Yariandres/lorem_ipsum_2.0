import { createContext, useReducer } from "react";
import FormReducer from "./FormReducer";

export const StepFormContext = createContext();

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

  const setVendorPlatform = (platform) => {
    dispatch({ type: "SET_PLATFORM", payload: platform });
  };

  return (
    <StepFormContext.Provider value={{ state, setVendorPlatform }}>
      {children}
    </StepFormContext.Provider>
  );
};
