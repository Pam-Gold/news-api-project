import {Flex, Text, Box, Img, Link} from '@chakra-ui/react';
import '../App.css';
const Article = ({item}) => {
  return(
    <Box p="10px">
<Flex  flexDirection="column">

<Img h={{base:"300px", sm:"300px", md:"300px", lg:"400px", xl:"400px"}} w="100%" src={item.image_url} backgroundRepeat="no-repeat"/>
       <Text>{ item.title }</Text>
       <Text>{item.source_id}</Text>
       <Link href={item.link}>Read More...</Link>
       {/* <Text>{item.description}</Text> */}
    </Flex>
    </Box>
    
  )
}

export default Article;