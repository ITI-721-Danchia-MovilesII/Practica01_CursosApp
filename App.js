import React from 'react';
import { View } from 'react-native';
import { Provider } from 'react-redux';
import ConfigureStore from './src/components/Store';
import AvailableCourses from './src/views/AvailableCourses';
import SelectedCourses from './src/views/SelectedCourses';
import { style_01} from './src/styles/style_01';

const store = ConfigureStore();

export default function App() {
  return (
    <Provider store={store}>
      <View style={style_01.container}>
        <AvailableCourses />
        <SelectedCourses />
      </View>
    </Provider>
  );
}
