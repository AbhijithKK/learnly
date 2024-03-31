import Table from "../TableComponent/Table";
import "../HomePage/AdminHome.css";
interface Column {
  label: string;
}

const AllOrders = () => {
  const columns: readonly Column[] = [
    { label: "CourseName" },
    { label: "UserName" },
    { label: "Email" },
    { label: "Prize" },
    { label: "TransactionDetails" },
  ];
  const tableData = [
    { CourseName: "India", UserName: "IN", Email: "abcd@gmail.com", Prize:500,TransactionDetails:"Click here" },
    { CourseName: "china", UserName: "CN", Email: 1324171354, Prize:500,TransactionDetails:"Click here" },
    { CourseName: "us", UserName: "US", Email: 1324171354, Prize:500,TransactionDetails:"Click here" },
  ];
  return (
    <div className="admin-home-container">
      <div className="admin-page-name">All Orders</div>
    <div className="all-users-table">
      <Table tableTitle={columns} tableData={tableData} />
    </div>
    </div>
  );
};

export default AllOrders;
