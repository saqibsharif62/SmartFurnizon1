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
import SBeds from './screen/SearchResults/Beds';
import SChairs from './screen/SearchResults/Chairs';
import SCouches from './screen/SearchResults/Couches';
import SOfficeChair from './screen/SearchResults/OfficeChair';
import STables from './screen/SearchResults/Tables';
import CameraContainer from './screen/ImageRecognition/CameraContainer';
import Details from './screen/Details/Details';
import DLuxuryChair from './screen/Details/NewProducts/DLuxuryChair';
import DComputerDesk from './screen/Details/NewProducts/DComputerDesk';
import DCouch from './screen/Details/NewProducts/DCouch';
import DDiningTable from './screen/Details/NewProducts/DDiningTable';
import DOfficeTable from './screen/Details/NewProducts/DOfficeTable';
import DBed1 from './screen/Details/Products/DBed1';
import DChair1 from './screen/Details/Products/DChair1';
import DTable1 from './screen/Details/Products/DTable1';
import DCouch1 from './screen/Details/Products/DCouch1';
import DOffChair1 from './screen/Details/Products/DOffChair1';

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
            options = {{
              headerShown : false,
            }} />
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

          <Stack.Screen
            name="SBeds"
            component= {SBeds}
            options = {{
            headerShown : false,
            }} />

          <Stack.Screen
            name="SChairs"
            component= {SChairs}
            options = {{
            headerShown : false,
            }} />

          <Stack.Screen
            name="STables"
            component= {STables}
            options = {{
            headerShown : false,
            }} />

          <Stack.Screen
            name="SCouches"
            component= {SCouches}
            options = {{
            headerShown : false,
            }} />

          <Stack.Screen
            name="SOfficeChair"
            component= {SOfficeChair}
            options = {{
            headerShown : false,
            }} />

          <Stack.Screen
            name="CameraContainer"
            component= {CameraContainer}
            options = {{
            headerShown : false,
            }} />

          <Stack.Screen
            name="Details"
            component= {Details}
            options = {{
            headerShown : false,
            }} />

          <Stack.Screen
            name="DLuxuryChair"
            component= {DLuxuryChair}
            options = {{
            headerShown : false,
            }} />

          <Stack.Screen
            name="DCouch"
            component= {DCouch}
            options = {{
            headerShown : false,
            }} />

          <Stack.Screen
            name="DComputerDesk"
            component= {DComputerDesk}
            options = {{
            headerShown : false,
            }} />

          <Stack.Screen
            name="DDiningTable"
            component= {DDiningTable}
            options = {{
            headerShown : false,
            }} />

          <Stack.Screen
            name="DOfficeTable"
            component= {DOfficeTable}
            options = {{
            headerShown : false,
            }} />

          <Stack.Screen
            name="DBed1"
            component= {DBed1}
            options = {{
            headerShown : false,
            }} />

          <Stack.Screen
            name="DChair1"
            component= {DChair1}
            options = {{
            headerShown : false,
            }} />

          <Stack.Screen
            name="DTable1"
            component= {DTable1}
            options = {{
            headerShown : false,
            }} />

          <Stack.Screen
            name="DCouch1"
            component= {DCouch1}
            options = {{
            headerShown : false,
            }} />

          <Stack.Screen
            name="DOffChair1"
            component= {DOffChair1}
            options = {{
            headerShown : false,
            }} />

        </Stack.Navigator>
      </NavigationContainer>
    );
  }
}

export default App;
