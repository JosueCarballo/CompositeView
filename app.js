

document.addEventListener("DOMContentLoaded", () => {
    document.getElementById("navbar").innerHTML = new Navbar().render();
    document.getElementById("sidebar").innerHTML = new Sidebar().render();
    document.getElementById("post-composer").innerHTML = new PostComposer().render();
});

function addPost() {
    const postInput = document.getElementById("postInput");
    if (postInput.value.trim() === "") return;

    const newPost = new Post(postInput.value);
    document.getElementById("feed").innerHTML = newPost.render() + document.getElementById("feed").innerHTML;

    postInput.value = ""; 
}


function navigate(section) {
    const content = document.querySelector(".content");

    if (section === "inicio") {
        content.innerHTML = `

            <div id="post-composer"></div>
        `;

        document.getElementById("post-composer").innerHTML = new PostComposer().render();
        return;
    }

    if (section === "amigos") {
        content.innerHTML = `
            <h2>👥 Amigos </h2>
            <p>Aquí puedes ver a tus amigos!!!!</p>
        `;
        return;
    }

    if (section === "videos") {
        content.innerHTML = `
            <h2>📺 Videos</h2>
            <p>Aquí puedes ver los videos recientes</p>
        `;
        return;
    }

}
