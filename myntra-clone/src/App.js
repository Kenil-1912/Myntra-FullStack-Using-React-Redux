import { Outlet } from "react-router-dom";
import "./App.css";
import Footer from "./components/Footer";
import Header from "./components/Header";
import FetchItems from "./components/FetchItems";
import { useSelector } from "react-redux";
import Loader from "./components/Loader";

function App() {
  const fetchStatus = useSelector((store) => store.fetchStatus);
  return (
    <div className="App">
      <Header />
      <FetchItems />
      {fetchStatus.currentlyFetching ? <Loader /> : <Outlet />}

      <Footer />
    </div>
  );
}

export default App;
