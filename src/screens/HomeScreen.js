import React from 'react';
import { View, Text, FlatList, Image, TouchableOpacity, StyleSheet, SafeAreaView } from 'react-native';
import { restaurants } from '../data/restaurants';
import { MapPin, Star } from 'lucide-react-native';

export default function HomeScreen({ navigation }) {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.title}>Hungry?</Text>
        <Text style={styles.subtitle}>Order delivered to you.</Text>
      </View>

      <FlatList
        data={restaurants}
        keyExtractor={item => item.id.toString()}
        renderItem={({ item }) => (
          <TouchableOpacity 
            style={styles.card}
            onPress={() => navigation.navigate('Delivery', { restaurant: item })}
          >
            <Image source={{ uri: item.image }} style={styles.image} />
            <View style={styles.info}>
              <View style={styles.row}>
                <Text style={styles.name}>{item.name}</Text>
                <View style={styles.rating}>
                  <Text style={styles.ratingText}>{item.rating}</Text>
                  <Star size={12} color="#fff" fill="#fff" />
                </View>
              </View>
              <Text style={styles.desc}>{item.description}</Text>
              <View style={styles.meta}>
                <MapPin size={14} color="gray" />
                <Text style={styles.time}>{item.time}</Text>
              </View>
            </View>
          </TouchableOpacity>
        )}
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#f8f9fa', paddingTop: 40 },
  header: { padding: 20 },
  title: { fontSize: 28, fontWeight: 'bold' },
  subtitle: { fontSize: 16, color: 'gray' },
  card: { margin: 15, backgroundColor: 'white', borderRadius: 15, overflow: 'hidden', elevation: 3 },
  image: { width: '100%', height: 180 },
  info: { padding: 15 },
  row: { flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' },
  name: { fontSize: 20, fontWeight: 'bold' },
  rating: { flexDirection: 'row', backgroundColor: 'green', padding: 4, borderRadius: 5, alignItems: 'center' },
  ratingText: { color: 'white', fontWeight: 'bold', marginRight: 4 },
  desc: { color: 'gray', marginVertical: 5 },
  meta: { flexDirection: 'row', alignItems: 'center', marginTop: 5 },
  time: { marginLeft: 5, fontWeight: 'bold', color: '#555' }
});