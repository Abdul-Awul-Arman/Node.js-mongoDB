const http = require("http");
const path = require("path");
const fs = require("fs");

const filePath = path.join(__dirname, "./DB/todo.json")



const server = http.createServer((req, res) => {

    const url=new URL(req.url,`http://${req.headers.host}`);
    let pathname=url.pathname;
    console.log("URL",url);

    const data = fs.readFileSync(filePath, { encoding: "utf-8" });

    if (pathname=== "/todos" && req.method === "GET") {
        res.writeHead(200, {
            "content-type": "application/json"
        });

        res.end(JSON.stringify(data));
    } else if (pathname === "/todos/create-todo" && req.method === "POST") {
        let data = "";

        req.on("data", (chunk) => {

            data = data + chunk;

        });

        req.on("end", () => {


            const { title, body } = JSON.parse(data);


            const createAt = new Date().toLocaleString()


            let allTodos = JSON.parse(fs.readFileSync(filePath, { encoding: "utf-8" }));

            let currentTodo = {
                title: title,
                body: body,
                createdAt: createAt
            };

            allTodos.push(currentTodo);

            allTodos = JSON.stringify(allTodos, null, 2);


            fs.writeFileSync(filePath, allTodos, { encoding: "utf-8" })
            res.end(JSON.stringify(currentTodo));

        })

    }
    else if (pathname === "/update-todo" && req.method === "PATCH") {
        let data = "";

        req.on("data", (chunk) => {

            data = data + chunk;

        });

        req.on("end", () => {


            const { title,body } = JSON.parse(data);


            let allTodos = JSON.parse(fs.readFileSync(filePath, { encoding: "utf-8" }));

            const willUpdateTodoIndex=allTodos.findIndex(todo=>todo.title===title);

            allTodos[willUpdateTodoIndex].body=body;

            console.log(allTodos[willUpdateTodoIndex])


            fs.writeFileSync(filePath, JSON.stringify(allTodos, null, 2), { encoding: "utf-8" })
            res.end(JSON.stringify(allTodos[willUpdateTodoIndex]));

        })

    }
    else if(pathname==="/todo" && req.method==="GET"){

     
        let searched=url.searchParams.get("title");
        
        let allTodos=JSON.parse(fs.readFileSync(filePath,{encoding:"utf-8"}));

        let result=allTodos.find(todo=>todo.title===searched);

        res.end(JSON.stringify(result),null,2);

    } 
    else {
        res.end("Route not found");
    }


});

server.listen(5000, "127.0.0.1", () => {
    console.log("Server is Listening......");
})

