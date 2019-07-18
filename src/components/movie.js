import React from 'react';


import {
  Typography, Grid, Card,
} from '@material-ui/core';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';


const Movie = ({ title, poster, year }) => (
        <div>
            <Grid
              item
              style={{
                marginLeft: 10, marginTop: 30, width: 300, flexGrow: 1,
              }}
            >
                <Grid item xL>
                        <Card>
                            <CardActionArea>
                                <CardMedia
                                  component="img"
                                  alt={title}
                                  image={poster}
                                  title={title}
                                />
                                <CardContent>
                                    <Typography align="center" variant="h5" color="primary">
                                        {title}
                                    </Typography>
                                    <Typography align="center" variant="h6" color="inherit">
                                        {year}
                                    </Typography>
                                </CardContent>
                            </CardActionArea>
                        </Card>
                </Grid>
            </Grid>
        </div>
);

export default Movie;
