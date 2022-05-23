import { useState, useEffect, useContext } from "react";
import useContentful from "hooks/useContentful";
import { StepFormContext } from "context/FormState";
import CardItem from "../../CardItem";
import "./stageOne.scss";

const StageOne = () => {
  const [content, setContent] = useState([]);
  const [platform, setPlatform] = useState("");

  const { getContent } = useContentful();
  const { setVendorPlatform } = useContext(StepFormContext);

  useEffect(() => {
    getContent().then((data) => setContent(data));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const handleOptionChange = (e) => {
    const { value } = e.target;
    setPlatform(value);
    setVendorPlatform(value);
  };

  return (
    <div className="card-image-container">
      <h1 className="display-5">Step - 1 Select Platform: {platform}</h1>
      <div className="row gy-4">
        {content.map((item, index) => (
          <CardItem
            key={item.image.sys.id}
            item={item.name}
            index={index}
            handleOptionChange={handleOptionChange}
          >
            <img
              className="vendor-img img-fluid"
              src={item.image.fields.file.url}
              alt={item.name}
            />
          </CardItem>
        ))}
      </div>
    </div>
  );
};
export default StageOne;
