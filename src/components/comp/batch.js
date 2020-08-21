import React from 'react';
import Axios from 'axios';

class Batch extends React.Component{
  constructor(props) {
        super(props);
        this.onChangebatch = this.onChangebatch.bind(this);

        this.state = {
            batch:'',
        }
        }
        onChangebatch(e) {
            this.setState({
                batch: e.target.value
            });
        }
    render(){
      const obj = {
                batch : this.state.batch
            };
            console.log(obj);
            //Axios.post("localhost\GBGCGCV-2.0\admin\src\backend\degree.php",obj).then(res => console.log(res.data));
        return(
        		<div className="Batch">
					     <select name="batch" className="runningtext container" onChange={this.onChangebatch}>
                  <option value="nill">No Preference</option>
                  <option value="2016" >2016</option>
                  <option value="2017" >2017</option>
                  <option value="2018" >2018</option>
                  <option value="2019" >2019</option>
                  <option value="2020" >2020</option>
                  <option value="2021"  >2021</option>
                </select>                      
              </div>
            );
    }
}

export default Batch;