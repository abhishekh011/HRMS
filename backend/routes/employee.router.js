import express from 'express';
import { auth } from '../middelwares/auth.js';
import { addEmployee, deleteEmployee, getAllResignedEmployees, getNewAllEmployees, getSalaryEmployees, updateEmployeeDetailsByEid, updateSalaryByEid } from '../controllers/employe.controller.js';
import multer from "multer";

const router = express.Router();

const storage = multer.diskStorage({
    destination: function (req, file, cb) {
      cb(null, 'image/'); 
    },
    filename: function (req, file, cb) {
      cb(null, Date.now() + '-' + file.originalname); 
    },
});
const upload = multer({ storage: storage });
router.post('/addEmployee', upload.single('image'), addEmployee);
router.get('/getNewEmployee',auth ,getNewAllEmployees);
router.get('/getOldEmployee',getAllResignedEmployees);
router.get('/getSalaryEmployee',getSalaryEmployees);
router.post('/addSalaryDetails',upload.single('image'),updateSalaryByEid);
router.post('/updateDetails', upload.single('image'), updateEmployeeDetailsByEid);
router.delete('/deleteEmployee',deleteEmployee);
// router.patch('/updateDetails/:eid', updateEmployeeDetailsByEid);
export default router;
// import express from 'express';
// import { addEmployee } from '../controllers/employee.controller.js';
// import multer from "multer";
// import path from "path";

// const router = express.Router();
// const imageStorage = multer.diskStorage({
//     destination: function (req, file, cb) {
//         cb(null, 'image/'); // Destination folder for images
//     },
//     filename: function (req, file, cb) {
//         cb(null, Date.now() + '-' + file.originalname); 
//     },
// });

// const resumeStorage = multer.diskStorage({
//     destination: function (req, file, cb) {
//         cb(null, 'resume/'); // Destination folder for resumes
//     },
//     filename: function (req, file, cb) {
//         cb(null, Date.now() + '-' + file.originalname); // File naming convention for resumes
//     },
// });

// const uploadImage = multer({ storage: imageStorage });

// const uploadResume = multer({ storage: resumeStorage });

// // Route to handle employee addition with image and resume upload
// router.post('/addEmployee', uploadImage.single('image'), uploadResume.single('resume'), addEmployee);

// export default router;