import ItemListContainerComponent from './components/pages/ItemListContainer/ItemListContainer'
import NavBarComponent from './components/layouts/navBar/NavBar'
import ProductCard from './components/common/productCard/ProductCard'
/*import FetchingData from './components/pages/fetchingData/FetchingData'
import Users from './components/pages/Users'
import Comments from './components/pages/Comments'
import ItemDetail from './components/pages/itemDetail/ItemDetail'*/
import {BrowserRouter,Routes,Route} from 'react-router'
import PageNotFound from './components/pages/pageNotFound/PageNotFound'
import CartPage from './components/pages/cartPage/CartPage'

function App() {
  return (
    <>

    <BrowserRouter>
    <NavBarComponent/>
      <Routes>
        <Route path='/' element={<ItemListContainerComponent texto="Tienda de computación y productos electrónicos"/>}/>
        <Route path='/cart' element={<CartPage/>}/>
        <Route path='*' element={<PageNotFound/>}></Route>
      </Routes>
    </BrowserRouter>
    
      {/*<<NavBarComponent/>

      <ItemListContainerComponent texto="Bienvenido a Tienda PC Tronix"/>*/}
    
      {/*<FetchingData/>
      <Users/>
      <Comments/>

        <ItemDetail/>*/}

    </>
      
  )
}
export default App
