import React from "react";
import { useContext } from "react";
import { ProductFilter } from "./Components/ProductFilter";
import { ProductCard } from "./Components/ProductCard";
import { DataContext } from "../../Contexts/data/dataContext";
import { AuthContext } from "../../Contexts/AuthContext/AuthContext";
export const Product = () => {
  const {isLogIn} = useContext(AuthContext);
  let {
    sortBy,
    priceRange,
    rating,
    products,
    activeFilterCategory,
    search,
  } = useContext(DataContext);

  let searchFilter =  products.filter((prod)=> prod.title.toLowerCase().includes(search.toLowerCase())) 
  let priceFilter = (searchFilter ? searchFilter: products).filter((item) => item.newPrice <= priceRange)
  let CategoryFilter =
    activeFilterCategory.length === 0
      ? priceFilter
      : priceFilter.filter((item) =>
          activeFilterCategory.includes(item.categoryName)
        );
  let RatingFilter =
    rating.length === 0
      ? CategoryFilter
      : CategoryFilter.filter((item) => item.rating >= rating);
  let finalData =
    sortBy.length === 0
      ? RatingFilter
      : sortBy === "lowToHigh"
      ? RatingFilter.sort(function (a, b) {
          return a.newPrice - b.newPrice;
        })
      : RatingFilter.sort(function (a, b) {
          return b.newPrice - a.newPrice;
        });

  //const [filteredData, setFilteredData] = useState(RatingFilter);
        console.log("IsLogin Products", isLogIn);
  return (
    <div className="product-container">
      <ProductFilter />

      <div className="product-list-section">
        <div className="product-header">
          {finalData.length > 0 ? (
            <>
              <h3>Showing All Products</h3>
              <span>({finalData.length} products)</span>
            </>
          ) : (
            <h1>Sorry , Products are not available for chosen category.</h1>
          )}
        </div>

        <div className="product-section">
          {/* {console.log(filterCategory)} */}
          {finalData.map((prod, index) => (
            <ProductCard prod={prod} index={index} />
          ))}
        </div>
      </div>
    </div>
  );
};
