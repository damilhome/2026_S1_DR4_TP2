import {
  StyleSheet,
  View,
  Text,
  Image,
  Pressable,
  ScrollView,
} from "react-native";

const mock = {
  id: "1",
  title: "Fone de Ouvido Bluetooth Pro",
  description:
    "Fone de ouvido com cancelamento de ruído ativo, bateria de até 40 horas e som de alta fidelidade.",
  price: "349,90",
  image:
    "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=500&auto=format&fit=crop&q=60",
  category: "Eletrônicos",
  rating: 4.8,
};

export default function DetailScreen() {
  return (
    <View style={styles.container}>
      <ScrollView
        style={styles.scrollContainer}
        contentContainerStyle={styles.scrollContent}
        showsVerticalScrollIndicator={false}
      >
        <View style={styles.header}>
          <Text style={styles.title}>{mock.title}</Text>
          <View style={styles.categoryContainer}>
            <Text style={styles.category}>{mock.category}</Text>
          </View>
        </View>

        <Image source={{ uri: mock.image }} style={styles.image} />

        <View style={styles.info}>
          <Text style={styles.price}>R$ {mock.price}</Text>
          <Text style={styles.description}>{mock.description}</Text>
          <Text style={styles.rating}>Avaliação: {mock.rating} / 5.0</Text>
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
