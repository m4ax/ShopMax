import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

export default function MediaCard(props) {

    const { product, cart, setCart } = props

    function handleChange() {
        setCart(cart +1)
    }

    return (
        <Card sx={{ maxWidth: 400 }}>
          <div style={{ height: 400, overflow: 'hidden', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
            <img
              src={product.image}
              alt={product.title}
              style={{
                objectFit: 'contain',
                objectPosition: 'center',
                maxWidth: '100%',
                maxHeight: '100%',
              }}
            />
      </div>
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
        {product.title}
        </Typography>
        <div className="description">
        <Typography variant="body2" color="text.secondary">
        {product.description}
        </Typography>
        </div>
      </CardContent>
      <CardActions>
        <Button size="small">£{product.price}</Button>
        <Button size="small" onClick={handleChange}>Add To Cart</Button>
      </CardActions>
    </Card>
  );
}


