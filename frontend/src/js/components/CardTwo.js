import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import { FormHelperText } from '@material-ui/core';
import AssessmentIcon from '@material-ui/icons/Assessment';

const useTagCardStyles = makeStyles(({ palette }) => ({
  card: {
    border: '1px solid #F7F7F7',
    backgroundColor: '#fff',
    borderRadius: '12px',
    boxShadow: '0px 4px 8px rgba(0, 0, 0, 0.18)',

    width: '22vw',
    height: '25vh',
    margin: '40px 0 0 0',
    minHeight: '30vh',
    background: palette.background.default,
    position: 'relative',
  },
  innerCard: {
    padding: '55px 20px 15px 20px',
  },
  icon: {
    color: '#fb4f4f',
  }
}));



const CardTwo = () => {
  const tagStyles = useTagCardStyles();

  return (
    <div>
    <Card className={tagStyles.card} elevation={0}>
      <CardContent className={tagStyles.innerCard}>
        <AssessmentIcon
          className={tagStyles.icon}
          fontSize="inherit"
          style={{ fontSize: '55px', margin: 'auto', width: '100%' }}
        />
        <Typography align="center" gutterBottom style={{fontSize: '18px', fontWeight: 'bold'}}>
          Design your dream party
        </Typography>
        <Typography
          color="textSecondary"
          variant="body2"
          align="center"
          component="p"
          style={{fontSize: '16px', padding: '15px 10px 15px 10px'}}
        >
          We will partner with the best man to identify the vibe of the crew and ensure that we plan the most epic bachelor bash
        </Typography>
      </CardContent>
    </Card>
    </div>
  )
}

export default CardTwo;