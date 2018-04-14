import React,{Component} from 'react';
import {View ,Text , Button,TextInput,StyleSheet,ImageBackground,KeyboardAvoidingView,Keyboard,TouchableWithoutFeedback} from 'react-native';
import startMainTabs from '../MainTabs/startMainTab'; 
import DefaultInput from '../../components/UI/DefaultInput/DefaultInput';
import HeadingText from '../../components/UI/HeadingText/HeadingText';
import MainText from '../../components/UI/MainText/MainText';
import backgroundImage from '../../assets/background.jpg';
import  ButtonWithBackground from '../../components/UI/ButtonWithBackground/ButtonWithBackground';
import validate from '../../utility/validation';
import {connect} from 'react-redux';
import {tryAuth} from '../../store/actions/index';

class AuthScreen extends Component{
    state = {
        controls:{
            email:{
                value:'',
                valid:false,
                validationRules:{
                    isEmail:true
                },
                touched:false
            },
            password:{
                value:"",
                valid:false,
                validationRules:{
                    minLength:6
                },
                touched:false
            },
            confirmPassword:{
                value:"",
                valid:false,
                validationRules:{
                    equalTo:'password'
                },
                touched:false
            }
        },
        authMode:'signup'
    }

    switchModeHandler =()=>{
        this.setState(prevState=>{
            return{
                authMode:prevState.authMode==='login'?'signup':'login'
            }
        })
    }

    loginHandler = ()=>{
        const authData ={
            email:this.state.controls.email.value,
            password:this.state.controls.password.value
        } 
        this.props.onLogin(authData);
        startMainTabs();
    }



    updateInputState = (key, value) => {
    let connectedValue = {};
    if (this.state.controls[key].validationRules.equalTo) {
      const equalControl = this.state.controls[key].validationRules.equalTo;
      const equalValue = this.state.controls[equalControl].value;
      connectedValue = {
        ...connectedValue,
        equalTo: equalValue
      };
    }
    if (key === "password") {
      connectedValue = {
        ...connectedValue,
        equalTo: value
      };
    }
    this.setState(prevState => {
      return {
        controls: {
          ...prevState.controls,
          confirmPassword: {
            ...prevState.controls.confirmPassword,
            valid:
              key === "password"
                ? validate(
                    prevState.controls.confirmPassword.value,
                    prevState.controls.confirmPassword.validationRules,
                    connectedValue
                  )
                : prevState.controls.confirmPassword.valid,
          },
          [key]: {
            ...prevState.controls[key],
            value: value,
            valid: validate(
              value,
              prevState.controls[key].validationRules,
              connectedValue
            ),
            touched:true
          }
        }
      };
    });
  };

    render(){ 
        return(
             <ImageBackground source={backgroundImage} style={styles.backgroundImage} >
                <KeyboardAvoidingView behavior="padding" style={styles.container}>
                        <MainText>
                            <Text style={styles.textHeading}>Please Login</Text>
                        </MainText>
                        <ButtonWithBackground color="#29aaf4" onPress={this.switchModeHandler} >Switch to {this.state.authMode}</ButtonWithBackground>
                        <TouchableWithoutFeedback onPress={Keyboard.dismiss}>  
                            <View style={styles.inputContainer}>
                                <DefaultInput onChangeText={(val)=>this.updateInputState('email',val)} value={this.state.controls.email.value} style={styles.input}  placeholder="Your E-Mail Address" valid={this.state.controls.email.valid} touched={this.state.controls.email.touched}
                                    autoCapitalize="none" autoCorrect={false} keyboardType="email-address" />
                                <DefaultInput value={this.state.controls.password.value} style={styles.input} onChangeText={(val)=>this.updateInputState('password',val)}  placeholder="Password" valid={this.state.controls.password.valid} secureTextEntry={true}
                                     touched={this.state.controls.password.touched}/>
                                {/* <DefaultInput value={this.state.controls.confirmPassword.value} style={styles.input} onChangeText={(val)=>this.updateInputState('confirmPassword',val)} valid={this.state.controls.confirmPassword.valid}  placeholder="Confirm Password" touched={this.state.controls.confirmPassword.touched}/>  */}
                            </View>  
                            </TouchableWithoutFeedback>
                        <ButtonWithBackground disabled={! this.state.controls.email.valid} color="#29aaf4" onPress={this.loginHandler} >Submit</ButtonWithBackground> 
                </KeyboardAvoidingView>
             </ImageBackground>
         );
    }
}

const styles= StyleSheet.create({
    container:{
        borderColor:"red",
        borderWidth:1,
        flex:1,
        alignItems:'center',
        justifyContent:'center'
    },
    inputContainer:{
        width:"80%"
    },
    backgroundImage:{
        width:'100%',
        flex:1
    },
    input:{
        backgroundColor:"#eee",
        borderColor:"#bbb"
    },
    textHeading:{
        fontSize:28,
        fontWeight:"bold"
    }
  
});

const mapDispatchToProps = (dispatch)=>{
    return{
        onLogin:(authData)=>dispatch(tryAuth(authData))
    }
}


export default connect(null,mapDispatchToProps)(AuthScreen);