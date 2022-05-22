import { useState, useContext } from "react";
// import useContentful from "hooks/useContentful";
import { StepFormContext } from "context/FormState";
import CardItem from "../../cardItem/CardItem";

const StageTwo = () => {
  const [service, setService] = useState(null);

  const { setServiceDelivery } = useContext(StepFormContext);

  const data = [
    "Text-to-image Generation",
    "Content Translation",
    "Option 3",
    "Option 4",
  ];

  const handleOptionChange = (e) => {
    const { value } = e.target;
    setService(value);
    setServiceDelivery(value);
  };

  return (
    <div className="row mx-auto">
      <h1 className="display-5">Step - 2 Select Service: {service} </h1>
      {data.map((item, index) => (
        <CardItem
          key={index}
          item={item}
          index={index}
          handleOptionChange={handleOptionChange}
        >
          <h2 className="card-text text-center">{item}</h2>
        </CardItem>
      ))}
    </div>
  );
};
export default StageTwo;
