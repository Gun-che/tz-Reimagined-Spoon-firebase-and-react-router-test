import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  withRouter

} from 'react-router-dom';
import './App.css';
import loadable from '@loadable/component';
import { ReactComponent as Logo } from './logo.svg';
import Scroll from './Components/Scroll';
import goodsAPI from './Goods';
import TextField from '@material-ui/core/TextField'

function App() {
  return (
    <Router>
      <Scroll />
      <div>
        <nav>
          <li>
            <Link to='/'>Home</Link>
          </li>
          <li>
            <Link to='/about'>About</Link>
          </li>
          <li>
            <Link to='/users'>Users</Link>
          </li>
          <li>
            <Link to='/other'>Other</Link>
          </li>
          <li>
            <Link to='/img'>IMG Code Splitting</Link>
          </li>
        </nav>
        <section>
          <Switch>
            <Route exact path='/'>
              <Home></Home>
            </Route>
            <Route path='/about'>
              <WithRouter></WithRouter>
            </Route>
            <Route path='/users'>
              <Users></Users>
            </Route>
            <Route path='/other'>
              <Other></Other>
            </Route>
            <Route path='/img'>
              <Img></Img>
            </Route>
          </Switch>
        </section>
      </div>
    </Router>
  );
}

function Home(props) {
  return (
    <>
      <h1>Home</h1>
      <h2>Yo!Yo!Yo!</h2>
      <Logo />
      <li><Link to='/'>Home</Link></li>
      <TextField 
      label="Outlined" 
      variant="outlined"
      placeholder='!YOOYO!' 
      />
    </>
  )
}
function Users(props) {
  return (
    <>
      <h1>Users</h1>
      <h2>users</h2>
      <ul>

        <li>1 user</li>
        <li>2 user</li>
        <li>3 user</li>
        <li>4 user</li>
        <li>5 user</li>
        <li>6 user</li>
        <li>7 user</li>
        <li>8 user</li>
        <li>9 user</li>
        <li>10 user</li>
        <li><Link to='/'>Home</Link></li>
      </ul>

    </>
  )
}
function Other(props) {


  return (
    <>
      <h1>Other</h1>
      <h2>Hello</h2>
      <p>
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Expedita, quam quidem rerum possimus sint ea iste magnam molestiae, ipsa facere nesciunt provident esse similique laudantium libero praesentium consequatur veritatis earum alias? Assumenda ratione aut illo accusamus ut non, delectus praesentium, temporibus, incidunt esse id minima dolore ab expedita vero tempora doloremque! Pariatur eius voluptate facilis nihil, laudantium exercitationem repellendus minima?
      </p>
      <Switch>
        <Route path='/other/:product' children={Product} />
        <Route exact path='/other' children={Links} />
      </Switch>
      <li><Link to='/'>Home</Link></li>
    </>
  )
}

function Links(props) {
  let links = goodsAPI.all().map(el => {
    return (
      <div>
        <Link to={'/other/' + el.id} key={el.id}>{el.name}</Link>
      </div>
    )
  })
  return (
    <>
      {links}
    </>
  )
}

function Product(props) {
  let item = goodsAPI.get(props.match.params.product);
  return (
    <>
      <img src={item.img} alt={item.name} />
      <h1>{item.name}</h1>
      <h2>{item.price}</h2>
      <Link to='/other'>to BACK</Link>
    </>
  )
}

function About(props) {
  return (
    <>
      <h1>About</h1>
      <h2>:):):):):)</h2>
      <p>
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Neque reiciendis vel ullam excepturi nulla sint accusamus, provident vitae expedita temporibus.
      </p>
      <p>
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Neque reiciendis vel ullam excepturi nulla sint accusamus, provident vitae expedita temporibus.
      </p>
      <p>
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Neque reiciendis vel ullam excepturi nulla sint accusamus, provident vitae expedita temporibus.
      </p>
      <p>
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Neque reiciendis vel ullam excepturi nulla sint accusamus, provident vitae expedita temporibus.
      </p>
      <li><Link to='/'>Home</Link></li>
    </>
  )
}

const LoadingComponent = loadable(() => import('./Components/Dinamick'), {
  fallback: <h1>LOADINNG</h1>
})

let WithRouter = withRouter(About);

class Img extends React.Component {
  render() {
    return <LoadingComponent />
  }
}

export default App;
