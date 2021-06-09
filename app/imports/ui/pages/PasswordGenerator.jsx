import React from 'react';
import { Grid, Segment } from 'semantic-ui-react';
import { AutoForm, AutoField, ErrorsField, SubmitField } from 'uniforms-semantic';
import swal from 'sweetalert';
import SimpleSchema2Bridge from 'uniforms-bridge-simple-schema-2';
import SimpleSchema from 'simpl-schema';

const passwordGeneratorSchema = new SimpleSchema2Bridge(
    new SimpleSchema({
        'length of password': 
        { 
            type: Number, 
            min: 1, max: 50, 
            required: true 
        },

        'include capital letters': 
        { 
            type: Boolean, 
            required: false 
        },

        'include special characters': 
        { 
            type: Boolean, 
            required: false 
        }
    })
  )

/** A simple static component to render some text for the landing page. */
class PasswordGenerator extends React.Component {
  render() {
    return (
      <Grid id='passwordGenerator' container centered>

        <Grid.Column width={5}>
        <AutoForm schema={passwordGeneratorSchema} onSubmit={(model) => swal(JSON.stringify(model))} >
            <Segment>
                <AutoField name='length of password' decimal={false}/>
                <AutoField name='include capital letters'/> 
                <AutoField name='include special characters'/>       
                <SubmitField value='Generate My Password'/>
                <ErrorsField/>
            </Segment>
        </AutoForm>
        </Grid.Column>

      </Grid>
    );
  }
}

export default PasswordGenerator;
