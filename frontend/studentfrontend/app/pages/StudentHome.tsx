'use client';
import { Button, Spin } from 'antd';
import CommonTable from "../components/CommonTable";
import axiosInstance from "../utils/axiosInstance";
import { useQuery } from "@tanstack/react-query";
import { AxiosError } from "axios";

const getStudents = async () => {
  const response = await axiosInstance.get("/studentInfo");
  return response.data;
};

const StudentHome = () => {
  const columns = [
    { header: "Name", accessor: "name" },
    { header: "Email", accessor: "email" },
    { header: "Age", accessor: "age" },
  ];

  const { data: students, isLoading, error } = useQuery({
    queryKey: ['studentsData'],
    queryFn: getStudents,
    onError: (err: AxiosError) => {
      console.error("Error while getting data!", err.message);
    },
  });

  if (isLoading) return <Spin spinning={isLoading} fullscreen />;
  if (error) return <p>Failed to load student data.</p>;

  return (
    <div>
      <div className="flex justify-between py-4">
        <h2 className="text-xl font-semibold mb-4">Student List</h2>
        <Button type="primary">Add +</Button>
      </div>
      <CommonTable columns={columns} data={students || []} />
    </div>
  );
};

export default StudentHome;
