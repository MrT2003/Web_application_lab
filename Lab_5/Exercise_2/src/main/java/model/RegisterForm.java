/*
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/Classes/Class.java to edit this template
 */
package model;

public class RegisterForm {
    private String fullName;
    private String ID;
    private String email;
    private String gender;
    private String[] subjects;
    private String comment;

    // Constructors
    public RegisterForm() {
    }

    public RegisterForm(String fullName, String ID, String email, String gender, String[] subjects, String comment) {
        this.fullName = fullName;
        this.ID = ID;
        this.email = email;
        this.gender = gender;
        this.subjects = subjects;
        this.comment = comment;
    }

    // Getters and Setters
    public String getFullName() {
        return fullName;
    }

    public void setFullName(String fullName) {
        this.fullName = fullName;
    }

    public String getID() {
        return ID;
    }

    public void setID(String ID) {
        this.ID = ID;
    }

    public String getEmail() {
        return email;
    }

    public void setEmail(String email) {
        this.email = email;
    }

    public String getGender() {
        return gender;
    }

    public void setGender(String gender) {
        this.gender = gender;
    }

    public String[] getSubjects() {
        return subjects;
    }

    public void setSubjects(String[] subjects) {
        this.subjects = subjects;
    }

    public String getComment() {
        return comment;
    }

    public void setComment(String comment) {
        this.comment = comment;
    }
}


