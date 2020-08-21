import React,{Component} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import axios from 'axios';
import Students from './AllRecordsList';
import {Button} from 'react-bootstrap';

//import Batch from './comp/batch';

export default class AllStudents extends Component{
    constructor(props){
        super(props);
        this.onChangecategory = this.onChangecategory.bind(this);
        this.onChangebatch = this.onChangebatch.bind(this);
        this.onChangeejobs = this.onChangeejobs.bind(this);
        this.onChangegender = this.onChangegender.bind(this);
        this.onChangejobs = this.onChangejobs.bind(this);
        this.onChangesortby = this.onChangesortby.bind(this);
        this.onSubmit = this.onSubmit.bind(this);


        this.state = {
            category:'',
            batch:'',
            jobeligible:'',
            gender:'',
            jobsinhand:'',
            sortby:'',
            students:[]
        }
    }

    onChangecategory(e) {
            this.setState({
                category: e.target.value
            });
    }
    onChangebatch(e) {
            this.setState({
                batch: e.target.value
            });
        }
    onChangegender(e) {
            this.setState({
                gender: e.target.value
            });
        }

    onChangeejobs(e) {
            this.setState({
                jobeligible: e.target.value
            });
        }
        onChangejobs(e) {
            this.setState({
                jobsinhand: e.target.value
            });
        }
    onChangesortby(e) {
            this.setState({
                sortby: e.target.value
            });
        }
    onSubmit(e) {
            e.preventDefault();//Value will be submitted through react js
            const obj = {
                category : this.state.category,
                batch : this.state.batch,
                gender : this.state.gender,
                jobeligible : this.state.jobeligible,
                jobsinhand : this.state.jobsinhand,
                sortby : this.state.sortby
            };
            axios.post("http://localhost/GBGCGCV-2.0/admin/src/components/Allstudent-details.php",obj)
            .then((response)=>{
            console.log(response)
            this.setState({students: response.data})
            })
            .catch(err=>console.log(err));
            console.log(this.state.students);
        }

   /* componentDidMount(){
        axios.get('http://localhost/GBGCGCV-2.0/admin/src/components/Allstudent-details.php?category='+this.state.category)
        .then(response=>{
            this.setState({students: response.data});
        })
        .catch(function(error){
            console.log(error);
        })
    }*/
    StudentsList(){
        return this.state.students.map(function(object,i){
            return <Students obj={object} key={i}/>;
        });
    }
    render(){
        return(
            <div>
                <form onSubmit={this.onSubmit}>
                <div className="table2">
                    <table className="table1">
                        <thead>
                        <tr>
                            <td>
                                <select name="category" id="selectcolor" onChange={this.onChangecategory}>
                                    <option value="Any">Any</option>
                                    <option value="B.Tech">BTech</option>
                                    <option value="MBA">MBA</option>
                                </select>
                            </td>
                            <td>
                                <select name="batch" className="runningtext container" onChange={this.onChangebatch}>
                                      <option value="nill">No Preference</option>
                                      <option value="2016" >2016</option>
                                      <option value="2017" >2017</option>
                                      <option value="2018" >2018</option>
                                      <option value="2019" >2019</option>
                                      <option value="2020" >2020</option>
                                      <option value="2021"  >2021</option>
                                </select> 
                            </td>
                            <td>
                                <select className="runningtext container" name="jobeligible" onChange={this.onChangeejobs}>
                                    <option value="yes">Yes</option>
                                    <option value="no">No</option>
                                </select>
                            </td>
                            <td>
                                <select className="runningtext container" name="gender" onChange={this.onChangegender}>
                                    <option value="nill">No Preference</option>
                                    <option value="M" >Male</option>
                                    <option value="F" >Female</option>
                                </select>
                            </td>
                            <td>
                                <select name="jobsinhand" className="runningtext container" onChange={this.onChangejobs}>
                                    <option value="nill">No Preference</option>
                                    <option value="0">0 jobs</option>
                                    <option value="1">less than or equal to 1 job</option>
                                    <option value="2">less than or equal to 2 jobs</option>
                                    <option value="3">less than or equal to 3 jobs</option>
                                    <option value="4">less than or equal to 4 jobs</option>
                                </select>
                            </td>
                            <td>
                                <select className="runningtext container" name="sortby" onChange={this.onChangesortby}>
                                    <option value="2">Name</option>
                                    <option value="5">Branch</option>
                                    <option value="1">Roll No</option>
                                    <option value="8">Institute marks</option>
                                    <option value="6">10th Marks</option>
                                    <option value="7">12th Marks</option>
                                </select>
                            </td>
                        </tr>
                        </thead>
                    </table>
                    <div className={"form-group"}>
                        <input type={"submit"} value={"Submit"} className={"btn btn-primary"}/>
                    </div>
                </div>
                </form>
                <table className="table">
                    <thead>
                        <tr>
                            <th>ID</th>
                            <th>First_Name</th>
                            <th>Middle_Name</th>
                            <th>Last_Name</th>
                            <th>Branch</th>
                            <th>X Marks</th>
                            <th>XII Marks</th>
                            <th>College Marks</th>
                            <th>Batch</th>
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