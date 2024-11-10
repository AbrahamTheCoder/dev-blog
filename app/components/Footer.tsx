const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-8 mt-auto">
      <div className="max-w-6xl mx-auto px-4 text-center">
        <p className="text-sm">© {new Date().getFullYear()} Your Name. All rights reserved.</p>
        <div className="mt-4 space-x-4">
          <a href="https://github.com/yourusername" className="hover:text-gray-300">GitHub</a>
          <a href="https://linkedin.com/in/yourusername" className="hover:text-gray-300">LinkedIn</a>
          <a href="mailto:your@email.com" className="hover:text-gray-300">Email</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer; 