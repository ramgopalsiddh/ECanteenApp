import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import LoginScreen from "../components/LoginScreen";
import AdminHomeScreen from "../components/AdminHomeScreen";
import StudentHomeScreen from "../components/StudentHomeScreen";
import MenuManagementScreen from "../components/MenuManagement";
import OrderManagementScreen from "../components/OrderManagement";
import BrowseMenuScreen from "../components/BrowseMenu";
import CartScreen from "../components/Cart";
import OrderStatusScreen from "../components/OrderStatus";
import { useAuth } from "../context/AuthContext";

const Stack = createNativeStackNavigator();

const AppNavigator = () => {
  const { userRole } = useAuth();

  return (
    <NavigationContainer>
      <Stack.Navigator>
        {!userRole ? (
          <Stack.Screen name="Login" component={LoginScreen} />
        ) : userRole === "admin" ? (
          <>
            <Stack.Screen name="AdminHome" component={AdminHomeScreen} />
            <Stack.Screen name="MenuManagement" component={MenuManagementScreen} />
            <Stack.Screen name="OrderManagement" component={OrderManagementScreen} />
          </>
        ) : (
          <>
            <Stack.Screen name="StudentHome" component={StudentHomeScreen} />
            <Stack.Screen name="BrowseMenu" component={BrowseMenuScreen} />
            <Stack.Screen name="Cart" component={CartScreen} />
            <Stack.Screen name="OrderStatus" component={OrderStatusScreen} />
          </>
        )}
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default AppNavigator;
