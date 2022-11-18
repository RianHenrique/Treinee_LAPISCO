import users from "../database/database.js";

class UserService {
  getAll(req, res) {
    res.writeHead(200, { "Content-Type": "Application/json" });
    res.write(JSON.stringify(users));
    return res.end();
  }

  createOne(req, res) {
    const name = req.body.name; //ES6
    const id = users[users.length - 1].id + 1;
    const user = {
      id,
      name,
    };
    users.push(user);
    res.writeHead(201, { "Content-Type": "Application/json" });
    res.write(
      JSON.stringify({
        success: user,
      })
    );
    return res.end();
  }

  getOne(req, res) {
    const id = req.url.split("/")[2];
    const user = users.find((item) => item.id == id);
    console.log(user);
    if (user) {
      res.writeHead(200, { "Content-Type": "Application/json" });
      res.write(JSON.stringify(user));
      return res.end();
    } else {
      res.writeHead(404, { "Content-Type": "text/html" });
      res.write("<h1> Not Found </h1>");
      return res.end();
    }
  }

  put(req, res) {
    var id = parseInt(req.url.split("/")[2]);
    if((users.find((item) => item.id == id) == undefined)){
      res.writeHead(404, { "Content-Type": "text/html" });
      res.write("<h1> Not Found </h1>");
      return res.end();
    }

    var id = parseInt(req.url.split("/")[2]);
    const name = req.body.name;
    
    users[id-1].name = name

    res.writeHead(201, { "Content-Type": "Application/json" });
    res.write(
      JSON.stringify({
        success: users,
      })
    );

    return res.end();
  }

  delete(req, res) {
    var id = parseInt(req.url.split("/")[2]);
    if(!(users.find((item) => item.id == id))){
      res.writeHead(404, { "Content-Type": "text/html" });
      console.log("aquiiiii");
      res.write("<h1> Not Found </h1>");
      return res.end();
    }

    var id = parseInt(req.url.split("/")[2]);
    users.splice((id-1), 1)

    res.writeHead(204);

    return res.end();
  }
}

export default new UserService();
