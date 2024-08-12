import multer from "multer";
import Employee from "../models/employee.model.js";

export const addEmployee = async (req, res) => {
  try {
    const {
      employeeId,
      firstName,
      lastName,
      email,
      phone,
      jobTitle,
      dateOfJoining,
      dor,
      department,
      salary,
    } = req.body;
    const image = req.file ? req.file.path : null;
    let emp = await Employee.findOne({ eid: employeeId });
    if (emp) {
      return res.status(401).json({ message: "Employee ID already exists" });
    }

    const employee = new Employee({
      eid: employeeId,
      firstName,
      lastName,
      email,
      phone,
      jobTitle,
      doj: dateOfJoining,
      dor,
      department,
      salary,
      image,
    });
    await employee.save();
    res.status(200).json({ message: "Employee saved successfully", employee });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Error saving employee", error });
  }
};

export const getNewAllEmployees = async (req, res) => {
  try {
    const employees = await Employee.find({ dor: 0 });
    const baseUrl = "http://localhost:3002/";
    for (let i = 0; i < employees.length; i++) {
      employees[i].image = baseUrl + employees[i].image;
    }

    if (employees.length === 0) {
      return res.status(404).json({ message: "No employees found" });
    }
    res
      .status(200)
      .json({ message: "Employees retrieved successfully", employees });
  } catch (error) {
    console.log();
    "Error retrieving employees:", error;
    res.status(500).json({ message: "Error retrieving employees", error });
  }
};

export const getAllResignedEmployees = async (req, res) => {
  try {
    const employees = await Employee.find({ dor: { $ne: 0 } });
    const baseUrl = "http://localhost:3002/";
    for (let i = 0; i < employees.length; i++) {
      employees[i].image = baseUrl + employees[i].image;
    }
    if (employees.length === 0) {
      return res.status(404).json({ message: "No resigned employees found" });
    }

    res.status(200).json({
      message: "Resigned employees retrieved successfully",
      employees,
    });
  } catch (error) {
    logger.error("Error retrieving resigned employees:", error);
    res
      .status(500)
      .json({ message: "Error retrieving resigned employees", error });
  }
};

export const getSalaryEmployees = async (req, res) => {
  try {
    const employees = await Employee.find({
      $or: [{ salary: { $ne: null } }, { salary: { $gte: 1 } }],
    });
    const baseUrl = "http://localhost:3002/";
    for (let i = 0; i < employees.length; i++) {
      employees[i].image = baseUrl + employees[i].image;
    }
    if (employees.length === 0) {
      return res
        .status(404)
        .json({
          message: "No employees found with the specified salary conditions",
        });
    }
    res.status(200).json({ employees });
  } catch (error) {
    console.error("Error fetching employees with special salaries:", error);
    res.status(500).json({ message: "Error fetching employees", error });
  }
};

export const updateSalaryByEid = async (req, res) => {
  try {
    const { eid, firstName, lastName, jobTitle, status, salary } = req.body;
    const image = req.file ? req.file.path : null;
    const updatedEmployee = await Employee.findOneAndUpdate(
      { eid },
      { firstName, lastName, jobTitle, status, salary, image }
    );

    if (!updatedEmployee) {
      return res.status(404).json({ message: "Employee not found" });
    }

    res.status(200).json({
      message: "Employee details updated successfully",
      employee: updatedEmployee,
    });
  } catch (error) {
    console.log("Error updating employee details:", error);
    res.status(500).json({ message: "Error updating employee details", error });
  }
};

export const updateEmployeeDetailsByEid = async (req, res) => {
  try {
    const { eid, firstName, lastName, phone, dor, jobTitle } = req.body;
    const image = req.file ? req.file.path : null;

    const updatedEmployee = await Employee.findOneAndUpdate(
      { eid },
      image?
      { firstName, lastName, phone, dor, jobTitle, image }:
      { firstName, lastName, phone, dor, jobTitle }
    );

    if (!updatedEmployee) {
      return res.status(404).json({ message: "Employee not found" });
    }

    res.status(200).json({
      message: "Employee details updated successfully",
      employee: updatedEmployee,
    });
  } catch (error) {
    console.log("Error updating employee details:", error);
    res.status(500).json({ message: "Error updating employee details", error });
  }
};

export const deleteEmployee = async (req, res) => {
  try {
    let eid = req.params.eid;
    let employee = await Employee.findOne({ eid });
    if (employee) {
      await Employee.deleteOne({ eid });
      return res.status(200).json({ message: "Delete Successfully" });
    }
  } catch (error) {
    console.log("error in deleteemployee", error);
    return res;
  }
};
export const getEmployeeWithTodayBirthday = async (req, res) => {
  try {
    const baseUrl = "http://localhost:3002/";

    const today = new Date();
    const todayMonth = today.getMonth();
    const todayDate = today.getDate();

    const employee = await Employee.findOne({
      dob: {
        $gte: new Date(today.getFullYear(), todayMonth, todayDate),
        $lt: new Date(today.getFullYear(), todayMonth, todayDate + 1),
      },
    });

    if (!employee) {
      return res.status(404).json({ message: "No employee found with today's birthday" });
    }

    employee.image = baseUrl + employee.image;

    res.status(200).json({
      message: "Employee with today's birthday retrieved successfully",
      employee: {
        name: employee.name,
        dob: employee.dob,
        image: employee.image,
      },
    });
  } catch (error) {
    console.error("Error retrieving employee record:", error);
    res.status(500).json({ message: "Error retrieving employee record", error });
  }
};

