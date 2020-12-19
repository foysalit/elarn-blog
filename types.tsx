export type RootStackParamList = {
  Root: undefined;
  NotFound: undefined;
};

export type BottomTabParamList = {
  TabOne: undefined;
  TabTwo: undefined;
  TabThree: undefined;
  TabFour: undefined;
};

export type TabOneParamList = {
  TabOneScreen: undefined;
  CourseDetailScreen: { category: Category };
};

export type TabTwoParamList = {
  TabTwoScreen: undefined;
};

import {ImageSourcePropType} from "react-native";

export type Video = {
  title: string;
  duration: string;
};

export type Category = {
  bg: string;
  count: number;
  author: string;
  rating: number;
  category: string;
  duration: string;
  videos: Video[];
  subscriberCount: string;
  picture: ImageSourcePropType;
}

export const categories = [
  {
    category: 'Marketing',
    count: 12,
    picture: require('./assets/images/illustration_one.png'),
    author: 'Jack Mi',
    subscriberCount: '11K',
    rating: 4.8,
    duration: '2 hours 30 minutes',
    bg: 'pink500',
    videos: [
      {title: '01. Introduction', duration: '03:53'},
      {title: '02. Whats investing', duration: '08:13'},
      {title: '03. Fundamentals', duration: '15:23'},
      {title: '04. Lessons', duration: '20:33'},
    ]
  },
  {
    category: 'Investing',
    count: 8,
    picture: require('./assets/images/illustration_two.png'),
    author: 'Jack Mi',
    subscriberCount: '11K',
    rating: 4.8,
    duration: '2 hours 30 minutes',
    bg: 'purple500',
    videos: [
      {title: '01. Introduction', duration: '03:53'},
      {title: '02. Whats investing', duration: '08:13'},
      {title: '03. Fundamentals', duration: '15:23'},
      {title: '04. Lessons', duration: '20:33'},
    ]
  },
  {
    category: 'Drawing',
    count: 22,
    picture: require('./assets/images/illustration_three.png'),
    author: 'Jack Mi',
    subscriberCount: '11K',
    rating: 4.8,
    duration: '2 hours 30 minutes',
    bg: 'red500',
    videos: [
      {title: '01. Introduction', duration: '03:53'},
      {title: '02. Whats investing', duration: '08:13'},
      {title: '03. Fundamentals', duration: '15:23'},
      {title: '04. Lessons', duration: '20:33'},
    ]
  },
  {
    category: 'Marketing',
    count: 12,
    picture: require('./assets/images/illustration_one.png'),
    author: 'Jack Mi',
    subscriberCount: '11K',
    rating: 4.8,
    duration: '2 hours 30 minutes',
    bg: 'blue500',
    videos: [
      {title: '01. Introduction', duration: '03:53'},
      {title: '02. Whats investing', duration: '08:13'},
      {title: '03. Fundamentals', duration: '15:23'},
      {title: '04. Lessons', duration: '20:33'},
    ]
  },
  {
    category: 'Investing',
    count: 8,
    picture: require('./assets/images/illustration_two.png'),
    author: 'Jack Mi',
    subscriberCount: '11K',
    rating: 4.8,
    duration: '2 hours 30 minutes',
    bg: 'pink500',
    videos: [
      {title: '01. Introduction', duration: '03:53'},
      {title: '02. Whats investing', duration: '08:13'},
      {title: '03. Fundamentals', duration: '15:23'},
      {title: '04. Lessons', duration: '20:33'},
    ]
  },
  {
    category: 'Drawing',
    count: 22,
    picture: require('./assets/images/illustration_three.png'),
    author: 'Jack Mi',
    subscriberCount: '11K',
    rating: 4.8,
    duration: '2 hours 30 minutes',
    bg: 'pink500',
    videos: [
      {title: '01. Introduction', duration: '03:53'},
      {title: '02. Whats investing', duration: '08:13'},
      {title: '03. Fundamentals', duration: '15:23'},
      {title: '04. Lessons', duration: '20:33'},
    ]
  },
  {
    category: 'Drawing',
    count: 22,
    picture: require('./assets/images/illustration_three.png'),
    author: 'Jack Mi',
    subscriberCount: '11K',
    rating: 4.8,
    duration: '2 hours 30 minutes',
    bg: 'pink500',
    videos: [
      {title: '01. Introduction', duration: '03:53'},
      {title: '02. Whats investing', duration: '08:13'},
      {title: '03. Fundamentals', duration: '15:23'},
      {title: '04. Lessons', duration: '20:33'},
    ]
  },
];
