import React, {Component} from "react";
import { Container,Row,Col,Button } from "react-bootstrap";

class TodoApp extends Component{
    render() {
        return(
            <>
          {/* <div>TodoApp</div>   */}
          <LoginComponent></LoginComponent>
          </>
        );
    }
}



class LoginComponent extends Component{

    constructor(props)
    {
        super(props);
        this.state={
            username:'',
            password:''
        };
        // this.handleUsernameChange=this.handleUsernameChange.bind(this); 
        // this.handlePasswordChange=this.handlePasswordChange.bind(this); 
        this.handleChange=this.handleChange.bind(this);
        this.convert=this.convert.bind(this);
    }

    // handleUsernameChange(event)
    // {
    //     // console.log(event.target.value);
    //     this.setState({
    //         username:event.target.value
    //     });
    // }

    // handlePasswordChange(event)
    // {
    //     // console.log(event.target.value);
    //     this.setState({
    //         password:event.target.value
    //     });
    // }

    handleChange(event)
    {
        this.setState({
            [event.target.name]:event.target.value
        })
    }

    convert()
    {
        var x=this.state.username;
        var y="";
        console.log(x)
        for(var i=0;i<x.length;i++)
        {
            if(x.charCodeAt(i)>64&&x.charCodeAt(i)<91)
            {
                var j=String.fromCharCode(90-x.charCodeAt(i)+65);
                console.log(j);
                y+=j;
            }
            else if(x.charCodeAt(i)>96&&x.charCodeAt(i)<123)
            {
                var j=String.fromCharCode(122-x.charCodeAt(i)+97);
                console.log(j);
                y+=j;
            }
        }
        this.setState({password:y});
    }

    render() {
        return(
            <Container fluid>
            
            <div  style={{padding:"20%"}}>

                <div style={{padding:"20px" }}>
                    <div>
                        Type a message: <input type="text" name="username" value={this.state.username} onChange={this.handleChange}></input>
                        {/* Password: <input type="password" name="password" value={this.state.password} onChange={this.handleChange}></input> */}
                        <Button type="submit" variant="primary" onClick={this.convert}>Encrypt</Button>
                    </div>
               
                    <div>
                        <span>Message:{this.state.username}{' '}</span>
                        </div>
                        <div>
                        <span>Encryption:{this.state.password}</span>
                    </div>
                </div>
                
           
            </div>
            
            </Container>
        );
    }
}

export default TodoApp;