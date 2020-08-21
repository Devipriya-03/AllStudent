import React from 'react';
import ReactMultiSelectCheckboxes from 'react-multiselect-checkboxes';


const options = [
  { label: 'Select All', value: 1},
  { label: 'Computer Science Engineering', value: 2},
  { label: 'Electronics and Communication Engineering', value: 3},
  { label: 'Electrical and Electronics Engineering', value: 4},
  { label: 'Civil Engineering', value: 5},
  { label: 'Mechanical Engineering', value: 6},
];

class Branch extends React.Component{
    render(){
        return(
        		<div className="Branch">
					<ReactMultiSelectCheckboxes options={options} class="container" />
                </div>
            );
    }
}

export default Branch;