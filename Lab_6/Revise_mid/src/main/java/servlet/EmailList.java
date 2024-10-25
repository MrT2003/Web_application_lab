package servlet;

import jakarta.servlet.ServletException;
import jakarta.servlet.annotation.WebServlet;
import jakarta.servlet.http.HttpServlet;
import jakarta.servlet.http.HttpServletRequest;
import jakarta.servlet.http.HttpServletResponse;
import java.io.IOException;
import java.io.PrintWriter;

@WebServlet(name = "EmailList", urlPatterns = {"/EmailList"})
public class EmailList extends HttpServlet {

    protected void processRequest(HttpServletRequest request, HttpServletResponse response)
            throws ServletException, IOException {
        
        // Nhận thông tin từ form
        String email = request.getParameter("email"); 
        String name = request.getParameter("name"); 
        
        // Tạo chuỗi kết quả hiển thị bằng cách sử dụng String.format
        String result = String.format(
            "<h1>Thanks for joining our email list</h1>" +
            "<p>Here is the information that you entered:</p>" +
            "<label>Email:</label>" +
            "<span>%s</span><br>" +
            "<label>Your Name:</label>" +
            "<span>%s</span><br>", email, name); // Chèn email và name vào chuỗi
        
        // Thiết lập kiểu nội dung cho phản hồi
        response.setContentType("text/html;charset=UTF-8"); 
        try (PrintWriter out = response.getWriter()) { 
            // In kết quả ra màn hình
            out.print(result); 
        }
    }

    @Override
    protected void doGet(HttpServletRequest request, HttpServletResponse response)
            throws ServletException, IOException {
        processRequest(request, response);
    }

    @Override
    protected void doPost(HttpServletRequest request, HttpServletResponse response)
            throws ServletException, IOException {
        processRequest(request, response);
    }

    @Override
    public String getServletInfo() {
        return "Short description";
    }
}
