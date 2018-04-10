import React,{Component} from 'react';
import {connect} from 'react-redux';
import {View,Text,Button,TextInput,StyleSheet,ScrollView,Image} from 'react-native';
import PlaceInput from '../../components/PlaceInput/PlaceInput'
import {addPlace} from '../../store/actions/index';
import DefaultInput from '../../components/UI/DefaultInput/DefaultInput';
import HeadingText from '../../components/UI/HeadingText/HeadingText';
import MainText from '../../components/UI/MainText/MainText';
import imagePlaceholder from '../../assets/beautiful-place.jpg';
class SharePlaceScreen extends Component{
    constructor(props){
        super(props);
        this.props.navigator.setOnNavigatorEvent(this.onNavigatorEvent);
    }

    onNavigatorEvent = event=>{
       if(event.type ==="NavBarButtonPress"){
           if(event.id ==='sideDrawerToggle'){
               this.props.navigator.toggleDrawer({

               })
           }
       }
    }

    placeAddedHandler = placeName=>{
        console.log(this.props)
        this.props.onAddPlace(placeName);
    }
    render(){
        return(
            <ScrollView>
                <View style={styles.container}>
                <MainText><HeadingText>Share a Place with us</HeadingText></MainText>
                <View style={styles.placeholder}><Image style={styles.previewImage} source={imagePlaceholder}/></View>
                <View style={styles.button}>
                <Button onPress={this.placeAddedHandler}  title="Pick Image"></Button>
                </View>
                <View style={styles.placeholder}><Text>Map</Text></View>
                <Button onPress={this.placeAddedHandler} title="Locate Me"></Button>
                <DefaultInput placeholder="Placename"/>
                <Button onPress={this.placeAddedHandler}  title="Share the place"></Button>
                <PlaceInput onPlaceAdded={this.placeAddedHandler}/>
                </View>
            </ScrollView>
        )
    }
}

const styles = StyleSheet.create({
    container:{
        flex:1,
        alignItems:"center"
    }, 
    placeholder:{
        borderWidth:1,
        borderColor:"black",
        backgroundColor:'#eee',
        width:"80%",
        height:150
    },
    button:{
        margin:8
    },
    previewImage:{
        width:"100%",
        height:"100%"
    }
})

const mapDispatchToProps = dispatch =>{
    return{
        onAddPlace:(placeName)=>dispatch(addPlace(placeName))
    }
}

export default connect(null,mapDispatchToProps)(SharePlaceScreen);