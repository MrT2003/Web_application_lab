package murach.data;

import Model.Products;
import java.sql.Connection;
import java.sql.DriverManager;
import java.sql.PreparedStatement;
import java.sql.ResultSet;
import java.sql.SQLException;
import java.util.ArrayList;
import java.util.List;
import murach.business.Customer;

public class CustomerDB {

    private static final String URL = "jdbc:mysql://localhost:3306/lab7_web"; // Change as needed
    private static final String USERNAME = "root"; // Change to your database username
    private static final String PASSWORD = "Quenroi6212@"; // Change to your database password

    public static boolean insert(Customer customer) {
        int customerID = 1;
        String sql = "INSERT INTO customer (name, visaNumber, address) VALUES (?, ?, ?)";
        try {
            Class.forName("com.mysql.cj.jdbc.Driver");
            try (Connection connection = DriverManager.getConnection(URL, USERNAME, PASSWORD); PreparedStatement statement = connection.prepareStatement(sql)) {
                statement.setString(1, customer.getName());
                statement.setString(2, customer.getVisaNumber());
                statement.setString(3, customer.getAddress());
                int rowsInserted = statement.executeUpdate();
                return rowsInserted > 0; // Trả về true nếu thêm thành công
            }
        } catch (ClassNotFoundException | SQLException e) {
            e.printStackTrace();
            return false; // Trả về false nếu có lỗi
        }
    }

//    public static List<User> getAll() {
//        List<User> users = new ArrayList<>();
//        String sql = "SELECT firstName, lastName, email FROM users";
//
//        try {
//            // Load the MySQL JDBC driver
//            Class.forName("com.mysql.cj.jdbc.Driver");
//
//            try (Connection connection = DriverManager.getConnection(URL, USERNAME, PASSWORD);
//                 PreparedStatement statement = connection.prepareStatement(sql);
//                 ResultSet rs = statement.executeQuery()) {
//
//                while (rs.next()) {
//                    String firstName = rs.getString("firstName");
//                    String lastName = rs.getString("lastName");
//                    String email = rs.getString("email");
//                    User user = new User(firstName, lastName, email);
//                    users.add(user);
//                }
//            }
//        } catch (ClassNotFoundException e) {
//            e.printStackTrace(); // Handle the exception appropriately in production code
//        } catch (SQLException e) {
//            e.printStackTrace(); // Handle the exception appropriately in production code
//        }
//        return users;
//    }
}
