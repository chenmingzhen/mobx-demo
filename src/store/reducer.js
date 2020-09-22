export const initialState = { result: true };
export function reducer(state=initialState, action) {
  switch (action.type) {
    case "async":
      return { result: true };
    case "unAsync":
      return { result: false };
    default:
      return state;
  }
}