import { Box, Button, Flex, Img, List, ListItem } from "@chakra-ui/react";
import { Link, NavLink } from "react-router-dom";

import logo from '../assets/images/logo/logo.jpg';

import '../assets/icons/fontawesome/css/fontawesome.min.css'
import '../assets/icons/fontawesome/css/all.min.css'

const Navbar = () => {

  const hamburgerStyles = {
    h:"5px",
    w:'100%',
    bg:'black',
    borderRadius:'10px'

  }

  const linkStyles = {
    fontSize:{base:"1.8rem", sm:'1.8rem', md:"1.6rem", lg:"1.4rem", xl:"1.4rem"},
    fontWeight:"bold"

  }
  return (
    <Flex h="50px" w="100%" justify="space-between" align="center" p="0px 10px">
      <Box h="40px" w="60px" >
        <Link to="/" > <Img src={logo} borderRadius="5px" h="100%" w="100%" /></Link>
      </Box>


      <List display={{base:"none", sm:"none", md:"none",lg:"flex", xl:"flex"}} alignItems="center" columnGap="15px">
        <ListItem sx={linkStyles}>
          <NavLink to="business">Business</NavLink>
        </ListItem>
        <ListItem sx={linkStyles}>
          <NavLink to="entertainment">Entertainment</NavLink>
        </ListItem>
        <ListItem sx={linkStyles}>
          <NavLink to="health">Health</NavLink>
        </ListItem>
        <ListItem sx={linkStyles}>
          <NavLink to="science">Science</NavLink>
        </ListItem>
        <ListItem sx={linkStyles}>
          <NavLink to="sports">Sports</NavLink>
        </ListItem>
        <ListItem sx={linkStyles}>
          <NavLink to="technology">Technology</NavLink>
        </ListItem>
      </List>

<Flex align="center" columnGap="15px">
  
<Flex h="25px" w="30px" flexDirection="column" justify="space-between" align="center" display={{base:"flex", sm:"flex", md:"flex", lg:"none", xl:'"none'}}>
        <Box sx={hamburgerStyles}></Box>
        <Box sx={hamburgerStyles}></Box>
        <Box sx={hamburgerStyles}></Box>
      </Flex>

<Button ><Link to="search"><i className="fa-solid fa-search" style={{fontSize:'1.5rem'}}></i></Link></Button>
</Flex>
  
    </Flex>
  );
};

export default Navbar;
