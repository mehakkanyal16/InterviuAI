"use client"
import { useUser } from '@clerk/nextjs'
import React, { useEffect, useState } from 'react'
import InterviewItemCard from './InterviewItemCard';
import { getUserInterviews } from '@/app/actions/interview';

function InterviewList() {

    const { user } = useUser();
    const [interviewList, setInterviewList] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        user && GetInterviewList();
    }, [user]);

    const GetInterviewList = async () => {
        const result = await getUserInterviews();
        setInterviewList(result);
        setLoading(false);
    };

    if (loading) {
        return (
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 my-3'>
                {[1, 2, 3, 4].map((item) => (
                    <div
                        key={item}
                        className='h-[100px] w-full bg-gray-200 animate-pulse rounded-lg'
                    ></div>
                ))}
            </div>
        );
    }

    if (interviewList.length === 0) {
        return (
            <div className='text-center py-12 px-6'>
                <p className='text-gray-600 font-medium'>You haven't created an interview yet.</p>
                <p className='text-sm text-gray-400 mt-1'>Start one above to see it show up here.</p>
            </div>
        );
    }

    return (
        <div>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 my-3'>
                {interviewList.map((interview) => (
                    <InterviewItemCard
                        key={interview.id}
                        interview={interview}
                    />
                ))}
            </div>
        </div>
    );
}

export default InterviewList;
