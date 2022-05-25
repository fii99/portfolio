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