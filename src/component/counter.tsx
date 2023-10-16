import { useDispatch, useSelector } from "react-redux";
import {increment,decrement,reset}from './counteSlice';
import {RootState} from '../store';
const Counter=()=>{

    //use selctor hoke to allow you to use your store any timeعشان اقدر استخدم الستور
    const Count=useSelector((state:RootState)=>state.counterR.count)
   const dispatch=useDispatch()
    const handelIncrementClick=()=>{
        //we want to dispatch action 
        dispatch(increment())
    };
    const handelResetClick=()=>{
        dispatch(reset())
    };
    const handelDecrementClick=()=>{
        dispatch(decrement())
    };
    return<div><h1>Counter:{Count}</h1>
   
<br />
<button onClick={handelIncrementClick}>+</button>
<button onClick={handelResetClick}>0</button>
<button onClick={handelDecrementClick}>-</button>

    </div>
    
}
export default Counter;
//Todo
//1. Create the counter app
//2. create a GitHub repo
//3. Push it to GitHub
//4. Deploy on Netlify


