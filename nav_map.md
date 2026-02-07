AUTHENTICATION FLOW
SplashScreen → WelcomeScreen(auto after 2s) → LoginMScreen → BottomTabs
↓
BOTTOM TABS (Main App)
Tab 1: Dashboard Stack
DashboardScreen
→ "Linked Accounts" section chevron → Opens SelectAccountModal
→ Account card click → AccountsScreen → Header Plus icon → AddAccountScreen → Select Broker chevronDown → SelectBrokerModal
→ Header Settings icon → AccountSettingsModal
↓
AccountSettingsModal
→ "Account Management" → AccountManagementScreen
→ "Equity Protector" → EquityProtectorScreen
→ "Trading Symbols" → TradingSymbolsScreen
→ "Delete Account" → DeleteAccountModal

Tab 2: Copier Stack
CopierScreen
→ "Master Account 1" → MasterAccountScreen → Header 3dot icon → MasterAccountSettingsModal
→ "Slave Account 1" → SlaveAccountScreen
↓
SlaveAccountScreen
→ "Edit Slave" → EditSlaveScreen → "Copy from Account" → CopyAccountModal
→ Advance Settings → Select Broker chevronRight → AdvanceSettingsScreen → Calculate Risk Settings chevronRight → CalculateRiskScreen → Apply Risk Settings Button → RiskSettingsModal
→ "Map Symbols" → MapSymbolsScreen → Map From Symbol/Map To Symbol → MapSymbolModal
→ "Trading Hours" → TradingHoursScreen → Add Trading Hours chevronRight → AddTradingHoursModal

Tab 3: Analyzer
AnalyzerScreen

Tab 4: Compare
CompareScreen
"Select Prop Firm 1" dropdown → SelectPropFirmModal
"Select Prop Firm 2" dropdown → SelectPropFirmModal

Tab 5: Sentiments
SentimentsScreen
