import React from 'react';
import '../css/LaunchScreen.css'
import Spacer from '../components/Spacer';
import TextInput from '../components/TextInput';
import JoinMeetingBtn from '../components/JoinMeetingBtn';
import IMAGES from '../assets/images'
import STRINGS from '../assets/Strings'

const LaunchScreen = () => {
    return <div className='launch-main' >
        <div className='contain-detail' >
            <div className="details-div" >
                <Spacer />
                <div>
                    <img className="logo-image" src={IMAGES.LOGO} alt=''/>
                </div>
                <Spacer />
                <div>
                    <p className='launch-para' >{STRINGS.WELCOME}</p>
                </div>
                
                <TextInput inputType={STRINGS.EMAIL} inputLabel='Email'  />
                <Spacer />
                <TextInput inputType={STRINGS.PASSWORD} inputLabel = "Meeting Password" additionalText="Shared Over Email" />
                <Spacer />
                <Spacer/>
                <div className='contain-btn' >
                    <JoinMeetingBtn />
                </div>
                <Spacer />
                <div className ="bottom-text text-left">
                    <p className="grey-text">{STRINGS.DONT_APP}</p>
                    <p className ="text-red">{STRINGS.SCHEDULE}</p>
                </div>
                <Spacer />
                <Spacer />

                <div className="powered">
                    <img className="text-bottom" src={IMAGES.WATERMARK} alt='' />
                </div>
            </div>
        </div>
    </div>
}

export default LaunchScreen