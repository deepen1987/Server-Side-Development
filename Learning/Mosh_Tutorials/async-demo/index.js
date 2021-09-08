console.log("Before...");
getUser(1, (user) =>{
    console.log("User:", user);
    getRepositories(user.githubusername, (repos) => {
        console.log("repo: ", repos);
    })
});
console.log("After");

function getUser(id, callback){
    setTimeout( () => {
        console.log("Reading a user from Database...");
        callback({ id: id, githubusername: "deep"});
    }, 2000);
}

function getRepositories(username, callback){
    setTimeout( () => {
        if(username) callback(["repo1", "repo2", "repo3"]);
    }, 2000);
}
