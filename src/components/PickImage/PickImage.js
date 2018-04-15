import React ,{Component} from 'react';
import {View,Button,Image,StyleSheet} from 'react-native';
import imagePlaceholder from '../../assets/beautiful-place.jpg';
import ImagePicker from 'react-native-image-picker';

class PickImage extends Component{
    state = {
        pickedImage:null
    }

    pickImageHandler = ()=>{
        ImagePicker.showImagePicker({title:'Pick an image'},res=>{
            if(res.didCancel){
                console.log('User cancelled');
            }else if(res.error){
                console.log('error')
            }else{
                this.setState({
                    pickedImage:{uri:res.uri}
                })
                this.props.onImagePicked({uri:res.uri});
            }
        });
    }

    render(){
        return(<View style={styles.container}>
                    <View style={styles.placeholder}>
                        <Image style={styles.previewImage} source={this.state.pickedImage}/>
                    </View>
                    <View style={styles.button}>
                        <Button onPress={this.pickImageHandler}  title="Pick Image"></Button>
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


export default PickImage;