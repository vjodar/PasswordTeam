import React from 'react';
import { Grid, Segment } from 'semantic-ui-react';
import { AutoForm, AutoField, ErrorsField, SubmitField } from 'uniforms-semantic';
import swal from 'sweetalert';
import SimpleSchema2Bridge from 'uniforms-bridge-simple-schema-2';
import SimpleSchema from 'simpl-schema';

function passwordGenerator(formModel) { 

    const lowerCaseLetters = Array.from("abcdefghijklmnopqrstuvwxyz");
    const upperCaseLetters = Array.from("ABCDEFGHIJKLMNOPQRSTUVWXYZ");
    const numbers = Array.from("1234567890");
    const specialCharacters = Array.from("!@#$%^*");
    let characterPool = lowerCaseLetters;
    let generatedPassword = "";
  
    if(formModel['include capital letters']) { characterPool = characterPool.concat(upperCaseLetters) }
    if(formModel['include numbers']) { characterPool = characterPool.concat(numbers) }
    if(formModel['include special characters']) { characterPool = characterPool.concat(specialCharacters) }
    
    for(let i=0; i < formModel['length of password']; i++) {
    	generatedPassword += characterPool[Math.floor(Math.random() * characterPool.length)]
    }

    return generatedPassword;
}

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

        'include numbers': 
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
        <AutoForm schema={passwordGeneratorSchema} onSubmit={(model) => swal(passwordGenerator(model))}>
            <Segment>
                <AutoField name='length of password' decimal={false}/>
                <AutoField name='include capital letters'/> 
                <AutoField name='include numbers'/>
                <AutoField name='include special characters'/>       
                <SubmitField value='Generate A Password'/>
                <ErrorsField/>
            </Segment>
        </AutoForm>
        </Grid.Column>

      </Grid>
    );
  }
}

export default PasswordGenerator;
