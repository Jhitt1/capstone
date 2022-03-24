import styled from "styled-components";
import { useState } from "react";
import { FaSearch } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

//This page is used for the search bar and search functionality.//
function Search() {
    const [input, setInput] = useState("");
    const navigate = useNavigate();

//This will navigate from the search page to the searched page to display the data.//
    const submitHandler = (e) => {
        e.preventDefault();
        navigate("/searched/" + input);
    };

//This controls the search bar and magnifying glass//
    return (
        <FormStyle onSubmit={submitHandler}>
            <div>
                <FaSearch></FaSearch>
                <input onChange={(e) => setInput(e.target.value)} type="text" value={input} placeholder="Enter Your Flavorology Here" />
            </div>
        </FormStyle>
    );
}

//This controls all the CSS styling for this page//
const FormStyle = styled.form`
    margin: 0rem 20rem;

    div {
        width: 100%;
        position: relative;
    }

    input {
        border: none;
        background: linear-gradient(35deg, #494949, #313131);
        font-size: 1.5rem;
        color: white;
        padding: 1rem 3rem;
        border: none;
        border-radius: 1rem;
        outline: none;
        width: 100%;
    }
    svg {
        position: absolute;
        top: 50%;
        left: 0%;
        transform: translate(100%, -50%);
        color: white;
    }
    input::placeholder {
        color: lightgray;


        
    }
`;

export default Search;