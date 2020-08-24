import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Slider from '@material-ui/core/Slider';
import { withStyles } from '@material-ui/core/styles';
import Axios from 'axios';
import AllStudents from './Allstudents';

const useStyles = makeStyles({
  root: {
    color:"green",
  },
});
function valuetext(value) {
  return `${value}`;
}
const PrettoSlider = withStyles({
  root: {
    color: '#add8e6',
    height: 8,
  },
  thumb: {
    height: 24,
    width: 24,
    backgroundColor: '#fff',
    border: '2px solid #eeeeee',
    marginTop: -8,
    marginLeft: -12,
    '&:focus, &:hover, &$active': {
      boxShadow: 'inherit',
    },
  },
  active: {},
  valueLabel: {
    left: 'calc(-50% + 4px)',
  },
  track: {
    height: 8,
    borderRadius: 4,
  },
  rail: {
    height: 8,
    borderRadius: 4,
  },
})(Slider);

export function DoubleRangeSlider(props) {
   const classes = useStyles();
  const [value, setValue] = React.useState([0, 10]);
  const handleChange = (event, newValue) => {
    setValue(newValue);
     const obj = {
    value1 : value[0],
    value2 : value[1]
    };
    Axios.post("http://localhost/GBGCGCV-2.0/admin/src/components/Allstudent-details.php",obj).then(res => console.log(res.data));
  };
  return (
    <div>
      <Typography id="range-slider" gutterBottom>
      </Typography>
      <PrettoSlider
        min={0}
        max={10}
        step={0.5}
        value={value}
        onChange={handleChange}
        valueLabelDisplay="auto"
        aria-labelledby="range-slider"
        getAriaValueText={valuetext}
      />
      //<AllStudents value={value}/>
    </div>
  );
}