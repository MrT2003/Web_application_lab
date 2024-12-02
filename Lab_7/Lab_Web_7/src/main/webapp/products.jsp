<%@ page import="java.util.List" %>
<%@ page import="Model.Products" %>

<!DOCTYPE html>
<html>
<head>
    <title>Products List</title>
</head>
<body>
    <h1>Customer Information</h1>
    <p>Name: ${customer.name}</p>
    <p>Visa Number: ${customer.visaNumber}</p>
    <p>Address: ${customer.address}</p>

    <h1>Products List</h1>
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
</body>
</html>
