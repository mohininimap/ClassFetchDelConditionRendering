import React,{Component} from "react";

class TextrenderingEx extends Component{
state={
    count:0,
    // tags:[]
    tags:["tag1","tag2","tag3"]
}
renderTags(){
    if(this.state.tags.length===0) return <p>There is no tag</p>
  return <ul>{this.state.tags.map((tag=><li key={tag}>{tag}</li>))}</ul>
}
    render(){
  
      
        return(
             <>
             {this.state.tags.length===0 && 'Please Create a new tag!'}
             {this.renderTags()}
             </>
        )
    }
}
export default TextrenderingEx;