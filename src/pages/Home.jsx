import { Heading, Box, Grid } from "@chakra-ui/react";
import { useEffect } from "react";
import Article from "../components/Article";
import '../App.css'
import useStore from "../Store";

const Home = () => {
  const { data, fetchData } = useStore();


  useEffect(() => {
    fetchData("https://gnews.io/api/v4/search?q=top&lang=en&country=us&max=10&apikey=746e3c2efb7d4c4135084106cfd5b928");
  }, []);

  console.log(data);

  return (
    <Grid className="news-grid" gridTemplateColumns={{base:"1fr", sm:"1fr", md:"1fr 1fr", lg:"1fr 1fr 1fr", xl:"1fr 1fr 1fr" }} gridTemplateRows={{base:"400px", sm:"450px", md:"450px", lg:"500px", xl:"500px"}} gap="25px">
      {data.map((item) => (
        <Article item={item} />
      ))}
    </Grid>
  );
};

export default Home;
