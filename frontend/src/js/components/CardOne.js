import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import RestaurantMenuRounded from '@material-ui/icons/RestaurantMenuRounded';
import { FormHelperText } from '@material-ui/core';
import PeopleOutlineIcon from '@material-ui/icons/PeopleOutline';

const useTagCardStyles = makeStyles(({ palette }) => ({
  card: {
    border: '3px solid #E0E0E0',
    width: '27vw',
    height: '25vh',
    margin: '40px 0 0 0',
    minHeight: '25vh',
    background: palette.background.default,
    position: 'relative',
  },
  innerCard: {
    padding: '15px 20px 15px 20px',
  }, 
  icon: {
    color: '#fb4f4f',
  }
}));



const CardOne = () => {
  const tagStyles = useTagCardStyles();

  return (
    <div>
    <Card className={tagStyles.card} elevation={0}>
      <CardContent className={tagStyles.innerCard}>
        <PeopleOutlineIcon
          className={tagStyles.icon}
          fontSize="inherit"
          style={{ fontSize: '55px', margin: 'auto', width: '100%' }}
        />
        <Typography align="center" gutterBottom style={{fontSize: '18px', fontWeight: 'bold'}}>
          Send in your info
        </Typography>
        <Typography
          color="textSecondary"
          variant="body2"
          align="center"
          component="p"
          style={{fontSize: '16px', padding: '15px 10px 15px 10px'}}
        >
          Send us a list of all of your bros and the viable dates for your brocation
        </Typography>
      </CardContent>
    </Card>
    </div>
  )
}

export default CardOne;