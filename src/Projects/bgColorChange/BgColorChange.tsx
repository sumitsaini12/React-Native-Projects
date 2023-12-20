import {
  StatusBar,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React, {useState} from 'react';

export default function BgColorChange() {
  const [randomBakground, setRandomBackground] = useState('#ffffff');

  const genrateColor = () => {
    const hexRange = '0123456789ABCDEF';
    let color = '#';

    for (let i = 0; i < 6; i++) {
      color += hexRange[Math.floor(Math.random() * 16)];
    }
    setRandomBackground(color);
  };

  return (
    <>
      <StatusBar backgroundColor={randomBakground} />
      <View style={[styles.container, {backgroundColor: randomBakground}]}>
        <TouchableOpacity onPress={genrateColor}>
          <View style={styles.actionBtn}>
            <Text style={styles.actionBtnTxt}>Press me</Text>
          </View>
        </TouchableOpacity>
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center"
  },
  actionBtn: {
    borderRadius: 12,
    backgroundColor: "#6A1B4D",
    paddingHorizontal: 40,
    paddingVertical: 10,
    elevation: 4,
    shadowOffset: {
        width: 1,
        height: 1
    },
    shadowColor: "#000000"
  },
  actionBtnTxt: {
    fontSize: 24,
    color: "#ffffff",
    textTransform: "uppercase"
  },
});
