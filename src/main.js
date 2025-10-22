import './global.css';
import loadHome from '../pages/home/loadHome';
import loaSignUp from '../pages/signup/loadSignUp';
import loadNavbar from '../navbar/loadNavbar';
document.addEventListener('DOMContentLoaded', async ()=> {
  await loadNavbar();
  await loaSignUp();
  // await loadHome();
});