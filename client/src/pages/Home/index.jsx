import { useOutletContext } from "react-router-dom";

const Home = () => {
  const val = useOutletContext();
  console.log(val);
  return <div>Home</div>;
};

export default Home;
