// Navigator.js
import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import Home from "../pages/guest/home";
import Login from "../pages/guest/Login";
import Register from "../pages/guest/Register";
import InputOTP from "../pages/guest/InputOTP";
import RecoverAccount from "../pages/guest/RecoverAccount";
import ForgotPasswordOTP from "../pages/guest/ForgotPasswordOTP";
import ForgotPasswordEmail from "../pages/guest/ForgotPasswordEmail";
import Setting from "../pages/guest/Setting";
import Project from "../pages/guest/Project";

const Stack = createStackNavigator();

const Navigator = () => (
  <Stack.Navigator initialRouteName="Home" screenOptions={{ headerShown: false }}>
    <Stack.Screen name="Home" component={Home} />
    <Stack.Screen name="Login" component={Login} />
    <Stack.Screen name="Register" component={Register} />
    <Stack.Screen name="InputOTP" component={InputOTP} />
    <Stack.Screen name="Recover" component={RecoverAccount} />
    <Stack.Screen name="ForgotPasswordOTP" component={ForgotPasswordOTP} />
    <Stack.Screen name="ForgotPasswordEmail" component={ForgotPasswordEmail} />
    <Stack.Screen name="Setting" component={Setting} />
    <Stack.Screen name="Project" component={Project} />
    
  </Stack.Navigator>
);

export default Navigator;




