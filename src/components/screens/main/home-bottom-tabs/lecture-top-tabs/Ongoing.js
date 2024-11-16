import { View, Text, Image, StyleSheet } from 'react-native';
import React from 'react';
import mathsImage from '../../../../../assets/images/maths.jpg';  
import uiUxImage from '../../../../../assets/images/ui-ux.jpg';
import threeDImage from '../../../../../assets/images/3D-image.jpg';
import pythonImage from '../../../../../assets/images/derivation.jpg';

const Ongoing = () => {
  const calculateProgressWidth = (progress) => {
    const percentage = parseInt(progress);
    return `${percentage}%`;
  };

  const classes = [
    { image: mathsImage, title: 'Maths', status: 'Running...', progress: '30%' },
    { image: uiUxImage, title: 'UIUX', status: 'Running...', progress: '60%' },
    { image: threeDImage, title: '3D Art', status: 'Running...', progress: '40%' },
    { image: pythonImage, title: 'Python', status: 'Running...', progress: '80%' },
  ];

  // Filter only "Running..." classes
  const ongoingClasses = classes.filter(item => item.status === 'Running...');

  return (
    <View style={styles.container}>
      {ongoingClasses.map((item, index) => (
        <View key={index} style={styles.classContainer}>
            <Image source={item.image} style={styles.classImage} />
            <View style={styles.classInfo}>
                <Text style={styles.classTitle}>{item.title}</Text>
                <Text style={styles.classStatus}>{item.status}</Text>
            </View>
            <View style={styles.progressContainer}>
                <View style={styles.progressBar}>
                <View
                    style={[
                    styles.progressFill,
                    { width: calculateProgressWidth(item.progress) },
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
    backgroundColor: '#8689f2',
  },
  remainingFill: {
    height: '100%',
    backgroundColor: '#fff',
  },
});

export default Ongoing;
