
export const Footer = () => {
  return (
    <div>
      <footer className="bg-pink-100 p-6 text-center">
        <p className="text-pink-600">Made with ❤️ by Luis Camilo Rosania Rivera</p>
        <div className="flex justify-center space-x-6 mt-4">
          <a
            href="https://twitter.com"
            className="text-pink-600 hover:text-pink-800"
          >
            Twitter
          </a>
          <a
            href="https://facebook.com"
            className="text-pink-600 hover:text-pink-800"
          >
            Facebook
          </a>
          <a
            href="https://instagram.com"
            className="text-pink-600 hover:text-pink-800"
          >
            Instagram
          </a>
        </div>
      </footer>
    </div>
  );
};
