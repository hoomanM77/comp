let temp=document.createElement('template')
temp.innerHTML=`
    <link rel="stylesheet" href="./javascript/components/Course/Course.css">
    <div class="course_container">
        <div class="card">
            <div>
                <img src="" alt="" width="130">
            </div>
            <div class="details">
                <h1></h1>
                <div class="course_detail">
                    <div >
                        students:  <slot name="students"></slot>
                    </div>
                    <div >
                        Teacher:  <slot name="teacher"></slot>
                    </div>
                </div>
                
                <div>
                    <button class="register">Register</button>
                    <button class="detail_btn">Show details</button>
                </div>
            </div>
        </div>
    </div>
    
`



class Course extends HTMLElement{
    constructor() {
        super();
        this.attachShadow({mode:"open"})
        this.shadowRoot.appendChild(temp.content.cloneNode(true))
    }
    connectedCallback(){
        let img=this.shadowRoot.querySelector('img')
        let title=this.shadowRoot.querySelector('h1')
        let show_btn=this.shadowRoot.querySelector('.detail_btn')
        let register_btn=this.shadowRoot.querySelector('.register')
        img.src=this.getAttribute('img-src')
        title.innerHTML=this.getAttribute('title')
        show_btn.addEventListener('click',this.showDetailAction)
        register_btn.addEventListener('click',this.registerAction)
    }
    showDetailAction=()=>{
        this.shadowRoot.querySelector('.course_detail').classList.toggle('show')
        this.shadowRoot.querySelector('.detail_btn').innerHTML= this.shadowRoot.querySelector('.course_detail').classList.contains('show') ? 'Hide details' : 'Show details'
    }
    registerAction=()=>{
        alert(`you registered in ${this.shadowRoot.querySelector('h1').innerHTML}`)
    }
    static get observedAttributes(){
        return ['img-src','title']
    }
}

export default Course