import { createStackNavigator } from 'react-navigation-stack';
import Drawer from './HomeDrawer';
import Login from '../screens/Login';
import Cadastro from '../screens/Cadastro';
// import Home from '../screens/Home';
// import Criar from '../screens/CriarEvento';
// import FormCadEvento from '../screens/FormCadEvento';
// import VerEvento from '../screens/VerEvento';
// import Eventos from '../screens/Eventos';


const MainNavigator = createStackNavigator({
    Login: {
        screen: Login,
    },
    Drawer: {
        screen: Drawer
    },
    Cadastro: {
        screen: Cadastro
    },

});

export default MainNavigator;