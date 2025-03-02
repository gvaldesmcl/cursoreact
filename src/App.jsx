import ItemListContainerComponent from "./components/pages/ItemListContainer/ItemListContainer";
import NavBarComponent from "./components/layouts/navBar/NavBar";
import { BrowserRouter, Routes, Route } from "react-router";
import PageNotFound from "./components/pages/pageNotFound/PageNotFound";
import CartPage from "./components/pages/cartPage/CartPage";
import ItemDetail from "./components/pages/itemDetail/ItemDetail";
import CartContextProvider from "./context/CartContext";
import CheckoutPage from "./components/pages/checkoutPage/CheckoutPage";

import { Toaster } from "sonner";

function App() {
  return (
    <>
      <BrowserRouter>
      <Toaster duration={2000} richColors />
      <CartContextProvider>          
            <NavBarComponent />            
            <Routes>
              <Route
                path="/"
                element={
                  <ItemListContainerComponent texto="Tienda de computación y productos electrónicos" />
                }
              />
              <Route path="/cart" element={<CartPage />} />
              <Route path="/checkout" element={<CheckoutPage />} />              
              <Route path="/product/:id" element={<ItemDetail />} />
              <Route
                path="/category/:category"
                element={<ItemListContainerComponent />}
              />
              <Route path="*" element={<PageNotFound />}></Route>
            </Routes>     
            </CartContextProvider>                         
      </BrowserRouter>

      {/*<<NavBarComponent/>

      <ItemListContainerComponent texto="Bienvenido a Tienda PC Tronix"/>*/}

      {/*<FetchingData/>
      <Users/>
      <Comments/>

        <ItemDetail/>*/}
    </>
  );
}
export default App;
