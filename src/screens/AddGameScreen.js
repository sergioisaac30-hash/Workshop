import React, { useState, useEffect } from "react";
import {TextInput,Button, Alert,KeyboardAvoidingView,Platform,} from "react-native";
import styles from "../styles/AddGameStyles";
import { SafeAreaView } from "react-native-safe-area-context";

const AddGameScreen = () => {
  const [title, setTitle] = useState("");
  const [platform, setPlatform] = useState("");
  const [gender, setGender] = useState("");
  const [price, setPrice] = useState("");
  const [ageRating, setAgeRating] = useState("");
  const [isValid, setIsValid] = useState(false);

 
  useEffect(() => {
    const validPrice = !isNaN(price) && price.trim() !== "";
    if (title && platform && gender && validPrice && ageRating) {
      setIsValid(true);
    } else {
      setIsValid(false);
    }
  }, [title, platform, gender, price, ageRating]);

  const handleAdd = () => {
    Alert.alert(
      "Game added",
      `Title: ${title}\nPlatform: ${platform}\nGender: ${gender}\nPrice: ${price}\nAge Rating: ${ageRating}`
    );
  };

  const handleClear = () => {
    setTitle("");
    setPlatform("");
    setGender("");
    setPrice("");
    setAgeRating("");
    Alert.alert("Clean form", "All fields have been reset");
  };

  return (
    <SafeAreaView style={styles.container}>
      <KeyboardAvoidingView
        behavior={Platform.OS === "ios" ? "padding" : "height"}
        style={styles.form}
      >
        <TextInput
          style={styles.input}
          placeholder="Title"
          value={title}
          onChangeText={setTitle}
        />
        <TextInput
          style={styles.input}
          placeholder="Platform"
          value={platform}
          onChangeText={setPlatform}
        />
        <TextInput
          style={styles.input}
          placeholder="Gender"
          value={gender}
          onChangeText={setGender}
        />
        <TextInput
          style={styles.input}
          placeholder="Price"
          value={price}
          onChangeText={setPrice}
          keyboardType="numeric"
        />
        <TextInput
          style={styles.input}
          placeholder="Age Rating"
          value={ageRating}
          onChangeText={setAgeRating}
        />

        <Button title="Add Game" onPress={handleAdd} disabled={!isValid} />
        <Button title="Clear" onPress={handleClear} color="red" />
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
};

export default AddGameScreen;