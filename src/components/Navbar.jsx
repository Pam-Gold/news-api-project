import { Box, Button, Flex, Img, List, ListItem } from "@chakra-ui/react";
import { Link, NavLink } from "react-router-dom";

import logo from "../assets/images/logo/logo.jpg";

import "../assets/icons/fontawesome/css/fontawesome.min.css";
import "../assets/icons/fontawesome/css/all.min.css";

import useToggle from "../hooks/useToggle";

const Navbar = () => {
  const [navbarToggle, renderToggle] = useToggle();

  const hamburgerStyles = {
    h: "5px",
    w: "100%",
    bg: "black",
    borderRadius: "10px",
  };

  const linkStyles = {
    fontSize: {
      base: "1.8rem",
      sm: "1.8rem",
      md: "1.6rem",
      lg: "1.4rem",
      xl: "1.4rem",
    },
    fontWeight: "bold",
    mb: { base: "30px", sm: "30px", md: "30px", lg:"0px", xl:"0px" },
  };

  return (
    <Flex h="50px" w="100%" justify="space-between" align="center" p="0px 10px">
      <Box h="40px" w="60px">
        <Link to="/">
          {" "}
          <Img src={logo} borderRadius="5px" h="100%" w="100%" />
        </Link>
      </Box>

      <List
        flexDirection={{
          base: "column",
          sm: "column",
          md: "column",
          lg: "row",
          xl: "row",
        }}
        h={{
          base: navbarToggle ? "500px" : "",
          sm: navbarToggle ? "500px" : "",
          md: navbarToggle ? "500px" : "",
          lg:"50px",
          xl:"50px"
        }}
        pos={{
          base: "absolute",
          sm: "absolute",
          md: "absolute",
          lg: "static",
          xl: "static",
        }}
        display={{
          base: navbarToggle ? "flex" : "none",
          sm: navbarToggle ? "flex" : "none",
          md: navbarToggle ? "flex" : "none",
          lg: "flex",
          xl: "flex",
        }}
        top={{ base: "50px", sm: "50px", md: "50px" }}
        left={{ base: "0px", sm: "0px", md: "0px" }}
        right={{ base: "0px", sm: "0px", md: "0px" }}
        alignItems="center"
        columnGap="15px"
        zIndex={{ base: "99", sm: "99", md: "99" }}
        bg={{ base: "white", sm: "white", md: "white" }}
    
      >
        <ListItem sx={linkStyles}>
          <NavLink to="business" onClick={renderToggle}>
            Business
          </NavLink>
        </ListItem>
        <ListItem sx={linkStyles}>
          <NavLink to="entertainment" onClick={renderToggle}>
            Entertainment
          </NavLink>
        </ListItem>
        <ListItem sx={linkStyles}>
          <NavLink to="health" onClick={renderToggle}>
            Health
          </NavLink>
        </ListItem>
        <ListItem sx={linkStyles}>
          <NavLink to="science" onClick={renderToggle}>
            Science
          </NavLink>
        </ListItem>
        <ListItem sx={linkStyles}>
          <NavLink to="sports" onClick={renderToggle}>
            Sports
          </NavLink>
        </ListItem>
        <ListItem sx={linkStyles}>
          <NavLink to="technology" onClick={renderToggle}>
            Technology
          </NavLink>
        </ListItem>
      </List>

      <Flex align="center" columnGap="15px">
        <Flex
          onClick={renderToggle}
          h="25px"
          w="30px"
          flexDirection="column"
          justify="space-between"
          align="center"
          display={{
            base: "flex",
            sm: "flex",
            md: "flex",
            lg: "none",
            xl: '"none',
          }}
        >
          <Box sx={hamburgerStyles}></Box>
          <Box sx={hamburgerStyles}></Box>
          <Box sx={hamburgerStyles}></Box>
        </Flex>

        <Button onClick={renderToggle}>
          <Link to="search">
            <i
              className="fa-solid fa-search"
              style={{ fontSize: "1.5rem" }}
            ></i>
          </Link>
        </Button>
      </Flex>
    </Flex>
  );
};

export default Navbar;
