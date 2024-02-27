import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

import Products from "./components/products";
import Login from "./components/login";
import Home from "./components/home";
import Product from "./components/product";

import { Feather } from "@expo/vector-icons";

const Pilha = createStackNavigator()
const Tab = createBottomTabNavigator()

function MyTabs(){
    return(
        <Tab.Navigator>
            screenOptions={{
                tabBarStyle:{
                    backgroundColor:'#a832a4'
                }
            }}

            <Tab.Screen
                // user
                name="Login"
                component={Login}
                options={{
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
                    tabBarIcon:({size, color})=>(
                        <Feather name="twitter" size={size} color={color}/>
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
                    component={Product}
                />
                {/* Login */}
                <Pilha.Screen
                    name = "Login"
                    component={Login}
                />
                {/* Home */}
                <Pilha.Screen
                    name = "Home"
                    component={Home}
                />
                {/* products */}
                <Pilha.Screen
                    name = "Products"
                    component={Products}
                />
                {/* product */}
                <Pilha.Screen
                    name = "Product"
                    component={Product}
                />
                
            </Pilha.Navigator>
        </NavigationContainer>
    )
}