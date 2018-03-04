import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {Button, View, Text, StyleSheet, TextInput, Image} from 'react-native';
import { Actions as RouteActions } from 'react-native-router-flux';

/**
 * TODO Step 3: done
 *
 * 1. Inside of the constructor set the default state of teamName
 *    i.e. this.state = {teamName: ''}
 * 2. Add TextInput component inside the render method
 * 3. Add onChangeText property on TextInput and pass this.setState to update the
 *    teamName in the component state.
 * 4. Add handleSubmit component method
 * 5. Bind the handleSubmit component method inside of the constuctor,
 *    i.e this.handleSubmit = this.handleSubmit.bind(this)
 * 6. Add Button component with the onPress action handler and pass handleSubmit to it.
 * 7. Setup propTypes for WelcomeForm component and add onSubmit to the propTypes.
 * 8. Export WelcomeForm component
 */

class WelcomeForm extends Component{
  constructor(props){
    super(props)

    this.state = {
      teamName: ''
    }

    this.handleSubmit = this.handleSubmit.bind(this)
  }

  render(){
    return(
      <View style={styles.container}>
         <View style = {styles.textInputContainer} >
           <TextInput
             placeholder="team name"
             style={styles.textInput}
             onChange={(text) => this.setState({teamName: text})}/>
           <Button style={styles.button} onPress={this.handleSubmit}>Get started</Button>
         </View>
      </View>
    )
  }

  handleSubmit(){
    this.props.onSubmit(this.state.teamName)
  }
}
const styles = StyleSheet.create({
  container:{
     flex: 1,
     justifyContent: 'center',
     alignItems: 'center'
   },
  text:{
     color: 'white',
     fontSize: 17,
     letterSpacing: 3
   },
  textInputContainer:{
     flex: 1,
     marginTop: 250
   },
  textInput: {
     width: 300,
     height: 50,
     margin: 20,
     borderColor: 'black',
     borderWidth: 1,
     color: 'white',
   },
   buttonContainer:{
     flex: 3
   },
   button: {
     alignSelf: 'center',
     color: 'black',
     backgroundColor: 'white',
     paddingTop: 15,
     paddingBottom: 15,
     paddingLeft: 70,
     paddingRight: 70,
     marginTop: 60,
     fontSize: 17,
     letterSpacing: 3
   }
 })

 WelcomeForm.propTypes = {
   onSubmit: PropTypes.func.isRequired
 }

 export default WelcomeForm
