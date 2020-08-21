import React from 'react';
import Axios from 'axios';

class Jobs extends React.Component{
  constructor(props) {
        super(props);
        this.onChangejobs = this.onChangejobs.bind(this);

        this.state = {
            jobsinhand:'',
        }
        }
        onChangejobs(e) {
            this.setState({
                jobsinhand: e.target.value
            });
        }
    render(){
        const obj = {
                jobsinhand : this.state.jobsinhand
            };
            console.log(obj);
            //Axios.post("localhost\GBGCGCV-2.0\admin\src\backend\jobs.php",obj).then(res => console.log(res.data));
        return(
        		<div className="Jobs">
					     <select name="jobsinhand" className="runningtext container" onChange={this.onChangejobs}>
                  <option value="nill">No Preference</option>
                  <option value="0">0 jobs</option>
                  <option value="1">less tha or equal to 1 job</option>
                  <option value="2">less tha or equal to 2 jobs</option>
                  <option value="3">less tha or equal to 3 jobs</option>
                  <option value="4">less tha or equal to 4 jobs</option>
                </select>                     
              </div>
            );
    }
}

export default Jobs;