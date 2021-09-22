import React from 'react'
import {
    BrowserRouter as Router,
    Route,
    Switch,

} from 'react-router-dom';
import HomePage from './pages/home';


import tintucpage from './pages/tintuc';
import addTinTuc from './pages/tintuc/add';
import editTinTuc from './pages/tintuc/edit';
const Routers=()=>{
    return(
        
        <Router>
            <Switch>
                <Route path="/" exact component={HomePage}/>
                <Route path="/tintuc" exact component={tintucpage}/>
                <Route  path="/addtintuc" exact component={addTinTuc}/>   
                <Route  path="/edittintuc" exact component={editTinTuc}/>         
            </Switch>
        </Router>
        
       
    )
}
export default Routers;