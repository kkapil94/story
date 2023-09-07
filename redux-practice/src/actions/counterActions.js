export const incCounterAction =()=> async (dispatch) => {
  const data = await fetch("https://jsonplaceholder.typicode.com/todos/")
                        .then(res=>res.json())
                        .then(res=>{dispatch({ type: "INC",payload:res })});
  
};

export const decCounterAction = () => {
  return { type: "DEC" };
};
