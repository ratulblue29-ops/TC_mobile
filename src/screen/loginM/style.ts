import { StyleSheet } from 'react-native';

const instrumentSansBold = 'InstrumentSans-Bold';
const instrumentSansMedium = 'InstrumentSans-Medium';
const instrumentSansRegular = 'InstrumentSans-Regular';
const instrumentSansSemiBold = 'InstrumentSans-SemiBold';

const styles = StyleSheet.create({
  gradient: {
    flex: 1,
  },
  container: {
    flex: 1,
    backgroundColor: 'transparent',
  },
  shadow: {
    top: 11,
    flex: 1,
    backgroundColor: '#F7F8FA',
    borderRadius: 25,
    width: '93%',
    marginHorizontal: 15,
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
    minHeight: '97%',
  },
  closeButton: {
    alignSelf: 'flex-end',
    marginBottom: 16,
  },
  title: {
    fontSize: 28,
    fontWeight: '700',
    fontFamily: instrumentSansBold,
    color: '#0B0F20',
    marginBottom: 8,
  },
  subtext: {
    fontSize: 17,
    fontWeight: '400',
    fontFamily: instrumentSansRegular,
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
    borderColor: '#E5E7EB',
    borderTopLeftRadius: 12,
    borderTopRightRadius: 12,
    paddingHorizontal: 16,
    paddingVertical: 12,
    borderBottomWidth: 0,
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
    fontWeight: '500',
    fontFamily: instrumentSansMedium,
    color: '#4E5D66',
    marginBottom: 4,
  },
  input: {
    fontSize: 18,
    fontWeight: '500',
    fontFamily: instrumentSansMedium,
    color: '#0B0F20',
    paddingVertical: 0,
  },
  forgotText: {
    fontSize: 17,
    fontWeight: '500',
    fontFamily: instrumentSansMedium,
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
    fontWeight: '600',
    fontFamily: instrumentSansSemiBold,
    color: '#FFFFFF',
  },
});

export default styles;