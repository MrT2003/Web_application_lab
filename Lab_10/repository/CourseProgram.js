import { pool } from "../DB/index.js"

// INSERT NEW PROGRAM
export const InsertNewCourseProgram = async(req,res) =>{
    const QUERY = `INSERT INTO course_program(course_code,course_type,course_id,program_id)
                    VALUES (?,?,?,?)`;             
                                   
    try {
        const {
            course_code, // Ensure these names match the client payload
            course_type,
            course_id,
            program_id
        } = req.body; 
        const connection = await pool.getConnection();
        const [result] = await connection.execute(QUERY,[
            course_code,
            course_type,
            course_id,
            program_id
        ]);
        connection.release();
        res.status(200).json({
            message:"New course_program inserted !",
            Result : result
        })
    } catch (error) {
        res.status(500).json({
            message : "Fail to insert  course_program !",
            error : error.message
        })
    }                
}

// GET ALL COURSE_PROGRAMS
export const GetAllCourseProgram = async(req,res) =>{
    const QUERY = `SELECT * FROM course_program`
    try {
        const connection = await pool.getConnection();
        const [result] = await connection.execute(QUERY)
        connection.release();
        res.status(200).json({
            message: "Get all course_programs succesfully !",
            Result : result
        })
    } catch (error) {
        res.status(500).json({
            message: "Fail to fetch course_program list !",
            error : error.message
        })
    }
}

// GET COURSE_PROGRAM BY NAME
export const GetCourseProgramByName = async(req,res) =>{
    
    const SortByProgramName = `SELECT DISTINCT programid FROM program WHERE name = ?`
    const QUERY = `SELECT * FROM course_program WHERE program_id = ? `
    
    try {
        const {program_name} = req.params;
        if (!program_name){
            res.status(404).json({
                message : "Page not found !"
            })
        }
        const connection = await pool.getConnection();
        const [ProgramByName] = await connection.execute(SortByProgramName,[program_name])
        const [result] = await connection.execute(QUERY,[ProgramByName[0].programid])
        connection.release();
        if (result.length == 0){
            res.status(404).json({
                message : "Course_Program not find !"
            })
        }
        res.status(200).json({
            message: "Successfully fetch course_program information !",
            Result : result
        })
    } catch (error) {
        res.status(500).json({
            message : "Error fetching course_program !",
            error : error.message
        })
    }
}

// DELETE COURSE_PROGRAM BY NAME
export const DeleteCourseProgramByName = async(req,res) => {
    const FindCID = `SELECT DISTINCT courseid FROM course WHERE name = ?`
    const FindPID = `SELECT DISTINCT programid FROM program WHERE name = ?`
    const QUERY = `DELETE FROM course_program WHERE course_id = ? AND program_id = ?`;
    try {
        const {program_name} = req.params;
        const {course_name} = req.params;
        const connection = await pool.getConnection();
        const [CourseID] = await connection.execute(FindCID,[course_name])
        if (CourseID.length == 0){
            res.status(500).json({
                message : "Fail to retreive CourseID by CourseName"
            })
        }
        const [ProgramID] = await connection.execute(FindPID,[program_name])
        if (ProgramID.length == 0){
            res.status(500).json({
                message : "Fail to retreive ProgramID by ProgramName"
            })
        }
        const [result] = await connection.execute(QUERY,[CourseID[0].courseid,ProgramID[0].programid])
        connection.release();
        if (result.length == 0){
            res.status(404).json({
                message: "This course_program not exist in database !"
            })
        }
        res.status(200).json({
            message : "Delte course_program succesfully !"
        }) 
    } catch (error) {
        res.status(500).json({
            message: "Fail to delete course !",
            error : error.message
        })
    }
}
