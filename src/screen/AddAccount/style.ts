import { StyleSheet } from 'react-native';

const COLORS = {
  white: '#FFFFFF',
  primary: '#00897B',
  secondary: '#0B0F20',
  textPrimary: '#0B0F20',
  textSecondary: '#9E9E9E',
  border: '#E0E0E0',
  background: '#F5F5F5',
};

const styles = StyleSheet.create({
  gradient: {
    flex: 1,
  },
  container: {
    flex: 1,
    backgroundColor: 'transparent',
  },
  headerSection: {
    backgroundColor: COLORS.white,
    borderBottomWidth: 1,
    borderLeftWidth: 1,
    borderRightWidth: 1,
    borderBottomLeftRadius: 25,
    borderBottomRightRadius: 25,
    borderColor: '#00000027',
    paddingBottom: 17,
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 20,
    paddingVertical: 12,
  },
  headerTitle: {
    fontSize: 18,
    fontFamily: 'InstrumentSans-SemiBold',
    color: COLORS.secondary,
  },
  headerSpacer: {
    width: 24,
  },
  iconButton: {
    padding: 4,
  },
  content: {
    paddingHorizontal: 20,
    paddingTop: 24,
    flex: 1,
  },
  formCard: {
    backgroundColor: COLORS.white,
    borderRadius: 16,
    paddingHorizontal: 20,
    paddingVertical: 20,
    borderWidth: 1,
    borderColor: '#E3E3E3',
  },
  formCardWrap: {
    backgroundColor: COLORS.white,
    borderRadius: 16,
    borderWidth: 1,
    borderColor: '#E3E3E3',
  },
  sectionHeader: {
    fontSize: 14,
    fontFamily: 'InstrumentSans-SemiBold',
    color: '#AAB3BA',
    marginBottom: 16,
  },
  inputContainer: {
    borderBottomWidth: 1,
    borderBottomColor: COLORS.border,
    paddingVertical: 12,
  },
  inputContainerLast: {
    borderBottomWidth: 0,
  },
  inputLabel: {
    fontSize: 14,
    fontFamily: 'InstrumentSans-Regular',
    color: COLORS.textSecondary,
    marginBottom: 8,
    paddingHorizontal: 15,
  },
  inputField: {
    fontSize: 16,
    fontFamily: 'InstrumentSans-SemiBold',
    color: COLORS.textPrimary,
    paddingVertical: 0,
    paddingHorizontal: 15,
  },
  inputFieldDisabled: {
    color: COLORS.textPrimary,
  },
  dropdownContainer: {
    borderBottomWidth: 1,
    borderBottomColor: COLORS.border,
    paddingVertical: 12,
  },
  dropdownContent: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 15,
  },
  dropdownValue: {
    fontSize: 16,
    fontFamily: 'InstrumentSans-SemiBold',
    color: COLORS.textPrimary,
  },
  dropdownPlaceholder: {
    fontSize: 16,
    fontFamily: 'InstrumentSans-Regular',
    color: COLORS.textSecondary,
  },
  supportContainer: {
    marginTop: 24,
    alignItems: 'flex-start',
  },
  supportText: {
    fontSize: 14,
    fontFamily: 'InstrumentSans-Regular',
    color: COLORS.textPrimary,
  },
  supportLink: {
    textDecorationLine: 'underline',
    color: COLORS.textPrimary,
  },
  addButton: {
    backgroundColor: COLORS.primary,
    marginHorizontal: 20,
    marginVertical: 20,
    borderRadius: 12,
    paddingVertical: 16,
    alignItems: 'center',
    justifyContent: 'center',
  },
  addButtonText: {
    fontSize: 16,
    fontFamily: 'InstrumentSans-SemiBold',
    color: COLORS.white,
  },
});

export default styles;