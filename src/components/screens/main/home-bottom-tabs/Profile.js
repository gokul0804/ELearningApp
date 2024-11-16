import { View, Text, Image, StyleSheet, ScrollView, TouchableOpacity } from 'react-native';
import React, { useState } from 'react';
import InformationIcon from '../../../../assets/icons/information.svg';
import BackArrowIcon from '../../../../assets/icons/back-arrow.svg';

export default function Profile({ navigation }) {
  const [activeSlide, setActiveSlide] = useState(0);

  const slides = [
    {
      title: '3D Art & Illustration',
      progress: '50%',
      hoursSpent: '18 Hour Spend',
    },
    {
      title: 'Graphic Design Basics',
      progress: '70%',
      hoursSpent: '16 Hour Spend',
    },
    {
      title: 'Photoshop Essentials',
      progress: '30%',
      hoursSpent: '12 Hour Spend',
    },
    {
      title: 'Business',
      progress: '60%',
      hoursSpent: '20 Hour Spend',
    },
  ];

  const calculateProgressWidth = (progress) => {
    const percentage = parseInt(progress);
    return `${percentage}%`;
  };

  // Function to handle navigation for each box
  const handleBoxClick = (screen) => {
    navigation.navigate(screen);
  };

  return (
    <View style={styles.container}>
      <Image source={require('../../../../assets/images/person.jpg')} style={styles.profileImage} />

      <Text style={styles.nameText}>Edward Brown</Text>

      <Text style={styles.emailText}>edwardbrown@gmail.com</Text>

      <Text style={styles.courseText}>Course You're Taking</Text>
      <ScrollView
        horizontal
        showsHorizontalScrollIndicator={false}
        style={styles.sliderContainer}
        onScroll={(event) => {
          const contentOffsetX = event.nativeEvent.contentOffset.x;
          const index = Math.round(contentOffsetX / 200); // Adjust the scroll index for smaller slides
          setActiveSlide(index);
        }}
        scrollEventThrottle={16}
      >
        {slides.map((slide, index) => (
          <View
            key={index}
            style={[styles.sliderItem, { backgroundColor: index % 2 === 0 ? '#6e61e7' : '#fe6f99' }]} // Alternating colors
          >
            <View style={styles.leftSide}>
              <Text style={styles.courseTitle}>{slide.title}</Text>
              <Text style={styles.hoursSpentText}>{slide.hoursSpent}</Text> {/* Render Hours Spent */}
              <View style={styles.progressContainer}>
                <Text style={styles.progressText}>{slide.progress}</Text>
                <View style={styles.progressBar}>
                  <View
                    style={[styles.progressFill, { width: calculateProgressWidth(slide.progress) }]}/>

                  <View
                    style={[styles.remainingFill, { width: `calc(100% - ${calculateProgressWidth(slide.progress)})` }]}/>
                </View>
              </View>
            </View>
          </View>
        ))}
      </ScrollView>

      {/* Account Section */}
      <Text style={styles.accountText}>Account</Text>

      {/* Account Boxes */}
      <View style={styles.accountContainer}>
        {/* Educational Information Box */}
        <TouchableOpacity
          style={styles.accountBox}
          onPress={() => handleBoxClick('Info')} // Navigate to Info screen
        >
          <InformationIcon width={24} height={24} />
          <Text style={styles.accountBoxText}>Educational Information</Text>
          <BackArrowIcon width={24} height={24} style={styles.invertedArrow} />
        </TouchableOpacity>

        {/* Payment History Box */}
        <TouchableOpacity
          style={styles.accountBox}
          onPress={() => handleBoxClick('Payment')} // Navigate to Payment screen
        >
          <InformationIcon width={24} height={24} />
          <Text style={styles.accountBoxText}>Payment History</Text>
          <BackArrowIcon width={24} height={24} style={styles.invertedArrow} />
        </TouchableOpacity>

        {/* Details Box */}
        <TouchableOpacity
          style={styles.accountBox}
          onPress={() => handleBoxClick('Details')} // Navigate to Details screen
        >
          <InformationIcon width={24} height={24} />
          <Text style={styles.accountBoxText}>Details</Text>
          <BackArrowIcon width={24} height={24} style={styles.invertedArrow} />
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#f5f7fb',
  },
  profileImage: {
    width: 100,
    height: 100,
    borderRadius: 50,
    marginLeft: 125,
  },
  nameText: {
    fontSize: 20,
    fontWeight: '600',
    marginTop: 10,
    color: '#6d6c6c',
    marginLeft: 110,
  },
  emailText: {
    fontSize: 14,
    color: '#a8a6a6',
    marginTop: 5,
    marginLeft: 95,
  },
  courseText: {
    fontSize: 18,
    fontWeight: '500',
    marginTop: 30,
    alignSelf: 'flex-start',
    width: '100%',
  },
  sliderContainer: {
    height: 160,
    marginTop: 20,
  },
  sliderItem: {
    flexDirection: 'row',
    alignItems: 'center',
    borderRadius: 20,
    padding: 16,
    marginHorizontal: 8,
    width: 190, 
    height: 120, 
  },
  leftSide: {
    flex: 1,
    paddingRight: 10,
  },
  courseTitle: {
    fontSize: 16,
    fontWeight: '600',
    marginVertical: 5,
    color: '#fff',
  },
  hoursSpentText: {
    fontSize: 12,
    color: '#fff',
    marginBottom: 15,
  },
  progressContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 10,
    marginTop: 3,
  },
  progressText: {
    fontSize: 12,
    color: '#fff',
  },
  progressBar: {
    flex: 1,
    height: 7,
    backgroundColor: '#e0e0e0',
    borderRadius: 3,
    marginLeft: 10,
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
  accountText: {
    fontSize: 18,
    fontWeight: '500',
    marginTop: 40,
    alignSelf: 'flex-start',
    width: '100%',
    color: '#595859',
  },
  accountContainer: {
    marginTop: 20,
  },
  accountBox: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 15,
    backgroundColor: '#fff',
    borderRadius: 10,
    marginBottom: 10,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 2,
  },
  accountBoxText: {
    fontSize: 16,
    fontWeight: '500',
    color: '#595859',
    marginLeft: 0, 
    textAlign: 'left', 
    flex: 1, 
  },
  invertedArrow: {
    transform: [{ scaleX: -1 }], 
  },
});
