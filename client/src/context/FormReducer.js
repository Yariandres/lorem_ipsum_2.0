/* eslint-disable import/no-anonymous-default-export */
export default (state, action) => {
  switch (action.type) {
    case "SET_NEXT_STEP":
      return {
        ...state,
        step: action.payload,
      };

    case "SET_PREV_STEP":
      return {
        ...state,
        step: action.payload,
      };

    case "SET_PLATFORM":
      return {
        ...state,
        platform: action.payload,
      };

    case "SET_CLIENT_ID":
      return {
        ...state,
        clientID: action.payload,
      };

    case "SET_PASSWORD":
      return {
        ...state,
        password: action.payload,
      };

    case "SET_PROJECT_NAME":
      return {
        ...state,
        service: action.payload,
      };

    case "SET_CATEGORY":
      return {
        ...state,
        category: action.payload,
      };
    
      case "SET_DATA":
        return {
          ...state,
          data: action.payload,
        }

    default:
      return state;
  }
};
