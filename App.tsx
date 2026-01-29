import React from "react";
import {
  SafeAreaView,
  View,
  Text,
  StyleSheet,
  TextInput,
  FlatList,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";
import OrangeHeaderBackground from "./OrangeHeaderBackground";

const topics = Array.from({ length: 11 }).map((_, i) => ({
  id: i + 1,
  title: "Topic Title",
  desc: "Brief description of the topic goes here...",
}));

export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <OrangeHeaderBackground />

        <View style={styles.headerTop}>
          {/* Back Arrow Box */}
          <View style={styles.backBox}>
            <Text style={styles.back}>←</Text>
          </View>

          <View>
            <Text style={styles.gs}>GS Paper 1</Text>
            <Text style={styles.sub}>General Studies · Paper I</Text>
          </View>
        </View>

        <View style={styles.headerTextBlock}>
          <Text style={styles.title}>History and Culture of India</Text>
          <Text style={styles.count}>11 Topics Available</Text>
        </View>
      </View>

      {/* Search Bar */}
      <View style={styles.searchWrapper}>
        <View style={styles.searchOuter}>
          <View style={styles.searchInner}>
            <Ionicons name="search" size={18} color="#8B6FE8" />
            <TextInput
              placeholder="Search topics..."
              placeholderTextColor="#9B8AD9"
              style={styles.searchInput}
            />
          </View>
        </View>
      </View>

      {/* Topic Cards */}
      <FlatList
        data={topics}
        keyExtractor={(item) => item.id.toString()}
        contentContainerStyle={{ paddingBottom: 140 }}
        renderItem={({ item }) => (
          <View style={styles.card}>
            <View style={styles.leftStrip} />

            <View style={styles.cardRow}>
              <View style={styles.badge}>
                <Text style={styles.badgeText}>
                  {item.id.toString().padStart(2, "0")}
                </Text>
              </View>

              <View style={{ flex: 1 }}>
                <Text style={styles.cardTitle}>{item.title}</Text>
                <Text style={styles.cardDesc}>{item.desc}</Text>
              </View>
            </View>

            <View style={styles.divider} />

            <Text style={styles.readMore}>Read Full Topic →</Text>
          </View>
        )}
      />

      {/* Bottom Nav */}
      <View style={styles.bottomNav}>
        <View style={styles.navItemBox}>
          <Ionicons name="home" size={24} color="#8B6FE8" />
          <Text style={[styles.navLabel, styles.activeLabel]}>Home</Text>
        </View>

        <View style={styles.navItemBox}>
          <Ionicons name="chatbubble-outline" size={24} color="#444" />
          <Text style={styles.navLabel}>Chat</Text>
        </View>

        <View style={styles.navStar}>
          <Ionicons name="star" size={22} color="#fff" />
          <Text style={styles.starLabel}>Saved</Text>
        </View>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: "#F6F3FF" },

  header: { height: 220, width: "100%", overflow: "hidden" },

  headerTop: {
  position: "absolute",
  top: 10,   // smaller = more UP
  left: 20,
  flexDirection: "row",
  alignItems: "center",
  gap: 12,
  },

  backBox: {
  width: 36,
  height: 36,
  borderRadius: 12,
  backgroundColor: "rgba(255,255,255,0.25)",
  justifyContent: "center",
  alignItems: "center",

  position: "relative",
  top: 4,   // 👈 move UP (increase negative for more up)

  elevation: 4,
  shadowColor: "#000",
  shadowOffset: { width: 0, height: 2 },
  shadowOpacity: 0.25,
  shadowRadius: 4,
},
  back: {
    fontSize: 20,
    color: "#fff",
    fontWeight: "700",
  },

  gs: { color: "#fff", fontSize: 18, fontWeight: "600" },
  sub: { color: "#fff", fontSize: 12, opacity: 0.9 },

  headerTextBlock: {
    position: "absolute",
    top: "50%",
    left: 20,
    right: 20,
    transform: [{ translateY: -30 }],
    alignItems: "center",
  },

  title: { color: "#fff", fontSize: 24, fontWeight: "700" },
  count: { color: "#fff", marginTop: 6, opacity: 0.9 },

  /* Search */
  searchWrapper: { marginHorizontal: 20, marginTop: -32 },

  searchOuter: {
    backgroundColor: "#F4EFFF",
    borderRadius: 28,
    padding: 8,
    elevation: 4,
  },

  searchInner: {
    backgroundColor: "#FAF8FF",
    borderRadius: 24,
    height: 48,
    flexDirection: "row",
    alignItems: "center",
    paddingHorizontal: 14,
    borderWidth: 1,
    borderColor: "#E3DAFF",
  },

  searchInput: {
    flex: 1,
    marginLeft: 8,
    fontSize: 15,
    color: "#5E4EA2",
  },

  /* Card */
  card: {
    backgroundColor: "#fff",
    marginHorizontal: 20,
    marginTop: 20,
    borderRadius: 22,
    padding: 20,
    overflow: "hidden",

    elevation: 14,

    shadowColor: "#6B4EFF",
    shadowOffset: { width: 0, height: 10 },
    shadowOpacity: 0.35,
    shadowRadius: 16,
  },

  leftStrip: {
    position: "absolute",
    left: 0,
    top: 0,
    bottom: 0,
    width: 8,
    backgroundColor: "#8B6FE8",
    borderTopLeftRadius: 22,
    borderBottomLeftRadius: 22,
    opacity: 0.85,
  },

  cardRow: { flexDirection: "row", alignItems: "center" },

  badge: {
    width: 50,
    height: 50,
    borderRadius: 16,
    backgroundColor: "#B9ACEF",
    justifyContent: "center",
    alignItems: "center",
    marginRight: 16,
  },

  badgeText: { color: "#fff", fontWeight: "700" },

  cardTitle: { fontSize: 17, fontWeight: "700", color: "#2D1E5F" },
  cardDesc: { marginTop: 6, color: "#777", fontSize: 14 },

  divider: {
    height: 1,
    backgroundColor: "#EEE8FF",
    marginVertical: 14,
  },

  readMore: { color: "#8B6FE8", fontWeight: "600" },

  /* Bottom Nav */
  bottomNav: {
    position: "absolute",
    bottom: 0,
    left: 0,
    right: 0,
    height: 72,
    backgroundColor: "#fff",
    borderTopLeftRadius: 26,
    borderTopRightRadius: 26,
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
    elevation: 10,
  },

  navStar: {
    width: 48,
    height: 48,
    borderRadius: 18,
    backgroundColor: "#FFA733",
    justifyContent: "center",
    alignItems: "center",
  },

  navItemBox: { alignItems: "center" },
  navLabel: { fontSize: 11, marginTop: 4, color: "#666" },
  activeLabel: { color: "#8B6FE8", fontWeight: "600" },
  starLabel: { color: "#fff", fontSize: 10, marginTop: 2 },
});