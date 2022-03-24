import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import styled from "styled-components";

import React from "react";

//This is the recipe search details page.//
function Recipe() {

//This controls the data recieved by the instructions and ingredients info displayed on the site.//
// this also sets the instructions tab to active.//
    let params = useParams();
    const [details, setDetails] = useState({});
    const [activeTab, setActiveTab] = useState("instructions");
    const extendedIngredients = details.extendedIngredients;

    const fetchDetails = async () => {
        const data = await fetch(`https://api.spoonacular.com/recipes/${params.name}/information?apiKey=${process.env.REACT_APP_API_KEY}`);
        const detailData = await data.json();
        setDetails(detailData);
        // console.log(detailData);
    };

    useEffect(() => {
        fetchDetails();
    // console.log(extendedIngredients);
    }, [params.name]);

    //This is for the active setting for the info and ingredient buttons.//
    // This sorts out the html from the data to be desplayed at the <h3> tags.//
    return (
        <DetailWrapper>
            <div>
                <h2>{details.title}</h2>
                <img src={details.image} alt="" />
            </div>
            <Info>
                <Button
                    className={activeTab === "instructions" ? "active" : ""}
                    onClick={() => setActiveTab("instructions")}
                >
                    Instructions
                </Button>
                <Button
                    className={activeTab === "ingredients" ? "active" : ""}
                    onClick={() => setActiveTab("ingredients")}
                >
                    Ingredients
                </Button>
                {activeTab === "instructions" && (
                    <div>
                        <h3 dangerouslySetInnerHTML={{ __html: details.summary }}></h3>
                        <h3 dangerouslySetInnerHTML={{ __html: details.instructions }}></h3>
                    </div>
                )};
                {activeTab === "ingredients" && (
                <ul>
                    {details.extendedIngredients?.map((ingredient) => (
                        <li key={ingredient.id}>{ingredient.original}</li>
                    ))};
                </ul>
                )};
            </Info>
        </DetailWrapper>
    );
}

//This is for all the CSS styling on this page.//
const DetailWrapper = styled.div`
    margin-top: 10rem;
    margin-bottom: 5rem;
    display: flex;

    .active {
        background: linear-gradient(35deg, #494949, #313131);
        color: white;
    }

    h2 {
        margin-bottom: 2rem;
    }
    li {
        font-size: 1.2rem;
        line-height: 2.5rem;
    }
    ul {
        margin-top: 2rem;
    }
`;

const Button = styled.button`
    padding: 1rem 2rem;
    color: #313131;
    background: white;
    border: 2px solid black;
    margin-right: 2rem;
    font-weight: 600;
`;

const Info = styled.div`
    margin-left: 10rem;
`;

export default Recipe;