import { createStackNavigator } from 'react-navigation-stack';
import Dashboard from '../screens/Home';
import Criar from '../screens/CriarEvento';
import FormCadEvento from '../screens/FormCadEvento';
import VerEvento from '../screens/VerEvento';
import Eventos from '../screens/Eventos';


const MainStack = createStackNavigator({
    Dashboard: {
        screen: Dashboard,
    },
    Criar: {
        screen: Criar
    },
    FormCadEvento: {
        screen: FormCadEvento
    },
    VerEvento: {
        screen: VerEvento
    },
    Eventos: {
        screen: Eventos
    }
}, {
    initialRouteName: 'Dashboard',
    defaultNavigationOptions: {
        title: 'H O M E',
        headerStyle: {
            backfaceVisibility: 'hidden',
            backgroundColor: '#DF4723',
            height: 100
        },
        headerTitleStyle: {
            fontSize: 30,
            alignSelf: 'center',
        },
        headerTintColor: '#FFF',

    }
}
);

export default MainStack;
// initialRouteName: 'Home',
// defaultNavigationOptions: {
//     headerStyle: {
//         backfaceVisibility: 'hidden',
//         backgroundColor: '#DF4723',
//         height: 100
//     },
//     headerTitleStyle: {
//         fontSize: 30,
//         alignSelf: 'center',
//     },
//     headerTintColor: '#FFF',

// }