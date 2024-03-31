import Table from "../TableComponent/Table";
import "./AllUsers.css";
import "../HomePage/AdminHome.css";
interface Column {
  label: string;
}

const AllUsers = () => {
  const columns: readonly Column[] = [
    { label: "Name" },
    { label: "MobNumber" },
    { label: "Email" },
    {label: "ProPic",},
    { label: "Block/UnBlock" },
  ];
  const tableData = [
    { Name: "India", MobNumber: "IN", Email: "abcd@gmail.com", ProPic:"http",BlockUnBlock:"" },
    { Name: "china", MobNumber: "CN", Email: 1324171354, ProPic:"http",BlockUnBlock:"" },
    { Name: "us", MobNumber: "US", Email: 1324171354, ProPic:"http",BlockUnBlock:"" },
  ];
  return (
    <div className="admin-home-container">
      <div className="admin-page-name">All Users</div>
    <div className="all-users-table">
      <Table tableTitle={columns} tableData={tableData} />
    </div>
    </div>
  );
};

export default AllUsers;
