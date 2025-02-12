class Sidebar {
    render() {
        return `
            <div class="sidebar">
                <button onclick="navigate('inicio')">🏠 Inicio</button>
                <button onclick="navigate('amigos')">👥 Amigos</button>
                <button onclick="navigate('videos')">📺 Videos</button>
            </div>
        `;
    }
}
