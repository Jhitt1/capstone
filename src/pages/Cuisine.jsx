import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { motion } from "framer-motion";
import { Link, useParams } from "react-router-dom";
//usePerams allows us to pull out the key word from the URL.//

function Cuisine() {

//This 
    const [cuisine, setCuisine] = useState([]);
    let params = useParams();

    const getCuisine = async (name) => {
//This fetches all the API data from the API website.This is how you render complex search API data.//
//This also tells the site how many cards to display and sets it to a random recipe api call.//
        const data = await fetch(`https://api.spoonacular.com/recipes/complexSearch?apiKey=${process.env.REACT_APP_API_KEY}&cuisine=${name}&number=12`);
        const recipes = await data.json();
        // console.log(data);
        setCuisine(recipes.results);
    };

    useEffect(() => {
        getCuisine(params.type);
        // console.log(cuisine);
    }, [params.type]);

//This is for the fade in and out effect on the webpage.//
    return (
        <Grid
            animate={{ opacity: 1 }}
            initial={{ opacity: 0 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5 }}
        >
            {cuisine.map((item) => {
                return (
                    <Card key={item.id}>
                        <Link to={"/recipe/" + item.id}>
                            <img src={item.image} alt="" />
                            <h4>{item.title}</h4>
                        </Link>
                    </Card>
                );
            })};
        </Grid>
    );
};

//This is the CSS styling for this page.//
const Grid = styled(motion.div)`
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(20rem, 1fr));
    grid-gap: 3rem;
`;
const Card = styled.div`
    img {
        width: 100%;
        border-radius: 2rem;
    }
    a {
        text-decoration: none;
    }
    h4 {
        text-align: center;
        padding: 1rem;
    }
`;

export default Cuisine;