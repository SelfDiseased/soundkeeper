import React, { useState, useEffect } from 'react';
import './styles.scss';
import TrackIcon from '../Tracks/TrackIcon/TrackIcon';
import player_prev_button from './Layout/Group 3.png';
import player_next_button from './Layout/Group 2.png';
import player_play_button from './Layout/Polygon 2.png';
import player_pause_button from './Layout/pause.png';
import player_volume_quiter from './Layout/Group 4.png';
import player_volume_louder from './Layout/Group 5.png';
import useAudio from './useAudio';
import { func } from 'prop-types';

let tracksArr = [
    {name: "VIKA", author: "Vitold Paputchi", duration: "2:28"},
    {name: "Wonder Wall", author: "Oasis", duration: "3:28"}
]

const Player = () => {
  const { element, state, controls } = useAudio({
    src:
      'https://dl.zvukon.net/files/music/2020/03/Beneath_The_Massacre_-_Autonomous_Mind.mp3',
  });

  const [volume, setVolume] = useState(100);
  const [trackTime, setTrackTime] = useState(0);
  const [trackTimeInMins, setTrackTimeInMins] = useState("");
  const trackDurationInMins = `${Math.floor(state.duration / 60)}:${Math.floor(state.duration-Math.floor(state.duration / 60)*60)}`

  function changeTrackTime(time) {
    controls.seek(time);
    setTrackTime(time);
  }

  function quiterVolume() {
    if (element.ref.current.volume > 0.1)
    {
      element.ref.current.volume -= 0.1;
      setVolume(element.ref.current.volume*100);
    }
    else
    {
      element.ref.current.volume = 0;
      setVolume(0);
    }
  }

  function changeVolume(val) {
    element.ref.current.volume = val / 100;
    setVolume(element.ref.current.volume*100);
  }

  function louderVolume() {
    if (element.ref.current.volume < 0.9)
    {
      element.ref.current.volume += 0.1;
      setVolume(element.ref.current.volume*100);
    }
    else
    {
      controls.setVol(1);
      setVolume(100);
    }
  }

  useEffect(() => {
    setTrackTime(Math.round(state.time));
    const mins = Math.floor(state.time / 60);
    setTrackTimeInMins(`${mins}:${Math.floor(state.time-mins*60)}`);
  }, [volume, state.time]);

    return(
        <aside className="player_container">
            <div className="player_container__track">
                <TrackIcon activity={true} />
                <div className="player_container__track__data">
                    <p className="player_container__track__data__name">Wonder wall</p>
                    <p className="player_container__track__data__artist">Oasis</p>
                </div>
            </div>
            <div className="player_container__player">
              {element}
                <input type="range" value={trackTime} min="1" max={Math.round(state.duration)} className="player_container__player__track_line" onInput={event => changeTrackTime(event.target.value)}></input>
                <div className="player_container__player__time">
                    <p className="player_container__player__time__value">{trackTimeInMins}</p>
                    <p className="player_container__player__time__value">{trackDurationInMins}</p>
                </div>
                <div className="player_container__player__buttons">
                    <img src={player_prev_button} className="player_container__player__buttons__prev" alt="player buttons"></img>
                    {state.paused 
                    ?
                    <img
                    onClick={() => {
                      state.paused ? controls.play() : controls.pause();
                    }}
                    src={player_play_button} className="player_container__player__buttons__play_button" alt="player play button">
                    </img>
                    : 
                    <img
                    onClick={() => {
                      state.paused ? controls.play() : controls.pause();
                    }}
                    src={player_pause_button} className="player_container__player__buttons__pause_button" alt="player pause button"></img>
                    }
                    <img src={player_next_button} className="player_container__player__buttons__next" alt="player buttons"></img>
                </div>
                <div className="player_container__player__volume">
                <img src={player_volume_quiter} className="player_container__player__volume__quiter" onClick={() => quiterVolume()} alt="player volume quiter"></img>
                <input type="range" min="0" max="100" value={volume} className="player_container__player__volume__slider" onInput={event => changeVolume(event.target.value)}></input>
                <img src={player_volume_louder} className="player_container__player__volume__louder" onClick={() => louderVolume()} alt="player volume louder"></img>
                </div>
            </div>
            <hr className="player_container__hr" />
            <section className="player_container__playlist">
                <Playlist tracks={tracksArr} />
            </section>
        </aside>
    )
}
const Playlist = ({tracks}) => {
    let tracksCount = 1;
    let isPlaying = 2 + 1;

    return(
        <div>
            {tracks.length !== 0 ? tracks.map(track => (
                <div className="playlist">
                    <div className="playlist__track" key={track.name}>
                        <div className="playlist__track__data">
                            <p className="playlist__track__data__number">{tracksCount++}.</p>
                            {Number(isPlaying)===Number(tracksCount) ? 
                            <p className="playlist__track__data__author_is_playing">{track.author} -</p> : 
                            <p className="playlist__track__data__author">{track.author} -</p>}
                            <p className="playlist__track__data__name">{track.name}</p>
                        </div> 
                        <p className="playlist__track__duration">{track.duration}</p>
                    </div>
                    {tracksCount==tracks.length ? <hr className="playlist__hr" /> : null}
                </div>
            )) : null}
        </div>
        
    )
}
export default Player;