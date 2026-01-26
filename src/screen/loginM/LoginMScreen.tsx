import React, { useState } from 'react';
import {
  Text,
  TextInput,
  View,
  TouchableOpacity,
  ScrollView,
  Modal,
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Mail, LockKeyhole, X } from 'lucide-react-native';
import LinearGradient from 'react-native-linear-gradient';
import styles from './style';

const LoginMScreen = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [modalVisible, setModalVisible] = useState(true);

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
        visible={modalVisible}
        onRequestClose={() => setModalVisible(false)}
      >
        <View style={styles.modalOverlay}>
          <View style={styles.modalContainer}>
            <ScrollView showsVerticalScrollIndicator={false}>
              <TouchableOpacity
                style={styles.closeButton}
                onPress={() => setModalVisible(false)}
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

              <TouchableOpacity>
                <Text style={styles.forgotText}>Forgot your password?</Text>
              </TouchableOpacity>

              <TouchableOpacity style={styles.loginButton} onPress={handleLogin}>
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