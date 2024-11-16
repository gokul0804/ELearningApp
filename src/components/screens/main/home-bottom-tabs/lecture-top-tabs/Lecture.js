import { View, Text, Image, StyleSheet, TouchableOpacity } from 'react-native';
import React from 'react';

const Lecture = ({ navigation }) => {
  const calculateProgressWidth = (progress) => {
    const percentage = parseInt(progress);
    return `${percentage}%`;
  };

  const classes = [
    { image: require('../../../../../assets/images/maths.jpg'), title: 'Maths', status: 'Running...', progress: '30%' },
    { image: require('../../../../../assets/images/ui-ux.jpg'), title: 'UIUX', status: 'Running...', progress: '60%' },
    { image: require('../../../../../assets/images/3D-image.jpg'), title: '3D Art', status: 'Running...', progress: '40%' },
    { image: require('../../../../../assets/images/history.jpg'), title: 'History', status: 'Finished', progress: '100%' },
    { image: require('../../../../../assets/images/derivation.jpg'), title: 'Python', status: 'Running...', progress: '80%' },
    { image: require('../../../../../assets/images/biology.jpg'), title: 'Biology', status: 'Finished', progress: '100%' },
    { image: require('../../../../../assets/images/photoshop.jpg'), title: 'Editing', status: 'Finished', progress: '100%' },
  ];

  const handleClassPress = (classTitle) => {
    switch (classTitle) {
      case 'Maths':
        navigation.navigate('ClassMaths', { title: classTitle });
        break;
      case 'UIUX':
        navigation.navigate('ClassUiUx', { title: classTitle });
        break;
      case '3D Art':
        navigation.navigate('ClassThreeDArt', { title: classTitle });
        break;
      case 'History':
        navigation.navigate('ClassHistory', { title: classTitle });
        break;
      case 'Python':
        navigation.navigate('ClassPython', { title: classTitle });
        break;
      case 'Biology':
        navigation.navigate('ClassBiology', { title: classTitle });
        break;
      case 'Editing':
        navigation.navigate('ClassEditing', { title: classTitle });
        break;
      default:
        break;
    }
  };

  return (
    <View style={styles.container}>
      {classes.map((item, index) => {
        const isFinished = item.status === 'Finished';  
        return (
          <TouchableOpacity 
            key={index} 
            style={styles.classContainer} 
            onPress={() => handleClassPress(item.title)} 
          >
            <Image source={item.image} style={styles.classImage} />
            <View style={styles.classInfo}>
                <Text style={styles.classTitle}>{item.title}</Text>
                <Text style={[styles.classStatus, isFinished && styles.finishedText]}>{item.status}</Text>
            </View>
            <View style={styles.progressContainer}>
                <View style={styles.progressBar}>
                    <View
                    style={[ 
                        styles.progressFill,
                        { width: calculateProgressWidth(item.progress) },
                        isFinished && styles.finishedProgressFill,
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
          </TouchableOpacity>
        );
      })}
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

export default Lecture;
