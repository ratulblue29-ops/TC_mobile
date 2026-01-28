import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  gradient: {
    flex: 1,
  },
  container: {
    flex: 1,
    backgroundColor: 'transparent',
  },
  shadow: {
    flex: 1,
    backgroundColor: '#F7F8FA',
    borderRadius: 25,
    width: '93%',
    marginHorizontal: 15,
    marginTop: 12,
    justifyContent: 'flex-end',
  },
  modalOverlay: {
    flex: 1,
    backgroundColor: 'rgba(0, 0, 0, 0.38)',
    justifyContent: 'flex-end',
  },
  modalContainer: {
    backgroundColor: '#F7F8FA',
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
    paddingHorizontal: 20,
    paddingTop: 24,
    paddingBottom: 40,
    minHeight: '92%',
  },
  closeButton: {
    alignSelf: 'flex-end',
    marginBottom: 16,
  },
  title: {
    fontSize: 28,
    fontFamily: 'InstrumentSans-Bold',
    color: '#0B0F20',
    marginBottom: 8,
  },
  subtext: {
    fontSize: 17,
    fontFamily: 'InstrumentSans-Regular',
    color: '#2C3440',
    lineHeight: 24,
    marginBottom: 32,
  },
  inputWrapper: {
    marginBottom: 24,
  },
  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#FFFFFF',
    borderWidth: 1,
    borderColor: '#4e5d668f',
    borderTopLeftRadius: 12,
    borderTopRightRadius: 12,
    paddingHorizontal: 16,
    paddingVertical: 12,
    borderBottomWidth: 1,
  },
  passwordContainer: {
    borderTopLeftRadius: 0,
    borderTopRightRadius: 0,
    borderBottomLeftRadius: 12,
    borderBottomRightRadius: 12,
    borderTopWidth: 0,
    borderWidth: 1,
  },
  icon: {
    marginRight: 12,
  },
  inputContent: {
    flex: 1,
  },
  label: {
    fontSize: 14,
    fontFamily: 'InstrumentSans-Medium',
    color: '#4E5D66',
    marginBottom: 4,
  },
  input: {
    fontSize: 18,
    fontFamily: 'InstrumentSans-Medium',
    color: '#0B0F20',
    paddingVertical: 0,
  },
  forgotText: {
    fontSize: 17,
    fontFamily: 'InstrumentSans-Medium',
    color: '#000000',
    textDecorationLine: 'underline',
    marginBottom: 32,
  },
  loginButton: {
    backgroundColor: '#00897B',
    borderRadius: 12,
    paddingVertical: 16,
    alignItems: 'center',
  },
  loginButtonText: {
    fontSize: 18,
    fontFamily: 'InstrumentSans-SemiBold',
    color: '#FFFFFF',
  },
});

export default styles;