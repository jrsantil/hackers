import './Navbar.css';

function Navbar() {
    const url_names_middle = ['projects', 'gallery', 'courses'];
    const url_links_middle = ['/projects', '/gallery', '/courses'];


    return (
        <>
        <nav className="navbar">
            <div className="navbar-left">
                <a href="/">Juliana Santillan / Portfolio</a>
            </div>
            <div className="navbar-middle">
                {url_links_middle.map((link, index) => (
                    <a href={link} key={index}>{url_names_middle[index]}</a>
                ))}
            </div>
            <div className="navbar-right">
                <button>Contact Me</button>
            </div>
        </nav>
        </>
    )
}

export default Navbar;