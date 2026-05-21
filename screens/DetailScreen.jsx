import {
  StyleSheet,
  View,
  Text,
  Image,
  Pressable,
  ScrollView,
} from "react-native";

export default function DetailScreen({ route }) {
  const { produto } = route.params;
  return (
    <View style={styles.container}>
      <ScrollView
        style={styles.scrollContainer}
        contentContainerStyle={styles.scrollContent}
        showsVerticalScrollIndicator={false}
      >
        <View style={styles.header}>
          <Text style={styles.title}>{produto.title}</Text>
          <View style={styles.categoryContainer}>
            <Text style={styles.category}>{produto.category}</Text>
          </View>
        </View>

        <Image source={{ uri: produto.image }} style={styles.image} />

        <View style={styles.info}>
          <Text style={styles.price}>R$ {produto.price}</Text>
          <Text style={styles.description}>{produto.description}</Text>
          <Text style={styles.rating}>Avaliação: {produto.rating} / 5.0</Text>
        </View>
      </ScrollView>

      <View style={styles.footer}>
        <Pressable style={styles.btnComprar}>
          <Text style={styles.txtBtn}>Comprar</Text>
        </Pressable>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#ecf0f1",
  },
  scrollContainer: {
    flex: 1,
  },
  scrollContent: {
    paddingVertical: 20,
    gap: 20,
  },
  header: {
    paddingHorizontal: 12,
    gap: 8,
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
  },
  categoryContainer: {
    backgroundColor: "green",
    paddingVertical: 3,
    paddingHorizontal: 8,
    alignSelf: "flex-start",
    borderRadius: 5,
  },
  category: {
    color: "white",
  },
  image: {
    width: "100%",
    height: 250,
  },
  info: {
    paddingHorizontal: 12,
    gap: 20,
  },
  price: {
    fontSize: 28,
    fontWeight: "bold",
    color: "green",
  },
  description: {
    fontSize: 18,
    lineHeight: 24,
  },
  rating: {
    fontSize: 18,
    fontWeight: "bold",
  },
  footer: {
    width: "100%",
    alignItems: "center",
    paddingBottom: 20,
    paddingTop: 10,
    backgroundColor: "#ecf0f1",
  },
  btnComprar: {
    width: "90%",
    backgroundColor: "green",
    paddingVertical: 18,
    paddingHorizontal: 24,
    borderRadius: 25,
  },
  txtBtn: {
    color: "white",
    fontWeight: "bold",
    fontSize: 18,
    textAlign: "center",
  },
});
