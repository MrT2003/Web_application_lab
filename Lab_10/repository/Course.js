import { pool } from "../DB/index.js"

// INSERT NEW PROGRAM
export const CreateNewCourse = async(req,res) =>{
    const QUERY = `INSERT INTO course(courseid, course_level_id, credit_lab, credit_theory, description, name)
                    VALUES (?,?,?,?,?,?)`;             
                                   
    try {
        const {
            courseID, // Ensure these names match the client payload
            clid,
            credit_lab,
            credit_theory,
            description,
            name,
        } = req.body; 
        const connection = await pool.getConnection();
        const [result] = await connection.execute(QUERY,[
            courseID,
            clid,
            credit_lab,
            credit_theory,
            description,
            name,
        ]);
        connection.release();
        res.status(200).json({
            message:"New course inserted !",
            Result : result
        })
    } catch (error) {
        res.status(500).json({
            message : "Fail to insert  program !",
            error : error.message
        })
    }                
}
 
// GET ALL PROGRAM
export const GetAllCourse = async(req,res) =>{
    const QUERY = `SELECT * FROM course`
    try {
        const connection = await pool.getConnection();
        const [result] = await connection.execute(QUERY)
        connection.release();
        res.status(200).json({
            message: "Get all courses succesfully !",
            Result : result
        })
    } catch (error) {
        res.status(500).json({
            message: "Fail to fetch course list !",
            error : error.message
        })
    }
}

// GET PROGRAM BY ID 
export const GetCourseById = async(req,res) =>{
    const QUERY = `SELECT * FROM course WHERE courseid = ?`
    try {
        const {cid} = req.params;
        if (!cid){
            res.status(404).json({
                message : "Page not found !"
            })
        }
        const connection = await pool.getConnection();
        const [result] = await connection.execute(QUERY,[cid])
        connection.release();
        if (result.length == 0){
            res.status(404).json({
                message : "Program not find !"
            })
        }
        res.status(200).json({
            message: "Successfully fetch course information !",
            Result : result
        })
    } catch (error) {
        res.status(500).json({
            message : "Error fetching course !",
            error : error.message
        })
    }
}

// DELETE PROGRAM BY ID 
export const DeleteCourseById = async(req,res) => {
    const QUERY = `DELETE FROM course WHERE courseid = ?`;
    try {
        const {cid} = req.params;
        const connection = await pool.getConnection();
        const [result] = await connection.execute(QUERY,[cid])
        connection.release();
        if (result.length == 0){
            res.status(404).json({
                message: "This course not exist in database !"
            })
        }
        res.status(200).json({
            message : "Delte program succesfully !"
        }) 
    } catch (error) {
        res.status(500).json({
            message: "Fail to delete course !",
            error : error.message
        })
    }
}


export const UpdateCourse = async(req,res) => {
    const {cid} = req.params;
    const {...fieldsToUpdate } = req.body; // Extract `id` and the fields to update
    if (!cid || Object.keys(fieldsToUpdate).length === 0) {
        return res.status(400).json({
            message: "Invalid request. Please provide at least one field to update.",
        });
    }

    const fields = Object.keys(fieldsToUpdate)
        .map((field) => `${field} = ?`)
        .join(", "); // Generate "column = ?" for each field
    
    const values = [...Object.values(fieldsToUpdate), cid]; // Combine values and `pid`
    const QUERY = `UPDATE course SET ${fields} WHERE courseid = ?`;

    try {
        const connection = await pool.getConnection();
        const [result] = await connection.execute(QUERY, values);
        connection.release();

        res.status(200).json({
            message: "Program updated successfully!",
            affectedRows: result.affectedRows,
        });
    } catch (error) {
        res.status(500).json({
            message: "Failed to update the program!",
            error: error.message,
        });
    } 
}

