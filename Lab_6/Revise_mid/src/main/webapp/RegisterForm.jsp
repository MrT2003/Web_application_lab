<%-- 
    Document   : RegisterForm
    Created on : Oct 27, 2024, 8:20:55 AM
    Author     : Admin
--%>

<%@page contentType="text/html" pageEncoding="UTF-8"%>
<!DOCTYPE html>
<html>
<head>
    <title>Register Form</title>
    <style>
        body {
            background-color: pink;
            font-family: Arial, sans-serif;
        }
        .container {
            width: 50%;
            margin: auto;
            padding: 20px;
        }
        h1 {
            text-align: center;
        }
    </style>
</head>
<body>
    <div class="container">
        <h1>School of Computer Science & Engineering</h1>
        <h2>Register Form</h2>
        <form action="RegisterServlet" method="post">
            <label for="fullName">Full Name:</label>
            <input type="text" id="fullName" name="fullName"><br><br>

            <label for="id">ID:</label>
            <input type="text" id="id" name="id"><br><br>

            <label for="email">Email:</label>
            <input type="email" id="email" name="email"><br><br>

            <label>Gender:</label>
            <input type="radio" id="male" name="gender" value="Male">
            <label for="male">Male</label>
            <input type="radio" id="female" name="gender" value="Female">
            <label for="female">Female</label><br><br>

            <label for="fieldOfStudy">Field of study:</label>
            <select id="fieldOfStudy" name="fieldOfStudy">
                <option value="CS">CS</option>
                <option value="EE">EE</option>
            </select><br><br>

            <label>List of subjects:</label><br>
            <input type="checkbox" name="subjects" value="Principle of EE 1"> Principle of EE 1<br>
            <input type="checkbox" name="subjects" value="Computer Network"> Computer Network<br>
            <input type="checkbox" name="subjects" value="Web Application Development"> Web Application Development<br>
            <input type="checkbox" name="subjects" value="Object Oriented Programming"> Object Oriented Programming<br>
            <input type="checkbox" name="subjects" value="Computer Graphics"> Computer Graphics<br><br>

            <label for="comments">Comments:</label><br>
            <textarea id="comments" name="comments" rows="4" cols="50"></textarea><br><br>

            <input type="submit" value="Submit">
            <input type="reset" value="Reset">
        </form>
    </div>
</body>
</html>

