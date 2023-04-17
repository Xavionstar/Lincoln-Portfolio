
//the footer is just react bootstrap to render a static footer with my contact information
function Footer() {
  return (
    <footer className="bg-primary-subtle border border-dark border-3 text-center py-3">
      <div>
        
        <div>
          <a href="www.github.com/Xavionstar"> My Github</a>
        </div>
        <div>
          <a href="mailto:Lincpough@gmail.com">My Email</a>
        </div>
        <div>
          <a href="https://www.linkedin.com/in/lincoln-pough-13bb1a272/">My Linkedin Profile</a>
        </div>
        © {new Date().getFullYear()} Contact Me!
      </div>
    </footer>
  );
}

export default Footer;
