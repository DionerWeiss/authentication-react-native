import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import SingIn from '../pages/SingIn';

const AuthStack = createStackNavigator()

const AuthRoutes: React.FC = () => (
    <AuthStack.Navigator>
        <AuthStack.Screen name="SingIn" component={SingIn} />
    </AuthStack.Navigator>
);

export default AuthRoutes;