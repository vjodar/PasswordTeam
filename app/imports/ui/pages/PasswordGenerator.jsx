import React from 'react';
import { Grid, Image } from 'semantic-ui-react';

/** A simple static component to render some text for the landing page. */
class PasswordGenerator extends React.Component {
  render() {
    return (
      <Grid id='landing-page' verticalAlign='middle' textAlign='center' container>

        <Grid.Column width={4}>
          <Image size='small' circular src="/images/meteor-logo.png"/>
        </Grid.Column>

        <Grid.Column width={8}>
          <h1>Welcome to the password generator</h1>
          <p>Now get to work and modify this app!</p>
        </Grid.Column>

      </Grid>
    );
  }
}

export default PasswordGenerator;