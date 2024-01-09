import {Flex, Text, Box, Img, Link} from '@chakra-ui/react';
import '../App.css';
const Article = ({item}) => {
  return(
    <Box p="10px">
<Flex  flexDirection="column">

<Img h={{base:"300px", sm:"300px", md:"300px", lg:"400px", xl:"400px"}} w="100%" src={item.image} backgroundRepeat="no-repeat"/>
       <Text mb="5px" fontWeight="600">{ item.title }</Text>
       <Text mb="15px">{item.source.name}</Text>
       <Link href={item.url} color="grey">Read More...</Link>
       {/* <Text>{item.description}</Text> */}
    </Flex>
    </Box>
    
  )
}

export default Article;