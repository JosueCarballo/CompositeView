class PostComposer {
    render() {
        return `
            <div class="post-composer">
                <textarea id="postInput" placeholder="¿Qué estás pensando?"></textarea>
                <button onclick="addPost()">Publicar</button>
            </div>
        `;
    }
}
