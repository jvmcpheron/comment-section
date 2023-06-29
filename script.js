fetch("data.json")
.then(function(response){
    return response.json();
})
.then(function(datas){
    console.log("hi");
    let placeholder = document.querySelector('#data-ouput');
    let out = "";
    for(let comment of datas.comments){
        out += `
            <div class= comment-card>
                <div > 
                    <div >${comment.user.username}</div>
                </div>
                <div  >
                    ${comment.content}
                </div>
                <div class=row> ${comment.createdAt}</div>
            </div>
        `
        for(let reply of comment.replies){
            out += `
            <div class= reply-card>
                <div > 
                    <div >${reply.user.username}</div>
                </div>
                <div >
                    ${reply.content}
                </div>
                <div > ${reply.createdAt}</div>
            </div>  
            `
        }
    }
    

    //populating info
    frontend = document.getElementById("data-output");
    frontend.innerHTML = out;
})