import React from 'react';

const DropDown =({options, selected, onSelectedChange})=>{
    const rendersOptions = options.map((option)=>{
        return(
        <div 
        key={option.value} 
        className="item"
        onClick={()=>onSelectedChange(option)}
        >
            
            {option.label}</div>
        )
    })
    return(
        <div className="ui form">
            <div className="field">
                <label className="lable">Select a Color</label>
                <div className="ui selection dropdown visible active">
                    <i className="dropdown icon"></i>
                    <div className="text">{selected.label}</div>
                    <div className="menu visible transition">
                    {rendersOptions}
                    </div>
                </div>
            </div>
        </div>
        
    )
}
export default DropDown;