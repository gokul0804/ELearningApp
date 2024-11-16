import { View, Text, Image, StyleSheet } from 'react-native';
import React from 'react';
import historyImage from '../../../../../assets/images/history.jpg';
import biologyImage from '../../../../../assets/images/biology.jpg';
import editingImage from '../../../../../assets/images/photoshop.jpg';

const Completed = () => {
  const calculateProgressWidth = (progress) => {
    const percentage = parseInt(progress);
    return `${percentage}%`;
  };

  const classes = [
    { image: historyImage, title: 'History', status: 'Finished', progress: '100%' },
    { image: biologyImage, title: 'Biology', status: 'Finished', progress: '100%' },
    { image: editingImage, title: 'Editing', status: 'Finished', progress: '100%' },
  ];

  // Filter only "Finished" classes
  const completedClasses = classes.filter(item => item.status === 'Finished');

  return (
    <View style={styles.container}>
      {completedClasses.map((item, index) => (
        <View key={index} style={styles.classContainer}>
            <Image source={item.image} style={styles.classImage} />
            <View style={styles.classInfo}>
                <Text style={styles.classTitle}>{item.title}</Text>
                <Text style={[styles.classStatus, styles.finishedText]}>{item.status}</Text>
            </View>
            <View style={styles.progressContainer}>
                <View style={styles.progressBar}>
                <View
                    style={[
                    styles.progressFill,
                    { width: calculateProgressWidth(item.progress) },
                    styles.finishedProgressFill,  
                    ]}
                />
                <View
                    style={[
                    styles.remainingFill,
                    { width: `calc(100% - ${item.progress})` },
                    ]}
                />
                </View>
            </View>
        </View>
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    backgroundColor: '#f5f7fb',
  },
  classContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 20,
    padding: 10,
    backgroundColor: '#fff',
    borderRadius: 8,
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowRadius: 5,
    elevation: 3,
  },
  classImage: {
    width: 50,
    height: 50,
    borderRadius: 8,
    marginRight: 10,
  },
  classInfo: {
    flex: 1,
    marginLeft: 3,
  },
  classTitle: {
    fontSize: 14,
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 4,
  },
  classStatus: {
    fontSize: 12,
    color: '#7266e7',
  },
  progressContainer: {
    alignItems: 'flex-end',
    marginLeft: 10,
  },
  progressText: {
    fontSize: 12,
    color: '#333',
  },
  progressBar: {
    flexDirection: 'row',
    alignItems: 'center',
    width: 180, 
    height: 7,  
    backgroundColor: '#e0e0e0',
    borderRadius: 5,
    overflow: 'hidden',
  },
  progressFill: {
    height: '100%',
    backgroundColor: '#3ecd7a',
  },
  finishedProgressFill: {
    backgroundColor: '#3ecd7a',
  },
  remainingFill: {
    height: '100%',
    backgroundColor: '#fff',
  },
  finishedText: {
    color: '#3ecd7a',  
  },
});

export default Completed;
