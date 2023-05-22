export const dataReducer = (state, {type, payload})=>{
    
     //console.log("cate",state.category);
    switch(type){
        case "Add_Category":
            //return  {...state, category:{...state.category,  payload}};
            return  {...state, category:[...state.category,  payload]};
            
        case "Add_Product":
            return{
                ...state, products:[...state.products, payload]
            };
            
        default:
            return state;
    }
}