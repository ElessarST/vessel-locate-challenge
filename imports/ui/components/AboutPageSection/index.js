import React from 'react';
import PropTypes from 'prop-types';
import { Card, CardContent, Typography, withStyles, Grid } from 'material-ui';

const AboutPageSection = ({ classes, children, title }) => (
  <Card className={classes.card}>
    <CardContent className={classes.cardContent}>
      <Typography gutterBottom variant="headline" component="h2" align="center" color="primary">
        { title }
      </Typography>
      <Grid container direction="column" justify="center" alignItems="center" className={classes.contentContainer}>
        <div className={classes.content}>
          { children }
        </div>
      </Grid>
    </CardContent>
  </Card>
);

const styles = () => ({
  card: {
    height: '100%',
  },
  cardContent: {
    display: 'flex',
    flexDirection: 'column',
    height: '100%',
  },
  contentContainer: {
    flex: 1,
  },
  content: {
    maxWidth: 700,
    width: '100%',
  },
});

AboutPageSection.propTypes = {
  classes: PropTypes.object.isRequired,
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]),
  title: PropTypes.string.isRequired,
};

export default withStyles(styles)(AboutPageSection);
