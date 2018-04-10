import React,{Component} from 'react';
import {View ,Text , Button,TextInput,StyleSheet,ImageBackground} from 'react-native';
import startMainTabs from '../MainTabs/startMainTab'; 
import DefaultInput from '../../components/UI/DefaultInput/DefaultInput';
import HeadingText from '../../components/UI/HeadingText/HeadingText';
import MainText from '../../components/UI/MainText/MainText';
import backgroundImage from '../../assets/background.jpg';
import  ButtonWithBackground from '../../components/UI/ButtonWithBackground/ButtonWithBackground';

class AuthScreen extends Component{
    loginHandler(){
        startMainTabs();
    }
    render(){ 
        return(
             <ImageBackground source={backgroundImage} style={styles.backgroundImage} >
            <View style={styles.container}>
               
                    <MainText>
                         <Text style={styles.textHeading}>Please Login</Text>
                    </MainText>
                     <ButtonWithBackground color="#29aaf4" onPress={this.loginHandler} >Switch to login</ButtonWithBackground>  
                        <View style={styles.inputContainer}>
                            <DefaultInput style={styles.input}  placeholder="Your E-Mail Address"/>
                            <DefaultInput style={styles.input}  placeholder="Password"/>
                            <DefaultInput style={styles.input}  placeholder="Confirm Password"/> 
                        </View>  
                     <ButtonWithBackground color="#29aaf4" onPress={this.loginHandler} >Submit</ButtonWithBackground> 
            </View>
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


export default AuthScreen;