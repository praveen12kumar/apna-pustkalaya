import axios from "axios";
import {createContext, useEffect, useReducer} from "react";
import {dataReducer} from "../../Reducer/DataReducer";
export const DataContext = createContext();

export const DataProvider = ({children})=>{
    const initialState = {
        sortBy: "",
        priceRange: 1500,
        category: [],
        rating: 0,
        products: [],
        allProducts: [],
        cart: [],
        wishlist: [],
        address: [],
        search: "",
        filterCategory:["Fiction", "Non-Fiction", "self-help"],
        activeFilterCategory: [],
      };
      const [state, dispatch] = useReducer(dataReducer, initialState);
      
      const getData = async() =>{
        try{
            const {data: category} = await axios.get("/api/categories");
            dispatch({
                type:"Add_Category",
                payload:category.categories
            })

            const {data: product} = await axios.get("/api/products");
            //console.log(product);
            dispatch({
                type:"Add_Product",
                payload:product.products
            })
        }
        catch(err){
            console.log(err);
        }
      }

      
      useEffect(()=>{
        getData();
      },[]);
    
      return(
        <DataContext.Provider
        value={{
            sortBy: state.sortBy,
            rating: state.rating,
            priceRange: state.priceRange,
            category: state.category,
            products: state.products,
            allProducts: state.allProducts,
            dataDispatch: dispatch,
            cart: state.cart,
            wishlist: state.wishlist,
            search: state.search,
            address: state.address,
            filterCategory: state.filterCategory,
            activeFilterCategory:state.activeFilterCategory,
        }}
        >
            {children}
        </DataContext.Provider>
    )
}