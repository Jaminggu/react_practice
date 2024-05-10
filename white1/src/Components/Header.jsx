export default function Header() {
    return(
        <div className="header-background">
            <img src="http://localhost:3000/img/Logotype.png"/>
            <div className="header-contents">
                <span>Home</span>
                <span>Blog</span>
                <span>Products</span>
                <span>Contacts</span>
            </div>
            <div className="header-search">
                <img src="http://localhost:3000/img/Shape.png"/>
                
                <button>Button</button>
            </div>
            <img id="menu" src="http://localhost:3000/img/Menu.png"/>
        </div>
    );
}