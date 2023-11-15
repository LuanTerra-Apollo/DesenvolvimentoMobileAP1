import { Text, View, Image, TouchableOpacity, Linking } from 'react-native';
import { styles } from './styles';
import backgroundImage from '../../../BackgroundTelaInicial.jpg';
import Logo from '../../../Roll20Logo.png';
import { RootStackParamList } from '../../routes/StackNavigator';
import React from 'react';
import { NativeStackNavigationProp } from '@react-navigation/native-stack'
import { Button } from '../../components/Buttons'


type ButtonScreenNavigationProp = NativeStackNavigationProp<RootStackParamList, 'Home'>

type Props = { navigation: ButtonScreenNavigationProp }


export const Home = ({ navigation }: Props ) => {
  return (
    <View style={styles.container}>
      <View style={styles.viewTop}>
          <Image source={backgroundImage} style={styles.topImage} />
          <Image resizeMode='contain' source={Logo} style={styles.topLogo}/>
      </View>
      <View style={styles.viewBottom}>
          <Text style={styles.bottomVersion}>App Version: 1.2.4 build 178</Text>
          <Text style={styles.bottomTitleText}>Roll20</Text>
          <Text style={styles.bottomSubtitleText}>Your friends. Your games. Your table. Anywhere.</Text>
          <Button title="Sign In" priority='primary' onPress={() => navigation.navigate('Login', {})}/>
          <Text style={[styles.bottomText, {marginTop: 32, fontSize: 18}]}>New to Roll20?</Text>
          <Text style={[styles.bottomText, {marginTop: 0, fontSize: 18}]}><Text style={styles.bottomLink} onPress={() => { Linking.openURL('https://app.roll20.net/create-account')}}>Create an account</Text></Text>
          <Text style={styles.bottomText}>By continuing you agree to our</Text>
          <Text style={[styles.bottomText, {marginTop: 0}]}><Text style={styles.bottomLink} onPress={() => { Linking.openURL('https://help.roll20.net/hc/en-us/articles/360037770793-Terms-of-Service-and-Privacy-Policy')}}>Terms of Service and Privacy Policy.</Text></Text> 
      </View>
    </View>
  );
};
