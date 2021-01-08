import React,{useState} from 'react';
import '../css/MeetingScreen.css'
import Spacer from '../components/Spacer';
import AppointmentInfo from '../components/AppointmentInfo';
import JoinMeetingBtn from '../components/JoinMeetingBtn';
import Webcam from 'react-webcam';
import IMAGES from '../assets/images'
import STRINGS from '../assets/Strings'

const MeetingScreen = () => {


    const [showVideo, setShowVideo] = useState(false);
    const [mic,  setMic] = useState(false);
    const handleVideo = () => {

        showVideo ? setShowVideo(false) : setShowVideo(true);
        if(showVideo){
            setShowVideo(false);
        }else{
            setShowVideo(true);
        }
    }

    const handleAudio = () =>{
        mic ? setMic(false) : setMic(true);
    }
    
    return <div className="meeting-main" >
        <div className='contain-video contain-details ' >
            { showVideo ? <div className='video-replacement' >
                <Webcam audio={mic} className="webcam" />
                   <div className ="img-iconss">
                   <p className="white-color">{STRINGS.WARNING} </p>
                <img onClick={handleAudio} className="logo-imagee" src={IMAGES.MIC_LOGO} alt=''/>
               <img onClick={handleVideo} className="logo-imagee" src={IMAGES.VIDEO_LOGO} alt=''/>
                </div>
            </div> : 
            <div className="video-replacement" >
                <Spacer/>
              
               <div className ="img-icons">
               <p className="white-color">{STRINGS.REQ} </p>
                <img onClick={handleAudio} className="logo-imagee" src={IMAGES.MIC_LOGO} alt=''/>
                <img onClick={handleVideo} className="logo-imagee" src={IMAGES.VIDEO_LOGO} alt=''/>
                </div>
            </div> }
        </div>
        <div className='contain-details' >
            <div className="details-div" >
                <Spacer />
                <div>
                    <img className="logo-image" src={IMAGES.LOGO} alt=''/>
                </div>
                <Spacer />
                <div  >
                    <p className='launch-para' >{STRINGS.CHECK_DETAILS}</p>
                </div>
                <Spacer />
                <div className='contain-hr' >
                    <hr />
                </div>
                <Spacer />
                <div className="contain-appointment" >
                    <AppointmentInfo infoTitle = "Name" infoValue="Jane Doe" />
                </div>
                <Spacer />
                <div className="contain-appointment" >
                    <AppointmentInfo infoTitle = "Email" infoValue="Janedoe@gmail.com" />
                </div>
                <Spacer />
                <Spacer />
                <div className="contain-appointment" >
                    <AppointmentInfo infoTitle = "Personal Shopping Session with" infoValue="Kathleen B" />
                </div>
                <Spacer />
                <div className="contain-appointment" >
                    <AppointmentInfo infoTitle = "Day" infoValue="Tuesday" />
                </div>
                <Spacer />
                <div className="contain-appointment" >
                    <AppointmentInfo infoTitle = "Date" infoValue="30/10/2020" />
                </div>
                <Spacer />
                <div className="contain-appointment" >
                    <AppointmentInfo infoTitle = "Time" infoValue="2:30 pm EST" />
                </div>
                <Spacer />
                <div className='contain-btn' >
                    <JoinMeetingBtn />
                </div>
                <div className ="bottom-text text-left">
                    <p className="grey-text">{STRINGS.CHANGE_PLAN}</p>
                    <p className ="text-red">{STRINGS.RESCHEDULE}</p>
                </div>
                <Spacer />
                <div className="powered">
                    <img className="text-bottom" src={IMAGES.WATERMARK} alt='' />
                </div>
            </div>
        </div>

    </div>
}

export default MeetingScreen