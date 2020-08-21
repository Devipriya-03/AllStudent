import React,{Component} from 'react';
export default class Students extends Component{
    render(){
        return(
            <tr>
                <td>{this.props.obj.id}</td>
                <td>{this.props.obj.camp}</td>
                <td>{this.props.obj.type}</td>
            </tr>
        );
    }
}