class Navbar extends HTMLElement{
    constructor(){
        super();
    }

    connectedCallback() {
        this.innerHTML=
        `<header>
            <nav id="navbar">
                <ul>
                    <li class="navbarElement"><a href="index.html">Home</a></li>
                    <li class="navbarElement"><a href="skills.html">Skills</a></li>
                    <li class="navbarElement"><a href="portfolio.html">Portfolio</a></li>
                    <li class="navbarElement"><a href="aboutme.html">About Me</a></li>
                </ul>
            </nav>
            </header>
            
        ;`
    }
}

customElements.define('navigation-bar', Navbar);

