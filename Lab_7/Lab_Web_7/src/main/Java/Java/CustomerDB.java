package Java;

import Model.Customer;
import Model.Products;
import java.sql.Connection;
import java.sql.DriverManager;
import java.sql.PreparedStatement;
import java.sql.ResultSet;
import java.sql.SQLException;
import java.sql.Statement;
import java.util.ArrayList;
import java.util.List;

public class CustomerDB {

    private static final String URL = "jdbc:mysql://localhost:3306/lab7_web"; // Change as needed
    private static final String USERNAME = "root"; // Change to your database username
    private static final String PASSWORD = "Quenroi6212@"; // Change to your database password

    public static void insert(Customer customer) {
        String sql = "INSERT INTO Customers (name, visaNumber, address) VALUES (?, ?, ?)";
        try (Connection conn = DBUtils.getConnection(); PreparedStatement pstmt = conn.prepareStatement(sql)) {
            pstmt.setString(1, customer.getName());
            pstmt.setString(2, customer.getVisaNumber());
            pstmt.setString(3, customer.getAddress());
            pstmt.executeUpdate();
        } catch (SQLException e) {
            e.printStackTrace();
        }
    }


//    public static void main(String[] args) {
//        Customer customer = new Customer("Trieu123", "20032003", "International University");
//        insert(customer); // Optional: Fetch and print products for testing List<Products> products = getProducts(); products.forEach(product -> System.out.println(product.getName() + " - " + product.getPrice())); }
//
//        List<Products> products = getProducts();
//        products.forEach(product -> System.out.println(product.getProductID() + " - " + product.getPrice()));
//    }
}

