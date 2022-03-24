import { FaPizzaSlice, FaHamburger, FaFish } from "react-icons/fa";
import { GiNoodles, GiChopsticks, GiTacos, GiBellPepper, GiSandwich } from "react-icons/gi";
import styled from "styled-components";
import {NavLink} from "react-router-dom";

// This controls all the categories you can choose from on the Website.//
//This also controls the images that appear above the categories//
function Category() {
    return (
        <List>
            <SLink to={"/cuisine/Italian"}>
                <FaPizzaSlice />
                <h4>Italian</h4>
            </SLink>
            <SLink to={"/cuisine/American"}>
                <FaHamburger />
                <h4>American</h4>
            </SLink>
            <SLink to={"/cuisine/Chinese"}>
                <FaFish />
                <h4>Chinese</h4>
            </SLink>
            <SLink to={"/cuisine/Thai"}>
                <GiNoodles />
                <h4>Thai</h4>
            </SLink>
            <SLink to={"/cuisine/Japanese"}>
                <GiChopsticks />
                <h4>Japanese</h4>
            </SLink>
            <SLink to={"/cuisine/Mexican"}>
                <GiTacos />
                <h4>Mexican</h4>
            </SLink>
            <SLink to={"/cuisine/Greek"}>
                <GiBellPepper />
                <h4>Greek</h4>
            </SLink>
            <SLink to={"/cuisine/French"}>
                <GiSandwich />
                <h4>French</h4>
            </SLink>
        </List>


    );
}

//This is all the CSS styling for the categories.//
const List = styled.div`
    display: flex;
    justify-content: center;
    margin: 2rem, 0rem;
`;
const SLink = styled(NavLink)`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    border-radius: 50%;
    margin-right: 2rem;
    text-decoration: none;
    background: linear-gradient(35deg, #494949, #313131);
    width: 10rem;
    height: 10rem;
    cursor: pointer;
    transform: scale(0.8);

    h4 {
        color: lightgray;
        font-size: 1.5rem;
    }
    svg {
        color: lightgray;
        font-size: 2rem;
    }
    &.active {
        background: linear-gradient(to right, #f27121, #e94057);

        svg {
            color: white;
        }
        h4 {
            color: white;
        }
    }
`;

export default Category;