import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { RootState, AppDispatch } from "../redux/Store";
import { fetchEmployees, getOldEmployee } from "../redux/employeeSlice";

function Demo() {
  const dispatch = useDispatch<AppDispatch>();
  const { employee, error } = useSelector((state: RootState) => state.employee);
   
  useEffect(() => {
    dispatch(getOldEmployee());
  }, [dispatch]);
  console.log(employee)
  if (error) return <p>Error: {error}</p>;

  return (
    <>
      <h1>Employee List</h1>
      <ul>
        {employee?.map((employee:any) => (
          <li key={employee.eid}>
            {employee.firstName} {employee.lastName} - {employee.email}
          </li>
        ))}
      </ul>
    </>
  );
}

export default Demo;
