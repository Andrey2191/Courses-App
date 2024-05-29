import React from 'react';
import { Course } from '../types';

interface CourseCardProps {
    course: Course;
}

const CourseCard: React.FC<CourseCardProps> = ({ course }) => {
    return (
        <div className="course-card" >
            <div className="card-img" style={{ backgroundColor: course.bgColor }}>
                <img src={course.image} alt={course.name} />
            </div>
            <h3>{course.name}</h3>
        </div>
    );
};

export default CourseCard;