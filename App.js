import {Navigation} from 'react-native-navigation';
import AuthScreen from './src/screens/Auth/Auth';
import SharePlaceScreen from './src/screens/SharePlace/SharePlace';
import FindPlaceScreen from './src/screens/FindPlace/FindPlace';
import configureStore from './src/store/configureStore';
import { Provider } from 'react-redux';
import PlaceDetailScreen from './src/screens/PlaceDetail/PlaceDetail'
import SideDrawer from './src/screens/SideDrawer/SideDrawer';



const store = configureStore();
//Register screens
Navigation.registerComponent("awesome-app.AuthScreen",()=>AuthScreen,store,Provider);
Navigation.registerComponent("awesome-app.SharePlaceScreen",()=>SharePlaceScreen,store,Provider);
Navigation.registerComponent("awesome-app.FindPlaceScreen",()=>FindPlaceScreen,store,Provider) ;
Navigation.registerComponent("awesome-app.PlaceDetailScreen",()=>PlaceDetailScreen,store,Provider) ;
Navigation.registerComponent("awesome-app.SideDrawer",()=>SideDrawer,store,Provider);
//start a app
Navigation.startSingleScreenApp({
  screen:{
    screen:"awesome-app.AuthScreen",
    title:"Login"
  }
})