import React from 'react';
import Accordion from './components/Accordion/Accordion';
import Search from './components/Search/Search';
import DropDown from './components/DropDown/DropDown';
const items = [
  {
    title:'What is React?',
    content:'React is a front-end javascript framework'
  },
  {
    title:'Why use React?',
    content:'React is a favorite JS library among engeneers'
  },
  {
    title:'How do you use React?',
    content:'You use react by creating component'
  }
]
export default () =>{
  return (
    <div>
      {/* <Accordion items={items}/> */}
      {/* <Search/> */}
      <DropDown/>
    </div>
  );
}