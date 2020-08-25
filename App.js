/* eslint-disable prettier/prettier */
import React, {Component} from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import {createDrawerNavigator} from '@react-navigation/drawer';
import Icon from 'react-native-vector-icons/FontAwesome';



import Loading from './screen/Loading';
import Authentication from './screen/Authentication';
import SignUp from './screen/SignUp';
import Home from './screen/Home';
import AdminLogin from './screen/AdminLogin';
import AdminHome from './screen/AdminHome';
import DrawerContent from './screen/DrawerContent';
import ProductManagement from './screen/ProductManagement';
import AddCategory from './screen/AddCategory';
import RemoveCategory from './screen/RemoveCategory';

const Stack = createStackNavigator();
const Drawer = createDrawerNavigator();
const AdminDB = () => (
  <Drawer.Navigator drawerContent = {props => <DrawerContent { ... props} /> } >
    <Drawer.Screen name = "ProductManagement" component = {ProductManagement}
    />
  </Drawer.Navigator>
);
class App extends Component {
  render() {
    return (
    <NavigationContainer>
        <Stack.Navigator name= "root">
         <Stack.Screen
            name="Loading"
            component= {Loading}
            initial={true}
            options = {{
              headerShown : false,
            }} />
          <Stack.Screen
            name="Authentication"
            component= {Authentication}
            options = {{
              headerShown : false,
            }} />
          <Stack.Screen
            name="SignUp"
            component= {SignUp}
            options = {{
              headerShown : false,
            }} />
          <Stack.Screen
            name="Home"
            component= {Home}
            hideNavBar={true} />
          <Stack.Screen
            name="AdminLogin"
            component= {AdminLogin}
            options = {{
              headerShown : false,
            }} />
          <Stack.Screen
            name="AdminHome"
            component= {AdminDB}
            options = {{
                headerStyle : {
                backgroundColor : '#00E0C7',
               },
              headerTintColor : 'black',
              headerTitleStyles : 'bold',
              headerLeft : null,
              /*() => (
                // eslint-disable-next-line react/self-closing-comp
                <Icon.Button name = "bars" size = {25}
                backgroundColor = '#00E0C7' color = 'black' onPress = {() => this.props.navigation.openDrawer()}></Icon.Button>
              )*/}} />
          <Stack.Screen
            name="AddCategory"
            component= {AddCategory}
            options = {{
            headerShown : false,
            }} />

          <Stack.Screen
            name="RemoveCategory"
            component= {RemoveCategory}
            options = {{
            headerShown : false,
            }} />
        </Stack.Navigator>
      </NavigationContainer>
    );
  }
}

export default App;
