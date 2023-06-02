export const dataReducer = (state, {type, payload})=>{
    
     //console.log("cate",state.category);
    const{cartLength, wishlistLength} = state
     
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
            return {...state, cartLength:cartLength+1, cart:[...state.cart, payload]};
        
        case "fetch_cart":
            return {...state, cart:[...payload], cartLength: payload.length }

        case "logout":
            return {...state, cart:[], cartLength:0, wishlistLength:0, wishlist:[]}

        case "show_btn":
             //console.log(category);
            return {...state, activeFilterCategory:[]};

        case "Filter-Categories":
            return{
                ...state, activeFilterCategory: [`${payload}`]
            }
        
        case "add_filter_category":
            return {...state, activeFilterCategory:[...state.activeFilterCategory, payload]}

        case "delete_filter_category":
            return{...state, activeFilterCategory: [...state.activeFilterCategory.filter((cate)=> cate !== payload)]
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
            priceRange: 1500,
            rating: 0,
            activeFilterCategory:[],    
        }
        case "updateCart":
            return{
                ...state, cart:[...payload]
            }
      

        case "increaseQty":
            return {
                ...state,
                cart:[...payload]
              }
        case "decreaseQty":
            return{...state, cart:[...payload]}

        default:
            return state;
    }
    
}