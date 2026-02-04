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
  white: '#FFFFFF',
  teal: '#00897B',
  textMain: '#0B0F20',
  textSecondary: '#666666',
  lightGray: '#F5F5F5',
  border: '#E0E0E0',
  success: '#4CAF50',
  lightTeal: '#E0F2F1',
};

type Account = {
  id: number;
  number: string;
  broker: string;
  status: string;
  balance: string;
  change: string;
};

type CopyAccountProps = {
  visible: boolean;
  onClose: () => void;
  onSelectAccount: (account: Account) => void;
  selectedAccount?: string;
};

const accountsData: Account[] = [
  {
    id: 1,
    number: 'MT5-104392',
    broker: 'Exness',
    status: 'Active',
    balance: '$1,624',
    change: '+5.1%',
  },
  {
    id: 2,
    number: 'MT5-104393',
    broker: 'Exness',
    status: 'Active',
    balance: '$2,450',
    change: '+3.2%',
  },
  {
    id: 3,
    number: 'MT5-104394',
    broker: 'IC Markets',
    status: 'Active',
    balance: '$5,120',
    change: '+7.8%',
  },
  {
    id: 4,
    number: 'MT5-104395',
    broker: 'XM',
    status: 'Active',
    balance: '$3,890',
    change: '+4.5%',
  },
  {
    id: 5,
    number: 'MT5-104396',
    broker: 'Exness',
    status: 'Active',
    balance: '$1,624',
    change: '+5.1%',
  },
  {
    id: 6,
    number: 'MT5-104397',
    broker: 'Exness',
    status: 'Active',
    balance: '$2,450',
    change: '+3.2%',
  },
  {
    id: 7,
    number: 'MT5-104398',
    broker: 'IC Markets',
    status: 'Active',
    balance: '$5,120',
    change: '+7.8%',
  },
  {
    id: 8,
    number: 'MT5-104399',
    broker: 'XM',
    status: 'Active',
    balance: '$3,890',
    change: '+4.5%',
  },
];

const CopyAccount = ({
  visible,
  onClose,
  onSelectAccount,
  selectedAccount,
}: CopyAccountProps) => {
  const [searchQuery, setSearchQuery] = useState('');
  const [filteredAccounts, setFilteredAccounts] = useState(accountsData);

  const handleSearch = (text: string) => {
    setSearchQuery(text);
    const filtered = accountsData.filter(
      account =>
        account.number.toLowerCase().includes(text.toLowerCase()) ||
        account.broker.toLowerCase().includes(text.toLowerCase()),
    );
    setFilteredAccounts(filtered);
  };

  const handleSelectAccount = (account: Account) => {
    onSelectAccount(account);
    onClose();
  };

  return (
    <Modal
      visible={visible}
      transparent
      animationType="slide"
      onRequestClose={onClose}
    >
      <TouchableOpacity
        style={styles.modalOverlay}
        activeOpacity={1}
        onPress={onClose}
      >
        <TouchableOpacity
          style={styles.modalContent}
          activeOpacity={1}
          onPress={e => e.stopPropagation()}
        >
          <View style={styles.dragHandle} />

          <View style={styles.header}>
            <Text style={styles.modalTitle}>Copy from Account</Text>
            <Text style={styles.modalSubtitle}>
              Showing the list of all the accounts
            </Text>
          </View>

          <View style={styles.searchContainer}>
            <Search size={20} color={COLORS.textSecondary} />
            <TextInput
              placeholder="Search"
              placeholderTextColor={COLORS.textSecondary}
              style={styles.searchInput}
              value={searchQuery}
              onChangeText={handleSearch}
            />
            <Mic size={20} color={COLORS.textSecondary} />
          </View>

          <ScrollView
            showsVerticalScrollIndicator={false}
            style={styles.accountList}
          >
            {filteredAccounts.map(account => (
              <TouchableOpacity
                key={account.id}
                style={[
                  styles.accountCard,
                  selectedAccount === account.number &&
                    styles.accountCardSelected,
                ]}
                onPress={() => handleSelectAccount(account)}
                activeOpacity={0.7}
              >
                <View style={styles.accountLeft}>
                  <View style={styles.accountHeader}>
                    <Text style={styles.accountNumber}>{account.number}</Text>
                    <View style={styles.statusBadge}>
                      <Text style={styles.statusText}>{account.status}</Text>
                    </View>
                  </View>
                  <Text style={styles.brokerText}>{account.broker}</Text>
                </View>

                <View style={styles.accountRight}>
                  <Text style={styles.balanceText}>{account.balance}</Text>
                  <View style={styles.accountChange}>
                    <Text style={styles.changeText}>{account.change}</Text>
                    <ArrowUpRight size={16} color={COLORS.teal} />
                  </View>
                </View>
              </TouchableOpacity>
            ))}
          </ScrollView>

          <TouchableOpacity
            style={styles.addButton}
            activeOpacity={0.7}
            onPress={() => {
              console.log('Add new account');
              onClose();
            }}
          >
            <Text style={styles.addButtonText}>Add Account</Text>
          </TouchableOpacity>
        </TouchableOpacity>
      </TouchableOpacity>
    </Modal>
  );
};

