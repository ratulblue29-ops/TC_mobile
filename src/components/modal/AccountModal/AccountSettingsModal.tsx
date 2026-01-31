import React from 'react';
import { Text, View, TouchableOpacity, Modal, StyleSheet } from 'react-native';
import { ChevronRight, Trash2 } from 'lucide-react-native';
import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import UserSettingsIcon from '../../svg/AccGear';
import ShieldWalletIcon from '../../svg/ProCard';
import CurrencyCircleIcon from '../../svg/Euro';

const COLORS = {
  white: '#FFFFFF',
  black: '#000000',
  textMain: '#0B0F20',
  textSecondary: '#4E5D66',
  primary: '#00897B',
  iconBgAccount: '#E8F5F5',
  iconBgProtector: '#E8F5E8',
  iconBgSymbols: '#FFF9E6',
  iconBgDelete: '#FEE8E8',
  danger: '#DC2626',
  chevron: '#999999',
  overlay: 'rgba(0, 0, 0, 0.5)',
};

type RootStackParamList = {
  AccountManagement: undefined;
  // Add other routes as needed
};

type NavigationProp = NativeStackNavigationProp<RootStackParamList>;

type MenuItemType = {
  id: string;
  title: string;
  subtitle: string;
  iconComponent: React.ReactNode;
  titleColor?: string;
  onPress?: () => void;
};

type AccountSettingsModalProps = {
  visible: boolean;
  onClose: () => void;
};

const MenuItem = ({
  item,
  onPress,
}: {
  item: MenuItemType;
  onPress?: () => void;
}) => (
  <TouchableOpacity
    style={styles.menuItem}
    onPress={onPress || item.onPress}
    activeOpacity={0.7}
  >
    <View style={styles.iconContainer}>{item.iconComponent}</View>
    <View style={styles.textContainer}>
      <Text
        style={[
          styles.menuTitle,
          item.titleColor && { color: item.titleColor },
        ]}
      >
        {item.title}
      </Text>
      <Text style={styles.menuSubtitle}>{item.subtitle}</Text>
    </View>
    <ChevronRight size={24} color={COLORS.chevron} />
  </TouchableOpacity>
);

const AccountSettingsModal = ({
  visible,
  onClose,
}: AccountSettingsModalProps) => {
  const navigation = useNavigation<NavigationProp>();

  const handleAccountManagement = () => {
    onClose(); // Close the modal first
    // Navigate to Account Management screen
    navigation.navigate('AccountManagement');
  };

  const menuItems: MenuItemType[] = [
    {
      id: '1',
      title: 'Account Management',
      subtitle: 'Showing the list of all the accounts',
      iconComponent: (
        <UserSettingsIcon width={28} height={28} color={COLORS.primary} />
      ),
      onPress: handleAccountManagement,
    },
    {
      id: '2',
      title: 'Equity Protector',
      subtitle: 'Showing the list of all the accounts',
      iconComponent: (
        <ShieldWalletIcon width={28} height={28} color={COLORS.primary} />
      ),
      onPress: () => {
        console.log('Equity Protector pressed');
      },
    },
    {
      id: '3',
      title: 'Trading Symbols',
      subtitle: 'Showing the list of all the accounts',
      iconComponent: (
        <CurrencyCircleIcon width={28} height={28} color={COLORS.primary} />
      ),
      onPress: () => {
        console.log('Trading Symbols pressed');
      },
    },
    {
      id: '4',
      title: 'Delete Account',
      subtitle: 'Showing the list of all the accounts',
      iconComponent: <Trash2 size={28} color={COLORS.danger} />,
      titleColor: COLORS.danger,
      onPress: () => {
        console.log('Delete Account pressed');
      },
    },
  ];

  return (
    <Modal
      visible={visible}
      transparent
      animationType="slide"
      onRequestClose={onClose}
    >
      <TouchableOpacity
        style={styles.overlay}
        activeOpacity={1}
        onPress={onClose}
      >
        <View style={styles.modalContainer}>
          <TouchableOpacity
            activeOpacity={1}
            onPress={e => e.stopPropagation()}
          >
            <View style={styles.modalContent}>
              <View style={styles.pullIndicator} />

              <View style={styles.header}>
                <Text style={styles.title}>Account Settings</Text>
                <Text style={styles.subtitle}>
                  Showing the list of all the accounts
                </Text>
              </View>

              <View style={styles.menuContainer}>
                {menuItems.map(item => (
                  <MenuItem key={item.id} item={item} />
                ))}
              </View>
            </View>
          </TouchableOpacity>
        </View>
      </TouchableOpacity>
    </Modal>
  );
};

const styles = StyleSheet.create({
  overlay: {
    flex: 1,
    backgroundColor: COLORS.overlay,
    justifyContent: 'flex-end',
  },
  modalContainer: {
    justifyContent: 'flex-end',
  },
  modalContent: {
    backgroundColor: COLORS.white,
    borderTopLeftRadius: 28,
    borderTopRightRadius: 28,
    paddingBottom: 40,
  },
  pullIndicator: {
    width: 45,
    height: 5,
    backgroundColor: COLORS.black,
    borderRadius: 3,
    alignSelf: 'center',
    marginTop: 10,
    marginBottom: 20,
  },
  header: {
    paddingHorizontal: 20,
    marginBottom: 24,
  },
  title: {
    fontFamily: 'InstrumentSans-Bold',
    fontSize: 20,
    color: COLORS.black,
    marginBottom: 6,
  },
  subtitle: {
    fontFamily: 'InstrumentSans-Regular',
    fontSize: 15,
    color: COLORS.textSecondary,
  },
  menuContainer: {
    paddingHorizontal: 20,
  },
  menuItem: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 16,
    minHeight: 76,
  },
  iconContainer: {
    borderRadius: 21,
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: 14,
  },
  textContainer: {
    flex: 1,
    marginRight: 12,
  },
  menuTitle: {
    fontFamily: 'InstrumentSans-SemiBold',
    fontSize: 18,
    color: COLORS.textMain,
    marginBottom: 3,
  },
  menuSubtitle: {
    fontFamily: 'InstrumentSans-Regular',
    fontSize: 15,
    color: COLORS.textSecondary,
  },
});

export default AccountSettingsModal;
