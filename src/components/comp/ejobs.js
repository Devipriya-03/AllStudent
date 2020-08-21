import React from 'react';
import Axios from 'axios';

class EligibleJobs extends React.Component{
  constructor(props) {
        super(props);
        this.onChangeejobs = this.onChangeejobs.bind(this);

        this.state = {
            jobeligible:'',
        }
        }
        onChangeejobs(e) {
            this.setState({
                jobeligible: e.target.value
            });
        }
    render(){
        const obj = {
                jobeligible : this.state.jobeligible
            };
            console.log(obj);
            //Axios.post("localhost\GBGCGCV-2.0\admin\src\backend\ejobs.php",obj).then(res => console.log(res.data));
        return(
        		<div className="EligibleJobs">
					     <select className="runningtext container" name="jobeligible" onChange={this.onChangeejobs}>
                  <option value="yes">Yes</option>
                  <option value="no">No</option>
               </select>                     
              </div>
            );
    }
}

export default EligibleJobs;