import { useState, useContext } from "react";
// import useContentful from "hooks/useContentful";
import { StepFormContext } from "context/FormState";

const StageTwo = () => {
  const [service, setService] = useState(null);

  const { setServiceDelivery } = useContext(StepFormContext);

  const data = [
    "Text-to-image Generation",
    "Content Translation",
    "Option 3",
    "Option 4",
  ];

  const handleChange = (e) => {
    const { value } = e.target;
    setService(value);
    setServiceDelivery(value);
  };

  return (
    <div className="row ">
      <h1 className="display-5">Step - 2 Select Service: {service} </h1>
      {data.map((item, index) => (
        <div key={index} className="col-sm-12 col-md-6">
          <div className={`checkbox-card`}>
            <div className="form-check d-flex justify-content-center align-items-center">
              <label
                htmlFor={`flexRadioDefault1${index}`}
                className="radio-card"
              >
                <input
                  type="radio"
                  value={item}
                  name="radio-card"
                  id={`flexRadioDefault1${index}`}
                  onChange={(e) => handleChange(e)}
                />
                <div className="card-content-wrapper">
                  <span className="check-icon"></span>
                  <div className="card-content">
                    <h1 className="card-text">{item}</h1>
                  </div>
                </div>
              </label>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};
export default StageTwo;
