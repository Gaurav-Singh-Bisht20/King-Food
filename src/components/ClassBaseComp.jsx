import React from "react";

class Example extends React.Component{
    constructor(props){
        super(props);
        this.state={
            count1:0,
            count2:1
        }
    }

    render(){
        const {count1}= this.state;
        const {count2}=this.state;
        return(
            <div className="container">
                    <h1>count1:{count1}</h1>
                    <h1>count2:{count2}</h1>
                    
                <button onClick={()=>{
                    this.setState({
                        count1:1,
                        count2:2
                    })
                }}>button</button>
            </div>
        )
    }
}

export default Example;