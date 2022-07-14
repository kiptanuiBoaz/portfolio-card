import React from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";

const styles = {
  card: {
    maxWidth: 345,
    width: 300,
    margin: "0 auto",
    marginTop: 50
  },
  media: {
    height: 140
  },
  size: {
    display: "flex",
    flexWrap: "wrap",
    alignItem: "space-between"
  }
};

function MediaCard(props) {
  const { classes } = props;
  return (
    <div className={classes.size}>
      <Card className={classes.card}>
        <CardActionArea>
          <CardMedia
            className={classes.media}
            image="https://camo.githubusercontent.com/e8f8bbda8d0202494ecb28a00292f844f5d0e550/687474703a2f2f672e7265636f726469742e636f2f744663777071774358792e676966"
            title="Contemplative Reptile"
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="h2">
              WeatherApp
            </Typography>
            <Typography component="p">
              Lizards are a widespread group of squamate reptiles, with over
              6,000 species, ranging across all continents except Antarctica
            </Typography>
          </CardContent>
        </CardActionArea>
        <CardActions>
          <Button size="small" color="primary">
            GitHub
          </Button>
          <Button size="small" color="primary">
            Demo
          </Button>
        </CardActions>
      </Card>
      <Card className={classes.card}>
        <CardActionArea>
          <CardMedia
            className={classes.media}
            image="https://camo.githubusercontent.com/e8f8bbda8d0202494ecb28a00292f844f5d0e550/687474703a2f2f672e7265636f726469742e636f2f744663777071774358792e676966"
            title="Contemplative Reptile"
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="h2">
              WeatherApp
            </Typography>
            <Typography component="p">
              Lizards are a widespread group of squamate reptiles, with over
              6,000 species, ranging across all continents except Antarctica
            </Typography>
          </CardContent>
        </CardActionArea>
        <CardActions>
          <Button size="small" color="primary">
            GitHub
          </Button>
          <Button size="small" color="primary">
            Demo
          </Button>
        </CardActions>
      </Card>
    </div>
  );
}

MediaCard.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(MediaCard);
