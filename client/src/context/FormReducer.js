/* eslint-disable import/no-anonymous-default-export */
export default (state, action) => {
  switch (action.type) {
    case "SET_PLATFORM":
      return {
        ...state,
        platform: action.payload,
      };
    case "SET_SERVICE":
      return {
        ...state,
        service: action.payload,
      };
    case "SET_CLIENT_ID":
      return {
        ...state,
        clientID: action.payload,
      };
    case "SET_CLIENT_SECRET":
      return {
        ...state,
        clientSecret: action.payload,
      };
    case "SET_SUBMIT_IN_PROGRESS":
      return {
        ...state,
        isSubmitInProgress: true,
      };
    case "SET_SUBMIT_SUCCESS":
      return {
        ...state,
        isSubmitSuccess: false,
        isSubmissionRecieved: true,
      };
    default:
      return state;
  }
};
