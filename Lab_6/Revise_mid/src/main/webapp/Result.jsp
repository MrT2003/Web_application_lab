<%-- 
    Document   : Result
    Created on : Oct 27, 2024, 8:22:02 AM
    Author     : Admin
--%>

<%@ page import="java.util.Arrays" %>
<%@ page contentType="text/html;charset=UTF-8" language="java" %>
<!DOCTYPE html>
<html>
<head>
    <title>Form Submission Result</title>
</head>
<body>
    <h1>Form Submission Result</h1>
    <p><strong>Full Name:</strong> ${form.fullName}</p>
    <p><strong>ID:</strong> ${form.id}</p>
    <p><strong>Email:</strong> ${form.email}</p>
    <p><strong>Gender:</strong> ${form.gender}</p>
    <p><strong>Field of Study:</strong> ${form.fieldOfStudy}</p>
    <p><strong>List of Subjects:</strong> ${Arrays.toString(form.subjects)}</p>
    <p><strong>Comments:</strong> ${form.comments}</p>
</body>
</html>


