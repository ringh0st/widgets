import React,{useState} from 'react';
// import Accordion from './components/Accordion/Accordion';
// import Search from './components/Search/Search';
import DropDown from './components/DropDown/DropDown';
// const items = [
//   {
//     title:'What is React?',
//     content:'React is a front-end javascript framework'
//   },
//   {
//     title:'Why use React?',
//     content:'React is a favorite JS library among engeneers'
//   },
//   {
//     title:'How do you use React?',
//     content:'You use react by creating component'
//   }
// ]
const options = [
  {
    label:'The Color Red',
    value:'red'
  },
  {
    label:'The Color Green',
    value:'green'
  },
  {
    label:'Shade of Blue',
    value:'blue'
  }
]
export default () =>{
  const [selected,setSelected] = useState(options[0]);
  const [showDropDown, setShowDropDown] = useState(true);
  return (
    <div>
      {/* <Accordion items={items}/> */}
      {/* <Search/> */}
      <button onClick={()=>setShowDropDown(!showDropDown)}>Show DropDown</button>
      {showDropDown ? 
      <DropDown 
      selected={selected} 
      onSelectedChange={setSelected}
      options={options}/> : null }
    </div>
  );
}