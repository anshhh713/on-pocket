import './signUp.css'
export default async function loadSignUp() {
    const res= await fetch('pages/signUp/signUp.html');
    const innerHTML = await res.text();
    const app = document.getElementById('app');
    app.innerHTML = innerHTML;
}