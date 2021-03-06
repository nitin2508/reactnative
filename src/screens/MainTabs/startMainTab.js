import {Navigation} from 'react-native-navigation';
import Icon from 'react-native-vector-icons/Ionicons';
import {Platform} from 'react-native';

const startTabs =() =>{
    Promise.all([
 Icon.getImageSource(Platform.OS==='android'?"md-map":"ios-map",30),
 Icon.getImageSource(Platform.OS==='android'?"md-menu":"ios-menu",30),
 Icon.getImageSource(Platform.OS==='android'?'md-share-alt':'ios-share-alt',30)])
 .then((sources)=>{   
     console.log('called');
Navigation.startTabBasedApp ({
    tabs:[
        {
            screen:'awesome-app.FindPlaceScreen',
            label:'Find Place',
            title:'Find Place' ,
            icon:sources[0],
            navigatorButtons:{
                leftButtons:[{icon:sources[1],title:"Menu",id:'sideDrawerToggle'}]
            }
        },
        {
            screen:'awesome-app.SharePlaceScreen',
            label:'Share Place',
            title:'Share Place',
            icon:sources[2],
            navigatorButtons:{
                leftButtons:[{icon:sources[1],title:"Menu",id:'sideDrawerToggle'}]
            }
        },
    ],
    drawer:{
        left:{
            screen:'awesome-app.SideDrawer'
        }
    }
});
});
};

export default startTabs;