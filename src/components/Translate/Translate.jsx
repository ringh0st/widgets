import React, { useState } from 'react';
import DropDown from '../DropDown/DropDown';
import Convert from '../Api/Convert';

//AIzaSyCHUCmpR7cT_yDFHC98CZJy2LTms-IwDlM

const options = [
    {
        label:'Afrikaans',
        value:'af'
    },
    {
        label:'Arabic',
        value:'ar'
    },
    {   
        label:'Hindi',
        value:'hi'
    },
    {
        label:'Hebrew',
        value:'heb'
    },
    {
        label:'English',
        value:'en'
    }
]

const Translate = ()=>{
    const [language, setLanguage] = useState(options[0]);
    const [text, setText] = useState('');
    return(
        <div>
            <div className="ui form">
                <div className="field">
                    <label>Enter Text</label>
                    <input
                        value={text}
                        onChange={(e)=>setText(e.target.value)}/>
                </div>
            </div>

            <DropDown label='Select a language'
                selected={language} 
                onSelectedChange={setLanguage} 
                options={options}/>
            <hr/>
            <h3 className="ui header">Output</h3>
            <Convert text={text} language={language}/>
        </div>
    )
};

export default Translate;