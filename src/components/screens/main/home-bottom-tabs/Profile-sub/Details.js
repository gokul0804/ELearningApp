import { View, Text, StyleSheet, ScrollView } from 'react-native';
import React from 'react';

export default function Details() {
  return (
    <ScrollView style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerText}>Your Details</Text>
      </View>

      <View style={styles.content}>
        <Text style={styles.subHeader}>Personal Information</Text>

        {/* Personal Details */}
        <View style={styles.detailsItem}>
          <Text style={styles.detailsTitle}>Name:</Text>
          <Text style={styles.detailsText}>Edward Brown</Text>
        </View>

        <View style={styles.detailsItem}>
          <Text style={styles.detailsTitle}>Email:</Text>
          <Text style={styles.detailsText}>edwardbrown@gmail.com</Text>
        </View>

        <View style={styles.detailsItem}>
          <Text style={styles.detailsTitle}>Phone:</Text>
          <Text style={styles.detailsText}>+1 234 567 890</Text>
        </View>

        <View style={styles.detailsItem}>
          <Text style={styles.detailsTitle}>Address:</Text>
          <Text style={styles.detailsText}>123 Main Street, Springfield, IL</Text>
        </View>

        <Text style={styles.subHeader}>Membership Information</Text>

        {/* Membership Details */}
        <View style={styles.detailsItem}>
          <Text style={styles.detailsTitle}>Member Since:</Text>
          <Text style={styles.detailsText}>January 2022</Text>
        </View>

        <View style={styles.detailsItem}>
          <Text style={styles.detailsTitle}>Subscription Plan:</Text>
          <Text style={styles.detailsText}>Premium</Text>
        </View>

        <Text style={styles.subHeader}>Additional Information</Text>

        {/* Additional Details */}
        <View style={styles.detailsItem}>
          <Text style={styles.detailsTitle}>Preferred Learning Style:</Text>
          <Text style={styles.detailsText}>Visual</Text>
        </View>

        <View style={styles.detailsItem}>
          <Text style={styles.detailsTitle}>Course Interests:</Text>
          <Text style={styles.detailsText}>3D Art, Graphic Design, Photoshop</Text>
        </View>
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
  detailsItem: {
    backgroundColor: '#fff',
    padding: 15,
    marginTop: 10,
    borderRadius: 10,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  detailsTitle: {
    fontSize: 16,
    fontWeight: '600',
    color: '#333',
  },
  detailsText: {
    fontSize: 14,
    color: '#666',
    marginTop: 5,
  },
});
