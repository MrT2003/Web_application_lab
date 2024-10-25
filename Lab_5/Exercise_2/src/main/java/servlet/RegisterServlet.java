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
        // Lấy dữ liệu từ form
        String fullName = request.getParameter("fullName");
        String ID = request.getParameter("ID");
        String email = request.getParameter("email");
        String gender = request.getParameter("inlineRadioOptions");
        String[] subjects = request.getParameterValues("inlineCheckboxOptions");
        String comment = request.getParameter("comment");

        // Tạo đối tượng chứa dữ liệu
        RegisterForm formData = new RegisterForm(fullName, ID, email, gender, subjects, comment);

        // Set attribute và forward đến JSP
        request.setAttribute("formData", formData);
        request.getRequestDispatcher("result.jsp").forward(request, response);
    }
}
