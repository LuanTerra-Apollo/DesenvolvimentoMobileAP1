import { View, Text, Image, TextInput} from 'react-native'
import { styles } from './styles'
import backgroundImage from '../../../BackgroundTelaLogin.jpeg'
import { LinearGradient } from 'expo-linear-gradient'
import { RootStackParamList } from '../../routes/StackNavigator';
import React from 'react'
import { NativeStackNavigationProp } from '@react-navigation/native-stack'
import { Button } from '../../components/Buttons';
import { NavBar } from '../../components/NavBar';

type ScreenNavigationProp = NativeStackNavigationProp<RootStackParamList, 'Login'>

type Props = {navigation: ScreenNavigationProp}

export const Login = ({navigation}: Props) => {
    return (
        <View style={styles.viewContainer}>
            <LinearGradient 
                colors={["#2f0f41", 'transparent', 'transparent']}
                start={{ x: 0, y: 0 }}
                end={{ x: 0, y: -1 }} style={styles.background}>
                <NavBar rotas={[{name: 'Home', navegar: () => navigation.navigate('Home', {})}]} link='accounts.roll20.net' />
                <View style={styles.viewTop}>
                    <Image source={backgroundImage} style={styles.topImage}/>
                </View>
                <View style={styles.viewBottom}>
                    <Text style={[styles.bottomText, {fontSize: 40, fontWeight: 'bold', marginBottom: 8}]}>Registrar</Text>
                    <Text style={styles.bottomText}>Endereço de e-mail</Text>
                    <TextInput style={styles.bottomTextInput} placeholder='Endereço de e-mail' placeholderTextColor={'#727a7d'} />
                    <Text style={styles.bottomText}>Senha</Text>
                    <TextInput secureTextEntry style={styles.bottomTextInput} placeholder='Senha' placeholderTextColor={'#727a7d'} />
                    <Button title="Registrar" priority='secondary'/>
                </View>
            </LinearGradient>
        </View>
    )
}