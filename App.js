import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { Platform, StyleSheet, Text, View, TextInput, TouchableOpacity } from 'react-native';

export default function App() {

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  function loginHandler(){
    console.log(email)
  }

  return (
    <View style={styles.container}>
      <StatusBar
        animated={true}
        />
      <View style={styles.titleView}>
        <Text style={styles.titleText}>Login</Text>
      </View>
      <View style={styles.inputView}>
        <TextInput
          style={styles.TextInput}
          placeholder="Email"
          placeholderTextColor="#003f5c"
          onChangeText={(email) => setEmail(email)}
        />
      </View>
      <View style={styles.inputView}>
        <TextInput
          style={styles.TextInput}
          placeholder="Password"
          placeholderTextColor="#003f5c"
          secureTextEntry={true}
          onChangeText={(password) => setPassword(password)}
        />
      </View>
      <TouchableOpacity>
        <Text style={styles.forgot_button}>Forgot Password?</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => loginHandler()}>
        <Text style={styles.loginBtn}>LOGIN</Text>
      </TouchableOpacity>
    </View>
    
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    backgroundColor:"#FFF",
    marginTop: 50,
  },
  inputView: {
    borderRadius: 30,
    borderWidth:1,
    height: 45,
    marginBottom: 30,
    alignItems: "center",
  },

  TextInput: {
    height: 50,
    width:250,
    ...Platform.select({
      web: {
        outlineStyle: 'none',
      }
    }),
    flex: 1,
    padding:10,
  },

  titleText: {
    fontSize:25,
  },

  titleView: {
    margin: 25,
    ...Platform.select({
      ios: {
        marginBottom: 150,
      }
    }),
  },

  forgot_button: {
    height: 30,
    marginBottom:30,
  },

  loginBtn: {
    overflow:"hidden",
    borderRadius:20,
    padding:20,
    alignItems:"center",
    justifyContent:"center",
    marginTop:40,
    backgroundColor: 'rgba(0,122,255, 1)',
  }

});
