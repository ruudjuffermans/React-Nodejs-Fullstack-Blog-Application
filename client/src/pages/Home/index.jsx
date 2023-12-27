import { useOutletContext } from "react-router-dom";
import styles from "./style.module.css"

const Home = () => {
  const val = useOutletContext();
  console.log(val);
  return <div>Home</div>;
};

export default Home;
