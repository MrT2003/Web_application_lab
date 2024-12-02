/*
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/Classes/Class.java to edit this template
 */
package Java;

import Model.Products;
import java.sql.Connection;
import java.sql.DriverManager;
import java.sql.PreparedStatement;
import java.sql.ResultSet;
import java.sql.SQLException;
import java.sql.Statement;
import java.util.ArrayList;
import java.util.List;

/**
 *
 * @author Admin
 */
public class ProductDB {

    private static final String URL = "jdbc:mysql://localhost:3306/lab7_web"; // Change as needed
    private static final String USERNAME = "root"; // Change to your database username
    private static final String PASSWORD = "Quenroi6212@"; // Change to your database password

    public static List<Products> getProducts() {
        List<Products> products = new ArrayList<>();
        String sql = "SELECT * FROM Products";
        try (Connection conn = DBUtils.getConnection(); Statement stmt = conn.createStatement(); ResultSet rs = stmt.executeQuery(sql)) {
            while (rs.next()) {
                Products product = new Products(
                        rs.getInt("productID"),
                        rs.getString("manufacturer"),
                        rs.getString("country"),
                        rs.getDouble("price"));
                products.add(product);
            }
        } catch (SQLException e) {
            e.printStackTrace();
        }
        return products;
    }

}
