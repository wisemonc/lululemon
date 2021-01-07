import React from 'react';
import Button from './Button';
import Spacer from './Spacer';
import Textinput from './Textinput';
import '../css/Details.css';

const Details = () =>{
    return <div className="details-div" >
        <div>
          <img className="mt-2" src='/assets/logo-demo.svg'/>
        </div>
        <Spacer />
        <p>Welcome to Lulemon Vishal Shopping</p>
        <div className ="heading">
        <h3>EMAIL</h3>
        </div>
        <Textinput/>
        <Spacer />
        <div className ="heading">
        <h3>MEETING PASSWORD <span className ="grey-text">(Shared over Email)</span></h3>
        </div>
        <Textinput/>
        <Spacer />
        <Button/>
        <Spacer/>
        <Spacer/>
        <div className ="bottom-text text-left">
          <p className="pb-0 mb-0 grey-text">Don’t have an appointment?</p>
          <p className ="text-red">Click Here to Schedule</p>
          </div>
         
          <div className="powered">
          <img className="text-bottom" src='/assets/powered.svg'/>
          </div>
    </div>
}

export default Details;

