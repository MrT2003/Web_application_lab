<%@ page contentType="text/html;charset=UTF-8" language="java" %>
<%@ page import="java.util.List" %>
<%@ page import="murach.business.User" %>
<!DOCTYPE html>
    <head>
        <title>User List</title>
    </head>
    <body>
        <h1>List of Users</h1>

        <table border="1">
            <tr>
                <th>First Name</th>
                <th>Last Name</th>
                <th>Email</th>
            </tr>
            <%
                List<User> userList = (List<User>) request.getAttribute("userList");
                if (userList != null && !userList.isEmpty()) {
                    for (User user : userList) {
            %>
            <tr>
                <td><%= user.getFirstName() %></td>
                <td><%= user.getLastName() %></td>
                <td><%= user.getEmail() %></td>
            </tr>
            <%
                    }
                } else {
            %>
            <tr>
                <td colspan="3">No users found.</td>
            </tr>
            <%
                }
            %>
        </table>

        <br/>
        <form action="index.html" method="get">
            <input type="submit" value="Back to Home"/>
        </form>
    </body>
</html>