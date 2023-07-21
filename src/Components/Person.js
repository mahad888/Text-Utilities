import React, { Component } from "react";
import "./Person.css"
import Man from "./Man";
class Person extends Component{
    // eslint-disable-next-line no-useless-constructor
    constructor(props){
        super(props);
        this.props = props;
        this.state ={
            Sec : "B",
            year : "3rd"
        };

    }
    nameChanger () {
        this.setState({Sec : "A",
                year : "4rd"} ,()=>{

                });
    }

    buttonhandler = ()=> {
        console.log(this.props);
        <Man>NO</Man>
        
    }
    render(){
        const style = {
            fontSize: "20px",
            color: "red"
        }
        return(
            <div className="Personbox">
                <div>Name : Mahad</div>
                <div style={style}> Age : 22 years</div>
                <div>{this.props.name}</div>
                <div>Section : {this.state.Sec}</div>
                
                <div>Year : {this.state.year}</div>
                <br></br>
                <button style={{
                    color: "red"
                }} onClick ={() => this.nameChanger()}>Click me</button>
                <br></br>
                <button onClick={()=> this.buttonhandler()}>Start</button>
                <Man></Man>
                
            </div>
        );
    }
}

export default Person;
