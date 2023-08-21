import Hero from "../components/Hero";
import Newsletter from '../components/Newsletter'
import MazeForm from "../components/Form";
import Matrix from "../components/Matrix";

const Home = () => {
  return (
    <>
      <Hero />
      {/* <Newsletter /> */}
      <Matrix rows={4} columns={4} blockedIndex={'0,0'} />
      <MazeForm />
    </>
  );
};

export default Home;
