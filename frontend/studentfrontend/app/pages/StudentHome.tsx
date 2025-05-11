import { Button } from "antd";
import CommonTable from "../components/CommonTable";

const StudentHome = () => {
  const columns = [
    { header: "Name", accessor: "name" },
    { header: "Email", accessor: "email" },
    { header: "Age", accessor: "age" },
  ];

  const data = [
    { name: "Ajith", email: "ajith@example.com", age: 25 },
    { name: "Priya", email: "priya@example.com", age: 23 },
  ];

  return (
    <>
      <div>
        <div className="flex justify-between py-4">
          <h2 className="text-xl font-semibold mb-4">Student List</h2>
          <Button type="primary">Add +</Button>
        </div>
        <CommonTable columns={columns} data={data} />
      </div>
    </>
  );
};

export default StudentHome;
