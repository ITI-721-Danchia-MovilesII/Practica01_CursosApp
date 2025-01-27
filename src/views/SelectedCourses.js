import React from 'react';
import { View, Text, TouchableOpacity, FlatList } from 'react-native';
import { connect, useDispatch } from 'react-redux';
import { style_01 } from '../styles/style_01';
import { unselectCourse } from '../components/actions/CourseActions';

const SelectedCourses = ({ selectedCourses }) => {
  const dispatch = useDispatch();

  return (
    <View style={style_01.list}>
      <Text style={style_01.title}>Cursos por Matricular</Text>
      <FlatList
        data={selectedCourses}
        keyExtractor={(item) => item}
        renderItem={({ item }) => (
          <TouchableOpacity
            style={style_01.listItemSelected}
            onPress={() => dispatch(unselectCourse(item))}>
            <Text style={style_01.text}>{item}</Text>
          </TouchableOpacity>
        )}
      />
    </View>
  );
};

const mapStateToProps = (state) => ({
  selectedCourses: state.courses.selectedCourses,
});

export default connect(mapStateToProps)(SelectedCourses);
