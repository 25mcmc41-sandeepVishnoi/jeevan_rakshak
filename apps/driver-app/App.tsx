import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { SafeAreaView, ScrollView, StyleSheet, Text, TouchableOpacity } from "react-native";
import { StatusBar } from "expo-status-bar";

type DriverStackParamList = {
  Login: undefined;
  KycOnboarding: undefined;
  UploadDocuments: undefined;
  VehicleVerification: undefined;
  Availability: undefined;
  IncomingRequest: undefined;
  NavigationToPatient: undefined;
  PatientPickup: undefined;
  DropComplete: undefined;
  Earnings: undefined;
  Wallet: undefined;
  Ratings: undefined;
  Support: undefined;
};

const Stack = createNativeStackNavigator<DriverStackParamList>();

function DriverScreen({ title, description, next, navigation }: any) {
  return (
    <SafeAreaView style={styles.container}>
      <StatusBar style="dark" />
      <ScrollView contentContainerStyle={styles.content}>
        <Text style={styles.title}>{title}</Text>
        <Text style={styles.subtitle}>{description}</Text>
        {next ? (
          <TouchableOpacity style={styles.button} onPress={() => navigation.navigate(next)}>
            <Text style={styles.buttonText}>Continue</Text>
          </TouchableOpacity>
        ) : null}
      </ScrollView>
    </SafeAreaView>
  );
}

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerShown: false }} initialRouteName="Login">
        <Stack.Screen
          name="Login"
          component={(p: any) => (
            <DriverScreen {...p} title="Driver Login" description="OTP login and device binding." next="KycOnboarding" />
          )}
        />
        <Stack.Screen
          name="KycOnboarding"
          component={(p: any) => (
            <DriverScreen
              {...p}
              title="KYC Onboarding"
              description="Collect driver details for admin approval."
              next="UploadDocuments"
            />
          )}
        />
        <Stack.Screen
          name="UploadDocuments"
          component={(p: any) => (
            <DriverScreen
              {...p}
              title="Upload Documents"
              description="DL, RC, insurance, and fitness certificate."
              next="VehicleVerification"
            />
          )}
        />
        <Stack.Screen
          name="VehicleVerification"
          component={(p: any) => (
            <DriverScreen
              {...p}
              title="Vehicle Verification"
              description="Approval status shown before going online."
              next="Availability"
            />
          )}
        />
        <Stack.Screen
          name="Availability"
          component={(p: any) => (
            <DriverScreen
              {...p}
              title="Online / Offline"
              description="Driver availability and service area controls."
              next="IncomingRequest"
            />
          )}
        />
        <Stack.Screen
          name="IncomingRequest"
          component={(p: any) => (
            <DriverScreen
              {...p}
              title="Incoming Request"
              description="Ride request with pickup distance and payout estimate."
              next="NavigationToPatient"
            />
          )}
        />
        <Stack.Screen
          name="NavigationToPatient"
          component={(p: any) => (
            <DriverScreen
              {...p}
              title="Navigation To Patient"
              description="External map deep-link and location updates."
              next="PatientPickup"
            />
          )}
        />
        <Stack.Screen
          name="PatientPickup"
          component={(p: any) => (
            <DriverScreen {...p} title="Patient Pickup" description="Arrived and onboard state update." next="DropComplete" />
          )}
        />
        <Stack.Screen
          name="DropComplete"
          component={(p: any) => (
            <DriverScreen
              {...p}
              title="Drop Complete"
              description="Trip closure and payment confirmation."
              next="Earnings"
            />
          )}
        />
        <Stack.Screen
          name="Earnings"
          component={(p: any) => (
            <DriverScreen {...p} title="Earnings Dashboard" description="Daily and weekly payout summary." next="Wallet" />
          )}
        />
        <Stack.Screen
          name="Wallet"
          component={(p: any) => (
            <DriverScreen {...p} title="Wallet" description="Settlement records and deductions." next="Ratings" />
          )}
        />
        <Stack.Screen
          name="Ratings"
          component={(p: any) => (
            <DriverScreen {...p} title="Ratings" description="User feedback and performance trends." next="Support" />
          )}
        />
        <Stack.Screen
          name="Support"
          component={(p: any) => (
            <DriverScreen {...p} title="Support" description="Raise ticket or call emergency operations team." />
          )}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: "#F7FAFF" },
  content: { padding: 20, gap: 12 },
  title: { fontSize: 28, fontWeight: "700", color: "#0E1D43" },
  subtitle: { fontSize: 15, color: "#415074", lineHeight: 22 },
  button: { backgroundColor: "#0F9D58", borderRadius: 10, paddingVertical: 12, paddingHorizontal: 14 },
  buttonText: { color: "#FFFFFF", fontSize: 15, fontWeight: "600" }
});
