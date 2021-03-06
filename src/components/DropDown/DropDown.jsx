import React, { useState, useEffect, useRef} from 'react';

const DropDown =({options, selected, onSelectedChange, label})=>{
    const [open, setOpen] =useState(false);
    const ref = useRef();
    useEffect(()=>{
        const onBodyClicked=(event)=>{
            if(ref.current.contains(event.target)){
                return;
            }
            setOpen(false)
        };
            document.body.addEventListener('click',onBodyClicked);
        return(
            document.body.removeEventListener('click',onBodyClicked)
        )
    },[]);
    const rendersOptions = options.map((option)=>{
        if(option.value === selected.value){
            return null;
        }
        return(
        <div 
        key={option.value} 
        className="item"
        onClick={()=>onSelectedChange(option)}
        >
            {option.label}</div>
        )
    })
    // console.log(ref.current)
    return(
        <div ref={ref} className="ui form">
            <div className="field">
                <label className="lable">{label}</label>
                <div 
                onClick={()=>setOpen(!open)}
                className={`ui selection dropdown ${open ? 'visible active': ''} `}
                >
                    <i className="dropdown icon"></i>
                    <div className="text">{selected.label}</div>
                    <div 
                    className={`menu ${open ? 'visible transition':''}`}
                    >
                    {rendersOptions}
                    </div>
                </div>
            </div>
        </div>
        
    )
}
export default DropDown;