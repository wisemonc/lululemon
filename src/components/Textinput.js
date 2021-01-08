import React from 'react';

const TextInput = ({ inputType, inputLabel, additionalText }) =>{
    return <div className="text-input" >
        <div>
            { additionalText ? <div>
                
                <h3 className="heading-h3" >{inputLabel} <span>({ additionalText })</span></h3>
            </div> : <div>
                <h3 className="heading-h3" >{inputLabel}</h3>
            </div> }
        </div>
        <div>
            <input type={inputType} id="fname" name="fname"/>
        </div>
    </div>
}

export default TextInput;

