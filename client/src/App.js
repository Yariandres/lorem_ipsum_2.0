import { useState, useEffect } from "react";
import useContentful from "hooks/useContentful";

const App = () => {
  const [content, setContent] = useState([]);
  const { getContent } = useContentful();

  useEffect(() => {
    getContent().then((data) => setContent(data));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div>
      <h1>Welcome to Lorem Ipsum</h1>
    </div>
  );
};

export default App;
