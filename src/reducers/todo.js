export const INCREMENT = "increment";
export const DECREMENT = "decrement";

export function reducer(state, action) {
  switch (action.type) {
    case INCREMENT:
      const abc = [1, 23, 4];
      const yea_H = abc.map((i) => i * 2);
      return state + yea_H[0];
    case DECREMENT:
      return state - 1;
    default:
      return state;
  }
}
