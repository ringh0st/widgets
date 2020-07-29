import React, { useState } from 'react';
import DropDown from '../DropDown/DropDown';


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
    }
]

const Translate = ()=>{
    const [language, setLanguage] = useState(options[0])
    return(
        <div>
            <DropDown 
            selected={language} 
            onSelectedChange={setLanguage} 
            options={options}/>
        </div>
    )
};

export default Translate;