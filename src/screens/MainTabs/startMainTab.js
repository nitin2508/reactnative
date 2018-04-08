import {Navigation} from 'react-native-navigation';

const startTabs =() =>{
Navigation.startTabBasedApp ({
    tabs:[
        {
            screen:'awesome-app.FindPlaceScreen',
            label:'Find Place',
            title:'Find Place'
        },
        {
            screen:'awesome-app.SharePlaceScreen',
            label:'Share Place',
            title:'Share Place'
        }
    ]
});
}

export default startTabs;