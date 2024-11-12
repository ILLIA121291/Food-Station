import classes from './ErrorMessageAnimation.module.css'

import Img from './error.gif';

const ErrorMessageAnimation = ({ errmessage = 'Please reload this page!' }) => {
  return (
    <div className={classes.container}>
      <img className={classes.img} src={Img} alt="Error message" />
      <p className= {classes.text} >Oops, something went wrong!</p>
      <p className= {classes.text} >{errmessage}</p>
    </div>
  );
};

export default ErrorMessageAnimation;
