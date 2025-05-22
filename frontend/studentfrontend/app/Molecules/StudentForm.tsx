"use client";
import { useState } from "react";
import CustomInput from "../Atoms/CustomInput";
import { Button, message } from "antd";
import axiosInstance from "../utils/axiosInstance";
import { useMutation } from "@tanstack/react-query";
import { AxiosError } from "axios";
import { Spinner } from "../Atoms/Spinner";

const postStudent = async (formData: {
  name: string;
  email: string;
  age: string;
}) => {
  const response = await axiosInstance.post("/studentInfo", formData);
  return response.data;
};

const StudentForm = ({handleOk,refetchstudents}) => {
  const [formData, setFormData] = useState({ name: "", email: "", age: "" });
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;

    setFormData((prev) => ({
      ...prev,
      [name]: name === "age" ? Number(value) : value,
    }));
  };

  const {
    mutate: createStudent,
    isPending,
    error,
  } = useMutation({
    mutationFn: postStudent,
    onSuccess: () => {
      message.success("Student data created successfully!");
      handleOk()
      refetchstudents()
      setFormData({ name: "", email: "", age: "" });
    },
    onError: (err: AxiosError) => {
      console.error("Error while creating student data!", err.message);
      message.error("Failed to create student data.");
    },
  });
  {
    isPending && <Spinner isLoading={isPending} />;
  }
  {
    error && <p style={{ color: "red" }}>Something went wrong.</p>;
  }
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    createStudent(formData);
  };

  return (
    <>
      <form onSubmit={handleSubmit} style={{ maxWidth: 400 }}>
        <div>
          <CustomInput
            label="Name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            placeholder="Enter your name"
            required
          />
          <CustomInput
            label="Email"
            name="email"
            type="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="Enter your email"
            required
          />
          <CustomInput
            label="Age"
            name="age"
            type="number"
            value={formData.age}
            onChange={handleChange}
            placeholder="Enter your age"
            required
          />
        </div>

        <div className="flex justify-center">
          <Button type="primary" htmlType="submit" loading={isPending}>
            {isPending ? "Submitting..." : "Submit"}
          </Button>
        </div>
      </form>
    </>
  );
};

export default StudentForm;
