import React, { useState, useCallback, useRef } from 'react';
import {
  Text,
  View,
  TouchableOpacity,
  ScrollView,
  Image,
  NativeScrollEvent,
  NativeSyntheticEvent,
  Dimensions,
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import {
  Bell,
  Menu,
  ChevronDown,
  ChevronRight,
  TrendingUp,
  RadioTower,
} from 'lucide-react-native';
import Svg, { Path, Circle, G, Text as SvgText, Defs, LinearGradient as SvgLinearGradient, Stop, Line } from 'react-native-svg';
import styles from './style';
import LinearGradient from 'react-native-linear-gradient';

const { width } = Dimensions.get('window');

const COLORS = {
  primary: '#00897B',
  secondary: '#0B0F20',
  background: '#F7F8FA',
  white: '#FFFFFF',
  textMain: '#0B0F20',
  textSecondary: '#2C3440',
  textMuted: '#4E5D66',
  activeTab: '#00897B',
  inactiveTab: '#7E8A93',
  border: '#E3E3E3',
  pillBorder: '#E1D6D6',
  gradientStart: '#FFFFFF',
  gradientEnd: '#F7F8FA',
};

type TabType = 'Performance' | 'Analysis Hub';
type ROITab = 'Portfolio ROI' | 'Performance ROI' | 'Instrument ROI';

const insightsData = [
  {
    id: 1,
    title: 'AI Insights',
    subtitle: 'Trade Between 08:00-11:00 UTC',
    description: 'Historical data shows +1.3% average ROI during this window. Favor high-liquidity instruments.',
    priority: 'High',
  },
  {
    id: 2,
    title: 'AI Insights',
    subtitle: 'Trade Between 08:00-11:00 UTC',
    description: 'Historical data shows +1.3% average ROI during this window. Favor high-liquidity instruments.',
    priority: 'High',
  },
  {
    id: 3,
    title: 'AI Insights',
    subtitle: 'Trade Between 08:00-11:00 UTC',
    description: 'Historical data shows +1.3% average ROI during this window. Favor high-liquidity instruments.',
    priority: 'High',
  },
];

const GaugeChart = ({ value }: { value: number }) => {
  const config = {
    totalWidth: 320,
    totalHeight: 280,
    centerX: 160,
    centerY: 200,
    outerRadius: 140,
    innerRadius: 110,
    scaleRadius: 95,
    scaleInnerRadius: 90,
    needleLength: 85,
    needleBaseWidth: 8,
    startAngle: -135,
    endAngle: 135,
  };

  const angleToRad = (degrees: number) => (degrees * Math.PI) / 180;

  const polarToCartesian = (centerX: number, centerY: number, radius: number, angleInDegrees: number) => {
    const angleInRadians = angleToRad(angleInDegrees - 90);
    return {
      x: centerX + radius * Math.cos(angleInRadians),
      y: centerY + radius * Math.sin(angleInRadians),
    };
  };

  const valueToAngle = (val: number, min = -100, max = 100) => {
    const range = max - min;
    const angleRange = config.endAngle - config.startAngle;
    const normalized = (val - min) / range;
    return config.startAngle + normalized * angleRange;
  };

  const createArcPath = (
    startAngle: number,
    endAngle: number,
    outerR: number,
    innerR: number,
    centerX: number,
    centerY: number
  ) => {
    const start = polarToCartesian(centerX, centerY, outerR, endAngle);
    const end = polarToCartesian(centerX, centerY, outerR, startAngle);
    const innerStart = polarToCartesian(centerX, centerY, innerR, endAngle);
    const innerEnd = polarToCartesian(centerX, centerY, innerR, startAngle);

    const largeArcFlag = endAngle - startAngle <= 180 ? '0' : '1';

    return `
      M ${start.x} ${start.y}
      A ${outerR} ${outerR} 0 ${largeArcFlag} 0 ${end.x} ${end.y}
      L ${innerEnd.x} ${innerEnd.y}
      A ${innerR} ${innerR} 0 ${largeArcFlag} 1 ${innerStart.x} ${innerStart.y}
      Z
    `;
  };

  const createNeedlePath = (angle: number) => {
    const tipX = config.centerX + config.needleLength * Math.cos(angleToRad(angle));
    const tipY = config.centerY + config.needleLength * Math.sin(angleToRad(angle));

    const perpAngle1 = angle + 90;
    const perpAngle2 = angle - 90;

    const base1X = config.centerX + (config.needleBaseWidth / 2) * Math.cos(angleToRad(perpAngle1));
    const base1Y = config.centerY + (config.needleBaseWidth / 2) * Math.sin(angleToRad(perpAngle1));
    const base2X = config.centerX + (config.needleBaseWidth / 2) * Math.cos(angleToRad(perpAngle2));
    const base2Y = config.centerY + (config.needleBaseWidth / 2) * Math.sin(angleToRad(perpAngle2));

    return `M ${base1X} ${base1Y} L ${tipX} ${tipY} L ${base2X} ${base2Y} Z`;
  };

  const renderScaleMarks = () => {
    const majorTicks = [-100, -80, -60, -40, -20, 0, 20, 40, 60, 80, 100];
    const minorTickValues: number[] = [];
    
    for (let i = -100; i <= 100; i += 5) {
      if (!majorTicks.includes(i)) {
        minorTickValues.push(i);
      }
    }

    return (
      <G>
        {minorTickValues.map((tickValue) => {
          const angle = valueToAngle(tickValue);
          const outerPoint = polarToCartesian(config.centerX, config.centerY, config.scaleRadius, angle);
          const innerPoint = polarToCartesian(config.centerX, config.centerY, config.scaleRadius - 7, angle);

          return (
            <Line
              key={`minor-${tickValue}`}
              x1={outerPoint.x}
              y1={outerPoint.y}
              x2={innerPoint.x}
              y2={innerPoint.y}
              stroke="#3A3D4E"
              strokeWidth="1"
            />
          );
        })}

        {majorTicks.map((tickValue) => {
          const angle = valueToAngle(tickValue);
          const outerPoint = polarToCartesian(config.centerX, config.centerY, config.scaleRadius, angle);
          const innerPoint = polarToCartesian(config.centerX, config.centerY, config.scaleRadius - 10, angle);

          return (
            <Line
              key={`major-${tickValue}`}
              x1={outerPoint.x}
              y1={outerPoint.y}
              x2={innerPoint.x}
              y2={innerPoint.y}
              stroke="#4A4D5E"
              strokeWidth="2"
            />
          );
        })}
      </G>
    );
  };

  const renderScaleNumbers = () => {
    const scaleNumbers = [-100, -80, -60, -40, -20, 0, 20, 40, 60, 80, 100];

    return (
      <G>
        {scaleNumbers.map((num) => {
          const angle = valueToAngle(num);
          const position = polarToCartesian(config.centerX, config.centerY, 70, angle);

          return (
            <SvgText
              key={`num-${num}`}
              x={position.x}
              y={position.y}
              fill="#6B7280"
              fontSize="11"
              fontWeight="500"
              textAnchor="middle"
              alignmentBaseline="middle"
              fontFamily="InstrumentSans-Medium"
            >
              {num}
            </SvgText>
          );
        })}
      </G>
    );
  };

  const valueAngle = valueToAngle(value);

  return (
    <View style={styles.gaugeContainer}>
      <Svg width={config.totalWidth} height={config.totalHeight}>
        <Defs>
          <SvgLinearGradient id="gaugeGradient" x1="0%" y1="0%" x2="100%" y2="0%">
            <Stop offset="20%" stopColor="#FF6B6B" stopOpacity="1" />
            <Stop offset="25%" stopColor="#FF8E53" stopOpacity="1" />
            <Stop offset="30%" stopColor="#FFB84D" stopOpacity="1" />
            <Stop offset="35%" stopColor="#FFE66D" stopOpacity="1" />
            <Stop offset="50%" stopColor="#A8E6CF" stopOpacity="1" />
            <Stop offset="65%" stopColor="#4ECDC4" stopOpacity="1" />
            <Stop offset="75%" stopColor="#3DBAA3" stopOpacity="1" />
            <Stop offset="100%" stopColor="#00A896" stopOpacity="1" />
          </SvgLinearGradient>
        </Defs>

        <Path
          d={createArcPath(
            config.startAngle,
            config.endAngle,
            config.outerRadius,
            config.innerRadius,
            config.centerX,
            config.centerY
          )}
          fill="url(#gaugeGradient)"
        />

        {value < 100 && (
          <Path
            d={createArcPath(
              valueAngle,
              config.endAngle,
              config.outerRadius,
              config.innerRadius,
              config.centerX,
              config.centerY
            )}
            fill="#3A3D4E"
            opacity="0.6"
          />
        )}

        <Circle cx={config.centerX} cy={config.centerY} r={config.scaleRadius} fill="#0B0F20" />

        {renderScaleMarks()}
        {renderScaleNumbers()}

        <Path d={createNeedlePath(valueAngle)} fill="#6B7280" />
        <Circle cx={config.centerX} cy={config.centerY} r="10" fill="#6B7280" />
      </Svg>

      <View style={styles.gaugeValueContainer}>
        <Text style={styles.gaugeValue}>{value}%</Text>
        <View style={styles.gaugeChange}>
          <TrendingUp size={14} color={COLORS.primary} />
          <Text style={styles.gaugeChangeText}>+2.1% from last month</Text>
        </View>
      </View>
    </View>
  );
};

const Header = ({
  activeTab,
  onTabChange,
}: {
  activeTab: TabType;
  onTabChange: (tab: TabType) => void;
}) => (
  <View style={styles.headerSection}>
    <View style={styles.header}>
      <Image
        source={require('../../../assets/images/logo_icon.png')}
        style={styles.logoIcon}
      />
      <Text style={styles.headerTitle}>Analyzer</Text>
      <View style={styles.headerIcons}>
        <TouchableOpacity style={styles.iconButton} activeOpacity={0.7}>
          <Bell size={24} color={COLORS.secondary} />
        </TouchableOpacity>
        <TouchableOpacity style={styles.iconButton} activeOpacity={0.7}>
          <Menu size={24} color={COLORS.secondary} />
        </TouchableOpacity>
      </View>
    </View>

    <View style={styles.accountSection}>
      <View>
        <Text style={styles.accountLabel}>Account</Text>
        <Text style={styles.accountNumber}>MT5-104392</Text>
      </View>
      <TouchableOpacity activeOpacity={0.7}>
        <ChevronDown size={24} color={COLORS.secondary} />
      </TouchableOpacity>
    </View>

    <View style={styles.tabContainer}>
      <View style={styles.tabPill}>
        <TouchableOpacity
          style={[styles.tab, activeTab === 'Performance' && styles.tabActive]}
          onPress={() => onTabChange('Performance')}
          activeOpacity={0.7}
        >
          <Text style={[styles.tabText, activeTab === 'Performance' && styles.tabTextActive]}>
            Performance
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={[styles.tab, activeTab === 'Analysis Hub' && styles.tabActive]}
          onPress={() => onTabChange('Analysis Hub')}
          activeOpacity={0.7}
        >
          <Text style={[styles.tabText, activeTab === 'Analysis Hub' && styles.tabTextActive]}>
            Analysis Hub
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  </View>
);

const ROITabs = ({
  activeROITab,
  onROITabChange,
}: {
  activeROITab: ROITab;
  onROITabChange: (tab: ROITab) => void;
}) => (
  <ScrollView
    horizontal
    showsHorizontalScrollIndicator={false}
    style={styles.roiTabsScroll}
    contentContainerStyle={styles.roiTabsContainer}
  >
    <TouchableOpacity
      style={[styles.roiTab, activeROITab === 'Portfolio ROI' && styles.roiTabActive]}
      onPress={() => onROITabChange('Portfolio ROI')}
      activeOpacity={0.7}
    >
      <Text style={[styles.roiTabText, activeROITab === 'Portfolio ROI' && styles.roiTabTextActive]}>
        Portfolio ROI
      </Text>
    </TouchableOpacity>
    <TouchableOpacity
      style={[styles.roiTab, activeROITab === 'Performance ROI' && styles.roiTabActive]}
      onPress={() => onROITabChange('Performance ROI')}
      activeOpacity={0.7}
    >
      <Text style={[styles.roiTabText, activeROITab === 'Performance ROI' && styles.roiTabTextActive]}>
        Performance ROI
      </Text>
    </TouchableOpacity>
    <TouchableOpacity
      style={[styles.roiTab, activeROITab === 'Instrument ROI' && styles.roiTabActive]}
      onPress={() => onROITabChange('Instrument ROI')}
      activeOpacity={0.7}
    >
      <Text style={[styles.roiTabText, activeROITab === 'Instrument ROI' && styles.roiTabTextActive]}>
        Instrument ROI
      </Text>
    </TouchableOpacity>
  </ScrollView>
);

const ROICard = () => (
  <View style={styles.roiCard}>
    <Text style={styles.roiCardTitle}>Portfolio ROI</Text>
    <GaugeChart value={14.8} />
  </View>
);

const StatisticsCard = () => (
  <View style={styles.statisticsCard}>
    <Text style={styles.statisticsTitle}>Statistics</Text>

   <View style={styles.statSectionWrap}>
    <View style={styles.statSection}>
      <Text style={styles.statLabel}>Total PNL</Text>
      <Text style={styles.statValue}>$12,437</Text>
    </View>

    <View style={styles.separator} />

    <View>
      <View style={styles.statDetailRow}>
        <Text style={styles.statDetailText}>Fees/Swaps: -$312</Text>
      </View>
      <View style={styles.statDetailRow}>
        <Text style={styles.statDetailText}>Commissions: -$198</Text>
      </View>
      <View style={styles.statDetailRow}>
        <Text style={styles.statDetailText}>Best day: +$1,760</Text>
      </View>
    </View>
   </View>

   <View style={styles.statSectionWrap}>
    <View style={styles.statSection}>
      <Text style={styles.statLabel}>Equity</Text>
      <Text style={styles.statValueLarge}>$92,435</Text>
    </View>

    <View style={styles.separator} />

    <View>
      <View style={styles.statDetailRow}>
        <Text style={styles.statDetailText}>Balance: $91,590</Text>
      </View>
      <View style={styles.statDetailRow}>
        <Text style={styles.statDetailText}>From peak: -3.2%</Text>
      </View>
      <View style={styles.statDetailRow}>
        <Text style={styles.statDetailText}>Free margin: $83,370 (91%)</Text>
      </View>
    </View>
   </View>
   <View style={styles.statSectionWrap}>
    <View style={styles.statSection}>
      <Text style={styles.statLabel}>Open Trades</Text>
      <View style={styles.openTradesValue}>
        <Text style={styles.openTradesCount}>7 </Text>
        <Text style={styles.openTradesProfit}>(+$845)</Text>
      </View>
    </View>

    <View style={styles.separator} />

    <View>
      <View style={styles.statDetailRow}>
        <Text style={styles.statDetailText}>Biggest: XAUUSD +$540</Text>
      </View>
      <View style={styles.statDetailRow}>
        <Text style={styles.statDetailText}>Avg risk/trade: 0.42R</Text>
      </View>
      <View style={styles.statDetailRow}>
        <Text style={styles.statDetailText}>Avg hold: 2h 15m</Text>
      </View>
    </View>
   </View>
  </View>
);

const InsightCard = ({
  insight,
  activeIndex,
  onDotPress,
}: {
  insight: typeof insightsData[0];
  activeIndex: number;
  onDotPress: (index: number) => void;
}) => (
  <View style={[styles.insightCard, { width: width - 40 }]}>
    <View style={styles.insightHeader}>
      <Text style={styles.insightTitle}>{insight.title}</Text>
      <View style={styles.insightBadge}>
        <RadioTower size={12} color={COLORS.white} />
        <Text style={styles.insightBadgeText}>{insight.priority}</Text>
      </View>
    </View>
    <Text style={styles.insightTitle}>{insight.subtitle}</Text>
    <Text style={styles.insightDescription}>{insight.description}</Text>

    <View style={styles.paginationDots}>
      {insightsData.map((_, dotIndex) => (
        <TouchableOpacity
          key={dotIndex}
          style={[
            styles.paginationDot,
            activeIndex === dotIndex && styles.paginationDotActive,
          ]}
          onPress={() => onDotPress(dotIndex)}
          activeOpacity={0.7}
        />
      ))}
    </View>
  </View>
);

const AIInsights = ({
  activeIndex,
  onScroll,
  onDotPress,
  scrollViewRef,
}: {
  activeIndex: number;
  onScroll: (event: NativeSyntheticEvent<NativeScrollEvent>) => void;
  onDotPress: (index: number) => void;
  scrollViewRef: React.RefObject<ScrollView | null>;
}) => (
  <View style={styles.insightsSection}>
    <ScrollView
      ref={scrollViewRef}
      horizontal
      pagingEnabled
      showsHorizontalScrollIndicator={false}
      onScroll={onScroll}
      scrollEventThrottle={16}
    >
      {insightsData.map((insight) => (
        <InsightCard
          key={insight.id}
          insight={insight}
          activeIndex={activeIndex}
          onDotPress={onDotPress}
        />
      ))}
    </ScrollView>
  </View>
);

const AnalyzerScreen = () => {
  const [activeTab, setActiveTab] = useState<TabType>('Performance');
  const [activeROITab, setActiveROITab] = useState<ROITab>('Portfolio ROI');
  const [activeInsightIndex, setActiveInsightIndex] = useState(0);

  const insightScrollViewRef = useRef<ScrollView>(null);

  const handleTabChange = useCallback((tab: TabType) => {
    setActiveTab(tab);
  }, []);

  const handleROITabChange = useCallback((tab: ROITab) => {
    setActiveROITab(tab);
  }, []);

  const handleInsightScroll = useCallback((event: NativeSyntheticEvent<NativeScrollEvent>) => {
    const slideIndex = Math.round(event.nativeEvent.contentOffset.x / width);
    setActiveInsightIndex(slideIndex);
  }, []);

  const handleInsightChange = useCallback((index: number) => {
    setActiveInsightIndex(index);
    insightScrollViewRef.current?.scrollTo({
      x: index * width,
      animated: true,
    });
  }, []);

  return (
    <LinearGradient
      colors={[COLORS.gradientStart, COLORS.gradientEnd, COLORS.gradientEnd]}
      locations={[0, 0.3, 0]}
      style={styles.gradient}
    >
      <SafeAreaView style={styles.container}>
        <ScrollView showsVerticalScrollIndicator={false}>
          <Header activeTab={activeTab} onTabChange={handleTabChange} />
          <ROITabs activeROITab={activeROITab} onROITabChange={handleROITabChange} />
          <ROICard />
          <StatisticsCard />
          <AIInsights
            activeIndex={activeInsightIndex}
            onScroll={handleInsightScroll}
            onDotPress={handleInsightChange}
            scrollViewRef={insightScrollViewRef}
          />
        </ScrollView>
      </SafeAreaView>
    </LinearGradient>
  );
};

export default AnalyzerScreen;