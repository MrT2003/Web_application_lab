<%@ page import="java.sql.Connection, java.sql.Statement, java.sql.ResultSet, java.sql.DriverManager, java.sql.SQLException" %>
<%  
    String connectionURL = "jdbc:mysql://localhost:3306/lab6_web?useSSL=false&allowPublicKeyRetrieval=true";
    Connection connection = null;
    Statement statement = null;
    ResultSet rs = null;

    try {
        Class.forName("com.mysql.cj.jdbc.Driver").newInstance(); // N?p driver m?i
        connection = DriverManager.getConnection(connectionURL, "root", "Quenroi6212@");
        
        statement = connection.createStatement();
        rs = statement.executeQuery("SELECT * FROM course");

        while (rs.next()) {
            out.println(rs.getString("CourseID") + " - ");
            out.println(rs.getString("CourseName") + "<br>");
        }
    } catch (Exception e) {
        out.println("Error: " + e.getMessage());
    } finally {
        if (rs != null) try { rs.close(); } catch (SQLException ignore) {}
        if (statement != null) try { statement.close(); } catch (SQLException ignore) {}
        if (connection != null) try { connection.close(); } catch (SQLException ignore) {}
    }
%>
