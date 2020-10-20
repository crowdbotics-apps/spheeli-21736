import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import {createDrawerNavigator} from 'react-navigation-drawer';

import SplashScreen from "../features/SplashScreen";
import SideMenu from './sideMenu';
//@BlueprintImportInsertion
import Tutorial151431Navigator from '../features/Tutorial151431/navigator';
import NotificationList151403Navigator from '../features/NotificationList151403/navigator';
import Settings151402Navigator from '../features/Settings151402/navigator';
import Settings151394Navigator from '../features/Settings151394/navigator';
import UserProfile151392Navigator from '../features/UserProfile151392/navigator';

/**
 * new navigators can be imported here
 */

const AppNavigator = {

    //@BlueprintNavigationInsertion
Tutorial151431: { screen: Tutorial151431Navigator },
NotificationList151403: { screen: NotificationList151403Navigator },
Settings151402: { screen: Settings151402Navigator },
Settings151394: { screen: Settings151394Navigator },
UserProfile151392: { screen: UserProfile151392Navigator },

    /** new navigators can be added here */
    SplashScreen: {
      screen: SplashScreen
    }
};

const DrawerAppNavigator = createDrawerNavigator(
  {
    ...AppNavigator,
  },
  {
    contentComponent: SideMenu
  },
);

const AppContainer = createAppContainer(DrawerAppNavigator);

export default AppContainer;
