import React from 'react';
import '../css/LaunchScreen.css'
import Details from '../components/Details';
import Spacer from '../components/Spacer';


const LaunchScreen = () => {
    return <div className='launch-main' >
        <div className='contain-detail' >
            <Details />
        </div>
    </div>
}

export default LaunchScreen