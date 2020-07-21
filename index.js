const fs = require("fs")

const express =require("express")
const app = express();
app.listen(3000,function(){
    console.log("listening")
})

app.get("/",function(req,res)
{
    var result = "<ul>";
    fs.readdir("C:\\Users\\Vive\\Downloads", function (err,files){
         if(err) throw err;
        //res.json(files) --for json format display
        
        files.forEach(function(element)
        {

            var stat= fs.statSync("C:\\Users\\Vive\\Downloads" + '\\' + element);
                if(stat.isDirectory())    
                        result += `<li>	&#128193  ${element}</li>`;
                else
                 result += `<li>&#128462; ${element} </li>`;
           
        })

        result+="</ul>";
        res.send(result);
    
})
})



 
