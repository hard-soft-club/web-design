class Navigation extends HTMLElement{
    connectedCallback(){
        requestAnimationFrame(this.#Start);
        requestAnimationFrame(this.#Update);
    }
    #Start=() =>{
        const openHumburgerButton = this.querySelector("button");
        if(!openHumburgerButton){console.error(".humburger-buttonが見つかりません");return;}
        const navLinks = this.querySelector(".nav-links");
        if(!navLinks){console.error(".nav-linksが見つかりません");return;}

        this.style.setProperty('--nav-links-height',`${navLinks.scrollHeight}px`);

        const resizeObserver = new ResizeObserver(()=>{
            this.style.setProperty('--nav-links-height',`${navLinks.scrollHeight}px`);
        })
        resizeObserver.observe(navLinks);
        openHumburgerButton.addEventListener('click',()=>{
            this.classList.toggle("open-humburger");
        })
    }
    #Update=()=>{
    }
}
customElements.define("my-nav",Navigation);
