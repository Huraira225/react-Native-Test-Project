/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import type {PropsWithChildren} from 'react';
import Toast from 'react-native-simple-toast';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
  TextInput,
  Button,
  Image,
} from 'react-native';

import {
  Colors,
  DebugInstructions,
  Header,
  LearnMoreLinks,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';
import Second from './Second';

type SectionProps = PropsWithChildren<{
  title: string;
}>;

function Section({children, title}: SectionProps): JSX.Element {
  const isDarkMode = useColorScheme() === 'dark';
  return (
    <View style={styles.sectionContainer}>
      <Text
        style={[
          styles.sectionTitle,
          {
            color: isDarkMode ? Colors.white : Colors.black,
          },
        ]}>
        {title}
      </Text>
      <Text
        style={[
          styles.sectionDescription,
          {
            color: isDarkMode ? Colors.light : Colors.dark,
          },
        ]}>
        {children}
      </Text>
    </View>
  );
}


function App(): JSX.Element {
  const isDarkMode = useColorScheme() === 'dark';
  
  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
  };

  return (
    <SafeAreaView style={backgroundStyle}>
      <StatusBar
        barStyle={isDarkMode ? 'light-content' : 'dark-content'}
        backgroundColor={backgroundStyle.backgroundColor}
      />
       <View >
        
        <Image  
        style ={{
         width: 350,
         height: 150,
         justifyContent: 'center',
        }}
        resizeMode="center"
        
        source={require('./assets/images/instagram.png')} />
        <TextInput
         style ={
         styles.input}
         placeholder='Phone number,username or email address'/>

<TextInput style ={styles.input}
       secureTextEntry={true}
        placeholder='Password'
       />
       
        
        <Text 
         style ={styles.sectionContainer}>   
         Forgotten password
         </Text>
         <Text 
          style ={styles.button}
          onPress={()=> Toast.show('login succssful',Toast.SHORT)}>
          Log In
       </Text>
       <View style = {styles.lineStyle} />
     
   
    
       <Text 
         style ={styles.sectionTitle}
          >   
         Don't have any account? Sign Up
         onPress={}
         </Text>
       

         </View>
    </SafeAreaView>
  );
  
}

const styles = StyleSheet.create({
  containerMain: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  sectionContainer: {
    marginTop: 10,
    paddingHorizontal: 24,
    textAlign:'right',
    color:'#3798FF'
    
  },
  sectionTitle: {
    marginTop: 10,
    paddingHorizontal: 24,
    textAlign:'center',
    color:'gray'
  },
  sectionDescription: {
    marginTop: 5,
    fontSize: 18,
    fontWeight: '400',
    
  },
  lineStyle:{
    borderWidth: 0.5,
    borderColor:'gray',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 30
},

  highlight: {
    fontWeight: '700',
  },
  button:{
    backgroundColor:'#3798FF',
    padding: 8,
    textAlign:'center',
    color:'#FFFFFF',
    borderRadius: 5,
    marginTop:10,
    marginLeft: 20,
    marginRight:20,
  },
  input:{
    borderWidth : 2,
    borderColor: '#919191',
    padding: 8,
    borderRadius: 5,
    marginTop:10,
    marginLeft: 20,
    marginRight:20,
    fontSize: 12,
    resizeMode:'center'
  },
  bottomView: {
    top:20,

    backgroundColor: '#EE5407',
    justifyContent: 'center',
    alignItems: 'center',
    position: 'absolute', //Here is the trick
    bottom: 0, //Here is the trick
  },
});


export default App;
