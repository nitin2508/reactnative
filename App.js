import {Navigation} from 'react-native-navigation';
import AuthScreen from './src/screens/Auth/Auth';
import SharePlaceScreen from './src/screens/SharePlace/SharePlace';
import FindPlaceScreen from './src/screens/FindPlace/FindPlace';
//Register screens
Navigation.registerComponent("awesome-app.AuthScreen",()=>AuthScreen);
Navigation.registerComponent("awesome-app.SharePlaceScreen",()=>SharePlaceScreen);
Navigation.registerComponent("awesome-app.FindPlaceScreen",()=>FindPlaceScreen);

//start a app
Navigation.startSingleScreenApp({
  screen:{
    screen:"awesome-app.AuthScreen",
    title:"Login"
  }
})