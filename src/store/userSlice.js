import {createSlice} from '@reduxjs/toolkit'
const initialState={
  carts:[],
  quantity:0
}
const cartSlice = createSlice({
    name:"user",
    initialState,
    reducers:{
      AddCarts:(state,action)=>{
        const find = state.carts.findIndex((item)=>item.id===action.payload.id);
        if(find>=0){
          state.carts[find].quantity+=1;
        }
        else{
          const temp = {...action.payload,quantity:1}
          state.carts.push(temp);
        }
        
      },
    },
    
});
console.log(cartSlice.actions);
export const {AddCarts} = cartSlice.actions;
export const selectCart =state=>state.user.carts
export default cartSlice.reducer;


