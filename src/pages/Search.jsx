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
    fetchData(`https://newsdata.io/api/1/news?apikey=pub_36099d663cea1cc3aa5d4b66cd157be2c5361&q=${inputRef.current.value}`);
  
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
<Grid className="news-grid" gridTemplateColumns={{base:"1fr", sm:"1fr", md:"1fr 1fr", lg:"1fr 1fr 1fr", xl:"1fr 1fr 1fr" }} gridTemplateRows={{base:"350px", sm:"400px", md:"350px", lg:"500px", xl:"500px"}} gap="25px">
      {data.map((item) => (
        <Article item={item} />
      ))}
    </Grid>
</Flex>
  )
}

export default Search;