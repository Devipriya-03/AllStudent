import React from 'react';
import Axios from 'axios';

class Gender extends React.Component{
  constructor(props) {
        super(props);
        this.onChangegender = this.onChangegender.bind(this);

        this.state = {
            gender:'',
        }
        }
        onChangegender(e) {
            this.setState({
                gender: e.target.value
            });
        }
    render(){
        const obj = {
                gender : this.state.gender
            };
            console.log(obj);
            //Axios.post("localhost\GBGCGCV-2.0\admin\src\backend\gender.php",obj).then(res => console.log(res.data));
        return(
        		<div className="Gender">
					     <select className="runningtext container" name="gender" onChange={this.onChangegender}>
                  <option value="nill">No Preference</option>
                  <option value="M" >Male</option>
                  <option value="F" >Female</option>
                </select>                     
              </div>
            );
    }
}

export default Gender;