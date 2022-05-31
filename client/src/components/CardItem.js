import { useContext } from "react";
import { StepFormContext } from "context/FormState";

const CardItem = ({ title, index, children }) => {
  const { setVendorPlatform } = useContext(StepFormContext);

  return (
    <div className="col-sm-12 col-md-3">
      <div className="checkbox-card">
        <div className="form-check d-flex justify-content-center align-items-center">
          <label htmlFor={`flexRadioDefault${index}`} className="radio-card">
            <input
              type="radio"
              value={title}
              name="radio-card"
              id={`flexRadioDefault${index}`}
              onChange={(e) => {
                setVendorPlatform(e.target.value);
              }}
            />
            <div className="card-content-wrapper">
              <span className="check-icon"></span>
              <div className="card-content d-flex justify-content-center">
                {children}
              </div>
            </div>
          </label>
        </div>
      </div>
    </div>
  );
};

export default CardItem;
