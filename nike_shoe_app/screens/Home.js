import React, { useState } from "react";
import {
  Text,
  View,
  StyleSheet,
  TouchableOpacity,
  FlatList,
  Image,
  Modal,
  Alert,
} from "react-native";
// import {} from '../assets'
export default function Home() {
  // dummy data
  const [product, setProduct] = useState([
    {
      id: 4,
      name: "Nike Free Metcon 4",
      url: require("../assets/4.png"),
      price: 120,
      size: [7, 8, 9, 10, 11],
      color: "#66045e",
      description:
        "Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book",
    },
    {
      id: 1,
      name: "Zoom Freak 3",
      url: require("../assets/1.png"),
      price: 70,
      color: "#000000",
      size: [7, 8, 9],
      description:
        "Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book",
    },
    {
      id: 2,
      name: "KD14",
      url: require("../assets/2.png"),
      price: 70,
      size: [7, 8, 9, 10, 11],
      color: "#ffff",
      description:
        "Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book",
    },
    {
      id: 3,
      name: "Nike Air Zoom SuperRep 2",
      url: require("../assets/3.png"),
      price: 150,
      size: [7, 8, 9, 10, 11],
      color: "#000000",
      description:
        "Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book",
    },
    {
      id: 5,
      name: "Nike 4",
      url: require("../assets/6.png"),
      price: 110,
      size: [7, 8, 9, 10, 11],
      color: "#660407",
      description:
        "Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book",
    },
  ]);
  const [modal, setModal] = useState(false);
  const [modalProduct, setModalProduct] = useState();
  const renderSize = () => {
    return modalProduct.size.map((item, index) => {
      return (
        <TouchableOpacity
          key={index}
          style={{
            padding: 5,
            borderWidth: 1,
            borderColor: modalProduct.color == "#ffff" ? "#000" : "#fff",
            marginRight: 10,
            borderRadius: 10,
          }}
          // onPress={() => {
          //     setSelectedSize(item)
          // }}
        >
          <Text
            style={{ color: modalProduct.color == "#ffff" ? "#000" : "#fff" }}
          >
            {item}
          </Text>
        </TouchableOpacity>
      );
    });
  };
  return (
    <View style={styles.contsiner}>
      <Text style={styles.recent}>Trending</Text>
      <FlatList
        data={product}
        style={{ padding: 10 }}
        horizontal
        showsHorizontalScrollIndicator={false}
        renderItem={({ item }) => (
          <TouchableOpacity
            style={{
              backgroundColor: item.color,
              height: 200,
              width: 120,
              borderTopRightRadius: 200,
              marginRight: 20,
              borderRadius: 10,
            }}
            onPress={() => {
              setModal(true);
              setModalProduct(item);
            }}
          >
            <Image
              style={{
                height: 50,
                width: "97%",
                transform: [{ rotate: "-15deg" }],
              }}
              source={item.url}
            />
            <Text
              style={{
                top: "30%",
                color: item.color == "#ffff" ? "black" : "#fff",
                padding: 10,
                fontWeight: "bold",
                marginBottom: 10,
              }}
            >
              {item.name}
            </Text>
            <Text
              style={{
                top: "20%",
                color: item.color == "#ffff" ? "#3A4B3C" : "#d3d3d3",
                padding: 10,
              }}
            >
              Price: {item.price} $
            </Text>
          </TouchableOpacity>
        )}
        keyExtractor={(item, index) => index.toString()}
      />

      <View style={{ flexDirection: "row" }}>
        <View>
          <Image
            style={{
              height: 320,
              width: 40,
              marginLeft: 20,
              paddingBottom: 20,
            }}
            source={require("../assets/recently-viewed-label.png")}
          />
        </View>
        <View style={{ width: "80%" }}>
          <FlatList
            data={product}
            style={{ padding: 10, flex: 1 }}
            showsVerticalScrollIndicator={false}
            renderItem={({ item }) => (
              <TouchableOpacity
                style={{ marginBottom: 40 }}
                onPress={() => {
                  setModal(true);
                  setModalProduct(item);
                }}
              >
                <View style={{ flexDirection: "row" }}>
                  <View>
                    <Image
                      style={{
                        height: 40,
                        width: 100,
                        transform: [{ rotate: "-25deg" }],
                      }}
                      source={item.url}
                    />
                  </View>
                  <View style={{ marginLeft: 10 }}>
                    <Text style={{ color: "#3A3B3C" }}>{item.name}</Text>
                    <Text style={{ fontWeight: "bold" }}>{item.price} $</Text>
                  </View>
                </View>
              </TouchableOpacity>
            )}
            keyExtractor={(item, index) => index.toString()}
          />
        </View>
      </View>

      {/* modal */}

      {modal ? (
        <Modal
          animationType="slide"
          transparent={true}
          visible={modal}
          onRequestClose={() => {
            Alert.alert("Modal has been closed.");
            setModal(!modal);
          }}
        >
          <View style={{ backgroundColor: "rgba(0,0,0,0.5)", flex: 1 }}>
            <View
              style={{
                height: "50%",
                width: "80%",
                alignItems: "center",
                justifyContent: "center",
                alignSelf: "center",
                marginTop: "50%",
              }}
            >
              <View
                style={{
                  backgroundColor: modalProduct.color,
                  height: "80%",
                  width: "90%",
                  justifyContent: "center",
                  alignSelf: "center",
                }}
              >
                <Image
                  style={{
                    height: 100,
                    width: "90%",
                    marginBottom: "95%",
                    transform: [{ rotate: "-15deg" }],
                  }}
                  source={modalProduct.url}
                />
                <View
                  style={{
                    flexDirection: "row",
                    justifyContent: "space-between",
                    position: "absolute",
                  }}
                >
                  <Text
                    style={{
                      color: modalProduct.color == "#ffff" ? "#000" : "#fff",
                      paddingLeft: 20,
                      fontWeight: "bold",
                    }}
                  >
                    {modalProduct.name}
                  </Text>
                  <Text
                    style={{
                      color: modalProduct.color == "#ffff" ? "#000" : "#fff",
                      paddingLeft: 20,
                      fontWeight: "bold",
                      left: "10%",
                    }}
                  >
                    price : {modalProduct.price} $
                  </Text>
                </View>
                <View style={{ position: "absolute" }}>
                  <Text
                    style={{
                      color: modalProduct.color == "#ffff" ? "#000" : "#fff",
                      top: 50,
                      fontWeight: "bold",
                      paddingLeft: 20,
                    }}
                  >
                    Size
                  </Text>
                  <View
                    style={{
                      flexDirection: "row",
                      top: 50,
                      marginLeft: "10%",
                    }}
                  >
                    {renderSize()}
                  </View>
                  <TouchableOpacity style={{ top: 70, left: 30 }}>
                    <Text
                      style={{
                        color: modalProduct.color == "#ffff" ? "#000" : "#fff",
                        textAlign: "center",
                        justifyContent: "center",
                        fontWeight: "bold",
                      }}
                    >
                      Add To Bag
                    </Text>
                  </TouchableOpacity>
                </View>
              </View>
              <TouchableOpacity
                onPress={() => {
                  setModal(!modal);
                }}
              >
                <View
                  style={{
                    height: 50,
                    width: 50,
                    borderWidth: 2,
                    borderRadius: 50,
                    borderColor: "#fff",
                    justifyContent: "center",
                    alignItems: "center",
                    marginTop: 10,
                  }}
                >
                  <Text style={{ color: "#fff" }}>X</Text>
                </View>
              </TouchableOpacity>
            </View>
          </View>
        </Modal>
      ) : (
        false
      )}

      {/* modal */}
    </View>
  );
}

const styles = StyleSheet.create({
  contsiner: {},
  recent: {
    fontWeight: "bold",
    fontSize: 18,
    padding: 10,
  },
});
