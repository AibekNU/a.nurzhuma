document.addEventListener("DOMContentLoaded", () => {

    const modalTrigger = document.querySelector("[data-modal]"),
            modal = document.querySelector(".modal"),
            modalCloseBtn = document.querySelector("[data-close]");



//open btn        
function openModal(){
        modal.classList.add("show");
        modal.classList.remove("hide");
        document.body.style.overflow = "hidden";
        clearInterval(modalTimerId);
    }

modalTrigger.addEventListener('click', openModal);


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

const modalTimerId = setTimeout(openModal, 8000);


//-------------------Class use Portfolio---------------------------------------------

class PortfolioCard{
    constructor(src, title, href, parentSelector){
        this.src = src;
        this.title = title;
        this.href = href;
        this.parent = document.querySelector(parentSelector);
    }

    render(){
        const elem = document.createElement("div");
        elem.innerHTML = `
        <div class="port__card">
            <div class="img-box">
                <img src=${this.src} alt="">
            </div>
            <div class="text-box">
                <p class="port-text">${this.title}</p>
                <button class="demo__btn"><a href="${this.href}">Demo</a></button>
            </div>
        </div>
        `;
        this.parent.append(elem);
    }
}

new PortfolioCard(
  "images/profile-1.png",
  "Tic-Tac-Toe Game",
  "https://aibeknu.github.io/Tic-Tac-Toe/",
  ".portfolio .menu__field"
).render();

new PortfolioCard(
  "images/profile-2.png",
  "Calculator",
  "https://aibeknu.github.io/Calculator/",
  ".portfolio .menu__field"
).render();

new PortfolioCard(
  "images/profile-3.png",
  "To-Do-List",
  "https://aibeknu.github.io/To-Do-List/",
  ".portfolio .menu__field"
).render();
});
