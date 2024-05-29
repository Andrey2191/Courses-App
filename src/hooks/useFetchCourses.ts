import { useEffect, useState } from 'react';
import axios from 'axios';
import { Course } from '../types';

const API_URL = process.env.REACT_APP_API_URL as string;

const useFetchCourses = () => {
    const [courses, setCourses] = useState<Course[]>([]);
    const [loading, setLoading] = useState<boolean>(true);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        const fetchCourses = async () => {
            if (!API_URL) {
                setError('API URL is not defined');
                setLoading(false);
                return;
            }
            try {
                const response = await axios.get(API_URL);
                setCourses(response.data);
            } catch (err) {
                setError('Failed to fetch courses');
            } finally {
                setLoading(false);
            }
        };

        fetchCourses();
    }, []);

    return { courses, loading, error };
};

export default useFetchCourses;