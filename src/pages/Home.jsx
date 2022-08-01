import Header from "../components/Header";
import Generations from "../components/Generations";
import { ContainerBG, SubContainer } from "../styles/Containers";

const Home = () => {
  return (
    <ContainerBG bg="https://wallpaperaccess.com/full/24957.jpg">
      <Header />
      <SubContainer>
        <Generations />
      </SubContainer>
    </ContainerBG>
  );
};

export default Home;
