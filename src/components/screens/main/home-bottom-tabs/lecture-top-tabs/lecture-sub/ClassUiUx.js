import React, { useState, useRef } from 'react';
import { View, Text, StyleSheet, Dimensions, TouchableOpacity, ScrollView } from 'react-native';
import Video from 'react-native-video';
import IconImage from '../../../../../../assets/icons/compleated.svg';
import PlayIcon from '../../../../../../assets/icons/play.svg';
import LockIcon from '../../../../../../assets/icons/lock.svg';
import DropdownIcon from '../../../../../../assets/icons/drop-down.svg';

const { width, height } = Dimensions.get('window');

const ClassUiUx = ({ route }) => {
  const { title } = route.params;

  const [topicsLesson1, setTopicsLesson1] = useState([
    { title: 'Introduction to UI/UX', duration: '2:05', unlocked: true, completed: false },
    { title: 'Principles of UI Design', duration: '3:30', unlocked: false, completed: false },
    { title: 'Wireframing', duration: '1:50', unlocked: false, completed: false },
    { title: 'Prototyping', duration: '4:10', unlocked: false, completed: false },
    { title: 'User Testing', duration: '5:00', unlocked: false, completed: false },
  ]);

  const [topicsLesson2, setTopicsLesson2] = useState([
    { title: 'UI Patterns', duration: '3:10', unlocked: false, completed: false },
    { title: 'UX Research', duration: '2:40', unlocked: false, completed: false },
    { title: 'User Personas', duration: '4:15', unlocked: false, completed: false },
    { title: 'Usability Testing', duration: '3:30', unlocked: false, completed: false },
    { title: 'Design Systems', duration: '5:20', unlocked: false, completed: false },
  ]);

  const videoRef = useRef(null);

  const handleMarkAsCompleted = () => {
    const updatedTopicsLesson1 = [...topicsLesson1];
    let currentTopicIndexLesson1 = updatedTopicsLesson1.findIndex((topic) => topic.unlocked && !topic.completed);

    if (currentTopicIndexLesson1 !== -1) {
      updatedTopicsLesson1[currentTopicIndexLesson1].completed = true;

      if (currentTopicIndexLesson1 + 1 < updatedTopicsLesson1.length) {
        updatedTopicsLesson1[currentTopicIndexLesson1 + 1].unlocked = true;
      }
    }

    setTopicsLesson1(updatedTopicsLesson1);

    if (updatedTopicsLesson1.every((topic) => topic.completed)) {
      const updatedLesson2 = [...topicsLesson2];
      updatedLesson2[0].unlocked = true;
      setTopicsLesson2(updatedLesson2);
    }

    const updatedTopicsLesson2 = [...topicsLesson2];
    let currentTopicIndexLesson2 = updatedTopicsLesson2.findIndex((topic) => topic.unlocked && !topic.completed);

    if (currentTopicIndexLesson2 !== -1) {
      updatedTopicsLesson2[currentTopicIndexLesson2].completed = true;

      if (currentTopicIndexLesson2 + 1 < updatedTopicsLesson2.length) {
        updatedTopicsLesson2[currentTopicIndexLesson2 + 1].unlocked = true;
      }
    }

    setTopicsLesson2(updatedTopicsLesson2);

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
        <View style={styles.texts}>
          <Text style={styles.introductionText}>Introduction</Text>
          <Text style={styles.fundamentalsText}>Fundamentals of UI/UX Design</Text>
        </View>

        <TouchableOpacity style={styles.button} onPress={handleMarkAsCompleted}>
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
          style={[styles.topicContainer, 
            topic.completed && styles.completedTopic, 
            topic.unlocked && !topic.completed && styles.activeTopic]}>
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
          style={[styles.topicContainer, 
            topic.completed && styles.completedTopic, 
            topic.unlocked && !topic.completed && styles.activeTopic]}>
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
    width: '70%',
    marginBottom: 20,
  },
  texts: {
    flexDirection: 'column',
  },
  introductionText: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 3,
  },
  fundamentalsText: {
    fontSize: 13,
    color: '#666',
  },
  button: {
    marginLeft: 10,
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 10,
    borderRadius: 8,
    borderWidth: 1,
    borderColor: '#8680ee',
    backgroundColor: '#f8faf6',
    padding: 10,
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
    alignItems: 'center',
    width: '100%',
    borderWidth: 1,
    borderColor: '#eaeaea',
    borderRadius: 8,
    paddingHorizontal: 10,
    paddingVertical: 20,
    marginBottom: 20,
  },
  lessonText: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#333',
  },
  topicContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    backgroundColor: '#f8faf6',
    paddingHorizontal: 10,
    paddingVertical: 15,
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
    fontWeight: 'bold',
    color: '#333',
    marginLeft: 10,
    flex: 1,
  },
  durationText: {
    fontSize: 14,
    color: '#666',
  },
});

export default ClassUiUx;
