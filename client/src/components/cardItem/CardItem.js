const CardItem = ({ item, index, handleOptionChange, children }) => {
  return (
    <div className="col-sm-12 col-md-6">
      <div className={`checkbox-card`}>
        <div className="form-check d-flex justify-content-center align-items-center">
          <label htmlFor={`flexRadioDefault${index}`} className="radio-card">
            <input
              type="radio"
              value={item}
              name="radio-card"
              id={`flexRadioDefault${index}`}
              onChange={(e) => {
                handleOptionChange(e);
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
