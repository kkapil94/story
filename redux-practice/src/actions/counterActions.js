export const incCounterAction =()=> async (dispatch) => {
  // const data = await fetch("https://jsonplaceholder.typicode.com/todos/")
  //                       .then(res=>res.json())
  //                       .then(res=>{dispatch({ type: "INC",payload:res })});
  dispatch({ type: "INC" });
};

export const decCounterAction = () => {
  return { type: "DEC" };
};
