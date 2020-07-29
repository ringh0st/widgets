import React, {useEffect,useState}from 'react';
import axios from 'axios';
const Convert =({text, language})=>{
    useEffect(()=>{
        axios.post('https://translation.googleapis.com/language/translate/v2', {}, {
            params:{
                q:text,
                target:language.value,
                key:'AIzaSyCHUCmpR7cT_yDFHC98CZJy2LTms-IwDlM'
            },
        });
    },[text,language]);
    return(
        <div>d</div>
    )
}
export default Convert;