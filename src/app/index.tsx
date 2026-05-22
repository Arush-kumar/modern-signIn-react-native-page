import { MaterialCommunityIcons } from '@expo/vector-icons';
import { useState } from 'react';
import { Pressable, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';

const SignIn = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [focusedInput, setFocusedInput] = useState(null);

  return (
    <View style={styles.container}>
      {/* LOGO  */}
      <View style={styles.logoContainer}>
        <MaterialCommunityIcons name="ansible" size={60} color="#f7a42f" />
      </View>

      {/* Heading and Subheading  */}
      <Text style={styles.heading}>Sign In</Text>
      <Text style={styles.subheading}>Let's experience the joy of future AI.</Text>

      {/* Email Input */}
      <View style={styles.inputGroup}>
        <Text style={styles.label}>Email Address</Text>
        <View style={[styles.inputWrapper, focusedInput == 'email' && styles.inputFocused]}>
          <MaterialCommunityIcons name="email-outline" size={20} color="#666" />
          <TextInput
            style={styles.input}
            placeholder="Enter your email"
            value={email}
            onChangeText={setEmail}
            onFocus={() => setFocusedInput('email')}
            onBlur={() => setFocusedInput(null)}
          />
        </View>
      </View>

      {/* Password Input */}
      <View style={styles.inputGroup}>
        <Text style={styles.label}>Password</Text>
        <View style={[styles.inputWrapper, focusedInput == 'password' && styles.inputFocused]}>
          <MaterialCommunityIcons name="email-outline" size={20} color="#666" />
          <TextInput
            style={styles.input}
            placeholder="Enter your password"
            value={password}
            onChangeText={setPassword}
            secureTextEntry={true}
            onFocus={() => setFocusedInput('password')}
            onBlur={() => setFocusedInput(null)}
          />
        </View>
      </View>

      {/* Sign In  */}
      <Pressable style={styles.btn}>
        <Text style={styles.btnText}>Sign In</Text>
        <MaterialCommunityIcons name="arrow-right" size={20} color="#f4f4f4" />
      </Pressable>

      {/* Social Login Options  */}
      <View style={styles.socialGroup}>
        <View style={styles.socialIconWrapper}>
          <MaterialCommunityIcons name="facebook" size={20} color="#666" />
        </View>

        <View style={styles.socialIconWrapper}>
          <MaterialCommunityIcons name="google" size={20} color="#666" />
        </View>

        <View style={styles.socialIconWrapper}>
          <MaterialCommunityIcons name="instagram" size={20} color="#666" />
        </View>
      </View>

      {/* Footer Links  */}
      <View style={styles.footer}>
        <View style={styles.singUpLinkContainer}>
          <Text style={styles.footerText}>Don't have an account?</Text>
          <TouchableOpacity>
            <Text style={styles.footerLink}>Sign Up</Text>
          </TouchableOpacity>
        </View>

        <TouchableOpacity style={styles.forgotContainer}>
          <Text style={styles.footerLink}>Forgot Password?</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default SignIn;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#f6f6f6',
    padding: 15
  },

  logoContainer: {
    marginBottom: 20
  },

  heading: {
    fontSize: 32,
    fontWeight: 'bold',
    color: '#3d3d4e',
    marginBottom: 8
  },

  subheading: {
    fontSize: 16,
    color: '#666',
    textAlign: 'center',
    marginBottom: 8
  },

  inputGroup: {
    width: '100%'
  },

  label: {
    fontWeight: 'bold',
    marginBottom: 10,
    color: '#1a1a1a'
  },

  inputWrapper: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#fff',
    borderWidth: 1.5,
    borderColor: '#E8E8E8',
    borderRadius: 25,
    paddingHorizontal: 15,
    height: 55,
    marginBottom: 8,
    gap: 5
  },

  inputFocused: {
    borderColor: '#f7a42f',
    borderWidth: 2
  },

  input: {
    flex: 1,
    fontSize: 16,
    color: '#333'
  },

  btn: {
    width: '100%',
    backgroundColor: '#f7a42f',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    gap: 5,
    paddingHorizontal: 20,
    paddingVertical: 10,
    borderRadius: 25,
    marginBlockStart: 10
  },

  btnText: {
    color: '#f4f4f4',
    fontSize: 16,
    fontWeight: 'bold',
    textAlign: 'center'
  },

  socialGroup: {
    flexDirection: 'row',
    gap: 8,
    marginTop: 30
  },

  socialIconWrapper: {
    backgroundColor: '#fff',
    borderColor: '#E8E8E8',
    borderWidth: 2,
    borderRadius: 15,
    width: 50,
    height: 50,
    padding: 10,
    justifyContent: 'center',
    alignItems: 'center'
  },

  footer: {
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 20
  },

  footerText: {
    color: '#7C7C7C',
    fontSize: 15
  },

  footerLink: {
    color: '#f7a42f',
    fontSize: 16,
    fontWeight: 'bold'
  },

  singUpLinkContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 5
  },

  forgotContainer: {
    marginTop: 5
  }
});