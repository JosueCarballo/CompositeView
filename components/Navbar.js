class Navbar {
    render() {
        return `
            <div class="navbar">
                <span> RED SOCIAL JC</span>
                <input type="text" placeholder="Buscar...">
                <button onclick="navigate('perfil')">👤 Perfil</button>
            </div>
        `;
    }
}
