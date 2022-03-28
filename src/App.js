import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar';
import Home from './components/Home';
import { Route, Switch } from 'react-router-dom';
import Products from './components/Men/MenProducts';
import Product from './components/Men/Men';
import Cart from './components/Cart';
import Register from './components/Register';
import Login from './components/Login';
import FetchData from './components/FetchData';
import Women from './components/women/Women';
import WomenProducts from './components/women/WomenProducts';
import Kids from './components/Kids/Kids';
import KidsProducts from './components/Kids/KidsProducts';
import Beauty from './components/beauty/Beauty';
import BeautyProducts from './components/beauty/BeautyProducts';


function App() {
  return (
    <div className="App">
      <>
      <Navbar />
      <Switch>
        <Route exact path='/' component={Home}/>

        <Route exact path='/products' component={Products}/>
        <Route exact path='/products/:id' component={Product}/>
        <Route exact path='/women' component={Women}/>
        <Route exact path='/women/:id' component={WomenProducts}/>
        <Route exact path='/kids' component={Kids}/>
        <Route exact path='/kids/:id' component={KidsProducts}/>
        <Route exact path='/beauty' component={Beauty}/>
        <Route exact path='/beauty/:id' component={BeautyProducts}/>
        {/* <Route exact path='/men' component={Men}/>
        <Route exact path='/men/:id' component={MensProducts}/> */}

        <Route exact path='/cart' component={Cart}/>
        {/* <Route exact path='/checkout' component={Checkout}/> */}
        <Route exact path='/register' component={Register}/>
        <Route exact path='/login' component={Login}/>





        

        {/* <Home /> */}
      </Switch>
      <FetchData/>
      </>
    </div>
  );
}

export default App;
