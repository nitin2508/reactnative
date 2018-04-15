import React ,{Component} from 'react';
import MapView from 'react-native-maps';
import {View,Button,Image,StyleSheet,Text,Dimensions} from 'react-native';
import imagePlaceholder from '../../assets/beautiful-place.jpg';


class PickLocation extends Component{

    state = {
        focusedLocation:{
             latitude: 37.78825,
            longitude: -122.4324,
            latitudeDelta: 0.0122,
            longitudeDelta: Dimensions.get("window").width/Dimensions.get("window").height *0.0122,
        },
        locationChosen:false
    }

    pickLocationHandler = (event)=>{
        const coords = event.nativeEvent.coordinate;
        this.map.animateToRegion({
            ...this.state.focusedLocation,
            latitude:coords.latitude,
            longitude:coords.longitude
        })
        this.setState((prevState)=>{
            return {focusedLocation:{
                ...prevState.focusedLocation,
                latitude:coords.latitude,
                longitude:coords.longitude
            },
            locationChosen:true
            }
        })
        this.props.onLocationPick({
            latitude:coords.latitude,
            longitude:coords.longitude
        })
    }

        getLocationHandler = ()=>{
        navigator.geolocation.getCurrentPosition(pos=>{
            console.log(pos)
            const coordsEvent = {
                nativeEvent:{
                    coordinate:{
                        latitude:pos.coords.latitude,
                        longitude:pos.coords.longitude
                    }
                }
            }
            this.pickLocationHandler(coordsEvent);
        },err=>{
            console.log(err);
            alert(err)
        });
    }


    render(){
        let marker =null;
        if(this.state.locationChosen){
            marker = <MapView.Marker coordinate={this.state.focusedLocation} />
        }

        return(<View style={styles.container}>
                    <MapView onPress={this.pickLocationHandler} style={styles.map}
                        initialRegion={this.state.focusedLocation}
                        ref ={ref=>this.map = ref}
                    >{marker}</MapView>
                    <View style={styles.button}>
                        <Button onPress={this.getLocationHandler} title="Locatess Me"></Button>
                    </View>
               </View> 
                );
    }
}

const styles = StyleSheet.create({ 
    container:{
        width:"100%",
        alignItems:"center"
    },
    map:{
        width:"100%",
        height:250
    },
    button:{
        margin:8
    },
})


export default PickLocation;