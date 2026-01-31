import React, { useState } from 'react';
import {
  Text,
  View,
  TouchableOpacity,
  ScrollView,
  TextInput,
  Modal,
  StyleSheet,
} from 'react-native';
import { Search, Mic, ArrowUpRight } from 'lucide-react-native';

const COLORS = {
  primary: '#00897B',
  secondary: '#0B0F20',
  white: '#FFFFFF',
  textMain: '#000000',
  textSecondary: '#2C3440',
  searchBg: '#EEF0F4',
  border: '#E2E2E2',
  success: '#00897B',
  warning: '#C3881B',
  danger: '#C54545',
};

type AccountData = {
  id: number;
  number: string;
  broker: string;
  status: string;
  statusColor: string;
  amount: string;
  change: string;
};

type SelectAccountModalProps = {
  visible: boolean;
  onClose: () => void;
  accounts: AccountData[];
  selectedAccountId: number;
  onSelectAccount: (accountId: number) => void;
};

const SelectAccountModal = ({
  visible,
  onClose,
  accounts,
  selectedAccountId,
  onSelectAccount,
}: SelectAccountModalProps) => {
  const [searchQuery, setSearchQuery] = useState('');

  const filteredAccounts = accounts.filter(
    account =>
      account.number.toLowerCase().includes(searchQuery.toLowerCase()) ||
      account.broker.toLowerCase().includes(searchQuery.toLowerCase()),
  );

  const handleSelectAccount = (accountId: number) => {
    onSelectAccount(accountId);
    onClose();
  };

  return (
    <Modal
      visible={visible}
      transparent
      animationType="slide"
      onRequestClose={onClose}
    >
      <View style={styles.overlay}>
        <TouchableOpacity
          style={styles.backdrop}
          activeOpacity={1}
          onPress={onClose}
        />
        <View style={styles.modalContainer}>
          <View style={styles.modalContent}>
            <View style={styles.modalHeader}>
              <Text style={styles.modalTitle}>Select Account</Text>
              <Text style={styles.modalSubtitle}>
                Showing the list of all the accounts
              </Text>
            </View>

            <View style={styles.searchContainer}>
              <Search size={20} color="#5C5C5C" />
              <TextInput
                placeholder="Search"
                placeholderTextColor="#9CA3AF"
                style={styles.searchInput}
                value={searchQuery}
                onChangeText={setSearchQuery}
              />
              <Mic size={20} color="#5C5C5C" />
            </View>

            <ScrollView
              showsVerticalScrollIndicator={false}
              style={styles.accountsList}
            >
              {filteredAccounts.map(account => {
                const isSelected = account.id === selectedAccountId;
                return (
                  <TouchableOpacity
                    key={account.id}
                    style={[
                      styles.accountCard,
                      isSelected && styles.accountCardSelected,
                    ]}
                    onPress={() => handleSelectAccount(account.id)}
                    activeOpacity={0.7}
                  >
                    <View style={styles.accountCardLeft}>
                      <View style={styles.accountCardHeader}>
                        <Text
                          style={[
                            styles.accountNumber,
                            isSelected && styles.accountNumberSelected,
                          ]}
                        >
                          {account.number}
                        </Text>
                        <View
                          style={[
                            styles.statusBadge,
                            isSelected && styles.statusBadgeSelected,
                            {
                              borderColor: account.statusColor,
                            },
                          ]}
                        >
                          <Text
                            style={[
                              styles.statusBadgeText,
                              isSelected && styles.statusBadgeTextSelected,
                              {
                                color: account.statusColor,
                              },
                            ]}
                          >
                            {account.status}
                          </Text>
                        </View>
                      </View>
                      <Text
                        style={[
                          styles.accountBroker,
                          isSelected && styles.accountBrokerSelected,
                        ]}
                      >
                        {account.broker}
                      </Text>
                    </View>
                    <View style={styles.accountCardRight}>
                      <Text
                        style={[
                          styles.accountAmount,
                          isSelected && styles.accountAmountSelected,
                        ]}
                      >
                        {account.amount}
                      </Text>
                      <View style={styles.accountChange}>
                        <Text
                          style={[
                            styles.accountChangeText,
                            isSelected && styles.accountChangeTextSelected,
                          ]}
                        >
                          {account.change}
                        </Text>
                        <ArrowUpRight
                          size={16}
                          color={isSelected ? COLORS.secondary : COLORS.primary}
                        />
                      </View>
                    </View>
                  </TouchableOpacity>
                );
              })}
            </ScrollView>

            <TouchableOpacity
              style={styles.addAccountButton}
              activeOpacity={0.7}
            >
              <Text style={styles.addAccountText}>Add Account</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  overlay: {
    flex: 1,
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    justifyContent: 'flex-end',
  },
  backdrop: {
    flex: 1,
  },
  modalContainer: {
    backgroundColor: COLORS.white,
    borderTopLeftRadius: 24,
    borderTopRightRadius: 24,
    maxHeight: '85%',
    minHeight: '85%',
  },
  modalContent: {
    paddingHorizontal: 20,
    paddingTop: 24,
    paddingBottom: 32,
  },
  modalHeader: {
    marginBottom: 20,
  },
  modalTitle: {
    fontSize: 20,
    fontWeight: '700',
    color: COLORS.textMain,
    fontFamily: 'InstrumentSans-Bold',
    marginBottom: 8,
  },
  modalSubtitle: {
    fontSize: 15,
    fontWeight: '400',
    color: COLORS.textMain,
    fontFamily: 'InstrumentSans-Regular',
  },
  searchContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: COLORS.searchBg,
    borderRadius: 12,
    paddingHorizontal: 16,
    marginBottom: 20,
    gap: 12,
  },
  searchInput: {
    flex: 1,
    paddingVertical: 14,
    fontSize: 16,
    color: COLORS.textMain,
    fontFamily: 'InstrumentSans-Regular',
    fontWeight: '400',
  },
  accountsList: {
    maxHeight: '60%',
    marginBottom: 20,
  },
  accountCard: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: COLORS.white,
    borderWidth: 1,
    borderColor: COLORS.border,
    borderRadius: 12,
    paddingVertical: 16,
    paddingHorizontal: 16,
    marginBottom: 12,
  },
  accountCardSelected: {
    backgroundColor: '#00897b1c',
    borderColor: COLORS.primary,
  },
  accountCardLeft: {
    flex: 1,
  },
  accountCardHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 8,
    gap: 12,
  },
  accountNumber: {
    fontSize: 16,
    fontWeight: '600',
    color: COLORS.secondary,
    fontFamily: 'InstrumentSans-SemiBold',
  },
  accountNumberSelected: {
    color: COLORS.secondary,
  },
  statusBadge: {
    borderWidth: 1,
    borderRadius: 6,
    paddingHorizontal: 8,
    paddingVertical: 4,
  },
  statusBadgeSelected: {
    borderColor: COLORS.secondary,
  },
  statusBadgeText: {
    fontSize: 12,
    fontWeight: '500',
    fontFamily: 'InstrumentSans-Medium',
  },
  statusBadgeTextSelected: {
    color: COLORS.secondary,
  },
  accountBroker: {
    fontSize: 16,
    fontWeight: '500',
    color: COLORS.textSecondary,
    fontFamily: 'InstrumentSans-Medium',
  },
  accountBrokerSelected: {
    color: COLORS.textSecondary,
  },
  accountCardRight: {
    alignItems: 'flex-end',
  },
  accountAmount: {
    fontSize: 18,
    fontWeight: '700',
    color: COLORS.secondary,
    fontFamily: 'InstrumentSans-Bold',
    marginBottom: 4,
  },
  accountAmountSelected: {
    color: COLORS.secondary,
  },
  accountChange: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 4,
  },
  accountChangeText: {
    fontSize: 14,
    fontWeight: '500',
    color: COLORS.primary,
    fontFamily: 'InstrumentSans-Medium',
  },
  accountChangeTextSelected: {
    color: COLORS.secondary,
  },
  addAccountButton: {
    backgroundColor: COLORS.primary,
    borderRadius: 12,
    paddingVertical: 16,
    alignItems: 'center',
    justifyContent: 'center',
  },
  addAccountText: {
    fontSize: 16,
    fontWeight: '700',
    color: COLORS.white,
    fontFamily: 'InstrumentSans-Bold',
  },
});

export default SelectAccountModal;
