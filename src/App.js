
import './App.css';
import Header from './Header';
import { useEffect } from 'react';
import Home from './Home';
import Checkout from './Checkout';
import Login from './Login';
import { useStateValue } from './StateProvider'
import { BrowserRouter as Router, Switch, Route } from "react-router-dom"
import { auth } from './firebase';
import Payment from './Payment';
import { loadStripe } from "@stripe/stripe-js"
import { Elements } from "@stripe/react-stripe-js"
import Orders from './Orders';
import Carousel from './Carousel';
import Footer from './Footer';
const promise = loadStripe("pk_test_51JmCVzSA4wm7vFcSkfh7zAMFZNqvNcGQhcplgvW9ZGZ2GlswJGdjbpFlTR3OBuzHfGjYw1qE9zTozsfo9s4cPdcI00GmFOI1vy")
function App() {
  const [{ }, dispatch] = useStateValue();
  useEffect(() => {
    auth.onAuthStateChanged(authUser => {
      console.log("the user is >>", authUser);
      if (authUser) {
        dispatch({
          type: "SET_USER",
          user: authUser
        })
      } else {
        dispatch({
          type: "SET_USER",
          user: null
        })
      }
    })

  }, [])
  return (
    <>

      <Router>
        <div className="app">

          <Switch>
            <Route path="/orders">
              <Header />
              <Orders />
              <Footer />
            </Route>

            <Route path="/login">
              <Login />
            </Route>

            <Route path="/checkout">
              <Header />
              <Checkout />
              <Footer />
            </Route>



            <Route path="/payment">
              <Header />
              <Elements stripe={promise}>
                <Payment />
                <Footer />
              </Elements>




            </Route>

            <Route path="/">
              <Header />
              <Home />
              <Footer />
            </Route>



          </Switch>
        </div>
      </Router>

    </>
  );
}

export default App;
