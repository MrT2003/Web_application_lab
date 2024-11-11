/*
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/Classes/Class.java to edit this template
 */
package servlet;

/**
 *
 * @author Admin
 */
import jakarta.servlet.ServletException;
import jakarta.servlet.annotation.WebServlet;
import jakarta.servlet.http.HttpServlet;
import jakarta.servlet.http.HttpServletRequest;
import jakarta.servlet.http.HttpServletResponse;

import java.io.IOException;
import model.RegisterForm;

@WebServlet("/RegisterServlet")
public class RegisterServlet extends HttpServlet {
    protected void doPost(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
        RegisterForm form = new RegisterForm();
        
        form.setFullName(request.getParameter("fullName"));
        form.setId(request.getParameter("id"));
        form.setEmail(request.getParameter("email"));
        form.setGender(request.getParameter("gender"));
        form.setFieldOfStudy(request.getParameter("fieldOfStudy"));
        form.setSubjects(request.getParameterValues("subjects"));
        form.setComments(request.getParameter("comments"));

        request.setAttribute("form", form);
        
        request.getRequestDispatcher("Result.jsp").forward(request, response);
    }
}

