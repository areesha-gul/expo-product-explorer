import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { FlashList } from '@shopify/flash-list';

type Product = { id: string; name: string; price: number };

const PRODUCTS: Product[] = [
  { id: '1', name: 'Laptop', price: 999 },
  { id: '2', name: 'Headphones', price: 79 },
  { id: '3', name: 'Keyboard', price: 49 },
  { id: '4', name: 'Mouse', price: 25 },
  { id: '5', name: 'Monitor', price: 199 },
];

export default function App() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Expo Product Explorer</Text>
      <Text style={styles.info}>Name: Areesha Gul</Text>
      <Text style={styles.info}>Roll No: I23-3080</Text>

      <View style={styles.listWrapper}>
        <FlashList
          data={PRODUCTS}
          keyExtractor={(item) => item.id}
          renderItem={({ item }) => (
            <View style={styles.card}>
              <Text style={styles.name}>{item.name}</Text>
              <Text>${item.price}</Text>
            </View>
          )}
        />
      </View>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#fff', paddingTop: 80, paddingHorizontal: 16 },
  title: { fontSize: 24, fontWeight: 'bold', textAlign: 'center', marginBottom: 8 },
  info: { fontSize: 16, textAlign: 'center' },
  listWrapper: { flex: 1, marginTop: 20 },
  card: { padding: 16, marginBottom: 10, backgroundColor: '#f2f2f2', borderRadius: 8 },
  name: { fontSize: 18, fontWeight: '600' },
});