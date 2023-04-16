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
        © {new Date().getFullYear()} Contact Me!
      </div>
    </footer>
  );
}

export default Footer;
