import React,{Component} from "react";
import { View, Image, Text, Button, StyleSheet,TouchableOpacity } from "react-native";
import Icon from 'react-native-vector-icons/Ionicons';
import {connect} from 'react-redux';
import {deletePlace} from '../../store/actions/index';

class PlaceDetail extends Component {
placeDeletedHandler =()=>{
  console.log(this.props)
 this.props.onDeletePlace(this.props.selectedPlace.key);
  this.props.navigator.pop();
}
  
render(){
  return (
      <View style={styles.container}>
        <View>
          <Image source={this.props.selectedPlace.image} style={styles.placeImage} />
          <Text style={styles.placeName}>{this.props.selectedPlace.name}</Text>
        </View>
        <View style={styles.button}>
          <TouchableOpacity onPress={this.placeDeletedHandler}>
            <Icon size={30} name="ios-trash" color="red"/>
          </TouchableOpacity>
          <Button title="Close" onPress={this.props.onModalClosed} />
        </View>
      </View>
    );
  };
};

const styles = StyleSheet.create({
  container: {
    margin: 22
  },
  placeImage: {
    width: "100%",
    height: 200
  },
  placeName: {
    fontWeight: "bold",
    textAlign: "center",
    fontSize: 28
  },
  button:{
    display:'flex',
    flexDirection:'column',
    alignItems:'center'
  }
});

const mapDispatchToProps = dispatch =>{
  return {
    onDeletePlace:(key)=>dispatch(deletePlace(key))
  }
}

export default connect(null,mapDispatchToProps)(PlaceDetail);
