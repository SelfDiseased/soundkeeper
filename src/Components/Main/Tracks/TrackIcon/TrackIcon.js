import React from 'react';
import './styles.scss';
import icon_active from '../Layout/album.png';
import icon_default from '../Layout/Group 1.png';

const TrackIcon = ({activity}) => {
    let iconType = icon_default;
    if (activity)
        iconType = icon_active;
    return(
        <div className="track_icon">
            <img src={iconType} alt="track icon"></img>
        </div>
    )
}
export default TrackIcon;