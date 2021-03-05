import { FETCH_CHARACTERS, FETCH_START, FETCH_ERROR } from "./actions";

const initialState = {
  characters: [],
  isLoading: false,
  error: "",
};

export const reducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_START:
      return {
        ...state,
        isLoading: true,
      };
    case FETCH_CHARACTERS:
      return {
        ...state,
        characters: action.payload,
        isLoading: false,
      };
    case FETCH_ERROR:
      return {
        ...state,
        isLoading: false,
        error: action.payload,
      };
    default:
      return state;
  }
};
