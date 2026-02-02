import React, { useState } from 'react';
import {
  Text,
  View,
  TouchableOpacity,
  ScrollView,
  TextInput,
  Modal,
} from 'react-native';
import { Search, Mic, ArrowUpRight } from 'lucide-react-native';
import styles from './CopyAccountStyle';

const COLORS = {
  white: '#FFFFFF',
  teal: '#00897B',
  textMain: '#0B0F20',
  textSecondary: '#4E5D66',
  lightGray: '#F7F8FA',
  border: '#E0E0E0',
};

type Account = {
  id: number;
  number: string;
  broker: string;
  status: string;
  balance: string;
  change: string;
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
    balance: '$5,820',
    change: '+7.8%',
  },
  {
    id: 4,
    number: 'MT5-104395',
    broker: 'Exness',
    status: 'Active',
    balance: '$1,150',
    change: '+2.4%',
  },
  {
    id: 5,
    number: 'MT5-104396',
    broker: 'IC Markets',
    status: 'Active',
    balance: '$3,920',
    change: '+4.6%',
  },
];

const DragHandle = () => (
  <View style={styles.dragHandle}>
    <View style={styles.dragBar} />
  </View>
);

const ModalHeader = () => (
  <View style={styles.modalHeader}>
    <Text style={styles.modalTitle}>Copy from Account</Text>
    <Text style={styles.modalSubtitle}>
      Showing the list of all the accounts
    </Text>
  </View>
);

const SearchBar = ({
  searchQuery,
  onSearchChange,
}: {
  searchQuery: string;
  onSearchChange: (text: string) => void;
}) => (
  <View style={styles.searchContainer}>
    <Search size={20} color={COLORS.textSecondary} />
    <TextInput
      style={styles.searchInput}
      placeholder="Search"
      placeholderTextColor="#9CA3AF"
      value={searchQuery}
      onChangeText={onSearchChange}
    />
    <Mic size={20} color={COLORS.textSecondary} />
  </View>
);

const AccountCard = ({
  account,
  isSelected,
  onPress,
}: {
  account: Account;
  isSelected: boolean;
  onPress: () => void;
}) => (
  <TouchableOpacity
    style={[styles.accountCard, isSelected && styles.accountCardSelected]}
    onPress={onPress}
    activeOpacity={0.7}
  >
    <View style={styles.accountCardLeft}>
      <View style={styles.accountCardHeader}>
        <Text style={styles.accountNumber}>{account.number}</Text>
        <View style={styles.statusBadge}>
          <Text style={styles.statusText}>{account.status}</Text>
        </View>
      </View>
      <Text style={styles.brokerName}>{account.broker}</Text>
    </View>
    <View style={styles.accountCardRight}>
      <Text style={styles.balanceAmount}>{account.balance}</Text>
      <View style={styles.changeContainer}>
        <Text style={styles.changeText}>{account.change}</Text>
        <ArrowUpRight size={14} color={COLORS.teal} />
      </View>
    </View>
  </TouchableOpacity>
);

const AccountsList = ({
  accounts,
  selectedAccountId,
  onSelectAccount,
}: {
  accounts: Account[];
  selectedAccountId: number | null;
  onSelectAccount: (account: Account) => void;
}) => (
  <ScrollView
    style={styles.accountsList}
    showsVerticalScrollIndicator={false}
    contentContainerStyle={styles.accountsListContent}
  >
    {accounts.map(account => (
      <AccountCard
        key={account.id}
        account={account}
        isSelected={selectedAccountId === account.id}
        onPress={() => onSelectAccount(account)}
      />
    ))}
  </ScrollView>
);

const AddAccountButton = ({ onPress }: { onPress: () => void }) => (
  <View style={styles.buttonContainer}>
    <TouchableOpacity
      style={styles.addButton}
      onPress={onPress}
      activeOpacity={0.7}
    >
      <Text style={styles.addButtonText}>Add Account</Text>
    </TouchableOpacity>
  </View>
);

interface CopyAccountModalProps {
  visible: boolean;
  onClose: () => void;
  onSelectAccount: (accountNumber: string) => void;
  currentAccount?: string;
}

const CopyAccountModal: React.FC<CopyAccountModalProps> = ({
  visible,
  onClose,
  onSelectAccount,
  currentAccount = '',
}) => {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedAccountId, setSelectedAccountId] = useState<number | null>(
    accountsData.find(acc => acc.number === currentAccount)?.id || null,
  );

  const filteredAccounts = accountsData.filter(
    account =>
      account.number.toLowerCase().includes(searchQuery.toLowerCase()) ||
      account.broker.toLowerCase().includes(searchQuery.toLowerCase()),
  );

  const handleSelectAccount = (account: Account) => {
    setSelectedAccountId(account.id);
    onSelectAccount(account.number);
    onClose();
  };

  const handleAddAccount = () => {
    console.log('Add new account');
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
          style={styles.modalContainer}
          activeOpacity={1}
          onPress={e => e.stopPropagation()}
        >
          <DragHandle />
          <ModalHeader />
          <SearchBar
            searchQuery={searchQuery}
            onSearchChange={setSearchQuery}
          />
          <AccountsList
            accounts={filteredAccounts}
            selectedAccountId={selectedAccountId}
            onSelectAccount={handleSelectAccount}
          />
          <AddAccountButton onPress={handleAddAccount} />
        </TouchableOpacity>
      </TouchableOpacity>
    </Modal>
  );
};

export default CopyAccountModal;
