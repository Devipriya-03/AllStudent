import React,{Component} from 'react';
export default class Students extends Component{
    render(){
        return(
            <tr>
                <td>{this.props.obj.id}</td>
                <td>{this.props.obj.fname}</td>
                <td>{this.props.obj.mname}</td>
                <td>{this.props.obj.lname}</td>
                <td>{this.props.obj.Branch}</td>
                <td>{this.props.obj.sscmarks}</td>
                <td>{this.props.obj.intermarks}</td>
                <td>{this.props.obj.btechgpa}</td>
                <td>{this.props.obj.batch}</td>
            </tr>
        );
    }
}