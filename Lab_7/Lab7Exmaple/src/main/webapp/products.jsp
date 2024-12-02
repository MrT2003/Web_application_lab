<%@page contentType="text/html" pageEncoding="UTF-8"%>
<%@ page import="java.util.List" %>
<%@ page import="Model.Products" %>
<!DOCTYPE html>
<html>
    <head>
        <meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
        <title>Product Page</title>
    </head>
    <body>
        <h1>Hi, ${customer.getName()}</h1>
        <h4>Please select out products and its quantity</h4>
        <hr>
        <form>
            Products
            <select name="select_products">
                <%
                    List<Products> productsList = (List<Products>) request.getAttribute("productsList");
                    if (productsList != null && !productsList.isEmpty()) {
                        for (Products product : productsList) {
                %>
                <option value="<%= product.getProductID() %>">
                    <%= product.getProductID() + " | " + product.getManufacturer() + " | " + product.getCountry() + " | " + product.getPrice() %>
                </option>
                <%
                        }
                    } else {
                %>
                <option>No products available</option>
                <%
                    }
                %>
            </select>
            Quantity
            <input type="number">
            <input type="submit" value="Add to cart">
        </form>
    </body>
</html>
