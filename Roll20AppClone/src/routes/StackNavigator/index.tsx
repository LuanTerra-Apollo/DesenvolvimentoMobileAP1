import { Login } from '../../screens/Login'
import { Home } from '../../screens/Home'
import { createNativeStackNavigator } from '@react-navigation/native-stack'

const Stack = createNativeStackNavigator<RootStackParamList>();

export type RootStackParamList = {
    Home: {};
    Login: {};
}

export function StackRoutes() {
    return (
        <Stack.Navigator screenOptions={{headerShown: false}}>
            <Stack.Screen name="Home" component={Home} />
            <Stack.Screen name="Login" component={Login} />
        </Stack.Navigator>
    )
}