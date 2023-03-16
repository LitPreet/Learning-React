import React from "react";

class Profile extends React.Component {
    constructor(props){
        super(props);
        //CreateState
        this.state={
        userInfo:{
            name:"dummyname",
            location:"dummy NAme",
        }
        }
        console.log("child-contructor ");
    }
    async componentDidMount(){
        //best place to call an Api
        // as it will be render after render function
        const data = await fetch("https://api.github.com/users/mojombo");
        const json = await data.json();
        this.setState({
            userInfo:json,
        })
        console.log("child-componentDidMount" + this.props.name)
    }
    render() {
        console.log("child-render");
        // const{count} = this.state;
        //  can be destructure
        return (
            <div>
                <h1>Profile</h1>
                <img src={this.state.userInfo.avatar}/>
                <p>Name : {this.state.userInfo.name}</p>
                <p>loaction : {this.state.userInfo.location}</p>
                {/* WE DO NOT MUTATE STATE DIRECTLY */}
                {/* NEVER DO THIS.STATE = SOMETHING */}

            </div>
        );
    }
}

// child contructor 
// child render
// child componentDidMount 

// Api call 

// <update Cycles>

// render
export default Profile;