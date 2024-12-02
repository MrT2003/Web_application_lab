package murach.email;

import Model.Products;
import jakarta.servlet.ServletException;
import jakarta.servlet.annotation.WebServlet;
import jakarta.servlet.http.*;
import java.io.*;
import java.util.List;
import murach.business.Customer;
import murach.data.CustomerDB;

@WebServlet(name = "ShoppingList", urlPatterns = {"/shoppingList"})
public class ShoppingList extends HttpServlet {

    @Override
    protected void doPost(HttpServletRequest request,
            HttpServletResponse response)
            throws ServletException, IOException {

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
            Customer customer = new Customer(1, name, visaNumber, address);
            CustomerDB.insert(customer);

            // set User object in request object and set URL
            request.setAttribute("customer", customer);
            url = "/products.jsp";   // the "thanks" page
        }
        // forward request and response objects to specified URL
        getServletContext()
                .getRequestDispatcher(url)
                .forward(request, response);
    }

    @Override
protected void doGet(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
    String action = request.getParameter("action");

    if ("show".equals(action)) {
        List<Products> products = CustomerDB.showProducts();
        request.setAttribute("productsList", products); // Đảm bảo đặt tên đúng
        getServletContext().getRequestDispatcher("/products.jsp").forward(request, response);
    } else {
        // Xử lý action mặc định nếu không phải "show"
        response.sendRedirect("error.jsp"); // Hoặc trang lỗi tùy chọn
    }
}

}
