console.log('Before');

// getUser(1)
//     .then( user => getRepositories(user.gitHubUsername))
//     .then( repos => getCommits(repos[0]))
//     .then( commits => console.log("Commits: ", commits))
//     .catch( err => console.log("Error", err.message));

async function displayCommits(){
    try{
        const user = await getUser(1);
        const repos = await getRepositories(user.gitHubUsername);
        const commits = await getCommits(repos[0]);
        console.log("commits", commits);
    } catch (err) {
        console.log("Error: ", err.message);
    }
}

displayCommits();


console.log('After');

function getUser(id) {
    return new Promise( (resolve, reject) => {
        setTimeout(() => {
          console.log('Reading a user from a database...');
          resolve({ id: id, gitHubUsername: 'mosh' });
        }, 2000);
    })
}

function getRepositories(username) {
    return new Promise( (resolve, reject) => {
        setTimeout(() => {
          console.log('Calling GitHub API...');
          resolve(['repo1', 'repo2', 'repo3']);
        }, 2000);
    })
}

function getCommits(repo) {
    return new Promise( (resolve, reject) => {
        setTimeout(() => {
          console.log('Calling GitHub API...');
          resolve(['commit']);
        }, 2000);
    })
}

// console.log("Before...");
// getUser(1, displayUser);
// console.log("After");

// function displayUser(user){
//     console.log("User:", user);
//     getRepositories(user.githubusername, displayRepos);
// };

// function displayRepos(repo){
//     console.log(repo);
//     getCommits(repo, displayCommits);
// };

// function displayCommits(commits){
//     console.log(commits)
// }; 

// function getUser(id, callback){
    
//     setTimeout( () =>  {
//         console.log("Reading a user from Database...");
//         callback({ id: id, githubusername: "deep"})
//     }, 2000);
// }

// function getRepositories(username, callback){
//     setTimeout( () => { if(username) callback(["repo1", "repo2", "repo3"]) }, 2000);
// }

// function getCommits(repo, callback){
//     if(repo) setTimeout( () => callback(["commit1", "commit2"]),2000);
// };