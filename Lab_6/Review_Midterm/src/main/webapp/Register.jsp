<%-- 
    Document   : Register
    Created on : Oct 26, 2024, 10:00:01 PM
    Author     : Admin
--%>

<%@page contentType="text/html" pageEncoding="UTF-8"%>
<!DOCTYPE html>
<html>
<head>
    <title>Register Form</title>
</head>
<body>
    <h2>Register Form</h2>

    <form method="post" action="Result.jsp">
        Full Name: <input type="text" name="fullname"><br>
        ID: <input type="text" name="id"><br>
        Email: <input type="email" name="email"><br>
        Gender: 
        <input type="radio" name="gender" value="Male"> Male
        <input type="radio" name="gender" value="Female"> Female<br>

        <!-- Date of Birth with select -->
        <p>Date of Birth:</p>
        
        <!-- Day -->
        <select name="day">
            <% for (int i = 1; i <= 31; i++) { %>
                <option value="<%= i %>"><%= i %></option>
            <% } %>
        </select>
        
        <!-- Month -->
        <select name="month">
            <% for (int i = 1; i <= 12; i++) { %>
                <option value="<%= i %>"><%= i %></option>
            <% } %>
        </select>
        
        <!-- Year -->
        <select name="year">
            <% for (int i = 1900; i <= 2024; i++) { %>
                <option value="<%= i %>"><%= i %></option>
            <% } %>
        </select>
        <br>

        <p>List of subjects:</p>
        <input type="checkbox" name="subject" value="Computer Network-4"> Computer Network - 4<br>
        <input type="checkbox" name="subject" value="Web Application Development-4"> Web Application Development - 4<br>
        <input type="checkbox" name="subject" value="Operating System-3"> Operating System - 3<br>
        <input type="checkbox" name="subject" value="Applied Graphics-4"> Applied Graphics - 4<br>
        <input type="checkbox" name="subject" value="Entrepreneurship-3"> Entrepreneurship - 3<br>
        <input type="checkbox" name="subject" value="Critical Thinking-3"> Critical Thinking - 3<br>

        <input type="submit" value="Register">
    </form>
</body>
</html>
