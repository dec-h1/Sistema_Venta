import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';

const CardUser = ({ img, name, description, precio }) => {
  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardActionArea>
        <CardMedia component="img" image={img} alt="logo-fruits"/>
        <CardContent>
          <Typography gutterBottom variant="h4" component="div">
            {name}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            {description}
          </Typography>
          <Typography variant="caption2" color="text.secondary">
            {precio}
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
}
export default CardUser;
