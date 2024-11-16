import { View, Text, Image, StyleSheet, ScrollView, TouchableOpacity } from 'react-native';
import React, { useState } from 'react';
import NotificationIcon from '../../../../assets/icons/notification.svg';
import PersonImage from '../../../../assets/images/person.jpg';
import WaveImage from '../../../../assets/images/wave.png';
import ThreeDImage from '../../../../assets/images/3D-image.jpg';
import uiUxImage from '../../../../assets/images/ui-ux.jpg'; 
import derivationImage from '../../../../assets/images/derivation.jpg'; 
import photoshopImage from '../../../../assets/images/photoshop.jpg'; 
import businessImage from '../../../../assets/images/bussiness.jpg'; 
import mathsImage from '../../../../assets/images/maths.jpg'; 
import PlayIcon from '../../../../assets/icons/play.svg'; 

export default function Home() {
    const [activeSlide, setActiveSlide] = useState(0);

    const slides = [
        {
            title: '3D Art & Illustration',
            progress: '50%',
            image: ThreeDImage,
            backgroundColor: '#6e61e7',
        },
        {
            title: 'Graphic Design Basics',
            progress: '70%',
            image: ThreeDImage,
            backgroundColor: '#62d0e9', 
        },
        {
            title: 'Photoshop Essentials',
            progress: '30%',
            image: ThreeDImage,
            backgroundColor: '#63b0e8', 
        },
        {
            title: 'Business',
            progress: '60%',
            image: ThreeDImage,
            backgroundColor: '#fe6f99', 
        },
    ];

    const calculateProgressWidth = (progress) => {
        const percentage = parseInt(progress);
        return `${percentage}%`;
    };

    return (
        <ScrollView style={styles.container}>
            <View style={styles.header}>
                <Image source={PersonImage} style={styles.personImage} />
                
                <View style={styles.greetingContainer}>
                    <Text style={styles.greetingText}>Hey, G</Text>
                    <Image source={WaveImage} style={styles.waveImage} />
                </View>

                <NotificationIcon width={24} height={24} style={styles.notificationIcon} />
            </View>

            <Text style={styles.subTitle}>let's get started</Text>

            {/* Slider Section */}
            <ScrollView
                horizontal
                showsHorizontalScrollIndicator={false}
                style={styles.sliderContainer}
                onScroll={(event) => {
                    const contentOffsetX = event.nativeEvent.contentOffset.x;
                    const index = Math.round(contentOffsetX / 320);
                    setActiveSlide(index);
                }}
                scrollEventThrottle={16}
            >
                {slides.map((slide, index) => (
                    <View
                        style={[styles.sliderItem, { backgroundColor: slide.backgroundColor }]}
                        key={index}
                    >
                        <View style={styles.leftSide}>
                            <Text style={styles.ongoingText}>Ongoing</Text>
                            <Text style={styles.courseTitle}>{slide.title}</Text>
                            <View style={styles.progressContainer}>
                                <Text style={styles.progressText}>{slide.progress}</Text>
                                <View style={styles.progressBar}>
                                    <View
                                        style={[styles.progressFill, { width: calculateProgressWidth(slide.progress) }]}
                                    />
                                    <View
                                        style={[styles.remainingFill, { width: `calc(100% - ${calculateProgressWidth(slide.progress)})` }]}
                                    />
                                </View>
                            </View>
                            <TouchableOpacity style={styles.continueButton}>
                                <Text style={styles.buttonText}>Continue</Text>
                            </TouchableOpacity>
                        </View>
                        <Image source={slide.image} style={styles.sliderImage} />
                    </View>
                ))}
            </ScrollView>

            {/* Dots Indicator */}
            <View style={styles.dotsContainer}>
                {slides.map((_, index) => (
                    <View
                        key={index}
                        style={[styles.dot, activeSlide === index && styles.activeDot]}
                    />
                ))}
            </View>

            {/* Choose Your Course Section */}
            <Text style={styles.chooseCourseText}>Choose Your Course</Text>
            <View style={styles.coursesContainer}>
                {/* Course Cards */}
                {[uiUxImage, derivationImage, photoshopImage, businessImage].map((image, index) => (
                    <View key={index} style={[styles.courseCard, { backgroundColor: ['#6e61e7', '#62d0e9', '#63b0e8', '#fe6f99'][index] }]}>
                        <Text style={styles.courseTitle}>{['UI/UX Design', 'Derivation', 'Photoshop', 'Business'][index]}</Text>
                        <Text style={styles.classCount}>{["03", "05", "08", "04"][index]} Classes</Text>
                        <View style={styles.imageContainer}>
                            <PlayIcon width={24} height={24} style={styles.playIcon} />
                            <Image source={image} style={styles.courseImage} />
                        </View>
                    </View>
                ))}
            </View>

            {/* Today's Lecture Section */}
            <Text style={styles.todayLectureText}>Today's Lecture</Text>
            <View style={styles.lectureContainer}>
                <Image source={mathsImage} style={styles.lectureImage} />
                <View style={styles.lectureDetails}>
                    <Text style={styles.lectureTitle}>Maths</Text>
                    <Text style={styles.lectureStatus}>Running...</Text>
                    <View style={styles.progressContainer}>
                        <Text style={styles.progressText}>30%</Text>
                        <View style={styles.progressBarTwo}>
                            <View
                                style={[styles.progressFill, { width: calculateProgressWidth('30%') }]}
                            />
                            <View
                                style={[styles.remainingFill, { width: `calc(100% - ${calculateProgressWidth('30%')})` }]}
                            />
                        </View>
                    </View>
                </View>
            </View>
        </ScrollView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 16,
        backgroundColor: '#f5f7fb',
    },
    header: {
        marginTop: 8,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
    },
    personImage: {
        width: 50,
        height: 50,
        borderRadius: 50,
    },
    greetingContainer: {
        marginLeft: -130,
        marginTop: -20,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        flex: 1,
    },
    greetingText: {
        fontSize: 18,
        fontWeight: 'bold',
        marginRight: 8,
    },
    waveImage: {
        width: 18,
        height: 18,
    },
    notificationIcon: {
        marginLeft: 16,
    },
    subTitle: {
        fontSize: 14,
        color: 'grey',
        marginLeft: -100,
        marginTop: -22,
        textAlign: 'center',
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
        marginHorizontal: 10,
        width: 320,
        height: '100%',
    },
    leftSide: {
        flex: 1,
        paddingRight: 10,
    },
    ongoingText: {
        fontSize: 14,
        fontWeight: '400',
        color: '#fff',
    },
    courseTitle: {
        fontSize: 16,
        marginTop: 10,
        fontWeight: '600',
        marginVertical: 5,
        color: '#fff',
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
    continueButton: {
        marginTop: 3,
        backgroundColor: '#9395eb',
        paddingVertical: 11,
        paddingHorizontal: 28,
        width: "60%",
        borderRadius: 24,
    },
    buttonText: {
        color: '#fff',
        fontSize: 14,
    },
    sliderImage: {
        width: 80,
        height: 80,
        borderRadius: 10,
        marginLeft: 10,
    },
    dotsContainer: {
        flexDirection: 'row',
        justifyContent: 'center',
        marginTop: 10,
    },
    dot: {
        width: 10,
        height: 10,
        borderRadius: 5,
        backgroundColor: '#d4d4d4',
        marginHorizontal: 5,
    },
    activeDot: {
        backgroundColor: '#6367e9',
    },
    chooseCourseText: {
        fontSize: 16,
        fontWeight: '600',
        marginTop: 10,
        color: '#595859',
    },
    coursesContainer: {
        flexDirection: 'row',
        flexWrap: 'wrap',
        justifyContent: 'space-between',
        marginTop: 12,
    },

    courseCard: {
        width: '48%',
        borderRadius: 12,
        padding: 10,
        marginBottom: 12,
        alignItems: 'flex-start',
        position: 'relative',
    },
    classCount: {
        fontSize: 12,
        color: 'grey',
        marginBottom: 10,
    },
    imageContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        width: '100%',
    },
    courseImage: {
        width: 50,
        height: 50,
        borderRadius: 10,
        marginLeft: 10,
    },
    playIcon: {
        marginLeft: 10,
    },
    todayLectureText: {
        fontSize: 16,
        fontWeight: '500',
        marginTop: 10,
        color: '#595859',
    },
    lectureContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        marginTop: 10,
        paddingTop: 0,
        backgroundColor: '#fff',
        borderRadius: 10,
        padding: 10,
    },
    lectureImage: {
        width: 50,
        height: 50,
        borderRadius: 8,
        marginRight: 10,
    },
    lectureDetails: {
        flex: 1,
        flexDirection: 'row',
        flexWrap: 'wrap',
        justifyContent: 'space-between',
    },
    lectureTitle: {
        fontSize: 14,
        fontWeight: '600',
        paddingTop: 20,
        marginBottom: 5,
    },
    lectureStatus: {
        fontSize: 12,
        color: 'grey',
    },
    progressBarTwo: {
        flex: 1,
        height: 10,
        backgroundColor: '#e0e0e0',
        borderRadius: 5,
        marginLeft: 50,
        marginTop: -60,
        overflow: 'hidden',
    },
});
