import React, { useState, useEffect } from 'react';
import {
  Text,
  TextInput,
  View,
  TouchableOpacity,
  ScrollView,
  Modal,
  Keyboard,
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Mail, LockKeyhole, X } from 'lucide-react-native';
import LinearGradient from 'react-native-linear-gradient';
import styles from './style';

const LoginMScreen = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  
  const [isKeyboardVisible, setIsKeyboardVisible] = useState(false);

  useEffect(() => {
    const keyboardDidShowListener = Keyboard.addListener(
      'keyboardDidShow',
      () => {
        setIsKeyboardVisible(true);
      }
    );
    const keyboardDidHideListener = Keyboard.addListener(
      'keyboardDidHide',
      () => {
        setIsKeyboardVisible(false);
      }
    );

    return () => {
      keyboardDidShowListener.remove();
      keyboardDidHideListener.remove();
    };
  }, []);

  const handleLogin = async () => {
    if (!email || !password) {
      return;
    }

    try {
      // Login logic here
    } catch (error) {
      console.error(error);
    }
  };

  return (
   <LinearGradient
      colors={['#000000', '#000000', '#FFFFFF']}
      locations={[0, 0.5, 0]}
      style={styles.gradient}
   >
    <SafeAreaView style={styles.container}>
     <View style={styles.shadow}>
      <Modal
        animationType="slide"
        transparent={true}
        statusBarTranslucent={true}
      >
        <View style={styles.modalOverlay} pointerEvents="box-none">
          <View style={styles.modalContainer}>
            <ScrollView 
              showsVerticalScrollIndicator={false}
              keyboardShouldPersistTaps="handled"
              contentContainerStyle={{ flexGrow: 1 }}
              scrollEnabled={true}
            >
              <TouchableOpacity
                style={styles.closeButton}
                // onPress={() => ()} will update to go to welcome screen
              >
                <X size={24} color="#000000" />
              </TouchableOpacity>

              <Text style={styles.title}>Login to your account</Text>
              <Text style={styles.subtext}>
                Please fill the information to make it easier for us to get to know you
              </Text>

              <View style={styles.inputWrapper}>
                <View style={styles.inputContainer}>
                  <Mail size={24} color="#4E5D66" style={styles.icon} />
                  <View style={styles.inputContent}>
                    <Text style={styles.label}>Email Address</Text>
                    <TextInput
                      placeholder=""
                      placeholderTextColor="#9CA3AF"
                      style={styles.input}
                      keyboardType="email-address"
                      autoCapitalize="none"
                      value={email}
                      onChangeText={setEmail}
                    />
                  </View>
                </View>

                <View style={[styles.inputContainer, styles.passwordContainer]}>
                  <LockKeyhole size={24} color="#4E5D66" style={styles.icon} />
                  <View style={styles.inputContent}>
                    <Text style={styles.label}>Password</Text>
                    <TextInput
                      placeholder=""
                      placeholderTextColor="#9CA3AF"
                      style={styles.input}
                      secureTextEntry={true}
                      value={password}
                      onChangeText={setPassword}
                    />
                  </View>
                </View>
              </View>

              <TouchableOpacity
                style={[
                  { marginTop: isKeyboardVisible ? 0 : 20 }
                ]} 
                onPress={handleLogin}
              >
                <Text style={styles.forgotText}>Forgot your password?</Text>
              </TouchableOpacity>

              <TouchableOpacity 
                style={[
                  styles.loginButton,
                  { marginTop: isKeyboardVisible ? 30 : 35 }
                ]} 
                onPress={handleLogin}
              >
                <Text style={styles.loginButtonText}>Login</Text>
              </TouchableOpacity>
            </ScrollView>
          </View>
        </View>
      </Modal>
     </View>
    </SafeAreaView>
   </LinearGradient>
  );
};

export default LoginMScreen;