import Header from './Components/Layout/Header/Header'
import { Fragment, useContext } from 'react'
import Meals from './Components/Meals/Meals'
import Cart from './Components/Cart/Cart'
import CartContext from './Store/CartContext'

const App = () => {

  const cartCTX = useContext(CartContext);

  return (
    <Fragment>
      {cartCTX.cartIsShown && <Cart />}
      <Header />
      <main>
        <Meals />
      </main>
    </Fragment>
  )
}
export default App
