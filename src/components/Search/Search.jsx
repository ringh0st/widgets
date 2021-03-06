import React, {useState, useEffect}from 'react';
import axios from 'axios';
const Search = ()=>{
const [term, setTerm] = useState('');
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
    if(term && !results.length){
        search()
    } else {
        const timeoutId = setTimeout(()=>{
            if(term){
                search();
            }
        },1000)
        return()=>{
            clearTimeout(timeoutId)
        }
    
    }

},[term])

const renderedResults = results.map((result)=>{
    return(
    <div className="item" key={result.pageid}>
        <div className="right floated content">
            <a 
            className="ui button"
            href={`https://en.wikipedia.org?curid=${result.pageid}`}
            >GO</a>
        </div>
        <div className="content">
            <a className="header"
            href={`https://en.wikipedia.org?curid=${result.pageid}`}>
                {result.title}
            </a>
            <span dangerouslySetInnerHTML={{ __html:result.snippet}}></span>
            {/* when we use this span we open to hackers */}
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
            <div className="ui huge celled list">
                {renderedResults}
                
            </div>
        </div>
    )
}
export default Search

