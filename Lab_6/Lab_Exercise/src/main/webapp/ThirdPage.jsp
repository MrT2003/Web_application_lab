<%@page import="java.sql.Connection"%>
<%@page import="java.sql.DriverManager"%>
<%@page import="java.sql.PreparedStatement"%>
<%@page import="java.sql.ResultSet"%>
<%@page import="java.util.List"%>
<%@page import="java.util.ArrayList"%>
<%@page import="model.Student"%>
<%@page contentType="text/html" pageEncoding="UTF-8"%>
<!DOCTYPE html>
<html>
    <head>
        <meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
        <title>Student List</title>
    </head>
    <body>

        <%
            // Kết nối tới cơ sở dữ liệu và lấy danh sách các sinh viên
            List<Student> allStudents = new ArrayList<>();
            Connection con = null;
            PreparedStatement ps = null;
            ResultSet rs = null;
            String jdbcUrl = "jdbc:mysql://localhost:3306/lab6_web?autoReconnect=true&useSSL=false";
            String dbuser = "root";
            String dbpassword = "Quenroi6212@";

            try {
                Class.forName("com.mysql.cj.jdbc.Driver");
                con = DriverManager.getConnection(jdbcUrl, dbuser, dbpassword);
                String sql = "SELECT * FROM student";
                ps = con.prepareStatement(sql);
                rs = ps.executeQuery();

                while (rs.next()) {
                    int id = rs.getInt("StudentID");
                    String name = rs.getString("StudentName");
                    allStudents.add(new Student(id, name));
                }
            } catch (Exception e) {
                e.printStackTrace();
            } finally {
                if (rs != null) rs.close();
                if (ps != null) ps.close();
                if (con != null) con.close();
            }

            // Xử lý yêu cầu xóa sinh viên
            String removeStudentID = request.getParameter("removeStudentID");
            if (removeStudentID != null) {
                try {
                    con = DriverManager.getConnection(jdbcUrl, dbuser, dbpassword);
                    String deleteSql = "DELETE FROM student WHERE StudentID = ?";
                    ps = con.prepareStatement(deleteSql);
                    ps.setInt(1, Integer.parseInt(removeStudentID));
                    ps.executeUpdate();
                    response.sendRedirect("ThirdPage.jsp"); // Chuyển hướng về trang sau khi xóa
                } catch (Exception e) {
                    e.printStackTrace();
                } finally {
                    if (ps != null) ps.close();
                    if (con != null) con.close();
                }
            }

            // Xử lý yêu cầu thêm sinh viên mới
            String newStudentID = request.getParameter("newStudentID");
            String newStudentName = request.getParameter("newStudentName");
            if (newStudentID != null && newStudentName != null) {
                try {
                    con = DriverManager.getConnection(jdbcUrl, dbuser, dbpassword);
                    String insertSql = "INSERT INTO student (StudentID, StudentName) VALUES (?, ?)";
                    ps = con.prepareStatement(insertSql);
                    ps.setInt(1, Integer.parseInt(newStudentID));
                    ps.setString(2, newStudentName);
                    ps.executeUpdate();
                    response.sendRedirect("ThirdPage.jsp"); // Chuyển hướng về trang sau khi thêm
                } catch (Exception e) {
                    e.printStackTrace();
                } finally {
                    if (ps != null) ps.close();
                    if (con != null) con.close();
                }
            }
        %>

        <h1>Student List</h1>
        <table>
            <tr>
                <th>Student ID</th>
                <th>Student Name</th>
                <th>Action</th>
            </tr>
            <% 
                // Hiển thị danh sách sinh viên
                for (Student student : allStudents) {
            %>
            <tr>
                <td><%= student.getStudentID() %></td>
                <td><%= student.getStudentName() %></td>
                <td>
                    <a href="EditStudent.jsp?studentID=<%= student.getStudentID() %>">Edit</a>
                    <a href="ThirdPage.jsp?removeStudentID=<%= student.getStudentID() %>">Remove</a>
                </td>
            </tr>
            <% 
                }
            %>
        </table>

        <h2>Add New Student</h2>
        <form action="ThirdPage.jsp" method="post">
            <label for="newStudentID">Student ID:</label>
            <input type="text" name="newStudentID" id="newStudentID" required>
            <br>
            <label for="newStudentName">Student Name:</label>
            <input type="text" name="newStudentName" id="newStudentName" required>
            <br>
            <input type="submit" value="Add Student">
        </form>
        <form action="CourseRegistration.jsp" method='post'>
            <input type='submit' value="Back to HomePage">   
        </form>
    </body>
</html>
