const Footer = () => {
  return (
    <footer className="py-12 bg-muted border-t border-border">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center space-y-4">
          <div className="text-sm text-muted-foreground">
            © 2024 Furst Things Furst Productions, Inc.
          </div>
          <p className="text-sm text-muted-foreground">
            By continuing to use our site, you agree to our{" "}
            <a href="#" className="text-primary hover:underline">
              Terms of Use
            </a>{" "}
            and{" "}
            <a href="#" className="text-primary hover:underline">
              Privacy Policy
            </a>
            {/* . If you are a California resident, please{" "}
            <a href="#" className="text-primary hover:underline">
              click here
            </a> */}
            .
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;