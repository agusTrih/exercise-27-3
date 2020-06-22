let endpoint = `https://api.github.com/users/agusTrih`;
let options = {
    method: "GET",
    headers: {
        "Content-type": "application/json",
    },
};

// asyn
async function getUsersData() {
    try {
        let response = await fetch(endpoint, options);
        let results = await response.json();
        console.log(results);
        // name
        const name = document.querySelector(".name");
        const textName = document.createTextNode(results.name);
        name.appendChild(textName);
        // image
        const image = document.querySelector(".img");
        image.setAttribute("src", results.avatar_url);
        // id
        const id = document.querySelector("#id");
        const textId = document.createTextNode(results.id);
        id.appendChild(textId);
        // bio
        const bio = document.querySelector(".bio");
        const textBio = document.createTextNode(results.bio);
        bio.appendChild(textBio);
    } catch (error) {
        console.log(error);
    }
}

getUsersData();
