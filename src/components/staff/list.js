import Axios from "axios";
import { useState, useEffect } from "react";
import MaterialTable from "material-table";
import Select from "@material-ui/core/Select";
function StaffList() {
  const [staffs, setStaffs] = useState([]);
  useEffect(() => {
    fetchData();
  }, []);
  const fetchData = async () => {
    const staffLists = await Axios.get("http://localhost:3000/staff/list");
    console.log(staffLists);
    setStaffs(staffLists.data.data);
  };

  return (
    <div>
      <MaterialTable
        title="Staff"
        data={staffs}
        columns={[
          {
            title: "name",
            field: "name",
            render: (rowData) => {
              return <Select datatype></Select>;
            },
          },
          {
            title: "email",
            field: "email",
          },
        ]}
      />
    </div>
  );
}
export default StaffList;
