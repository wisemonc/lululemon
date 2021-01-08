import React from 'react';
import '../css/NoMeetingScreen.css'
import Spacer from '../components/Spacer';
import AppointmentInfo from '../components/AppointmentInfo';
import MeetingBtn from '../components/MeetingBtn';
import IMAGES from '../assets/images'
import STRINGS from '../assets/Strings'


const NoMeetingScreen = () => {
    return <div className="noMeeting-main" >
        <div className='contain-detail' >
            <div className="details-div" >
                <Spacer />
                <div>
                    <img className="logo-image" src={IMAGES.LOGO} alt=''/>
                </div>
                <Spacer />
                <div  >
                    <p className='launch-para' >{STRINGS.CONFIRMATION}</p>
                </div>
                <Spacer />
                <div className='contain-hr' >
                    <hr />
                </div>
                <Spacer />
                <div className="contain-appointment" >
                    <AppointmentInfo infoTitle = {STRINGS.NAME} infoValue="Jane Doe" />
                </div>
                <Spacer />
                <div className="contain-appointment" >
                    <AppointmentInfo infoTitle = {STRINGS.EMAIL} infoValue="Janedoe@gmail.com" />
                </div>
                <Spacer />
                <Spacer />
                <div className="contain-appointment" >
                    <AppointmentInfo infoTitle = {STRINGS.SHOPPING} infoValue="Kathleen B" />
                </div>
                <Spacer />
                <div className="contain-appointment" >
                    <AppointmentInfo infoTitle = {STRINGS.DAY} infoValue="Tuesday" />
                </div>
                <Spacer />
                <div className="contain-appointment" >
                    <AppointmentInfo infoTitle = {STRINGS.DATE} infoValue="30/10/2020" />
                </div>
                <Spacer />
                <div className="contain-appointment" >
                    <AppointmentInfo infoTitle = {STRINGS.TIME} infoValue="2:30 pm EST" />
                </div>
                <Spacer />
                <div className="contain-appointment-btn" >
                    <MeetingBtn title={'Reschedule Meeting'} />
                </div>
                <div className="contain-appointment-btn" >
                    <MeetingBtn title={'Cancel Meeting'} />
                </div>



                <div className="powered">
                    <img className="text-bottom" src={IMAGES.WATERMARK} alt='' />
                </div>
            </div>
        </div>
    </div>
}

export default NoMeetingScreen