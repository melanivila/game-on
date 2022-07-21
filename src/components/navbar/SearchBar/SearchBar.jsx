import { useEffect, useRef, useState } from "react";
import {
  Container,
  SearchInput,
  SearchButton,  
  IconMagnifyingGlass
} from "./searchbar.styles";
import { useNavigate } from 'react-router-dom';


function SearchBar() {
  const targetRef = useRef(null);
  const [isHovered, setIsHovered] = useState(false);
  const [isFocused, setIsFocused] = useState(false);
  const showSearchInput = isHovered || isFocused;
  const navigate = useNavigate();
  const [filter, setFilter] = useState("");

  
  useEffect(() => {
    targetRef.current.value = "";
  }, [showSearchInput]);

  const handleSubmit = (e) => {
    filter ? navigate(`/SearchGame:${filter}`) : e.preventDefault(); 
  }

  return (
    <Container
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      onFocus={() => setIsFocused(true)}
      onBlur={() => setIsFocused(false)}
      hover={showSearchInput}      
      onSubmit={handleSubmit}
    >
      <SearchInput ref={targetRef} showSearchInput={showSearchInput} onChange={(e) => setFilter(e.target.value)} />      
      {showSearchInput ? <SearchButton>➜</SearchButton> : <IconMagnifyingGlass />}
    </Container>
  );
}

export default SearchBar;
