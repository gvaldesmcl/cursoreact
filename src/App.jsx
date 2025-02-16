import ItemListContainerComponent from './components/pages/ItemListContainer/ItemListContainer'
import NavBarComponent from './components/layouts/navBar/NavBar'
import {BrowserRouter,Routes,Route} from 'react-router'
import PageNotFound from './components/pages/pageNotFound/PageNotFound'
import CartPage from './components/pages/cartPage/CartPage'
import ItemDetail from './components/pages/itemDetail/ItemDetail'

function App() {
  return (
    <>

    <BrowserRouter>
    <NavBarComponent/>
      <Routes>
        <Route path='/' element={<ItemListContainerComponent texto="Tienda de computación y productos electrónicos"/>}/>
        <Route path='/cart' element={<CartPage/>}/>
        <Route path='/product/:id' element={<ItemDetail/>}/>
        <Route path='/category/:category' element={<ItemListContainerComponent/>}/>
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
