import React, { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  TouchableHighlight,
  Image,
  Modal,
} from "react-native";
import Icon from "react-native-vector-icons/FontAwesome";
const s = StyleSheet.create({
  root: {
    padding: 10,
    paddingHorizontal: 10,
    marginHorizontal: 10,
    borderBottomColor: "#000",
    borderBottomWidth: StyleSheet.hairlineWidth,
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
  },
});

const PeopleListRow = (data) => {
  const [modalVisible, setModalVisible] = useState(false);
  const { title, first, last } = data.name;
  return (
    <TouchableOpacity
      onPress={() => {
        setModalVisible(true);
      }}
    >
      <View style={s.root}>
        <Image
          style={{ ...styles.image, width: 45, height: 45 }}
          source={{ uri: data.picture.medium }}
        />
        <Text
          style={{ fontSize: 18 }}
          children={`${title}. ${first} ${last}`}
        />
      </View>
      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        // onRequestClose={() => {
        //   Alert.alert("Modal has been closed.");
        // }}
      >
        <View style={styles.centeredView}>
          <View
            style={{
              ...styles.modalView,
              display: "flex",
              flexDirection: "row",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <Image
              style={{ ...styles.image, width: 80, height: 80 }}
              source={{ uri: data.picture.medium }}
            />
            <View>
              <Text
                style={{
                  ...styles.modalText,
                  fontSize: 24,
                  letterSpacing: -1,
                  top: 12,
                  fontWeight: "700",
                }}
                children={`${title}. ${first} ${last}`}
              />
              <Text
                style={{
                  ...styles.modalText,
                  fontSize: 14,
                }}
                children={`${data.email}`}
              />
              <View
                style={{
                  flexDirection: "row",
                  justifyContent: "space-between",
                }}
              >
                <Text
                  style={{
                    ...styles.modalText,
                    top: -8,
                    fontSize: 10,
                    fontWeight: "bold",
                  }}
                >
                  phone
                </Text>
                <Text
                  style={{
                    ...styles.modalText,
                    top: -8,
                    fontSize: 10,
                    fontWeight: "bold",
                    left: -72,
                  }}
                >
                  cell
                </Text>
              </View>
              <View
                style={{
                  flexDirection: "row",
                  justifyContent: "space-between",
                  top: -20,
                }}
              >
                <Text
                  style={{
                    ...styles.modalText,
                    fontSize: 10,
                    fontWeight: "bold",
                  }}
                  children={`${data.phone}`}
                />
                <Text
                  style={{
                    ...styles.modalText,
                    left: -16,
                    fontSize: 10,
                    fontWeight: "bold",
                  }}
                  children={`${data.cell}`}
                />
              </View>
            </View>

            <TouchableOpacity
              style={{
                ...styles.openButton,
                position: "absolute",
                borderRadius: 50,
                right: -10,
                top: -10,
              }}
              onPress={() => {
                setModalVisible(!modalVisible);
              }}
            >
              <Icon name="times-circle" size={30} color="#fff" />
            </TouchableOpacity>
          </View>
        </View>
      </Modal>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  image: {
    width: 45,
    height: 45,
    borderWidth: 2,
    borderColor: "#000",
    borderRadius: 50,
    marginRight: 10,
  },
  centeredView: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 22,
  },
  modalView: {
    margin: 20,
    backgroundColor: "white",
    borderRadius: 20,
    paddingVertical: 35,
    paddingHorizontal: 35,
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  openButton: {
    backgroundColor: "#000",
    paddingVertical: 6,
    paddingHorizontal: 8,
  },
  textStyle: {
    color: "white",
    fontWeight: "bold",
    textAlign: "center",
  },
  modalText: {
    marginBottom: 15,
  },
});

export default PeopleListRow;
