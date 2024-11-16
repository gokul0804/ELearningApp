import { View, Text, StyleSheet, ScrollView } from 'react-native';
import React from 'react';

export default function Info() {
  return (
    <ScrollView style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerText}>Educational Information</Text>
      </View>

      <View style={styles.content}>
        <Text style={styles.subHeader}>Courses Enrolled</Text>
        <Text style={styles.text}>1. 3D Art & Illustration</Text>
        <Text style={styles.text}>2. Graphic Design Basics</Text>
        <Text style={styles.text}>3. Photoshop Essentials</Text>
        <Text style={styles.text}>4. Business Fundamentals</Text>

        <Text style={styles.subHeader}>Progress Overview</Text>
        <Text style={styles.text}>3D Art & Illustration: 50%</Text>
        <Text style={styles.text}>Graphic Design Basics: 70%</Text>
        <Text style={styles.text}>Photoshop Essentials: 30%</Text>
        <Text style={styles.text}>Business Fundamentals: 60%</Text>

        <Text style={styles.subHeader}>Hours Spent</Text>
        <Text style={styles.text}>3D Art & Illustration: 18 hours</Text>
        <Text style={styles.text}>Graphic Design Basics: 16 hours</Text>
        <Text style={styles.text}>Photoshop Essentials: 12 hours</Text>
        <Text style={styles.text}>Business Fundamentals: 20 hours</Text>

        <Text style={styles.subHeader}>Certificates Earned</Text>
        <Text style={styles.text}>1. 3D Art & Illustration Certificate</Text>
        <Text style={styles.text}>2. Graphic Design Basics Certificate</Text>
        <Text style={styles.text}>3. Photoshop Essentials Certificate</Text>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f9f9f9',
    padding: 20,
  },
  header: {
    backgroundColor: '#4CAF50',
    paddingVertical: 10,
    marginBottom: 20,
    borderRadius: 10,
    alignItems: 'center',
  },
  headerText: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#fff',
  },
  content: {
    marginBottom: 20,
  },
  subHeader: {
    fontSize: 18,
    fontWeight: '600',
    marginTop: 20,
    color: '#333',
  },
  text: {
    fontSize: 16,
    marginTop: 10,
    color: '#666',
  },
});
