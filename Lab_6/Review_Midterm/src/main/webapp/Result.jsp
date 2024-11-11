<%-- 
    Document   : Result
    Created on : Oct 26, 2024, 10:00:38 PM
    Author     : Admin
--%>

<%@page contentType="text/html" pageEncoding="UTF-8"%>
<!DOCTYPE html>
<html>
<head>
    <title>Result Page</title>
</head>
<body>
    <h2>Result Page</h2>

    <%
        String fullname = request.getParameter("fullname");
        String id = request.getParameter("id");
        String email = request.getParameter("email");
        String gender = request.getParameter("gender");
        String day = request.getParameter("day");
        String month = request.getParameter("month");
        String year = request.getParameter("year");
        String[] subjects = request.getParameterValues("subject");

    %>

    <p>Fullname: <%= fullname %></p>
    <p>ID: <%= id %></p>
    <p>Email: <%= email %></p>
    <p>Gender: <%= gender %></p>
    <p>Birthday: <%= day %>/<%= month %>/<%= year %></p>

    <h3>The course: Total credit:</h3>

    <!-- Hiển thị môn học và số tín chỉ trong bảng -->
    <table>
        <tr>
            <th>Course Name</th>
            <th>Credits</th>
        </tr>

        <%
            if (subjects != null) {
                for (String subject : subjects) {
                    String[] parts = subject.split("-");
                    String courseName = parts[0];
                    int credit = Integer.parseInt(parts[1]);
        %>
        <tr>
            <td><%= courseName %></td>
            <td><%= credit %></td>
        </tr>
        <%
                }
            }
        %>
    </table>
</body>
</html>
