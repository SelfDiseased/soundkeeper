import React, {useState, useEffect} from 'react';
import { useSelector, useDispatch } from 'react-redux';
import Loader from 'react-loader-spinner';
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";
import './styles.scss';
import play_button from './Layout/play.png';

const Tracks = () =>{
    const storageState= useSelector(state => state);
    useEffect(() => {
        console.log(storageState);
    }, [storageState]);
    return(
        <div className='tracks_block'>
            <p className="tracks_heading">Tracks</p>
            <div className="tracks_container">
                <Loader type="Puff" color="#00BFFF" height={100} width={100} timeout={3000} />
            </div>
        </div>
    )
}
const Track = (track) => {
    const [isHovered, setIsHovered] = useState(false);

    return(
        <section className={isHovered ? "track_active" : "track"} 
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}>
            <div className="track__play_button">
                <img src={play_button} alt="play button"></img>
            </div>
            <div className="track__image_container">
                <img src="https://scontent.fiev13-1.fna.fbcdn.net/v/t1.0-9/109685061_10157131078701968_6352798589835281338_n.jpg?_nc_cat=108&_nc_sid=730e14&_nc_ohc=16S32E1a0bEAX8fxYrO&_nc_ht=scontent.fiev13-1.fna&oh=615e83c3d25bdd102be42451c19d7b75&oe=5F3B7B03" alt="track icon"></img>
            </div>
            <div className="track__data">
                <p className="track__data__name">Wonderwall</p>
                <p className="track__data__artist">Oasis</p>
            </div>
            <p className="track__duration">3:52</p>
        </section>
    )
}
export default Tracks;