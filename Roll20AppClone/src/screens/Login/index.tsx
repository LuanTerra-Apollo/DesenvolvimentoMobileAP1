import { View, Text, TouchableOpacity, Image, TextInput} from 'react-native'
import { styles } from './styles'
import { AntDesign, SimpleLineIcons, Fontisto, Entypo } from '@expo/vector-icons';
import backgroundImage from '../../../BackgroundTelaLogin.jpeg'
import { LinearGradient } from 'expo-linear-gradient'
import { RootStackParamList } from '../../routes/StackNavigator';
import React from 'react'
import { NativeStackNavigationProp } from '@react-navigation/native-stack'
import { Button } from '../../components/Buttons';

type CloseScreenNavigationProp = NativeStackNavigationProp<RootStackParamList, 'Login'>

type Props = {navigation: CloseScreenNavigationProp}

export const Login = ({navigation}: Props) => {
    return (
        <View style={styles.viewContainer}>
            <LinearGradient 
                colors={["#2f0f41", 'transparent', 'transparent']}
                start={{ x: 0, y: 0 }}
                end={{ x: 0, y: -1 }} style={styles.background}>
                <View style={styles.viewHeader}>
                    <View style={styles.headerLeft}>
                        <AntDesign onPress={() => navigation.navigate('Home', {})} name="close" size={30} color="white" style={[{marginLeft: 8}]} />
                        <SimpleLineIcons name="lock" size={16} color="white" style={[{marginLeft: 24}, {marginBottom: 2}]} />
                        <Text style={styles.headerText}>accounts.roll20.net</Text>
                    </View>
                    <View style={styles.headerRight}>
                        <Fontisto name="share" size={24} color="white" style={[{marginRight: 24}]} />
                        <Entypo name="dots-three-vertical" size={24} color="white" style={[{marginRight: 8}]} />
                    </View>
                </View>
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