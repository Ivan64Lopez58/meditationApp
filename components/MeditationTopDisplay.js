import React from "react";
import { View, Text, Image, StyleSheet } from "react-native";
import { COLORS, FONT, SIZES } from "../constants"; // Asegúrate de que estos estén definidos en tu proyecto

const MeditationTopDisplay = ({
  meditationImage,
  meditationTitle,
  duration,
  target,
}) => {
  return (
    <View style={styles.container}>
      {/* Image Display */}
      <View style={styles.logoBox}>
        <Image
          source={{ uri: meditationImage }}
          resizeMode="cover"
          style={styles.logoImage}
        />
      </View>

      {/* Meditation Title */}
      <View style={styles.meditationTitleBox}>
        <Text style={styles.meditationTitle}>{meditationTitle}</Text>
      </View>

      {/* Meditation Info */}
      <View style={styles.meditationInfoBox}>
        <Text style={styles.meditationName}>{target} / </Text>
        <View style={styles.durationBox}>
          <Image
            source={{
              uri: "https://cdn-icons-png.flaticon.com/512/109/109613.png",
            }}
            resizeMode="cover"
            style={styles.durationImage}
          />
          <Text style={styles.durationName}>{duration}</Text>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginVertical: SIZES.medium,
    justifyContent: "center",
    alignItems: "center",
  },
  logoBox: {
    width: "100%",
    height: 250,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#FFF",
    borderRadius: SIZES.large,
    shadowColor: COLORS.gray,
  },
  logoImage: {
    width: "100%",
    borderRadius: SIZES.large,
    height: "100%",
  },
  meditationTitleBox: {
    marginTop: SIZES.small,
  },
  meditationTitle: {
    fontSize: SIZES.large,
    color: COLORS.primary,
    fontFamily: FONT.bold,
    textAlign: "center",
  },
  meditationInfoBox: {
    marginTop: SIZES.small / 2,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  },
  meditationName: {
    fontSize: SIZES.medium - 2,
    color: COLORS.primary,
    fontFamily: FONT.medium,
  },
  durationBox: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  },
  durationImage: {
    width: 14,
    height: 14,
    position: "relative",
  },
  durationName: {
    fontSize: SIZES.medium - 2,
    color: COLORS.gray,
    fontFamily: FONT.regular,
    marginLeft: 2,
  },
});

export default MeditationTopDisplay;
