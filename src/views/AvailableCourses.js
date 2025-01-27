import React from 'react';
import { Image, View, Text, TouchableOpacity, FlatList } from 'react-native';
import { connect, useDispatch } from 'react-redux';
import { selectCourse } from '../components/actions/CourseActions';
import { style_01 } from '../styles/style_01';

const AvailableCourses = ({ availableCourses }) => {
  const dispatch = useDispatch();

  return (
    <View>
      <View style={style_01.titleBar}>
        <Image source={require('../imgs/logos/logo_universidad.png')} />
        <Text style={style_01.title}>Cursos a Matricular</Text>
      </View>

      <View style={style_01.list}>
        <FlatList
          data={availableCourses}
          keyExtractor={(item) => item}
          renderItem={({ item }) => (
            <TouchableOpacity
              style={style_01.listItemAvailable}
              onPress={() => dispatch(selectCourse(item))}>
              <Text style={style_01.text}>{item}</Text>
            </TouchableOpacity>
          )}
        />
      </View>
    </View>
  );
};

const mapStateToProps = (state) => ({
  availableCourses: state.courses.availableCourses,
});

export default connect(mapStateToProps)(AvailableCourses);
