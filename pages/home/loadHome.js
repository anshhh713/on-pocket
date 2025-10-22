import './home.css'
export default async function loadHome() {
    const res= await fetch('pages/home/home.html');
    const innerHTML = await res.text();
    const app = document.getElementById('app');
    app.innerHTML = innerHTML;
}