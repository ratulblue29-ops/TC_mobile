import React, { useMemo } from 'react';
import { View, TouchableOpacity, StyleSheet } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import DashboardStack from './DashboardStack';
import CopierScreen from '../screen/Copier/CopierScreen';
import AnalyzerScreen from '../screen/Analyzer/AnalyzerScreen';
import CompareScreen from '../screen/Compare/CompareScreen';
import SentimentsScreen from '../screen/Sentiments/SentimentsScreen';
import HomeIcon from '../components/svg/Home';
import SwapIcon from '../components/svg/Convert';
import RadarIcon from '../components/svg/Group';
import { Copy } from 'lucide-react-native';
import TrendUpIcon from '../components/svg/Chart';

const Tab = createBottomTabNavigator();

const CustomTabBar = ({ state, descriptors, navigation }: any) => {
  return (
    <View style={styles.tabBar}>
      {state.routes.map((route: any, index: number) => {
        const { options } = descriptors[route.key];
        const isFocused = state.index === index;

        const onPress = () => {
          const event = navigation.emit({
            type: 'tabPress',
            target: route.key,
            canPreventDefault: true,
          });

          if (!isFocused && !event.defaultPrevented) {
            navigation.navigate(route.name);
          }
        };

        const onLongPress = () => {
          navigation.emit({
            type: 'tabLongPress',
            target: route.key,
          });
        };

        const renderIcon = () => {
          const iconColor = isFocused ? '#00897B' : '#090B0A';
          const iconSize = 28;

          switch (route.name) {
            case 'Dashboard':
              return (
                <HomeIcon
                  width={iconSize}
                  height={iconSize}
                  color={iconColor}
                />
              );
            case 'Copier':
              return (
                <SwapIcon
                  width={iconSize}
                  height={iconSize}
                  color={iconColor}
                />
              );
            case 'Analyzer':
              return (
                <RadarIcon
                  width={iconSize}
                  height={iconSize}
                  color={iconColor}
                />
              );
            case 'Compare':
              return (
                <Copy width={iconSize} height={iconSize} color={iconColor} />
              );
            case 'Sentiments':
              return (
                <TrendUpIcon
                  width={iconSize}
                  height={iconSize}
                  color={iconColor}
                />
              );
            default:
              return null;
          }
        };

        const containerStyle = useMemo(
          () => [styles.iconContainer, isFocused && styles.activeIconContainer],
          [isFocused],
        );

        return (
          <TouchableOpacity
            key={index}
            accessibilityRole="button"
            accessibilityState={isFocused ? { selected: true } : {}}
            accessibilityLabel={options.tabBarAccessibilityLabel}
            testID={options.tabBarTestID}
            onPress={onPress}
            onLongPress={onLongPress}
            style={styles.tabButton}
          >
            <View style={containerStyle}>{renderIcon()}</View>
          </TouchableOpacity>
        );
      })}
    </View>
  );
};

export default function BottomTabs() {
  return (
    <Tab.Navigator
      tabBar={props => <CustomTabBar {...props} />}
      screenOptions={{
        headerShown: false,
      }}
    >
      <Tab.Screen name="Dashboard" component={DashboardStack} />
      <Tab.Screen name="Copier" component={CopierScreen} />
      <Tab.Screen name="Analyzer" component={AnalyzerScreen} />
      <Tab.Screen name="Compare" component={CompareScreen} />
      <Tab.Screen name="Sentiments" component={SentimentsScreen} />
    </Tab.Navigator>
  );
}

const styles = StyleSheet.create({
  tabBar: {
    flexDirection: 'row',
    backgroundColor: '#FFFFFF',
    borderTopLeftRadius: 25,
    borderTopRightRadius: 25,
    paddingTop: 15,
    paddingHorizontal: 8,
    paddingBottom: 35,
    elevation: 8,
  },
  tabButton: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  iconContainer: {
    width: 44,
    height: 44,
    borderRadius: 22,
    alignItems: 'center',
    justifyContent: 'center',
    overflow: 'hidden',
  },
  activeIconContainer: {
    backgroundColor: 'rgba(0, 137, 123, 0.1)',
  },
});
