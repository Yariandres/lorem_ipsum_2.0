// import { useState, useEffect } from "react";
// import useContentful from "hooks/useContentful";
import ContactForm from "components/contactForm/ContactForm";

const App = () => {
  // const [content, setContent] = useState([]);
  // const { getContent } = useContentful();

  // useEffect(() => {
  //   getContent().then((data) => setContent(data));
  //   // eslint-disable-next-line react-hooks/exhaustive-deps
  // }, []);

  return (
    <div>
      <ContactForm />
    </div>
  );
};

export default App;
