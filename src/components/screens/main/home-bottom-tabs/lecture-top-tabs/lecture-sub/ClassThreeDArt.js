import React, { useState, useRef } from 'react';
import { View, Text, StyleSheet, Dimensions, TouchableOpacity, ScrollView } from 'react-native';
import Video from 'react-native-video';
import IconImage from '../../../../../../assets/icons/compleated.svg';  
import PlayIcon from '../../../../../../assets/icons/play.svg';  
import LockIcon from '../../../../../../assets/icons/lock.svg';  
import DropdownIcon from '../../../../../../assets/icons/drop-down.svg';  

const { width, height } = Dimensions.get('window');

const ClassThreeDArt = ({ route }) => {
  const { title } = route.params;

  const [topicsLesson1, setTopicsLesson1] = useState([
    { title: 'Introduction to 3D Art', duration: '2:00', unlocked: true, completed: false },
    { title: '3D Modeling Basics', duration: '3:30', unlocked: false, completed: false },
    { title: 'Texturing and Shading', duration: '4:10', unlocked: false, completed: false },
    { title: 'Lighting Techniques', duration: '5:00', unlocked: false, completed: false },
    { title: 'Advanced Rendering', duration: '5:30', unlocked: false, completed: false },
  ]);

  const [topicsLesson2, setTopicsLesson2] = useState([
    { title: '3D Animation', duration: '4:00', unlocked: false, completed: false },
    { title: 'Rigging Basics', duration: '3:20', unlocked: false, completed: false },
    { title: 'Post-Processing Effects', duration: '3:45', unlocked: false, completed: false },
    { title: 'Rendering Optimization', duration: '5:10', unlocked: false, completed: false },
    { title: 'Final Project', duration: '6:00', unlocked: false, completed: false },
  ]);

  const videoRef = useRef(null);  // Reference to the video player

  // Mark topics as completed and unlock next topics
  const handleMarkAsCompleted = (lesson, setTopics) => {
    const updatedTopics = [...lesson];

    const currentTopicIndex = updatedTopics.findIndex((topic) => topic.unlocked && !topic.completed);

    if (currentTopicIndex !== -1) {
      updatedTopics[currentTopicIndex].completed = true;

      if (currentTopicIndex + 1 < updatedTopics.length) {
        updatedTopics[currentTopicIndex + 1].unlocked = true;
      }
    }

    setTopics(updatedTopics);

    if (updatedTopics.every((topic) => topic.completed)) {
      const updatedLesson2 = [...topicsLesson2];
      updatedLesson2[0].unlocked = true;
      setTopicsLesson2(updatedLesson2);
    }

    if (videoRef.current) {
      videoRef.current.seek(0);
    }
  };

  return (
    <ScrollView style={styles.container}>
      <Video
        ref={videoRef}
        source={require('../../../../../../assets/videos/Gaandukannamma.mp4')}
        style={styles.video}
        controls={true}
        resizeMode="contain"
        repeat={false}
      />

      <View style={styles.textContainer}>
        <Text style={styles.introductionText}>Introduction to 3D Art</Text>
        <TouchableOpacity style={styles.button} onPress={() => handleMarkAsCompleted(topicsLesson1, setTopicsLesson1)}>
          <IconImage width={20} height={20} />
          <Text style={styles.buttonText}>Mark as Completed</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.lessonContainer}>
        <Text style={styles.lessonText}>Lesson 1</Text>
        <DropdownIcon width={20} height={20} />
      </View>

      {topicsLesson1.map((topic, index) => (
        <View
          key={index}
          style={[
            styles.topicContainer,
            topic.completed && styles.completedTopic,
            topic.unlocked && !topic.completed && styles.activeTopic,
          ]}
        >
          {topic.unlocked ? (
            topic.completed ? (
              <IconImage width={20} height={20} />
            ) : (
              <PlayIcon width={20} height={20} />
            )
          ) : (
            <LockIcon width={20} height={20} />
          )}

          <Text style={styles.topicText}>{topic.title}</Text>
          <Text style={styles.durationText}>{topic.duration}</Text>
        </View>
      ))}

      <View style={styles.lessonContainer}>
        <Text style={styles.lessonText}>Lesson 2</Text>
        <DropdownIcon width={20} height={20} />
      </View>

      {topicsLesson2.map((topic, index) => (
        <View
          key={index}
          style={[
            styles.topicContainer,
            topic.completed && styles.completedTopic,
            topic.unlocked && !topic.completed && styles.activeTopic,
          ]}
        >
          {topic.unlocked ? (
            topic.completed ? (
              <IconImage width={20} height={20} />
            ) : (
              <PlayIcon width={20} height={20} />
            )
          ) : (
            <LockIcon width={20} height={20} />
          )}

          <Text style={styles.topicText}>{topic.title}</Text>
          <Text style={styles.durationText}>{topic.duration}</Text>
        </View>
      ))}
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#f5f7fb',
  },
  video: {
    marginTop: -22,
    marginLeft: -20,
    width: width,
    height: height * 0.3,
    marginBottom: 20,
  },
  textContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: 20,
  },
  introductionText: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  button: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 10,
    backgroundColor: '#f8faf6',
    borderRadius: 8,
  },
  buttonText: {
    fontSize: 16,
    color: '#8680ee',
    marginLeft: 10,
  },
  lessonContainer: {
    backgroundColor: '#f8faf6',
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 20,
    marginBottom: 20,
  },
  lessonText: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  topicContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: 10,
    marginBottom: 8,
    borderWidth: 1,
    borderColor: '#eaeaea',
    borderRadius: 8,
  },
  completedTopic: {
    backgroundColor: '#a8e5a2',
  },
  activeTopic: {
    backgroundColor: '#d3e5ff',
  },
  topicText: {
    fontSize: 14,
  },
  durationText: {
    fontSize: 14,
  },
});

export default ClassThreeDArt;
