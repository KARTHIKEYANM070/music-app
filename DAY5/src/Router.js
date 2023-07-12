import React, { Component } from 'react'
import { BrowserRouter, Routes ,Route} from 'react-router-dom';
import App from './App';
import Music from './Music';

export class Routing extends Component {
  render() {
    return (
        <BrowserRouter>
        <Routes>
            <Route exact path='/' Component={App}/>
            <Route exact path='/login' element={<Music/>}/>
        </Routes>

        </BrowserRouter>
    )
  }
}

export default Routing;