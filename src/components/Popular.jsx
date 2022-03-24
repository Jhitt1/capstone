import { useEffect, useState } from "react";
import styled from "styled-components";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import "@splidejs/splide/dist/css/splide.min.css";
import { Link } from "react-router-dom";

//This calls on the function and sets it to an empty array.//
function Popular() {
  const [popular, setPopular] = useState([]);

//This only runs once the component gets mounted and stores it in the empty array.//
  useEffect(() => {
    getPopular();
  }, []);

//This makes sure we have all the api data before rendering it.//
  const getPopular = async () => {

//This checks to see if the API data is already in the local storage.//
    const check = localStorage.getItem('popular');

//This parses all the info from the API call, we get it back and convert it from a string to an array.//
    if(check) {
      setPopular(JSON.parse(check));
    } else {

//This fetches all the API data from the API website.This $ is especially helpful if you wish to print out random statements//
//This also tells the site how many cards to display and sets it to a random recipe api call.//
      const api = await fetch(`https://api.spoonacular.com/recipes/random?apiKey=${process.env.REACT_APP_API_KEY}&number=12`);
      const data = await api.json();

//This sets the API data and turns it into a string to be parsed to an array. It also sets the API data to the local storage.///
      localStorage.setItem('popular', JSON.stringify(data.recipes));
      setPopular(data.recipes);
      // console.log(data.recipes);
    }


  };

//Had to add a unique key identifier for each recipe.//
//This section is for the cards and card images on the home page.//
  return (
    <div>
      <Wrapper>
        <h3>Our Popular Picks</h3>
{/* This is CSS for the slide effect.*/}
        <Splide
          options={{
            perPage: 4,
            arrows: false,
            pagination: false,
            drag: "free",
            gap: "5rem",
          }}
        >
{/* creates a new array by calling a provided function on every element in the calling array. */}
          {popular.map((recipe) => {
            return (
// This is what creates the carousel effect with the recipes.//
              <SplideSlide key={recipe.id}>
                <Card>
                  <Link to={"/recipe/" + recipe.id}>
                    <p>{recipe.title}</p>
                    <img src={recipe.image} alt={recipe.title} />
                    <Gradient />
                  </Link>
                </Card>
              </SplideSlide>
            );
          })}
        </Splide>
      </Wrapper>
    </div>
  );
}

//This section handles all the CSS styling for the home page.//
const Wrapper = styled.div`
  margin: 4rem, 0rem;

`;

const Card = styled.div`
  min-height: 25rem;
  border-radius: 2rem;
  overflow: hidden;

  img {
    border-radius: 2rem;
    position: absolute;
    left: 0;
    width: 100%;
    height: 100%;
    object-fit: cover;
 }
 p {
   position: absolute;
   z-index: 10;
   left: 50%;
   bottom: 0%;
   transform: translate(-50%, 0%);
   color: white;
   width: 100%;
   text-align: center;
   font-weight: 600;
   font-size: 1.7rem;
   height: 40%;
   display: flex;
   justify-content: center;
   align-items: center;
   border-radius: 10px;
   background: transparent;
  }
  .bKoxGh p {
    background: transparent;
  }
  `;
  
  const Gradient = styled.div`
 z-index: 3;
 position: absolute;
 width: 100%;
 height: 100%;
 background: linear-gradient(rgba(0, 0, 0, 0), rgba(0, 0, 0, 0.5));
 border-radius: 25px;

`;


export default Popular;