const styles = StyleSheet.create({
  modalOverlay: {
    flex: 1,
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    justifyContent: 'flex-end',
  },
  modalContent: {
    backgroundColor: COLORS.white,
    borderTopLeftRadius: 24,
    borderTopRightRadius: 24,
    paddingHorizontal: 20,
    paddingTop: 8,
    paddingBottom: 20,
    maxHeight: '85%',
  },
  dragHandle: {
    width: 40,
    height: 4,
    backgroundColor: COLORS.lightGray,
    borderRadius: 2,
    alignSelf: 'center',
    marginVertical: 12,
  },
  header: {
    marginBottom: 20,
  },
  modalTitle: {
    fontSize: 24,
    fontWeight: '700',
    color: COLORS.textMain,
    marginBottom: 4,
  },
  modalSubtitle: {
    fontSize: 14,
    fontWeight: '400',
    color: COLORS.textSecondary,
  },
  searchContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: COLORS.lightGray,
    borderRadius: 12,
    paddingHorizontal: 16,
    marginBottom: 20,
    height: 48,
  },
  searchInput: {
    flex: 1,
    marginHorizontal: 12,
    fontSize: 16,
    color: COLORS.textMain,
  },
  accountList: {
    flexGrow: 0,
    maxHeight: '55%',
  },
  accountCard: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: COLORS.white,
    borderWidth: 1,
    borderColor: COLORS.border,
    borderRadius: 12,
    padding: 16,
    marginBottom: 12,
  },
  accountCardSelected: {
    borderColor: COLORS.teal,
    borderWidth: 2,
  },
  accountLeft: {
    flex: 1,
  },
  accountHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 4,
    gap: 8,
  },
  accountNumber: {
    fontSize: 16,
    fontWeight: '600',
    color: COLORS.textMain,
  },
  accountChange: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  statusBadge: {
    backgroundColor: COLORS.lightTeal,
    borderWidth: 1,
    borderColor: COLORS.teal,
    borderRadius: 12,
    paddingHorizontal: 8,
    paddingVertical: 2,
  },
  statusText: {
    fontSize: 12,
    fontWeight: '500',
    color: COLORS.teal,
  },
  brokerText: {
    fontSize: 14,
    fontWeight: '400',
    color: COLORS.textSecondary,
  },
  accountRight: {
    alignItems: 'flex-end',
  },
  balanceText: {
    fontSize: 20,
    fontWeight: '700',
    color: COLORS.textMain,
    marginBottom: 4,
  },
  changeText: {
    fontSize: 14,
    fontWeight: '600',
    color: COLORS.success,
  },
  addButton: {
    backgroundColor: COLORS.teal,
    borderRadius: 12,
    paddingVertical: 16,
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 8,
  },
  addButtonText: {
    fontSize: 16,
    fontWeight: '600',
    color: COLORS.white,
  },
});

export default CopyAccount;
