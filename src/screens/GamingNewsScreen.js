import React, { useState, useEffect } from "react";
import { Text, Button, View } from "react-native";
import styles from "../styles/GamingNewsStyles";
import { gamingNewsData } from "../Data/gamingNewsd";
import { SafeAreaView } from "react-native-safe-area-context";

const GamingNewsScreen = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [news] = useState(gamingNewsData);

  
  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % news.length);
    }, 5000);
    return () => clearInterval(intervalId);
  }, [news]);

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.card}>
        <Text style={styles.title}>{news[currentIndex].title}</Text>
        <Text style={styles.description}>{news[currentIndex].content}</Text>
        <Text style={styles.indicator}>
          New {currentIndex + 1} of {news.length}
        </Text>
      </View>

      <Button
        title="Next News"
        onPress={() => setCurrentIndex((prev) => (prev + 1) % news.length)}
      />
    </SafeAreaView>
  );
};

export default GamingNewsScreen;