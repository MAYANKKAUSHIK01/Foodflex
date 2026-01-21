import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Image } from 'react-native';
import MapView, { Marker } from 'react-native-maps';
import { Phone, X } from 'lucide-react-native';

export default function DeliveryScreen({ route, navigation }) {
  const { restaurant } = route.params;

  return (
    <View style={styles.container}>
      <MapView
        style={styles.map}
        initialRegion={{
          latitude: restaurant.coords.latitude,
          longitude: restaurant.coords.longitude,
          latitudeDelta: 0.01,
          longitudeDelta: 0.01,
        }}
      >
        <Marker
          coordinate={restaurant.coords}
          title={restaurant.name}
          description="Preparing your food"
          pinColor="red"
        />
      </MapView>

      {/* Floating Status Card */}
      <View style={styles.cardContainer}>
        <View style={styles.driverInfo}>
          <Image 
            source={{ uri: "https://randomuser.me/api/portraits/men/32.jpg" }} 
            style={styles.avatar} 
          />
          <View>
            <Text style={styles.driverName}>Ramesh Kumar</Text>
            <Text style={styles.status}>Arriving in 12 mins</Text>
          </View>
          <TouchableOpacity style={styles.phoneBtn}>
            <Phone size={20} color="#00CCBB" />
          </TouchableOpacity>
        </View>
        
        <View style={styles.progress}>
          <Text style={styles.orderText}>Order picked up from {restaurant.name}</Text>
        </View>

        <TouchableOpacity style={styles.cancelBtn} onPress={() => navigation.goBack()}>
          <Text style={styles.cancelText}>Dismiss</Text>
          <X size={20} color="white" />
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1 },
  map: { flex: 1 },
  cardContainer: {
    position: 'absolute', bottom: 30, left: 20, right: 20,
    backgroundColor: 'white', borderRadius: 20, padding: 20,
    elevation: 10, shadowColor: '#000', shadowOffset: {width: 0, height: 2}, shadowOpacity: 0.2
  },
  driverInfo: { flexDirection: 'row', alignItems: 'center', marginBottom: 15 },
  avatar: { width: 50, height: 50, borderRadius: 25, marginRight: 15 },
  driverName: { fontSize: 18, fontWeight: 'bold' },
  status: { color: 'gray' },
  phoneBtn: { marginLeft: 'auto', padding: 10, backgroundColor: '#f0f0f0', borderRadius: 50 },
  progress: { borderTopWidth: 1, borderTopColor: '#eee', paddingVertical: 10 },
  orderText: { fontSize: 16, fontWeight: '600', color: '#444' },
  cancelBtn: { 
    flexDirection: 'row', justifyContent: 'center', alignItems: 'center',
    backgroundColor: '#00CCBB', padding: 15, borderRadius: 10, marginTop: 10 
  },
  cancelText: { color: 'white', fontWeight: 'bold', marginRight: 10 }
});