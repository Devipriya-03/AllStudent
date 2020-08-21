import React from 'react';
import Axios from 'axios';

class Degree extends React.Component{
    constructor(props) {
        super(props);
        this.onChangedegree = this.onChangedegree.bind(this);

        this.state = {
            degree:'',
        }
        }
        onChangedegree(e) {
            this.setState({
                degree: e.target.value
            });
        }
    render(){
        const obj = {
                degree : this.state.degree
            };
            console.log(obj);
            //Axios.post("localhost\GBGCGCV-2.0\admin\src\backend\degree.php",obj).then(res => console.log(res.data));
        return(
                <div className="Degree">
                    <select name="degree" className="runningtext container" onChange={this.onChangedegree}>
                        <option value="Any">Any</option>
                        <option value="BTech">BTech</option>
                        <option value="MBA">MBA</option>
                    </select>
                </div>
            );
    }
}
export default Degree;