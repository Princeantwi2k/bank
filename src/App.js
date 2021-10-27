import { BrowserRouter,Link,Route,Switch } from 'react-router-dom';
import './App.css';
import Java from './Component/Java/Java';
import Nav from './Component/Navbar/Nav';
import About from './Component/Page/About';
import Home from './Component/Page/Home';
import Project from './Component/Page/Project';
import Contact from './Component/Page/Contact'


function App() {
  return (
    <>
   <BrowserRouter>
    <Nav />
    <Switch >
      <Route path="/" exact component={Home} />
      <Route path="/project" component={Project} />
      <Route path="/about" component={About} />
      <Route path="/contact" component={Contact} />
    </Switch>
    </BrowserRouter>
      
    </>
  );
}

export default App;
