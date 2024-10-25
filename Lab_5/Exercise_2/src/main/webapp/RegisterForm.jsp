<%-- 
    Document   : RegisterForm
    Created on : Oct 20, 2024, 8:49:02 AM
    Author     : Admin
--%>

<%@page contentType="text/html" pageEncoding="UTF-8"%>
<!DOCTYPE html>
<html>
    <head>
        <meta charset="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>Register Form</title>

        <!-- css -->
        <link rel="stylesheet" href="./style.css">

        <!-- bootstrap 5 -->
        <link
            href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/css/bootstrap.min.css"
            rel="stylesheet"
            />
    </head>
    <body>
        <div class="container">
            <h1>School of Computer Science & Engineering</h1>
            <form action="RegisterServlet" method="post">
                <h4>Register Form</h4>
                <div class="mb-3 row">
                    <label for="fullName" class="col-sm-2 col-form-label"
                           >Full Name</label
                    >
                    <div class="col-sm-10">
                        <input
                            type="text"
                            class="form-control border-dark"
                            name="fullName"

                            />
                    </div>
                </div>

                <div class="mb-3 row">
                    <label for="ID" class="col-sm-2 col-form-label">ID</label>
                    <div class="col-sm-10">
                        <input
                            type="text"
                            class="form-control border-dark"
                            name="ID"

                            />
                    </div>
                </div>

                <div class="mb-3 row">
                    <label for="email" class="col-sm-2 col-form-label">Email</label>
                    <div class="col-sm-10">
                        <input
                            type="email"
                            class="form-control border-dark"
                            name="email"

                            />
                    </div>
                </div>

                <div class="mb-3 row">
                    <label for="gender" class="col-sm-2 col-form-label">Gender</label>
                    <div class="col-sm-10">
                        <div class="form-check form-check-inline">
                            <input class="form-check-input" type="radio"
                                   name="inlineRadioOptions" id="inlineRadio1" value="Male"
                                   />
                            <label class="form-check-label" for="inlineRadio1">Male</label>
                        </div>
                        <div class="form-check form-check-inline">
                            <input class="form-check-input" type="radio"
                                   name="inlineRadioOptions" id="inlineRadio2" value="Female"
                                   />
                            <label class="form-check-label" for="inlineRadio2">Female</label>
                        </div>
                    </div>
                </div>
                <div class="mb-3 row">
                    <label for="email" class="col-sm-2 col-form-label">Subjects</label>
                    <div class="col-sm-10">
                        <div class="form-check">
                            <input class="form-check-input" type="checkbox"
                                   name="inlineCheckboxOptions" value="Principle of EE1"
                                   />
                            <label class="form-check-label" for="inlineCheckbox1"
                                   >Principle of EE1</label
                            >
                        </div>
                        <div class="form-check">
                            <input class="form-check-input" type="checkbox"
                                   name="inlineCheckboxOptions" value="Computer Network"
                                   ${param.inlineCheckboxOptions == 'Computer Network' ? 'checked' :
                                     ''} />
                            <label class="form-check-label" for="inlineCheckbox2"
                                   >Computer Network</label
                            >
                        </div>


                        <div class="form-check">
                            <input class="form-check-input" type="checkbox"
                                   name="inlineCheckboxOptions" value="Web Application Development"
                                   />
                            <label class="form-check-label" for="inlineCheckbox1"
                                   >Web Application Development</label
                            >
                        </div>
                        <div class="form-check">
                            <input class="form-check-input" type="checkbox"
                                   name="inlineCheckboxOptions" value="Object Orientated Programming"
                                   />
                            <label class="form-check-label" for="inlineCheckbox2"
                                   >Object Orientated Programming</label
                            >
                        </div>
                        <div class="form-check">
                            <input class="form-check-input" type="checkbox"
                                   name="inlineCheckboxOptions" value="Computer Graphics"
                                   />
                            <label class="form-check-label" for="inlineCheckbox2"
                                   >Computer Graphics</label
                            >
                        </div>
                    </div>
                </div>

                <div class="mb-3 row">
                    <label for="comment" class="col-sm-2 col-form-label">Comments</label>
                    <div class="col-sm-10">
                        <textarea
                            class="form-control"
                            placeholder="Leave a comment here"
                            id="floatingTextarea2"
                            style="height: 100px"
                            name="comment"
                            >
                        </textarea
                        >
                    </div>
                </div>

                <button type="submit" class="btn btn-primary insert_class">
                    Submit
                </button>
                <button type="reset" class="btn btn-outline-secondary cancel_class">
                    Reset
                </button>
            </form>
        </div>
        <!-- bootstrap 5 -->
        <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/js/bootstrap.bundle.min.js"></script>
    </body>
</html>

