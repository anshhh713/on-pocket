import './global.css';
import loadHome from '../pages/home/loadHome';
import loadNavbar from '../navbar/loadNavbar';
document.addEventListener('DOMContentLoaded', async ()=> {
  await loadNavbar();
  await loadHome();
});