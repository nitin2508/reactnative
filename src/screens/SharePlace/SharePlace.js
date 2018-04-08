import React,{Component} from 'react';
import {connect} from 'react-redux';
import {View,Text} from 'react-native';
import PlaceInput from '../../components/PlaceInput/PlaceInput'
import {addPlace} from '../../store/actions/index';
class SharePlaceScreen extends Component{

    placeAddedHandler = placeName=>{
        console.log(this.props)
        this.props.onAddPlace(placeName);
    }
    render(){
        return(
            <View>
                <PlaceInput onPlaceAdded={this.placeAddedHandler}/>
            </View>
        )
    }
}

const mapDispatchToProps = dispatch =>{
    return{
        onAddPlace:(placeName)=>dispatch(addPlace(placeName))
    }
}

export default connect(null,mapDispatchToProps)(SharePlaceScreen);