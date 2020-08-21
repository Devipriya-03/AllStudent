import React from 'react';
import Axios from 'axios';

class SortBy extends React.Component{
  constructor(props) {
        super(props);
        this.onChangesortby = this.onChangesortby.bind(this);

        this.state = {
            sortby:'',
        }
        }
        onChangesortby(e) {
            this.setState({
                sortby: e.target.value
            });
        }
    render(){
        const obj = {
                sortby : this.state.sortby
            };
            console.log(obj);
            //Axios.post("localhost\GBGCGCV-2.0\admin\src\backend\sortby.php",obj).then(res => console.log(res.data));
        return(
        		<div className="SortBy">
					     <select className="runningtext container" name="sortby" onChange={this.onChangesortby}>
                  <option value="2">Name</option>
                  <option value="5">Branch</option>
                  <option value="1">Roll No</option>
                  <option value="8">Institute marks</option>
                  <option value="6">10th Marks</option>
                  <option value="7">12th Marks</option>
                </select>                      
              </div>
            );
    }
}

export default SortBy;