import React from 'react';
import { createAppContainer } from 'react-navigation';
import MainNavigator from './src/navigators/MainNavigator';
import Drawer from './src/navigators/HomeDrawer';

export default createAppContainer(MainNavigator);

console.disableYellowBox = true;