import React,{Component} from 'react';
import data from './data.json';
import '../../node_modules/bootstrap/dist/css/bootstrap.min.css'
class JsonEx extends Component
{
    render(){
        return(
            <>
            {data && data.map((item)=>{
            return(
                
                  <div key={item.id}>
             <strong>{item.id}</strong><span>{item.title}</span> 
             <strong>
                {item.tech && item.tech.map((technology)=>{
                    return(
                        <div key={technology.name}>{technology.name}</div>
                    )
                })}
             </strong>
             </div>

              )
            }
           
            )}
             <button className='btn btn-success'>Show</button>

            </>
        )
    }
}


export default JsonEx;