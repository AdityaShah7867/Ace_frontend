import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity,
  Image,
} from "react-native";
import { useNavigation } from '@react-navigation/native';

const Login = () => {
  const navigation = useNavigation();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = () => {
    console.log("Email:", email);
    console.log("Password:", password);
    // Perform login logic
    // After successful login, navigate to the home screen
    navigation.navigate('Home');
  };

  return (
    <View style={styles.container}>
      <View style={styles.topHalf}>
        <Text style={styles.welcomeText}>Welcome Back!</Text>
        <TextInput
          style={styles.input}
          placeholder="Email"
          placeholderTextColor="#94a3b8"
          value={email}
          onChangeText={setEmail}
        />
        <TextInput
          style={styles.input}
          placeholder="Password"
          placeholderTextColor="#94a3b8"
          secureTextEntry={true}
          value={password}
          onChangeText={setPassword}
        />
        <View style={styles.forgotPasswordContainer}>
          <Text style={styles.forgotPasswordText}>Forgot Password?</Text>
        </View>

        <TouchableOpacity style={styles.loginButton} onPress={handleLogin}>
          <Text style={styles.loginButtonText}>Login</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.bottomHalf}>
        <Image
          source={require("../assets/call.jpg")} // Change this to the path of your image
          style={styles.image}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
    fontFamily: 'Roboto', // Change font family to Roboto, or use any other suitable font
  },
  topHalf: {
    flex: 3, // Take 3/4 of the screen
    justifyContent: "center",
    alignItems: "center",
  },
  bottomHalf: {
    flex: 1, // Take 1/4 of the screen
    marginTop: -80,
    marginBottom:40,
    alignItems: "center",
    justifyContent: "center",
  },
  forgotPasswordContainer: {
    alignSelf: 'flex-start', // Aligns the container to the left side
    marginLeft: 20, // Adds left margin for spacing
  },
  forgotPasswordText: {
    color: 'gray',
    marginTop: 10,
    marginBottom: 10,
  },
  welcomeText: {
    fontSize: 24,
    marginBottom: 50,
    marginTop: -120,
    fontWeight: "bold",
    color: "black",
  },
  input: {
    width: "95%",
    height: 50,
    backgroundColor: "#f9fafb",
    borderWidth: 1,
    borderColor: "black",
    borderRadius: 10,
    marginBottom: 10,
    paddingLeft: 10,
    color: "black",
  },
  loginButton: {
    backgroundColor: "#3b82f6",
    minWidth: "95%",
    alignItems: "center",
    paddingVertical: 13,
    paddingHorizontal: 20,
    borderRadius: 8,
    marginTop: 12,
    fontWeight: "bold",
  },
  loginButtonText: {
    color: "white",
    fontSize: 16,
  },
  image: {
    width: "100%",
    height: "100%",
    resizeMode: "cover",
  },
});

export default Login;
