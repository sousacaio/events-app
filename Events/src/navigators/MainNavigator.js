import { createStackNavigator } from 'react-navigation-stack';
import Drawer from './HomeDrawer';
import Login from '../screens/Login';
import Cadastro from '../screens/Cadastro';
import Home from '../screens/Home';
import Criar from '../screens/CriarEvento';
import FormCadEvento from '../screens/FormCadEvento';
import VerEvento from '../screens/VerEvento';
import Eventos from '../screens/Eventos';
import MinhaConta from '../screens/MinhaConta';
import Confirmar from '../screens/Confirmar';


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
    Home: { screen: Home },
    Criar: { screen: Criar },
    FormCadEvento: { screen: FormCadEvento },
    VerEvento: { screen: VerEvento },
    Eventos: { screen: Eventos },
    MinhaConta: { screen: MinhaConta },
    Confirmar: { screen: Confirmar }

}, {
    defaultNavigationOptions: {
        header: null
    }
});

export default MainNavigator;