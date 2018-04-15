import React,{Component} from 'react';
import {View,Text,TouchableOpacity,StyleSheet,Animated} from 'react-native';
import {connect} from 'react-redux';
import PlaceList from '../../components/PlaceList/PlaceList';
class FindPlaceScreen extends Component{
       constructor(props){
        super(props);
        this.props.navigator.setOnNavigatorEvent(this.onNavigatorEvent);
    }

    state = {
        placeLoaded:false,
        removeAnim:new Animated.Value(1)
    }

    onNavigatorEvent = event=>{
       if(event.type ==="NavBarButtonPress"){
           if(event.id ==='sideDrawerToggle'){
               this.props.navigator.toggleDrawer({

               })
           }
       }
    }


    itemSelectedhandler = key=>{
        const selPlace = this.props.places.find(place=>{
                return place.key ===key;
            });
        this.props.navigator.push({
            screen:"awesome-app.PlaceDetailScreen",
            title: selPlace.name,
            passProps:{
                selectedPlace:selPlace
            }
        });
    }

    placesSearchHandler =()=>{
        Animated.timing(this.state.removeAnim,{
        toValue:0, 
        duration:500,
        useNativeDriver:true
        }).start();
         this.setState({placeLoaded:true})
    }

    render(){
        let content = (
            <Animated.View style={{opacity:this.state.removeAnim,transform:[{scale:this.state.removeAnim.interpolate({inputRange:[0,1],outputRange:[12,1]})}]}}>
            <TouchableOpacity onPress={this.placesSearchHandler}>
                <View style={styles.searchButton}>
                    <Text style={styles.searchButtonText}>Find Places</Text>
                </View>
            </TouchableOpacity>
            </Animated.View>
        );
        if(this.state.placeLoaded){
            content = (<PlaceList places={this.props.places} onItemSelected= {this.itemSelectedhandler}/>);
        }
        return(
            <View style={this.state.placeLoaded?null:styles.buttonContainer}>
               {content}
            </View>
        )
    }
}

const mapStateToProps = state=>{
    console.log('-------');
    console.log(state)
    return{
        places:state.places.places
    }
}

const styles = StyleSheet.create({
    searchButton:{
        borderColor:'orange',
        borderWidth:3,
        borderRadius:50,
        padding:20
    },
    searchButtonText:{
        color:"orange",
        fontWeight:"bold",
        fontSize:26
    },
    buttonContainer:{
        flex:1,
        justifyContent:"center",
        alignItems:"center"
    },
    listContainer:{

    }
})

export default connect(mapStateToProps,null)(FindPlaceScreen);