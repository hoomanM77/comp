let temp=document.createElement('template')
temp.innerHTML=`
    <link rel="stylesheet" href="./javascript/components/Header/Header.css">
    <div class="container">
        <h1></h1>
    </div>
    
`




class Header extends HTMLElement{
    constructor() {
        super();
        this.attachShadow({mode:"open"})
        this.shadowRoot.appendChild(temp.content.cloneNode(true))
    }
    connectedCallback(){
        let title=this.shadowRoot.querySelector('h1')
        title.innerHTML=this.getAttribute('title')
    }
    static get observedAttributes(){
        return ['title']
    }
}

export default Header