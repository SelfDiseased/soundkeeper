import React, {useState} from 'react';
import { useSelector, useDispatch } from 'react-redux';
import $ from 'jquery';
import './styles.scss';
import search_button from './layout/search_button.png';
import clear_button from './layout/clear_button.png';
import searchTracks from '../../redux/actions/searchAction';


const Search = () => {
    const dispatch = useDispatch();
    const [error , setError] = useState(null); //Write Error Handler!
    const searchHandler = (search) =>{
        console.log(search);
        if(search && search.length >= 3) dispatch(searchTracks(search));
        else setError("Search request must contain more than 3 symbols"); // Example Error
    }
    return (
        <div className ="search">
            <div className="search__bar">
                <input className="search__bar__input" placeholder="Search"></input>
                <div className="search__bar__clear_button_container">
                    <img className="search__bar__clear_button_container__btn" src={clear_button}></img>
                </div>
                <div className="search__bar__search_button_container" onClick={()=> searchHandler($('.search__bar__input').val())}>
                    <img className="search__bar__search_button_container__btn" src={search_button}></img>
                </div>
            </div>
            {error && <div className="error_block">{error}</div>}
        </div>
    )
}

export default Search;