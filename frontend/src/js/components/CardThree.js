import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import RestaurantMenuRounded from '@material-ui/icons/RestaurantMenuRounded';
import { FormHelperText } from '@material-ui/core';
import PieChartIcon from '@material-ui/icons/PieChart';

const useTagCardStyles = makeStyles(({ palette }) => ({
  card: {
    border: '1px solid #F7F7F7',
    backgroundColor: '#fff',
    borderRadius: '12px',
    boxShadow: '0px 4px 8px rgba(0, 0, 0, 0.18)',
    
    width: '22vw',
    height: '25vh',
    margin: '40px 0 40px 0',
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

const CardThree = () => {
  const tagStyles = useTagCardStyles();

  return (
    <div>
    <Card className={tagStyles.card} elevation={0}>
      <CardContent className={tagStyles.innerCard}>
        <PieChartIcon 
          className={tagStyles.icon}
          fontSize="inherit"
          style={{ fontSize: '55px', margin: 'auto', width: '100%' }}
        />
        <Typography align="center" gutterBottom style={{fontSize: '18px', fontWeight: 'bold'}}>
          Leave the rest to us
        </Typography>
        <Typography
          color="textSecondary"
          variant="body2"
          align="center"
          component="p"
          style={{fontSize: '16px', padding: '15px 10px 15px 10px'}}
        >
          We build out an itinerary  and finalize hotels, reservations, excursions, table service, etc.  to ensure a seamless bachelor weekend
        </Typography>
      </CardContent>
    </Card>
    </div>
  )
}

export default CardThree;