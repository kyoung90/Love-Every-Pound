export default function quotesReducer(
    state = { loading: false, currentQuote: null },
    action
  ) {
    switch (action.type) {
      case "LOADING":
        return { ...state, loading: true };
      case "FETCH_RANDOM_QUOTE":
        return { loading: false, currentQuote: action.payload };
      default:
        return state;
    }
  }
  