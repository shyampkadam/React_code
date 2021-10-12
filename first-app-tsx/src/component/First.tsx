import React,{ Component } from "react";

interface IState{

}

interface IProps{

}

class First extends Component<IProps,IState>{
    constructor(props:IProps){
        super(props);
    }

    render(){
        return(
            <React.Fragment>
                <h1>Welcome to TSX class level component</h1>
            </React.Fragment>
        )
    }
};
export default First