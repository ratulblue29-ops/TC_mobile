import { StyleSheet, Dimensions } from 'react-native';

const { width } = Dimensions.get('window');

const styles = StyleSheet.create({
  gradient: {
    flex: 1,
  },
  container: {
    flex: 1,
    backgroundColor: 'transparent',
  },
  contentWrapper: {
    flex: 1,
  },
  upperSection: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingBottom: 30,
  },
  logoContainer: {
    top: 15,
    marginTop: 270,
  },
  logo: {
    width: 192.5,
    objectFit: 'contain',
  },
  slide: {
    width: width,
    alignItems: 'center',
    justifyContent: 'center',
  },
  titleText: {
    fontSize: 36,
    fontFamily: 'InstrumentSans-Bold',
    fontWeight: '900',
    color: '#FFFFFF',
    textAlign: 'center',
  },
  highlight: {
    color: '#FFC009',
  },
  paginationWrapper: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    gap: 8,
  },
  paginationActive: {
    width: 20,
    height: 5,
    backgroundColor: '#FFFFFF',
    borderRadius: 2,
  },
  paginationDot: {
    width: 5,
    height: 5,
    backgroundColor: '#FFFFFF',
    borderRadius: 4,
    opacity: 0.5,
  },
  bottomSection: {
    backgroundColor: '#FFFFFF',
    borderTopLeftRadius: 24,
    borderTopRightRadius: 24,
    paddingHorizontal: 30,
    paddingTop: 32,
    paddingBottom: 40,
  },
  loginButton: {
    backgroundColor: '#FFFFFF',
    borderWidth: 1,
    borderColor: '#000000',
    borderRadius: 12,
    paddingVertical: 16,
    alignItems: 'center',
    marginTop: 20,
    marginBottom: 16,
  },
  loginButtonText: {
    fontSize: 18,
    lineHeight: 25,
    fontFamily: 'InstrumentSans-SemiBold',
    fontWeight: '900',
    color: '#0B0F20',
  },
  createButton: {
    backgroundColor: '#00897B',
    borderRadius: 12,
    paddingVertical: 16,
    alignItems: 'center',
    marginBottom: 24,
  },
  createButtonText: {
    fontSize: 18,
    lineHeight: 25,
    fontFamily: 'InstrumentSans-SemiBold',
    fontWeight: '900',
    color: '#FFFFFF',
  },
  footerWrapper: {
    alignItems: 'center',
  },
  footerText: {
    fontSize: 14,
    lineHeight: 24,
    fontFamily: 'InstrumentSans-Regular',
    fontWeight: '900',
    color: '#6B7280',
    textAlign: 'center',
  },
  footerLink: {
    fontFamily: 'InstrumentSans-SemiBold',
    fontWeight: '900',
    textDecorationLine: 'underline',
    color: '#000000',
  },
});

export default styles;