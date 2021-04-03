import Counter from './Counter';
import { createStore } from "redux";
import { Provider } from "react-redux";

const initialState = {
  count : 42
}

function reducer( state = initialState, action) {
   switch(action.type) {
     case "INCREMENT":
       return {
         count: state.count + 1 
       };
       case "DECREMENT":
         return {
           count : state.count - 1
         }
        default : 
        return state;
   }
}

const store = createStore(reducer);
store.dispatch({ type: "INCREMENT" })
 function App() {
  return (
    <Provider store={store}>
     <Counter />
    </Provider>
  );
}

export default App;
