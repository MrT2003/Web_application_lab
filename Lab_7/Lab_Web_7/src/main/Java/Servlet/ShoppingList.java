package Servlet;

import Java.CustomerDB;
import Java.ProductDB;
import Model.Customer;
import Model.Products;
import jakarta.servlet.ServletException;
import jakarta.servlet.annotation.WebServlet;
import jakarta.servlet.http.*;
import java.io.*;
import java.util.List;

@WebServlet(name = "ShoppingList", urlPatterns = {"/shoppingList"})
public class ShoppingList extends HttpServlet {

    @Override
    protected void doPost(HttpServletRequest request, HttpServletResponse response)
            throws ServletException, IOException {
//        // Lấy dữ liệu từ form
//        String name = request.getParameter("name");
//        String visaNumber = request.getParameter("visaNumber");
//        String address = request.getParameter("address");
//
//        // Lưu khách hàng vào database
//        Customer customer = new Customer(name, visaNumber, address);
//        CustomerDB.insert(customer);
//
//        // Lấy danh sách sản phẩm từ database
//        List<Products> productsList = ProductDB.getProducts(); // Viết hàm này trong CustomerDB.
//
//        // Gửi dữ liệu đến trang products
//        request.setAttribute("customer", customer); // Thông tin khách hàng
//        request.setAttribute("productsList", productsList); // Danh sách sản phẩm
//        request.getRequestDispatcher("/products.jsp").forward(request, response);
        String url = "/account.jsp";

        // get current action
        String action = request.getParameter("action");
        if (action == null) {
            action = "join";  // default action
        }

        // perform action and set URL to appropriate page
        if (action.equals("join")) {
            url = "/account.jsp";    // the "join" page
        } else if (action.equals("add")) {
            // get parameters from the request
            String name = request.getParameter("name");
            String visaNumber = request.getParameter("visaNumber");
            String address = request.getParameter("address");

            // store data in User object and save User object in database
            Customer customer = new Customer(name, visaNumber, address);
            CustomerDB.insert(customer);
            List<Products> productsList = ProductDB.getProducts();

            // set User object in request object and set URL
            request.setAttribute("customer", customer);
            request.setAttribute("productsList", productsList); // Danh sách sản phẩm
            url = "/products.jsp";   // the "thanks" page
        }

        // forward request and response objects to specified URL
        getServletContext()
                .getRequestDispatcher(url)
                .forward(request, response);

    }

    @Override
    protected void doGet(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {

    }

}
