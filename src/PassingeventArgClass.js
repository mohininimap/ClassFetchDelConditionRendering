import React,{Component} from 'react';
class PassingeventArgClass extends Component{
   state={
   count:0
    }
    handleClick=(data)=>{
console.log(data)
        this.setState({
            count:this.state.count+1
        })
    }
    doHandle=()=>{
this.handleClick({id:1})
    }
    render(){
        return(
            <>
            <p>Count is  : {this.state.count}</p>
            <button onClick={this.doHandle}>Pass Arguement</button>
            </>
        )
    }
}

export default PassingeventArgClass;