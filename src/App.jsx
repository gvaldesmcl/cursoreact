import ItemListContainerComponent from './components/pages/ItemListContainer/ItemListContainer'
import NavBarComponent from './components/layouts/navBar/NavBar'
import ProductCard from './components/common/productCard/ProductCard'
/*import FetchingData from './components/pages/fetchingData/FetchingData'
import Users from './components/pages/Users'
import Comments from './components/pages/Comments'
import ItemDetail from './components/pages/itemDetail/ItemDetail'*/


function App() {
  return (
    <>
    
      <NavBarComponent/>

      <ItemListContainerComponent texto="Bienvenido a Tienda PC Tronix"/>
    
      {/*<FetchingData/>
      <Users/>
      <Comments/>

        <ItemDetail/>*/}

    </>
      
  )
}
export default App
