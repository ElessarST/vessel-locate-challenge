import React from 'react';
import PropTypes from 'prop-types';
import { Grid, withStyles, Typography, Icon, TextField, Button } from 'material-ui';

import AboutPageSection from '../components/AboutPageSection';

const AboutSection = () => (
  <AboutPageSection title="About Us">
    <Typography align="center" gutterBottom>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
      Praesent vel blandit neque.
      Etiam commodo bibendum quam, et tristique justo lacinia eu.
      Cras molestie arcu tincidunt tortor molestie posuere.
      Sed varius hendrerit quam id eleifend. Nullam ultricies non orci quis consectetur.
      Sed mollis sem risus, fermentum lobortis eros semper eget.
      Aenean sed sollicitudin tellus, vel placerat neque.
      Aliquam sagittis vehicula ipsum, ut condimentum justo varius a.
      Curabitur et viverra massa. Integer quis risus dolor.
      Aliquam vulputate arcu quis lacus malesuada cursus.
      Quisque ornare turpis non lacinia pharetra.
      Donec facilisis dui ullamcorper, auctor purus quis, facilisis lorem.
      Etiam iaculis mauris justo, nec feugiat est vestibulum nec.
    </Typography>
    <Typography align="center">
      Nunc ac feugiat orci. Aliquam nisl nisl, pharetra at placerat ac, varius eu risus.
      Nam nulla neque, viverra in arcu at, sollicitudin laoreet diam.
      Ut interdum magna vel odio congue, in ultricies nisl convallis.
      Donec enim mi, faucibus dignissim eros a, congue hendrerit magna.
      Integer sapien neque, cursus ac malesuada consectetur, vestibulum at nulla.
      Integer pulvinar in sem sed convallis. Aenean lobortis suscipit tincidunt.
      Nam sagittis congue sapien, quis tincidunt turpis condimentum quis.
      Suspendisse vel euismod massa.
    </Typography>
  </AboutPageSection>
);

const AddressSection = ({ classes }) => (
  <AboutPageSection title="Address">
    <Grid container direction="row" justify="space-between" alignItems="center">
      <Grid item xs={12} sm={12} md={2}>
        <Grid container direction="row" alignItems="center" justify="center">
          <Icon className={classes.icon}>location_on</Icon>
        </Grid>
      </Grid>
      <Grid item xs={12} sm={12} md={10}>
        <Typography align="center">
          12321 Some 4th Street, Some City, WA 12132
        </Typography>
      </Grid>
    </Grid>
  </AboutPageSection>
);

AddressSection.propTypes = {
  classes: PropTypes.object.isRequired,
};

class ContactFormSection extends React.Component {
  static getInitialState() {
    return {
      name: '',
      email: '',
      message: '',
    };
  }

  constructor(props) {
    super(props);
    this.sendForm = this.sendForm.bind(this);
  }

  state = ContactFormSection.getInitialState();

  handleChange = name => (event) => {
    this.setState({
      [name]: event.target.value,
    });
  };

  sendForm() {
    this.setState(ContactFormSection.getInitialState());
  }

  render() {
    return (
      <AboutPageSection title="Contact Form">
        <form noValidate className={this.props.classes.form}>
          <TextField
            id="name"
            label="Name"
            value={this.state.name}
            onChange={this.handleChange('name')}
            margin="normal"
          />
          <TextField
            id="email"
            label="Email"
            value={this.state.email}
            onChange={this.handleChange('email')}
            margin="normal"
          />
          <TextField
            multiline
            rowsMax={5}
            id="message"
            label="Message"
            value={this.state.message}
            onChange={this.handleChange('message')}
            margin="normal"
          />
        </form>
        <Button variant="raised" size="medium" color="primary" onClick={this.sendForm}>
          Send Message
        </Button>
      </AboutPageSection>
    );
  }
}

ContactFormSection.propTypes = {
  classes: PropTypes.object.isRequired,
};

const AboutPage = ({ classes }) => (
  <div className={classes.root}>
    <Grid
      container
      spacing={24}
      alignItems="stretch"
    >
      <Grid item xs={12}>
        <Grid container spacing={24} alignItems="stretch" direction="row">
          <Grid item xs={12} sm={9}>
            <AboutSection />
          </Grid>
          <Grid item xs={12} sm={3}>
            <AddressSection classes={classes} />
          </Grid>
        </Grid>
      </Grid>
      <Grid item xs={12}>
        <ContactFormSection classes={classes} />
      </Grid>
    </Grid>
  </div>
);

AboutPage.propTypes = {
  classes: PropTypes.object.isRequired,
};

const styles = theme => ({
  root: {
    flexGrow: 1,
    margin: 24,
  },
  icon: {
    color: theme.palette.secondary.main,
  },
  form: {
    display: 'flex',
    flexDirection: 'column',
    width: '100%',
    marginBottom: 16,
  },
});

export default withStyles(styles)(AboutPage);
