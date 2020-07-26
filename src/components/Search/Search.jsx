import React, {useState, useEffect}from 'react';
import axios from 'axios';
const Search = ()=>{
const [term, setTerm] = useState('hello');
const [results, setResults] = useState([]);
console.log(results)
useEffect(()=>{
// (async()=>{
//     await axios.get(``);
// })();
    const search = async ()=>{
        const { data } = await axios.get(`http://en.wikipedia.org/w/api.php`,{
            params:{
                action:'query',
                list:'search',
                origin:'*',
                format:'json',
                srsearch:term,
            }
        });
        setResults(data.query.search)
    };
    search();
},[term])

const renderedResults = results.map((result)=>{
    return(
    <div className="item" key={result.pageid}>
        <div className="content">
            <div className="header">
                {result.title}
            </div>
            {result.snippet}
        </div>
    </div>
    )
})
    return(
        <div>
            <div className="ui form">
                <div className="field">
                    <label>Enter Search Term</label>
                    <input 
                    value={term}
                    onChange={e=>{setTerm(e.target.value)}}
                    className="input"
                    />
                </div>
            </div>
            <div className="ui celled list">
                {renderedResults}
            </div>
        </div>
    )
}
export default Search