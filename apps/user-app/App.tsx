import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { SafeAreaView, ScrollView, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { StatusBar } from "expo-status-bar";

type RootStackParamList = {
  Splash: undefined;
  LoginOtp: undefined;
  Home: undefined;
  BookAmbulance: undefined;
  EmergencyType: undefined;
  EtaView: undefined;
  LiveTracking: undefined;
  CallDriver: undefined;
  Payment: undefined;
  BookingHistory: undefined;
  MedicalProfile: undefined;
  Sos: undefined;
  Ratings: undefined;
  Notifications: undefined;
  Settings: undefined;
};

const Stack = createNativeStackNavigator<RootStackParamList>();

function ScreenTemplate({ title, children }: { title: string; children?: React.ReactNode }) {
  return (
    <SafeAreaView style={styles.container}>
      <StatusBar style="dark" />
      <ScrollView contentContainerStyle={styles.content}>
        <Text style={styles.title}>{title}</Text>
        {children}
      </ScrollView>
    </SafeAreaView>
  );
}

function ActionButton({ label, onPress }: { label: string; onPress?: () => void }) {
  return (
    <TouchableOpacity style={styles.button} onPress={onPress}>
      <Text style={styles.buttonText}>{label}</Text>
    </TouchableOpacity>
  );
}

const SplashScreen = ({ navigation }: any) => (
  <ScreenTemplate title="Jeevan Rakshak">
    <Text style={styles.subtitle}>Emergency ambulance booking and live response.</Text>
    <ActionButton label="Continue" onPress={() => navigation.replace("LoginOtp")} />
  </ScreenTemplate>
);

const LoginOtpScreen = ({ navigation }: any) => (
  <ScreenTemplate title="Login with OTP">
    <Text style={styles.subtitle}>Use phone OTP verification to continue.</Text>
    <ActionButton label="Verify OTP (Demo)" onPress={() => navigation.replace("Home")} />
  </ScreenTemplate>
);

const HomeScreen = ({ navigation }: any) => (
  <ScreenTemplate title="Home">
    <Text style={styles.subtitle}>Find nearest ambulance in one tap.</Text>
    <ActionButton label="Book Ambulance" onPress={() => navigation.navigate("BookAmbulance")} />
    <ActionButton label="Emergency SOS" onPress={() => navigation.navigate("Sos")} />
    <ActionButton label="History" onPress={() => navigation.navigate("BookingHistory")} />
    <ActionButton label="Notifications" onPress={() => navigation.navigate("Notifications")} />
    <ActionButton label="Settings" onPress={() => navigation.navigate("Settings")} />
  </ScreenTemplate>
);

const BookAmbulanceScreen = ({ navigation }: any) => (
  <ScreenTemplate title="Book Ambulance">
    <Text style={styles.subtitle}>Pickup location, drop location, and fare estimate.</Text>
    <ActionButton label="Select Emergency Type" onPress={() => navigation.navigate("EmergencyType")} />
  </ScreenTemplate>
);

const EmergencyTypeScreen = ({ navigation }: any) => (
  <ScreenTemplate title="Emergency Type">
    <Text style={styles.subtitle}>Trauma, cardiac, breathing distress, pregnancy, critical transfer.</Text>
    <ActionButton label="Confirm and View ETA" onPress={() => navigation.navigate("EtaView")} />
  </ScreenTemplate>
);

const EtaViewScreen = ({ navigation }: any) => (
  <ScreenTemplate title="ETA View">
    <Text style={styles.subtitle}>Driver details, ambulance type, and estimated arrival time.</Text>
    <ActionButton label="Track Ambulance" onPress={() => navigation.navigate("LiveTracking")} />
    <ActionButton label="Call Driver" onPress={() => navigation.navigate("CallDriver")} />
  </ScreenTemplate>
);

const LiveTrackingScreen = ({ navigation }: any) => (
  <ScreenTemplate title="Live Tracking">
    <Text style={styles.subtitle}>Real-time location feed from the assigned driver app.</Text>
    <ActionButton label="Proceed to Payment" onPress={() => navigation.navigate("Payment")} />
  </ScreenTemplate>
);

const CallDriverScreen = () => (
  <ScreenTemplate title="Call Driver">
    <Text style={styles.subtitle}>Masked calling bridge and emergency contact fallback.</Text>
  </ScreenTemplate>
);

const PaymentScreen = ({ navigation }: any) => (
  <ScreenTemplate title="Payment">
    <Text style={styles.subtitle}>UPI/cards via Razorpay, or cash at drop.</Text>
    <ActionButton label="Complete and Rate" onPress={() => navigation.navigate("Ratings")} />
  </ScreenTemplate>
);

const BookingHistoryScreen = () => (
  <ScreenTemplate title="Booking History">
    <Text style={styles.subtitle}>View previous rides, receipts, and support actions.</Text>
  </ScreenTemplate>
);

const MedicalProfileScreen = () => (
  <ScreenTemplate title="Medical Profile">
    <Text style={styles.subtitle}>Blood group, allergies, emergency contacts.</Text>
  </ScreenTemplate>
);

const SosScreen = () => (
  <ScreenTemplate title="SOS">
    <Text style={styles.subtitle}>Immediate emergency escalation with priority dispatch intent.</Text>
  </ScreenTemplate>
);

const RatingsScreen = () => (
  <ScreenTemplate title="Ratings">
    <Text style={styles.subtitle}>Rate service quality and provide feedback.</Text>
  </ScreenTemplate>
);

const NotificationsScreen = () => (
  <ScreenTemplate title="Notifications">
    <Text style={styles.subtitle}>Trip status, OTP, payment, and system alerts.</Text>
  </ScreenTemplate>
);

const SettingsScreen = ({ navigation }: any) => (
  <ScreenTemplate title="Settings">
    <View style={styles.gap}>
      <ActionButton label="Medical Profile" onPress={() => navigation.navigate("MedicalProfile")} />
    </View>
  </ScreenTemplate>
);

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerShown: false }} initialRouteName="Splash">
        <Stack.Screen name="Splash" component={SplashScreen} />
        <Stack.Screen name="LoginOtp" component={LoginOtpScreen} />
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="BookAmbulance" component={BookAmbulanceScreen} />
        <Stack.Screen name="EmergencyType" component={EmergencyTypeScreen} />
        <Stack.Screen name="EtaView" component={EtaViewScreen} />
        <Stack.Screen name="LiveTracking" component={LiveTrackingScreen} />
        <Stack.Screen name="CallDriver" component={CallDriverScreen} />
        <Stack.Screen name="Payment" component={PaymentScreen} />
        <Stack.Screen name="BookingHistory" component={BookingHistoryScreen} />
        <Stack.Screen name="MedicalProfile" component={MedicalProfileScreen} />
        <Stack.Screen name="Sos" component={SosScreen} />
        <Stack.Screen name="Ratings" component={RatingsScreen} />
        <Stack.Screen name="Notifications" component={NotificationsScreen} />
        <Stack.Screen name="Settings" component={SettingsScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: "#F7FAFF" },
  content: { padding: 20, gap: 12 },
  title: { fontSize: 28, fontWeight: "700", color: "#0E1D43" },
  subtitle: { fontSize: 15, color: "#415074", lineHeight: 22 },
  button: {
    backgroundColor: "#1E5EFF",
    borderRadius: 10,
    paddingVertical: 12,
    paddingHorizontal: 14
  },
  buttonText: { color: "#FFFFFF", fontSize: 15, fontWeight: "600" },
  gap: { gap: 8 }
});
