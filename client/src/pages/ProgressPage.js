const StageFour = () => {
  return (
    <div className="stage-four d-flex justify-content-between align-items-center">
      <h1>Your request is bieng porcessed...</h1>

      <div
        className="spinner-border ms-auto text-primary"
        role="status"
        aria-hidden="true"
      ></div>
    </div>
  );
};
export default StageFour;
