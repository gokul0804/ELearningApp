import { View, Text, StyleSheet, ScrollView } from 'react-native';
import React from 'react';

export default function Payment() {
  return (
    <ScrollView style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerText}>Payment History</Text>
      </View>

      <View style={styles.content}>
        <Text style={styles.subHeader}>Recent Transactions</Text>

        {/* Sample Payment 1 */}
        <View style={styles.paymentItem}>
          <Text style={styles.paymentTitle}>3D Art & Illustration Course</Text>
          <Text style={styles.paymentDate}>January 5, 2024</Text>
          <Text style={styles.paymentAmount}>$45.00</Text>
        </View>

        {/* Sample Payment 2 */}
        <View style={styles.paymentItem}>
          <Text style={styles.paymentTitle}>Graphic Design Basics</Text>
          <Text style={styles.paymentDate}>December 15, 2023</Text>
          <Text style={styles.paymentAmount}>$30.00</Text>
        </View>

        {/* Sample Payment 3 */}
        <View style={styles.paymentItem}>
          <Text style={styles.paymentTitle}>Photoshop Essentials</Text>
          <Text style={styles.paymentDate}>November 20, 2023</Text>
          <Text style={styles.paymentAmount}>$40.00</Text>
        </View>

        <Text style={styles.subHeader}>Total Spent: $115.00</Text>
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
  paymentItem: {
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
  paymentTitle: {
    fontSize: 16,
    fontWeight: '600',
    color: '#333',
  },
  paymentDate: {
    fontSize: 14,
    color: '#666',
    marginTop: 5,
  },
  paymentAmount: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#4CAF50',
    marginTop: 5,
  },
});
