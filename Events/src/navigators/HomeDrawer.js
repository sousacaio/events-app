import { createStackNavigator } from 'react-navigation-stack';
import MainStack from './StackNavigator';

const Drawer = createStackNavigator({
    MainStack: {
        screen: MainStack,
        navigationOptions: {
            header: null, //hide header if not needed so whole screen slide  
        },
    }
}, {
    defaultNavigationOptions: {
        header: false
    }
});

export default Drawer;