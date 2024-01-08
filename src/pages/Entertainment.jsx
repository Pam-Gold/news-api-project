

import { Grid } from "@chakra-ui/react";
import { useEffect } from "react";
import Article from "../components/Article";
import '../App.css'
import useStore from "../Store";

const Entertainment = () => {
  const { data, fetchData } = useStore();
  useEffect(() => {
    fetchData("https://newsdata.io/api/1/news?apikey=pub_36099d663cea1cc3aa5d4b66cd157be2c5361&q=entertainment");
  }, []);

  console.log(data);

  // const news = data.map(item=>(<Article article={item}/>))

  return (
    <Grid className="news-grid" gridTemplateColumns={{base:"1fr", sm:"1fr", md:"1fr 1fr", lg:"1fr 1fr 1fr", xl:"1fr 1fr 1fr" }} gridTemplateRows={{base:"400px", sm:"400px", md:"400px", lg:"500px", xl:"500px"}} gap="25px">
      {data.map((item) => (
        <Article item={item} />
      ))}
    </Grid>
  );
};

export default Entertainment;
