window.addEventListener("scroll", () => {
	document.querySelector("nav").classList.toggle("window_scroll", window.scrollY > 10);
});


const faqs = document.querySelectorAll('.faq');

faqs.forEach(faq =>{
	faq.addEventListener('click', () =>{
		faq.classList.toggle('open')

		const icon = faq.querySelector('.faq_icon i');
		if(icon.className==='uil uil-angle-right'){
			icon.className = "uil uil-angle-down"
		}else{
			icon.className = "uil uil-angle-right"
		}
	})
})


// hide/open navbar

const menu = document.getElementsByClassName('nav_menu')[0];
const close = document.getElementById('close_menu_btn');
const open = document.getElementById('open_menu_btn');


open.addEventListener('click', () => {
	menu.style.display = 'block';
	close.style.display = 'block';
	open.style.display = 'none';
})

close.addEventListener('click', () => {
	menu.style.display = 'none';
	close.style.display = 'none';
	open.style.display = 'block';
})

