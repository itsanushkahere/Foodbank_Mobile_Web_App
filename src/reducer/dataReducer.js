const initialState = {
  mealData: null,
  breakfastData: null,
  details: null,
  itemsAdded: [],
};

const dataReducer = (state = initialState, action) => {
  switch (action.type) {
    case "BREAKFAST_DATA":
      return {
        ...state,
        breakfastData: action.payload,
      };
    case "MEAL_DATA":
      return {
        ...state,
        mealData: action.payload,
      };
    case "DETAILS_PAGE":
      return {
        ...state,
        details: action.payload,
      };
    case "ITEMS_ADDED":
      return {
        ...state,
        itemsAdded: action.payload,
      };
    default:
      return state;
  }
};

export default dataReducer;
