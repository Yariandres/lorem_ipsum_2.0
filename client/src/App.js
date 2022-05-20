// import { useState, useEffect } from "react";
// import useContentful from "hooks/useContentful";
import MultyStepForm from "components/multyStepForm/MultyStepForm";
import { StepFormProvider } from "context/FormState";

const App = () => {
  // const [content, setContent] = useState([]);
  // const { getContent } = useContentful();

  // useEffect(() => {
  //   getContent().then((data) => setContent(data));
  //   // eslint-disable-next-line react-hooks/exhaustive-deps
  // }, []);

  return (
    <StepFormProvider>
      <MultyStepForm />
    </StepFormProvider>
  );
};

export default App;
