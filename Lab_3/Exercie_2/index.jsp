<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Exercise 1 - Minh Trieu</title>
    <!-- css -->
    <link rel="stylesheet" href="/Lab_3/assets/css/style.css" />
    <!-- Bootstrap 5-->
    <link
      href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/css/bootstrap.min.css"
      rel="stylesheet"
    />
    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/js/bootstrap.bundle.min.js"></script>
  </head>
  <body>
    <header></header>
    <main class="main">
      <img class="mb-3"
        width="200px"
        height="200px"
        src="/Lab_3/assets/images/IU_logo.png"
        alt="iu_logo"
      />
      <form action="./result.jsp" method="post">
        <h1 class="text-primary">Survey</h1>
        <p>
          If you have a moment, we'd appreciate it if you would fill out this
          survey
        </p>
        <h2 class="text-primary ">Your information:</h2>
        
        <table class="table table-borderless">
          <tr>
            <th>First Name</th>
            <td><input type="text" /></td>
          </tr>
          <tr>
            <th>Last Name</th>
            <td><input type="text" /></td>
          </tr>
          <tr>
            <th>Email Name</th>
            <td><input type="text" /></td>
          </tr>
          <tr>
            <th>Date of Birth</th>
            <td><input type="text" /></td>
          </tr>
        </table>

        <h2 class="text-primary">How did you hear about us?</h2>
        <label class="mb-3" for=""
          ><input class="m-1" type="radio" name="platforms" /> Search engine</label
        >
        <label for=""
          ><input class="m-1" type="radio" name="platforms" /> Word of mouth</label
        >
        <label for=""
          ><input class="m-1" type="radio" name="platforms" /> Social Media</label
        >
        <label for=""><input class="m-1" type="radio" name="platforms" /> Other</label>

        <div class="mb-3">
          <h3 class="text-primary">
            Would you like to receive announcements about new CDs and special
            offers?
          </h3>
          <label class="d-block" for=""><input type="checkbox" />Yes, I'd like that</label>
          <label class="d-block" for=""><input type="checkbox" />Yes, please send me email announcements</label>
        </div>

        <div class="d-flex">
          <h4>Please contact me by:</h4>
          <select name="" id="">
            <option value="">Email or postal mail</option>
            <option value="">Email only</option>
            <option value="">Postal mail only</option>
          </select>
        </div>

        <input class="px-2 mb-2" type="submit" value="submit" />
      </form>
    </main>
    <footer></footer>
  </body>
</html>
