import { configureStore } from "@reduxjs/toolkit";
import counterSlice from "./component/counteSlice";
 //for creat store use 
 export type RootState={
    counterR:ReturnType<typeof counterSlice>
 }
export const store=configureStore({

//creat object for reducer
reducer:{
    
counterR:counterSlice,


}


})