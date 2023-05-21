export const dataReducer = (state, action)=>{
    
    console.log(action.payload);
    switch(action.type){
        case "Add_data":
            return{
                ...state, category:action.payload,
            };
        default:
            return state;
    }
}