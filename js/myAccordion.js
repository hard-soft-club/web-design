class MyAccordion extends HTMLElement{
    connectedCallback(){
        requestAnimationFrame(this.#Start);
        requestAnimationFrame(this.#Update);
    }
    #Start=() =>{
        const CalBodyHeight = ()=>{
            this.style.setProperty('--body-height',`${dishContainer.scrollHeight}px`);
        }

        const openButton = this.querySelector(".head");
        if(!openButton){console.error(".headが見つかりません");return;}
        const dishContainer = this.querySelector(".dish-container");
        if(!dishContainer){console.error(".dish-containerが見つかりません");return;}
        
        openButton.addEventListener('click',()=>{
            this.classList.toggle("open");
            CalBodyHeight();
        })
    }
    #Update=()=>{
    }
}
customElements.define("my-accordion",MyAccordion);
