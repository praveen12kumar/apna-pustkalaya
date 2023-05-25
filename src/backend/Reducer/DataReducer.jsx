export const dataReducer = (state, {type, payload})=>{
    
     //console.log("cate",state.category);
     
    switch(type){
        case "Add_Category":
            //return  {...state, category:{...state.category,  payload}};
            return  {
                ...state, category:[...state.category,  ...payload]
            };      
        case "Add_Product":
            return{
                ...state, products:[...state.products, ...payload]
            };
        case "Filter-Categories":
            return{
                ...state, filterCategory: `${payload}`
            }
        case "filterPrice":
            return{
                ...state,  priceRange: payload
            }
        case "filterRating":
            return{...state, rating: payload}
        
        case "filterSortBy":
            return{...state, sortBy: payload}

        case "clearFilters":
            return{...state, 
            sortBy: "",
            priceRange: 0,
            rating: 0,
            
    }
            
        default:
            return state;
    }
    
}