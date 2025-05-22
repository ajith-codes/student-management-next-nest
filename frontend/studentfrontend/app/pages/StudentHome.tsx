'use client';
import { Button, Spin } from 'antd';
import CommonTable from "../components/CommonTable";
import axiosInstance from "../utils/axiosInstance";
import { useQuery } from "@tanstack/react-query";
import { AxiosError } from "axios";
import { useState } from 'react';
import CommonModal from '../components/CommonModal';
import StudentForm from '../Molecules/StudentForm';
import { Spinner } from '../Atoms/Spinner';

const getStudents = async () => {
  const response = await axiosInstance.get("/studentInfo");
  return response.data;
};

const StudentHome = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const showModal = () => setIsModalOpen(true);

  const handleOk = () => {
    console.log('Confirmed!');
    setIsModalOpen(false);
  };

  const handleCancel = () => {
    console.log('Cancelled!');
    setIsModalOpen(false);
  };

  const columns = [
    { header: "Name", accessor: "name" },
    { header: "Email", accessor: "email" },
    { header: "Age", accessor: "age" },
  ];

  const { data: students, isLoading, error,refetch } = useQuery({
    queryKey: ['studentsData'],
    queryFn: getStudents,
    onError: (err: AxiosError) => {
      console.error("Error while getting data!", err.message);
    },
  });

  if (isLoading) return <Spinner isLoading={isLoading} />;
  if (error) return <p>Failed to load student data.</p>;

  return (
<div className="flex flex-col py-4 justify-center">
      <div className="flex justify-between py-4">
        <h2 className="text-xl font-semibold mb-4">Student List</h2>
        <Button type="primary" onClick={showModal}>Add +</Button>
      </div>
         <CommonModal
        title="Reusable Modal"
        open={isModalOpen}
        onOk={handleOk}
        onCancel={handleCancel}
        okText="Submit"
        cancelText="Close"
      >
        <StudentForm handleOk={handleOk} refetchstudents ={refetch}/>
      </CommonModal>
      <CommonTable columns={columns} data={students || []} />
    </div>
  );
};

export default StudentHome;
