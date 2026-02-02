import { StyleSheet } from 'react-native';

const COLORS = {
  white: '#FFFFFF',
  teal: '#00897B',
  textMain: '#0B0F20',
  textSecondary: '#4E5D66',
  textMuted: '#9CA3AF',
  lightGray: '#F7F8FA',
  border: '#E0E0E0',
  overlay: 'rgba(0, 0, 0, 0.5)',
  statusBg: '#E8F5E9',
  statusText: '#00897B',
};

const styles = StyleSheet.create({
  modalOverlay: {
    flex: 1,
    backgroundColor: COLORS.overlay,
    justifyContent: 'flex-end',
  },
  modalContainer: {
    backgroundColor: COLORS.white,
    borderTopLeftRadius: 24,
    borderTopRightRadius: 24,
    paddingHorizontal: 20,
    paddingBottom: 34,
    maxHeight: '90%',
  },
  dragHandle: {
    alignItems: 'center',
    paddingVertical: 12,
  },
  dragBar: {
    width: 40,
    height: 4,
    backgroundColor: COLORS.border,
    borderRadius: 2,
  },
  modalHeader: {
    paddingTop: 8,
    paddingBottom: 20,
  },
  modalTitle: {
    fontSize: 26,
    fontWeight: '700',
    color: COLORS.textMain,
    marginBottom: 6,
  },
  modalSubtitle: {
    fontSize: 15,
    fontWeight: '400',
    color: COLORS.textSecondary,
  },
  searchContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: COLORS.lightGray,
    borderRadius: 14,
    paddingHorizontal: 16,
    paddingVertical: 14,
    marginBottom: 20,
    gap: 12,
  },
  searchInput: {
    flex: 1,
    fontSize: 16,
    color: COLORS.textMain,
    padding: 0,
  },
  accountsList: {
    flex: 1,
  },
  accountsListContent: {
    paddingBottom: 16,
    gap: 12,
  },
  accountCard: {
    backgroundColor: COLORS.white,
    borderRadius: 14,
    borderWidth: 1,
    borderColor: COLORS.border,
    padding: 16,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  accountCardSelected: {
    borderColor: COLORS.teal,
    borderWidth: 2,
  },
  accountCardLeft: {
    flex: 1,
    gap: 6,
  },
  accountCardHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 10,
  },
  accountNumber: {
    fontSize: 17,
    fontWeight: '700',
    color: COLORS.textMain,
  },
  statusBadge: {
    backgroundColor: COLORS.statusBg,
    borderRadius: 12,
    paddingHorizontal: 10,
    paddingVertical: 4,
    borderWidth: 1,
    borderColor: COLORS.statusText,
  },
  statusText: {
    fontSize: 12,
    fontWeight: '500',
    color: COLORS.statusText,
  },
  brokerName: {
    fontSize: 14,
    fontWeight: '400',
    color: COLORS.textSecondary,
  },
  accountCardRight: {
    alignItems: 'flex-end',
    gap: 4,
  },
  balanceAmount: {
    fontSize: 22,
    fontWeight: '700',
    color: COLORS.textMain,
  },
  changeContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 4,
  },
  changeText: {
    fontSize: 15,
    fontWeight: '600',
    color: COLORS.teal,
  },
  buttonContainer: {
    paddingTop: 20,
  },
  addButton: {
    backgroundColor: COLORS.teal,
    borderRadius: 14,
    paddingVertical: 16,
    alignItems: 'center',
    justifyContent: 'center',
  },
  addButtonText: {
    fontSize: 17,
    fontWeight: '700',
    color: COLORS.white,
  },
});

export default styles;