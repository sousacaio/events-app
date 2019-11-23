import { createDrawerNavigator } from 'react-navigation-drawer';
import MainStack from './StackNavigator';

const Drawer = createDrawerNavigator({
    MainStack: {
        screen: MainStack
    }
});

export default Drawer;