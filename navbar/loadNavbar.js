import './navbar.css'
export default async function loadNavbar() {
    try {
        const res = await fetch('navbar/navbar.html');
        if (!res.ok) throw new Error('Failed to load navbar');
        const navbarHTML = await res.text();

        const template = document.createElement('template');
        template.innerHTML = navbarHTML;

        // Append all children
        document.body.prepend(...template.content.children);
    } catch (err) {
        console.error(err);
    }
}
