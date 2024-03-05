import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

import Products from "./components/products";
import Login from "./components/login";
import Home from "./components/home";
import Product from "./components/product";
import Register from "./components/register";

import { Feather } from "@expo/vector-icons";

const Pilha = createStackNavigator()
const Tab = createBottomTabNavigator()

function MyTabs(){
    return(
        <Tab.Navigator
        screenOptions={{
            tabBarStyle:{
                backgroundColor:'#a832a4',
                paddingBottom:1,
                paddingTop:1, 
                borderTopColor:'transparent',
                borderTopLeftRadius:20,
                borderTopRightRadius:20,
                
            },
            tabBarActiveTintColor:'white',
            tabBarInactiveTintColor: '#555',
            }}>
            

            <Tab.Screen
                // user
                name="Login"
                component={Login}
                options={{
                    headerShown: false,
                    tabBarStyle:{display: 'none'},
                    tabBarIcon:({size, color})=>(
                        <Feather name="user" size={size} color={color}/>
                    )
                }}
            />

            {/* home */}
            <Tab.Screen
                name="Home"
                component={Home}
                options={{
                    headerShown: false,
                    tabBarIcon:({size, color})=>(
                        <Feather name="home" size={size} color={color}/>
                    )
                }}
            />

            {/* Products */}
            <Tab.Screen
                name="Products"
                component={Products}
                options={{
                    headerShown: false,
                    tabBarIcon:({size, color})=>(
                        <Feather name="twitter" size={size} color={color}/>
                    )
                }}
            />

            {/* register */}
            <Tab.Screen
                name="Register"
                component={Register}
                options={{
                    headerShown: false,
                    tabBarIcon:({size, color})=>(
                        <Feather name="user-plus" size={size} color={color}/>
                    )
                }}
            />
        </Tab.Navigator>
    )
}

export default function Routers(){
    return (
        <NavigationContainer>
            <Pilha.Navigator>
                {/* nav */}
                <Pilha.Screen
                    name = "MyTabs"
                    component={MyTabs}
                    options={{ headerShown: false }}
                />
                {/* Login */}
                <Pilha.Screen
                    name = "Login"
                    component={Login}
                    options={{ headerShown: false }}
                />
                {/* Home */}
                <Pilha.Screen
                    name = "Home"
                    component={Home}
                    options={{ headerShown: false }}
                />
                {/* products */}
                <Pilha.Screen
                    name = "Products"
                    component={Products}
                    options={{ headerShown: false }}
                />
                {/* product */}
                <Pilha.Screen
                    name = "Product"
                    component={Product}
                    options={{ headerShown: false }}
                />
                {/* cep */}
                <Pilha.Screen
                    name = "Register"
                    component={Register}
                    options={{ headerShown: false }}
                />
                
            </Pilha.Navigator>
        </NavigationContainer>
    )
}