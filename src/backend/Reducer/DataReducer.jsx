export const dataReducer = (state, {type, payload})=>{
    
     //console.log("cate",state.category);
    switch(type){
        case "Add_Category":
            return  {...state, category:{...state.category,  payload}};
                
            
        default:
            return state;
    }
}