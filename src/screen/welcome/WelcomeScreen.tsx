import React, { useState, useEffect, useRef } from 'react';
import {
  Image,
  Text,
  View,
  TouchableOpacity,
  ScrollView,
  Dimensions,
  NativeScrollEvent,
  NativeSyntheticEvent,
  Modal,
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import LinearGradient from 'react-native-linear-gradient';
import styles from './style';

const { width } = Dimensions.get('window');

const WelcomeScreen = () => {
  const [activeSlide, setActiveSlide] = useState(0);
  const scrollViewRef = useRef<ScrollView>(null);

  const slides = [
    { id: 1, title1: 'Compete', highlight1: 'smarter', title2: 'Trade', highlight2: 'better' },
    { id: 2, title1: 'Compete', highlight1: 'smarter', title2: 'Trade', highlight2: 'better' },
    { id: 3, title1: 'Compete', highlight1: 'smarter', title2: 'Trade', highlight2: 'better' },
    { id: 4, title1: 'Compete', highlight1: 'smarter', title2: 'Trade', highlight2: 'better' },
    { id: 5, title1: 'Compete', highlight1: 'smarter', title2: 'Trade', highlight2: 'better' },
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      const nextSlide = (activeSlide + 1) % slides.length;
      setActiveSlide(nextSlide);
      scrollViewRef.current?.scrollTo({
        x: nextSlide * width,
        animated: true,
      });
    }, 2000);

    return () => clearInterval(timer);
  }, [activeSlide]);

  const handleScroll = (event: NativeSyntheticEvent<NativeScrollEvent>) => {
    const slideIndex = Math.round(event.nativeEvent.contentOffset.x / width);
    setActiveSlide(slideIndex);
  };

  return (
    <LinearGradient
      colors={['#FFFFFF', '#0B0E20']}
      locations={[0, 0.65]}
      style={styles.gradient}
    >
      <SafeAreaView style={styles.container}>
        <View style={styles.contentWrapper}>
          <View style={styles.upperSection}>
            <ScrollView
              ref={scrollViewRef}
              horizontal
              pagingEnabled
              showsHorizontalScrollIndicator={false}
              onScroll={handleScroll}
              scrollEventThrottle={16}
            >
              {slides.map((slide) => (
                <View key={slide.id} style={styles.slide}>
                  <View style={styles.logoContainer}>
                    <Image style={styles.logo} source={require('../../../assets/images/logo.png')} />
                  </View>
                  <Text style={styles.titleText}>
                    {slide.title1} <Text style={styles.highlight}>{slide.highlight1}</Text>
                  </Text>
                  <Text style={styles.titleText}>
                    {slide.title2} <Text style={styles.highlight}>{slide.highlight2}</Text>
                  </Text>
                </View>
              ))}
            </ScrollView>

            <View style={styles.paginationWrapper}>
              {slides.map((_, index) => (
                <View
                  key={index}
                  style={[
                    index === activeSlide ? styles.paginationActive : styles.paginationDot,
                  ]}
                />
              ))}
            </View>
          </View>
        </View>
      </SafeAreaView>

      <Modal
        animationType="none"
        transparent={true}
        visible={true}
      >
        <View style={styles.modalOverlay}>
          <View style={styles.modalContent}>
            <TouchableOpacity style={styles.loginButton}>
              <Text style={styles.loginButtonText}>Login</Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.createButton}>
              <Text style={styles.createButtonText}>Create an account</Text>
            </TouchableOpacity>

            <View style={styles.footerWrapper}>
              <Text style={styles.footerText}>
                By continuing, you agree to Traders Connect's{'\n'}
                <Text style={styles.footerLink}>Privacy Policy</Text> and{' '}
                <Text style={styles.footerLink}>Terms of Use</Text>
              </Text>
            </View>
          </View>
        </View>
      </Modal>
    </LinearGradient>
  );
};

export default WelcomeScreen;