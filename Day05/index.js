import http from 'http';
import login from "../Day04/login.js"

const server = http.createServer((req, res) => {
    if(req.url == "/favicon.ico") return;
    if(req.url == "/login" && req.method == "POST"){
        let body = " ";
        req.on("data",(dataChunk) =>{
            body += dataChunk,toString();
        })
        req.on("end", async ()=>{
            const userDetails = JSON.parse(body);
            const response = login(userDetails, "../Day04/users.json")
            res.writeHead(200, {"Content-type":"application/json"})
            req.end(JSON.stringify(response.message));
        })
    }else{
        res.end("Path is not matched")
    }
    
    console.log(req.url);
    
    res.end("Server is live now...")
});
server.listen(8800, 
    () => console.log("Server is running at http://localhost:8800"));
