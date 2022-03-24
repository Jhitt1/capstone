import Pages from "./pages/Pages";
import Category from "./components/Category";
import { BrowserRouter } from "react-router-dom";
import Search from "./components/Search";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { GiKnifeFork } from "react-icons/gi";

//This section is for the logo  and the search function on the website//
//This gives the functionality to navigate around pages due to browser router.//
function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Nav>
          <GiKnifeFork />
          <Logo to={"/"}>Flavorology</Logo>
        </Nav>
        <Search />
        <Category />
        <Pages />
      </BrowserRouter>
    </div>
  );
}

//Styling for the logo//
const Logo = styled(Link)`
  text-decoration: none;
  font-size: 2.4rem;
  font-weight: 400;
  font-family: 'Lobster Two', cursive;
`;
const Nav = styled.div`
  padding: 4rem 0rem;
  display: flex;
  justify-content: flex-start;
  align-items: center;

  svg {
    font-size:2rem;
  }
`;

export default App;
