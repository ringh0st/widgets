import React,{useState} from 'react';

const Accordion = ({items}) =>{
    // state={
    //     activeIndex:0,
    // }
    const [activeIndex, setActiveIndex] = useState(null)
    const onTitleClick = (index) =>{
        // this.setState({activeIndex:index})
        setActiveIndex(index)
    }
    const renderedItems = items.map((item, index)=>{
        const active = index === activeIndex ? 'active' : '';
        
        return(
            < React.Fragment key={item.title}>
                <div 
                className= {`title ${active}`}
                //we cant use onclick={onTitleClick} so it wont envoked the moment the component is rendered
                 onClick = {()=> onTitleClick(index)}
                 >
                    <i className="dropdown icon"></i>
                    {item.title}
                </div>
                <div className={`content ${active}`}>
                    <p>{item.content}</p>
                </div>
            </React.Fragment>
        )
    })
    return(
        <div className="ui styled accordion">
            {renderedItems}
        </div>
    )
}
export default Accordion;