import React,{Component} from 'react';
import axios from 'axios';
import RecordsList from './RecordsList';
export default class Students extends Component{
    constructor(props){
        super(props);
        this.state={students:[]};
    }
    componentDidMount(){
        axios.get('http://localhost/GBGCGCV-2.0/admin/src/components/student-details.php')
        .then(response=>{
            this.setState({students: response.data});
        })
        .catch(function(error){
            console.log(error);
        })
    }
    StudentsList(){
        return this.state.students.map(function(object,i){
            return <RecordsList obj={object} key={i}/>;
        });
    }
    render(){
        return(
            <div>
                <table className="table">
                    <thead>
                        <tr>
                            <th>ID</th>
                            <th>Campus ID</th>
                            <th>Type</th>
                        </tr>
                    </thead>
                    <tbody>
                        {this.StudentsList()}
                    </tbody>
                </table>
            </div>
        );
    }
}