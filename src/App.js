import "./App.css";
import ProductsList from "./Components/ProductsList";
import Slider from "./Components/Slider";

function App() {
  return (
    <div className="container">
      <h1>Product List</h1>
      <ProductsList />
      <h1>Image Slider</h1>
      <Slider />
    </div>
  );
}

export default App;
