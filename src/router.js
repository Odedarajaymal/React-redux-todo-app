import React from 'react';
import {Route,Switch} from 'react-router-dom'
import Edit from './component/edittodo'
import Addoptions from './component/todoform'
import Header from './component/header'

const Router = ()=>{
    return (
            <div>
                  <Header/>
                <Switch>
                  
                <Route exact path="/" component={Addoptions}/>
                <Route exact path="/edit/:id" component={Edit}/>
            </Switch>
            </div>
        

           
    )
}

 export default Router