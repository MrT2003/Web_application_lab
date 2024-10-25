<%-- 
    Document   : result
    Created on : Oct 20, 2024, 9:31:43 PM
    Author     : Admin
--%>

<%@page contentType="text/html" pageEncoding="UTF-8"%>
<!DOCTYPE html>
<html>
    <head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Registration Result</title>
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/css/bootstrap.min.css" rel="stylesheet">
</head>
<body>
    <div class="container">
        <h1>Registration Result</h1>
        <table class="table table-bordered">
            <tr>
                <th>Full Name</th>
                <td>${formData.fullName}</td>
            </tr>
            <tr>
                <th>ID</th>
                <td>${formData.ID}</td>
            </tr>
            <tr>
                <th>Email</th>
                <td>${formData.email}</td>
            </tr>
            <tr>
                <th>Gender</th>
                <td>${formData.gender}</td>
            </tr>
            <tr>
                <th>Subjects</th>
                <td>
                    <ul>
                        <c:forEach var="subject" items="${formData.subjects}">
                            <li>${subject}</li>
                        </c:forEach>
                    </ul>
                </td>
            </tr>
            <tr>
                <th>Comment</th>
                <td>${formData.comment}</td>
            </tr>
        </table>
    </div>
</body>
</html>


