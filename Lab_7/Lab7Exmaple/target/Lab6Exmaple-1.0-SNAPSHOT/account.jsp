<!DOCTYPE html>
<html>
<head>
    <meta charset="utf-8">
    <title>Register User</title>
    <link rel="stylesheet" href="styles/main.css" type="text/css"/>
</head>
<body>
    <h1>Join our email list</h1>
    <p>To join our email list, enter your name and
       email address below.</p>
    <form action="shoppingList" method="post">
        <input type="hidden" name="action" value="add">        
        <label class="pad_top">Name: </label>
        <input type="text" name="name" required><br>
        <label class="pad_top">Visa Card number</label>
        <input type="text" name="visaNumber" required><br>
        <label class="pad_top">Address: </label>
        <input type="text" name="address" required><br>
        <label>&nbsp;</label>
        <input type="submit" value="Submit" class="margin_left">
    </form>
</body>
</html>