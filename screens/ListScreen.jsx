import { useEffect, useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  ActivityIndicator,
  FlatList,
  Image,
} from "react-native";

const URL =
  "https://raw.githubusercontent.com/damilhome/2026_S1_DR4_TP2/refs/heads/main/data/items.json";

export default function ListScreen() {
  const [loading, setLoading] = useState(false);
  const [products, setProducts] = useState([]);

  async function buscarDados() {
    setLoading(true);
    try {
      const response = await fetch(URL);
      const json = await response.json();
      setProducts(json);
    } catch (error) {
      console.error("Erro ao bsucar produtos: ", error);
    } finally {
      setLoading(false);
    }
  }

  useEffect(() => {
    buscarDados();
  }, []);

  if (loading) {
    return (
      <View style={styles.carregandoContainer}>
        <ActivityIndicator size="large" color="black" />
        <Text>Carregando produtos...</Text>
      </View>
    );
  }

  function renderItem({ item }) {
    return (
      <View style={styles.card}>
        <Image source={{ uri: item.image }} style={styles.image} />
        <View style={styles.cardInfos}>
          <Text style={styles.title}>{item.title}</Text>
          <Text style={styles.price}>R$ {item.price}</Text>
          <Text style={styles.description}>{item.description}</Text>
        </View>
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <FlatList
        data={products}
        keyExtractor={(item) => item.id}
        renderItem={renderItem}
        showsVerticalScrollIndicator={false}
        contentContainerStyle={styles.flatContainer}
        initialNumToRender={10}
        refreshing={loading}
        onRefresh={buscarDados}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  carregandoContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    gap: 15,
    backgroundColor: "#ecf0f1",
    padding: 8,
  },
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#ecf0f1",
    padding: 8,
  },
  flatContainer: {
    gap: 8,
  },
  card: {
    gap: 8,
    backgroundColor: "white",
    padding: 8,
    borderRadius: 8,
  },
  image: {
    width: "100%",
    height: 180,
    borderRadius: 8,
  },
  cardInfos: {
    gap: 5,
  },
  title: {
    fontSize: 18,
    fontWeight: "bold",
  },
  price: {
    fontSize: 16,
    color: "green",
  },
  description: {
    fontSize: 14,
    color: "gray",
  },
});
