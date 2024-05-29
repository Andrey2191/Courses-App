import React from 'react';
import { Course } from '../types';
import CourseCard from './CourseCard';

interface CourseListProps {
    courses: Course[];
}

const CourseList: React.FC<CourseListProps> = ({ courses }) => {
    return (
        <div className="course-list">
            {courses.map(course => (
                <CourseCard key={course.id} course={course} />
            ))}
        </div>
    );
};

export default CourseList;