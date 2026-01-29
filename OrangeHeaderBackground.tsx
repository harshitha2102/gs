import React, { useEffect, useRef } from "react";
import { View, StyleSheet, Dimensions, Animated } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import Svg, { Path, Circle } from "react-native-svg";

const { width } = Dimensions.get("window");

const SPARKLES = Array.from({ length: 80 }).map((_, i) => ({
  id: i,
  x: Math.random() * width,
  y: 40 + Math.random() * 140,
  r: 1 + Math.random() * 1.5,
}));

export default function OrangeHeaderBackground() {
  const sparkleAnim = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    Animated.loop(
      Animated.sequence([
        Animated.timing(sparkleAnim, {
          toValue: 1,
          duration: 2000,
          useNativeDriver: true,
        }),
        Animated.timing(sparkleAnim, {
          toValue: 0,
          duration: 2000,
          useNativeDriver: true,
        }),
      ])
    ).start();
  }, []);

  const sparkleOpacity = sparkleAnim.interpolate({
    inputRange: [0, 1],
    outputRange: [0.2, 1],
  });

  return (
    <View style={styles.container}>
      {/* Gradient */}
      <LinearGradient
        colors={["#ff9a3c", "#ffb76b", "#ff9a3c"]}
        start={{ x: 0, y: 0 }}
        end={{ x: 1, y: 1 }}
        style={StyleSheet.absoluteFill}
      />

      {/* Waves + Sparkles */}
      <Animated.View style={[StyleSheet.absoluteFill, { opacity: sparkleOpacity }]}>
        <Svg width={width} height={220}>
          {/* Waves */}
          <Path
            d={`M -50 80 
                C ${width * 0.2} 40, ${width * 0.4} 120, ${width * 0.7} 70
                S ${width * 1.1} 60, ${width + 50} 50`}
            stroke="rgba(255,255,255,0.25)"
            strokeWidth={2.5}
            fill="none"
          />

          <Path
            d={`M -50 130 
                C ${width * 0.3} 110, ${width * 0.5} 170, ${width * 0.75} 120
                S ${width * 1.1} 110, ${width + 50} 100`}
            stroke="rgba(255,255,255,0.15)"
            strokeWidth={2}
            fill="none"
          />

          <Path
            d={`M -50 160 
                C ${width * 0.4} 150, ${width * 0.6} 190, ${width * 0.85} 150
                S ${width * 1.1} 145, ${width + 50} 140`}
            stroke="rgba(255,255,255,0.08)"
            strokeWidth={1.5}
            fill="none"
          />

          {/* Sparkles */}
          {SPARKLES.map((s) => (
            <Circle
              key={s.id}
              cx={s.x}
              cy={s.y}
              r={s.r}
              fill="rgba(255,255,255,0.9)"
            />
          ))}
        </Svg>
      </Animated.View>

      {/* Grain */}
      <View style={styles.noise} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    ...StyleSheet.absoluteFillObject,
  },
  noise: {
    ...StyleSheet.absoluteFillObject,
    backgroundColor: "rgba(255,255,255,0.02)",
    opacity: 0.3,
  },
});