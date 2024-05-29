import React, { useState } from 'react';
import useFetchCourses from './hooks/useFetchCourses';
import FilterSidebar from './components/FilterSidebar';
import CourseList from './components/CourseList';
import './styles/App.scss';

const App: React.FC = () => {
  const { courses, loading, error } = useFetchCourses();
  const [selectedTag, setSelectedTag] = useState<string | null>(null);

  if (loading) return <div>Loading...</div>;
  if (error) return <div>{error}</div>;

  const uniqueTags = Array.from(new Set(courses.flatMap(course => course.tags)));

  const filteredCourses = selectedTag ? courses.filter(course => course.tags.includes(selectedTag)) : courses;

  return (
    <div className="app">
      <FilterSidebar tags={uniqueTags} selectedTag={selectedTag} onSelectTag={setSelectedTag} />
      <CourseList courses={filteredCourses} />
    </div>
  );
};

export default App;