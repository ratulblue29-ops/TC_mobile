import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F7F8FA',
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 20,
    paddingVertical: 16,
    backgroundColor: '#FFFFFF',
    borderBottomWidth: 1,
    borderBottomColor: '#E0E0E0',
  },
  headerTitle: {
    fontSize: 18,
    fontFamily: 'InstrumentSans-SemiBold',
    color: '#0B0F20',
  },
  headerIcons: {
    flexDirection: 'row',
    gap: 12,
  },
  iconButton: {
    padding: 4,
  },
  scrollView: {
    flex: 1,
  },
  filterContainer: {
    backgroundColor: '#FFFFFF',
    borderRadius: 16,
    marginHorizontal: 20,
    marginTop: 20,
    marginBottom: 100,
    padding: 20,
    borderWidth: 1,
    borderColor: '#E3E3E3'
  },
  filterLabel: {
    fontSize: 16,
    fontFamily: 'InstrumentSans-Medium',
    color: '#AAB3BA',
    marginBottom: 16,
  },
  filterOption: {
    backgroundColor: '#FFFFFF',
    borderWidth: 1,
    borderColor: '#E0E0E0',
    paddingHorizontal: 16,
    paddingVertical: 16,
  },
  filterOptionFirst: {
    borderTopStartRadius: 10,
    borderTopEndRadius: 10,
  },
  filterOptionLast: {
    borderBottomLeftRadius: 10,
    borderBottomRightRadius: 10,
  },
  filterContent: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  filterTextContainer: {
    flex: 1,
    marginRight: 12,
  },
  filterOptionLabel: {
    fontSize: 14,
    fontFamily: 'InstrumentSans-Regular',
    color: '#757575',
  },
  filterValue: {
    fontSize: 16,
    fontFamily: 'InstrumentSans-SemiBold',
    color: '#000000',
  },
  tagsContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: 8,
    marginTop: 8,
  },
  tag: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#ECECEC',
    borderRadius: 6,
    paddingHorizontal: 12,
    paddingVertical: 6,
    gap: 6,
  },
  tagText: {
    fontSize: 12,
    fontFamily: 'InstrumentSans-SemiBold',
    color: '#0B0F20',
  },
  buttonContainer: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    paddingHorizontal: 24,
    paddingVertical: 20,
    backgroundColor: 'transparent',
  },
  applyButton: {
    backgroundColor: '#00897B',
    borderRadius: 12,
    paddingVertical: 16,
    alignItems: 'center',
    justifyContent: 'center',
  },
  applyButtonText: {
    fontSize: 18,
    fontFamily: 'InstrumentSans-SemiBold',
    color: '#FFFFFF',
  },
});

export default styles;