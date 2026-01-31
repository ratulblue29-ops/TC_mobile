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
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 20,
    paddingVertical: 12,
  },
  headerSection: {
    backgroundColor: '#ffffff',
    borderBottomWidth: 1,
    borderLeftWidth: 1,
    borderRightWidth: 1,
    borderBottomLeftRadius: 25,
    borderBottomRightRadius: 25,
    borderColor: '#00000027',
    paddingBottom: 17,
  },
  headerTitle: {
    fontSize: 18,
    fontWeight: '600',
    fontFamily: 'InstrumentSans-SemiBold',
    color: '#0B0F20',
    marginRight: 22,
  },
  headerIcons: {
    flexDirection: 'row',
    gap: 12,
  },
  iconButton: {
    padding: 4,
  },
  accountSection: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 20,
    marginTop: 12,
  },
  accountLabel: {
    fontSize: 16,
    fontWeight: '500',
    fontFamily: 'InstrumentSans-Medium',
    color: '#4E5D66',
    marginBottom: 4,
  },
  accountNumber: {
    fontSize: 18,
    fontWeight: '600',
    fontFamily: 'InstrumentSans-SemiBold',
    color: '#0B0F20',
  },
});

export default styles;