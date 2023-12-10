document.addEventListener("DOMContentLoaded", () => {

    const modalTrigger = document.querySelector("[data-modal]"),
            modal = document.querySelector(".modal"),
            modalCloseBtn = document.querySelector("[data-close]");

//open btn        
    modalTrigger.addEventListener('click', () => {
        modal.classList.add("show");
        modal.classList.remove("hide");
        document.body.style.overflow = "hidden";
    });
    
//close btn
    modalCloseBtn.addEventListener('click', () => {
        modal.classList.add("hide");
        modal.classList.remove("show");
        document.body.style.overflow = "";
    });

//modal
    modal.addEventListener('click', (e) => {
        if(e.target === modal){
            modal.classList.add("hide");
            modal.classList.remove("show");
            document.body.style.overflow = "";
        }
    });

//keydown
    document.addEventListener("keydown", (e) => {
        if (e.code === 'Escape') {
            modal.classList.add("hide");
            modal.classList.remove("show");
            document.body.style.overflow = "";
        }
    });

});