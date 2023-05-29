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
        case "Add_to_cart":
            return {...state, cart:[...state.cart, payload]};
        
        case "show_btn":
            // console.log(payload);
            return {...state, filterCategory:[...state.filterCategory, payload]}

        case "Filter-Categories":
            return{
                ...state, filterCategory: [...state.filterCategory, `${payload}`]
            }
        
        case "add_filter_category":
            return {...state, filterCategory:[...state.filterCategory, payload]}

        // case "delete_filter_category":
        //     return{...state, filterCategory: [...state.filterCategory.filter((cate)=> cate !== payload)
        //     }

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