// import BackgroundChanger from "./components/BackgroundChanger";
// import Bmi from "./bmi-calculator/Bmi";
// import BoxShadow from "./components/BoxShadow";
// import Unsplash from "./image-search/Unsplash";
// import Todo from "./todo/Todo";
// import TipsCalculator from "./components/TipsCalculator";
// import CurrencyConverter from ".currency-converter/CurrencyConverter";
import Header from "./components/header/Header";
import Footer from "./components/footer/Footer";
import { Outlet } from "react-router-dom";

const App = () => {
  return (
    <>
      {/* <BackgroundChanger /> */}
      {/* <Bmi /> */}
      {/* <BoxShadow /> */}
      {/* <Unsplash /> */}
      {/* <Todo /> */}
      {/* <TipsCalculator /> */}
      {/* <CurrencyConverter /> */}
      <Header />
      <Outlet />
      <Footer />
    </>
  );
};

export default App;
