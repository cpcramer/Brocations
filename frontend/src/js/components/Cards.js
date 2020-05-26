import React from 'react';
import CardOne from './CardOne';
import { makeStyles } from '@material-ui/core/styles';
import CardTwo from './CardTwo';
import CardThree from './CardThree';



const useStyles = makeStyles( () => ({
  root: {
    display: 'flex',
    justifyContent: 'space-evenly',
    style: {
      minHeight: '100vh'
    },
  }
}));

const Cards = () => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
        < CardOne />
        < CardTwo />
        < CardThree />
    </div>
  );
};

export default Cards;