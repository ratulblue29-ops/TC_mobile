import { StyleSheet } from 'react-native';

const bgColor = '#FFFFFF';
const styles = StyleSheet.create({
  container: {
    backgroundColor: bgColor,
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  logo: {
    width: 355,
    objectFit: 'contain',
    marginBottom: 16,
  },
  text_wrapper: {},
  tagline: {
    color: '#4E5D66',
    fontSize: 18,
    fontWeight: '500',
    textAlign: 'center',
    fontFamily: 'InstrumentSans-Medium',
    lineHeight: 26,
  },
});

export default styles;