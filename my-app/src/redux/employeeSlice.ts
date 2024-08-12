import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

interface Employee {
  employeeId: string;
  firstName: string;
  lastName: string;
  dob: string;
  language: string;
  email: string;
  phone: string;
  address: string;
  dateOfJoining: string;
  jobTitle: string;
  department: string;
  image?: string;
}

interface EmployeeState {
  employee: Employee[];
  status: "idle" | "loading" | "succeeded" | "failed";
  error: string | null;
}

interface EmployeeDetails {
    employeeId: string;
    firstName: string;
    lastName: string;
    dob: string;
    language: string;
    email: string;
    phone: string;
    address: string;
    dateOfJoining: string;
    jobTitle: string;
    department: string;
  }

interface SelectedEmployee {
    eid: string;
    firstName: string;
    lastName: string;
    email: string;
    phone?: string;
    dor?: string;
    jobTitle?: string;
    image: string;
  }

const initialState: EmployeeState = {
  employee: [],
  status: "idle",
  error: null,
};

export const fetchEmployees = createAsyncThunk("employee/fetchEmployees", async () => {
  const response = await axios.get("http://localhost:3002/employee/getNewEmployee");
  return response.data.employees;
});

export const getOldEmployee = createAsyncThunk("employee/getOldEmployee", async () => {
    const response = await axios.get("http://localhost:3002/employee/getOldEmployee");
    return response.data.employees;
  });

export const addEmployee = createAsyncThunk("employee/addEmployee",
    async ({ employeeDetails, imagePath }: any) => {
        console.log('addEmployee hai bhai',imagePath);
      const formData = new FormData();
      Object.keys(employeeDetails).forEach((key) => {
        const typedKey = key as keyof EmployeeDetails;
        const value = employeeDetails[typedKey];
        if (value !== undefined && value !== null) {
          formData.append(typedKey, value);
        }
      });
      if (imagePath) {
        formData.append("image", imagePath);
      }
  
      try {
        const response = await axios.post(
          "http://localhost:3002/employee/addEmployee",
          formData,
          { headers: { "Content-Type": "multipart/form-data" } }
        );
        return response.data;
      } catch (error) {
        console.error("Error adding employee:", error);
        throw error; 
      }
    }
  );
  export const updateDetails = createAsyncThunk("employee/updateDetails",
    async ({ selectedEmployee, imagePath }: any) => {
        console.log('updateEmployee hai bhai',imagePath);
      const formData = new FormData();
      Object.keys(selectedEmployee).forEach((key) => {
        const typedKey = key as keyof SelectedEmployee;
        const value = selectedEmployee[typedKey];
        if (value !== undefined && value !== null) {
          formData.append(typedKey, value);
        }
      });
      if (imagePath) {
        formData.append("image", imagePath);
      }
  
      try {
        const response = await axios.post(
          "http://localhost:3002/employee/updateDetails",
          formData,
          { headers: { "Content-Type": "multipart/form-data" } }
        );
        return response.data;
      } catch (error) {
        console.error("Error adding employee:", error);
        throw error; 
      }
    }
  );


const employeeSlice = createSlice({
  name: "employee",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchEmployees.pending, (state) => {
        state.status = "loading";
      })
      .addCase(fetchEmployees.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.employee = action.payload;
      })
      .addCase(getOldEmployee.pending,(state)=>{
        state.status = "loading";
      })
      .addCase(getOldEmployee.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.employee = action.payload;
      })
      .addCase(addEmployee.fulfilled,(state , action) => {
        state.status = "succeeded";
        state.employee.push(action.payload);
      })
      .addCase(updateDetails.fulfilled, (state, action) => {
        state.employee.push(action.payload);
      })
  },
});

export default employeeSlice.reducer;
