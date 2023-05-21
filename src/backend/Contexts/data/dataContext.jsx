import axios from "axios";
import {createContext, useEffect, useReducer} from "react";
import {dataReducer} from "../../Reducer/DataReducer";
export const DataContext = createContext();

export const DataProvider = ({children})=>{
    const initialState = {
        sortBy: "",
        priceRange: "",
        category: [],
        sortByRating: "",
        products: [],
        cart: [],
        wishlist: [],
        address: [],
        search: "",
      };
      const [state, dispatch] = useReducer(dataReducer, initialState);
      
      const getData = async() =>{
        try{
            const {data: category} = await axios.get("/api/categories");
            dispatch({
                type:"Add_Category",
                payload:category.categories,
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
            state,
        }}
        >
            {children}
        </DataContext.Provider>
    )
}