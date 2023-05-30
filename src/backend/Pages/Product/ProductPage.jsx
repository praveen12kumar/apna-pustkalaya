import React from "react";
import { useContext } from "react";
import { useParams } from "react-router-dom";
import { DataContext } from "../../Contexts/data/dataContext";
import { AiFillStar, AiOutlineShoppingCart, AiOutlineHeart } from "react-icons/ai";
import { BsTagFill, BsLightningFill } from "react-icons/bs";

export const ProductPage = () => {
  const { productId } = useParams();
  const { products } = useContext(DataContext);
  const product = products.find((prod) => prod.id === productId);

  //console.log(product);

  const {
    id, title, author, image, price, newPrice, discount,
    Pages, Language, rating, categoryName, cashOnDelivery,
    fastDelivery,
  } = product;
  return (
    <div className="product-page-container">
      <div className="product-page-main">
        <div className="main-sections">
          <div className="image-container">
            <img src={image} alt={`random${id}`} />
          </div>
          <div className="details-container">
            <div className="title">
              <h3>{title}</h3>
            </div>
            <div className="rating">
              <h4>{rating}</h4>
              <h5>
                <AiFillStar />
              </h5>
            </div>
            <div className="price-details">
              <div className="cprice">
                <h4>₹{newPrice} </h4>
              </div>
              <div className="oprice">
                <h4>₹{price}</h4>
              </div>
              <div className="discount">
                <h4>({discount}% OFF)</h4>
              </div>
            </div>
            <div className="few-left">
              
                <p>
                  <BsLightningFill />
                </p>
                <h5> Hurry, Only Few Left</h5>
              
            </div>
            
            <div className="tag-section">
                <div className="tag">
                    <h5><BsTagFill/></h5><p>FastDelivery {fastDelivery ?"Available":"Unavailabe" }</p>
                </div>
                <div className="tag">
                    <h5><BsTagFill/></h5><p>Inclusive of All Taxes</p>
                </div>
                <div className="tag">
                    <h5><BsTagFill/></h5><p>Cash On Delivery {cashOnDelivery ?"Available":"Unavailabe" }</p>
                </div>
            </div>
            <div className="page-section">
                <h5>Pages: <span>{Pages}</span></h5>
            </div>
            
            <div className="highlights-section">
                <div className="highlight">
                    
                        <p className="auth">Author: </p>
                        <p className="cate">{author}</p>
                    
                </div>
                <div className="highlight">
                    
                        <p className="auth">Category: </p>
                        <p className="cate">{categoryName}</p>
                    
                </div>
                <div className="highlight">
                    
                        <p className="auth">Language: </p>
                        <p className="cate">{Language}</p>
                    
                </div>
            </div>
          </div>
        </div>
        <div className="buttons">
            
                <button className="btn"><AiOutlineShoppingCart/> <span>Add to Cart</span> </button> 
                <button className="btn"><AiOutlineHeart/> <span>Add to Wishlist</span> </button>
           
        </div>
      </div>
    </div>
  );
};
