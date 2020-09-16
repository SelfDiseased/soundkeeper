import React from 'react';
import {Provider} from 'react-redux';
import Search from './Components/Search/Search';
import Main from './Components/Main/Main';
import Footer from './Components/Footer/Footer';
import store from './redux/store/store';

const App = () =>{
    return(
        <Provider store={store}>
            <Search/>
            <Main/>
            <Footer/>
        </Provider>
    )
}
export default App;