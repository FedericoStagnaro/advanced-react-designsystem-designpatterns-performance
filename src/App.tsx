import { CartProvider } from "./cart-context";
import Buttons from "./components/buttons";
import Display from "./components/display";
import "./style.css";



function App() {
  return (
    <CartProvider>
      <Display />
      <Buttons />
    </CartProvider>
  );
}


export default App;
