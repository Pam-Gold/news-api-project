import {  Flex, Input, Grid, Button } from "@chakra-ui/react";
import { useRef} from 'react';
import useStore from "../Store";
import Article from "../components/Article";


const Search = () => {

const {data, fetchData} = useStore();

const inputRef = useRef()



const handleSearch = () => {

  if(inputRef.current.value === ""){
    alert("Type in Feed...")
  }
  else{
    fetchData(`https://gnews.io/api/v4/search?q=${inputRef.current.value}&lang=en&country=us&max=10&apikey=746e3c2efb7d4c4135084106cfd5b928`);
  
  }
inputRef.current.value = "";
   
    // console.log(inputRef.current.value)

}


  return(
<Flex h="100vh" w="100%" p="5px" flexDirection="column">

<Flex>



<Input ref={inputRef} fontSize="1.25rem" border="none"borderRadius="0px" outline="none" borderBottom="2px solid grey" placeholder="Search News..." />
<Button onClick={handleSearch}><i className="fa-solid fa-arrow-right"></i></Button>
</Flex>
<Grid className="news-grid" gridTemplateColumns={{base:"1fr", sm:"1fr", md:"1fr 1fr", lg:"1fr 1fr 1fr", xl:"1fr 1fr 1fr" }} gridTemplateRows={{base:"450px", sm:"450px", md:"450px", lg:"500px", xl:"500px"}} gap="25px">
      {data.map((item) => (
        <Article item={item} />
      ))}
    </Grid>
</Flex>
  )
}

export default Search;