package murach.data;

import murach.business.User;

import java.sql.Connection;
import java.sql.DriverManager;
import java.sql.PreparedStatement;
import java.sql.ResultSet;
import java.sql.SQLException;
import java.util.ArrayList;
import java.util.List;

public class UserDB {

    private static final String URL = "jdbc:mysql://localhost:3306/lab7_web"; // Change as needed
    private static final String USERNAME = "root"; // Change to your database username
    private static final String PASSWORD = "Quenroi6212@"; // Change to your database password

    public static void insert(User user) {
        String sql = "INSERT INTO users (firstName, lastName, email) VALUES (?, ?, ?)";

        try {
            // Load the MySQL JDBC driver
            Class.forName("com.mysql.cj.jdbc.Driver");

            try (Connection connection = DriverManager.getConnection(URL, USERNAME, PASSWORD); PreparedStatement statement = connection.prepareStatement(sql)) {

                statement.setString(1, user.getFirstName());
                statement.setString(2, user.getLastName());
                statement.setString(3, user.getEmail());

                statement.executeUpdate();
            }
        } catch (ClassNotFoundException e) {
            e.printStackTrace(); // Handle the exception appropriately in production code
        } catch (SQLException e) {
            e.printStackTrace(); // Handle the exception appropriately in production code
        }
    }
    
    public static List<User> getAll() {
        List<User> users = new ArrayList<>();
        String sql = "SELECT firstName, lastName, email FROM users";

        try {
            // Load the MySQL JDBC driver
            Class.forName("com.mysql.cj.jdbc.Driver");

            try (Connection connection = DriverManager.getConnection(URL, USERNAME, PASSWORD);
                 PreparedStatement statement = connection.prepareStatement(sql);
                 ResultSet rs = statement.executeQuery()) {

                while (rs.next()) {
                    String firstName = rs.getString("firstName");
                    String lastName = rs.getString("lastName");
                    String email = rs.getString("email");
                    User user = new User(firstName, lastName, email);
                    users.add(user);
                }
            }
        } catch (ClassNotFoundException e) {
            e.printStackTrace(); // Handle the exception appropriately in production code
        } catch (SQLException e) {
            e.printStackTrace(); // Handle the exception appropriately in production code
        }
        return users;
    }
}
