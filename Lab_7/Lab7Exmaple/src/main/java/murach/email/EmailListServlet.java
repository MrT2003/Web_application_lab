package murach.email;

import jakarta.servlet.ServletException;
import jakarta.servlet.annotation.WebServlet;
import jakarta.servlet.http.*;
import java.io.*;
import java.util.List;
import murach.business.Customer;

import murach.business.User;
import murach.data.CustomerDB;
import murach.data.UserDB;

@WebServlet(name = "EmailList", urlPatterns = {"/emailList]"})
public class EmailListServlet extends HttpServlet {

    @Override
    protected void doPost(HttpServletRequest request,
            HttpServletResponse response)
            throws ServletException, IOException {

        String url = "/index.html";

        // get current action
        String action = request.getParameter("action");
        if (action == null) {
            action = "join";  // default action
        }

        // perform action and set URL to appropriate page
        if (action.equals("join")) {
            url = "/index.html";    // the "join" page
        } else if (action.equals("add")) {
            // get parameters from the request
            String name = request.getParameter("name");
            String visaNumber = request.getParameter("visaNumber");
            String address = request.getParameter("address");

            // store data in User object and save User object in database
           Customer customer = new Customer(name, visaNumber, address);
            CustomerDB.insert(customer);

            // set User object in request object and set URL
            request.setAttribute("user", customer);
            url = "/thanks.jsp";   // the "thanks" page
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
            List<User> users = UserDB.getAll(); // Assuming you have this method implemented in UserDB
            request.setAttribute("userList", users);
            // Forward to user-list.jsp
            getServletContext().getRequestDispatcher("/user-list.jsp").forward(request, response);
        }
    }
}
