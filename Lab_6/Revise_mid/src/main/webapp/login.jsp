<%@ page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8"%>
<!DOCTYPE html>
<html>
<head>
    <title>Đăng nhập</title>
</head>
<body>
    <h2>Đăng nhập sinh viên</h2>
    <form action="login.jsp" method="post">
        Tên đăng nhập: <input type="text" name="username" /><br><br>
        Mật khẩu: <input type="password" name="password" /><br><br>
        <input type="submit" value="Đăng nhập" />
    </form>

    <%
        // Nhận tên đăng nhập và mật khẩu từ form
        String username = request.getParameter("username");
        String password = request.getParameter("password");
        String correctUsername = "midterm";
        String correctPassword = "04042022";

        if (username != null && password != null) {
            // Kiểm tra nếu tên đăng nhập và mật khẩu trống
            if (username.trim().isEmpty() || password.trim().isEmpty()) {
                out.println("<p style='color: red;'>Vui lòng nhập cả tên đăng nhập và mật khẩu.</p>");
            } 
            // Kiểm tra nếu tên đăng nhập và mật khẩu không đúng
            else if (!username.equals(correctUsername) || !password.equals(correctPassword)) {
                out.println("<p style='color: red;'>Tên đăng nhập hoặc mật khẩu không chính xác.</p>");
            } 
            // Nếu tên đăng nhập và mật khẩu đúng
            else {
                response.sendRedirect("Register.jsp"); // Chuyển hướng tới trang đăng ký
            }
        }
    %>
</body>
</html>

