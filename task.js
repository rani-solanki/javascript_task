var fs = require('fs');
var data=fs.readFileSync('data.json', 'utf8');
var words = JSON.parse(data);

function urldata(callback){
    let a=0
    var readlineSync = require('readline-sync');
    var userName = readlineSync.question('May I have your name? ');

    while(a < words.length){

        var userid = words[userName-1]["id"]
        var title = words[userName-1]["title"]
        var result=words[userName-1]["completed"]
        callback(title,result)
        break
        a++
    }
}
urldata((userid,result) => {
    console.log("tirle = > ",userid)
    console.log("completed_result=>",result)
})
console.log("****************************welcome*******************************")


 

 