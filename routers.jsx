import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer } from "@react-navigation/native";

import Products from "./components/products";
import Login from "./components/login";
import Home from "./components/home";

const Pilha = createStackNavigator()

export default function Routers(){
    return (
        <NavigationContainer>
            <Pilha.Navigator>
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
            </Pilha.Navigator>
        </NavigationContainer>
    )
}