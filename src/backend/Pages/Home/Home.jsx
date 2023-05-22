import React from "react";
import { useContext } from "react";
import { BsFacebook } from "react-icons/bs";
import {
  AiOutlineInstagram,
  AiFillGithub,
  AiFillLinkedin,
} from "react-icons/ai";
import { Link } from "react-router-dom";
import { DataContext} from "../../Contexts/data/dataContext";
export const Home = () => {
  // const [category, setCategory] = useState([]);

  // const getData = async () => {
  //   try {
  //     fetch("/api/categories")
  //     .then(response => response.json())
  //     .then(data=> setCategory(data.categories));
  //   }
  //   catch (err) {
  //     console.error(err);
  //   }
  // };

  // useEffect(() => {
  //   getData();
  // }, []);
  // console.log(category);
  // .categories

  const {category} = useContext(DataContext);
  //console.log(category[0]);

  return (
    <>
      <div className="home">
        <div className="bg-img-container">
          <div className="image"></div>
          <div className="home-text-container">
            <div className="main-text">
              <h3>are you searching a book..?</h3>
              <h1>apna pustakalay</h1>
              <span className="home-slogan">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro
                repellendus odit praesentium harum iste fugiat nostrum nesciunt
                quisquam. Odit quasi culpa labore? Totam
              </span>
              <Link to="/products">
                <button className="home-btn">Shop now</button>
              </Link>
            </div>
          </div>
        </div>

        {/* categories */}
        <div className="book-categories">
          <div className="category-container">
            <h2>Featured Categories of Books</h2>
            <p>
              There are more than 1 million books available with many different
              categories, Choose your favourite one now.
            </p>
            <div className="category">
            {category[0]&&
                category[0].map(({ id, categoryName, description }) => {
                  return (
                    <div className="category-box" key={id}>
                      <div className="detail-box">
                        <h4>{categoryName}</h4>
                        <p>{description}</p>
                      </div>
                    </div>
                  );
                })}
            </div>
          </div>
        </div>
      </div>

      {/* footer */}
      <footer className="footer">
        <div className="footer-section">
          <div className="footer-left-section">
            <h2> Apna Pustkalaya</h2>
            <p>Terms and Conditions</p>
            <p>Privacy Policy</p>
            <p>Cookie Policy</p>
          </div>
          <div className="contact-section">
            <h3>Lets Chat!</h3>
            <div className="contact">
              <a href="https://www.facebook.com/praveen.shakya.792" target="blank" >
                <BsFacebook />
              </a>
              <a href="https://www.linkedin.com/in/praveen-kumar-88644bbb/" target="blank">
                <AiFillLinkedin />
              </a>
              <a href="https://www.instagram.com" target="blank">
                <AiOutlineInstagram />
              </a>
              <a href="https://github.com/praveen12kumar" target="blank">
                <AiFillGithub />
              </a>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};
