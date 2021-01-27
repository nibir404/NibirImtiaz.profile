import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.js';
import Header from './Header'
import Sidebar from './Sidebar'
import {Redirect,Route, Switch,useLocation} from 'react-router-dom';
import About from './About'
import Education from './Education'
import Experience from './Experience'
import Skill from './Skill'
import {AnimatePresence} from 'framer-motion'



function App() {

  const location = useLocation();

  return (
    <div className="app"> 
                <div className="app__container  container">
            <div className="app__row  row">
        <div className="col-lg-3 ">
            <div className="app__sidebar">
                 <Sidebar/>           
            </div>
            </div>
            <div className="col-lg-9">
              <div className="app__main">
                <Header />
                
               <AnimatePresence exitBeforeEnter> 
             <Switch location={location} key={location.key}>
              <Route exact path='/education' component={ Education}/>  
              <Route exact path='/experience' component={ Experience}/>  
                <Route exact path='/skill'  component={Skill} />
              <Route exact path='/' component={About} />
              <Route>
                <Redirect to='/'/>
                  </Route>
                </Switch> 
               </AnimatePresence>
             </div>
        </div>
            </div> 
            </div>  
      </div>
  );
}

export default App;
