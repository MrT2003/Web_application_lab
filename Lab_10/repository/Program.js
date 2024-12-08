import { pool } from "../DB/index.js"

// INSERT NEW PROGRAM
export const CreateNewProgram = async(req,res) =>{
    const QUERY = `INSERT INTO program(programid,duration,major_id,name,program_type,valid_from,version)
                    VALUES (?,?,?,?,?,?,?)`;             
    const {programid,duration,major_id,name,program_type,valid_from,version}= req.body;                
    try {
        const connection = await pool.getConnection();
        const [result] = await connection.execute(QUERY,[
            programid,
            duration,
            major_id,
            name,
            program_type,
            valid_from,
            version
        ]);
        connection.release();
        res.status(200).json({
            message:"New program inserted !",
            Result : result
        })
    } catch (error) {
        res.status(500).json({
            message :"Fail to insert program !",
            error : error.message
        })
    }                
}

// GET ALL PROGRAM
export const GetAllProgram = async(req,res) =>{
    const QUERY = `SELECT * FROM program`
    try {
        const connection = await pool.getConnection();
        const [result] = await connection.execute(QUERY)
        connection.release();
        res.status(200).json({
            message: "Get all programs succesfully !",
            Result : result
        })
    } catch (error) {
        res.status(500).json({
            message: "Fail to fetch program list !",
            error : error.message
        })
    }
}

// GET PROGRAM BY ID 
export const GetProgramById = async(req,res) =>{
    const QUERY = `SELECT * FROM program WHERE programid = ?`
    try {
        const {pid} = req.params;
        if (!pid){
            res.status(404).json({
                message : "Page not found !"
            })
        }
        const connection = await pool.getConnection();
        const [result] = await connection.execute(QUERY,[pid])
        connection.release();
        if (result.length == 0){
            res.status(404).json({
                message : "Program not find !"
            })
        }
        res.status(200).json({
            message: "Successfully fetch program information !",
            Result : result
        })
    } catch (error) {
        res.status(500).json({
            message : "Error fetching program !",
            error : error.message
        })
    }
}

// DELETE PROGRAM BY ID 
export const DeleteProgramById = async(req,res) => {
    const QUERY = `DELETE FROM program WHERE programid = ?`;
    try {
        const {pid} = req.params;
        const connection = await pool.getConnection();
        const [result] = await connection.execute(QUERY,[pid])
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


export const UpdateProgram = async(req,res) => {
    const {pid} = req.params;
    const {...fieldsToUpdate } = req.body; // Extract `id` and the fields to update
    if (!pid || Object.keys(fieldsToUpdate).length === 0) {
        return res.status(400).json({
            message: "Invalid request. Please provide at least one field to update.",
        });
    }

    const fields = Object.keys(fieldsToUpdate)
        .map((field) => `${field} = ?`)
        .join(", "); // Generate "column = ?" for each field
    
    const values = [...Object.values(fieldsToUpdate), pid]; // Combine values and `pid`
    const QUERY = `UPDATE program SET ${fields} WHERE programid = ?`;

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

