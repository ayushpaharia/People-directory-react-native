import React from "react";
import { View, Text, StyleSheet, TouchableOpacity, Image } from "react-native";

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
  const { title, first, last } = data.name;
  return (
    <TouchableOpacity>
      <View style={s.root}>
        <Image
          style={{
            width: 30,
            height: 30,
            borderWidth: 2,
            borderColor: "#000",
            borderRadius: 50,
            backgroundColor: "red",
            marginRight: 10,
          }}
          source={{ uri: data.picture.thumbnail }}
        />
        <Text children={`${title}. ${first} ${last}`} />
      </View>
    </TouchableOpacity>
  );
};

export default PeopleListRow;
