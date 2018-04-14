import React,{Component} from 'react';
import {View,Text,Dimensions,StyleSheet,TouchableOpacity,Platform} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

class SideDrawer extends Component{
    render(){
        return(          
                <View style={[styles.container,{width:Dimensions.get("window").width*0.8}]}>
                    <TouchableOpacity>
                        <View style={styles.drawerItem}>
                            <Icon style={styles.drawerItemIcon} name={Platform.OS ==='android'?"md-log-out":"ios-log-out"} color="#aaa" size={30}/>
                            <Text>Sign Out</Text>
                        </View>
                    </TouchableOpacity>
                </View>
        );
    }
}

const styles = StyleSheet.create({
    drawerItem:{
        flexDirection:"row",
        alignItems:"center",
        padding:10,
        backgroundColor:"#eee"
    },
    container:{
        paddingTop:50,
        backgroundColor:"white",
        flex:1
    },
    drawerItemIcon:{
        marginLeft:30
    }
})

export default SideDrawer;