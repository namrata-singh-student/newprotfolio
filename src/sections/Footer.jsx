// const Footer = () => {
//   return (
//     <footer className="c-space pt-7 pb-3 border-t border-black-300 flex justify-between items-center flex-wrap gap-5">
//       <div className="text-white-500 flex gap-2">
//         <p>Terms & Conditions</p>
//         <p>|</p>
//         <p>Privacy Policy</p>
//       </div>

//       <div className="flex gap-3">
//         <div className="social-icon">
//           <img src="/assets/github.svg" alt="github" className="w-1/2 h-1/2" />
//         </div>
//         <div className="social-icon">
//           <img src="/assets/twitter.svg" alt="twitter" className="w-1/2 h-1/2" />
//         </div>
//         <div className="social-icon">
//           <img src="/assets/instagram.svg" alt="instagram" className="w-1/2 h-1/2" />
//         </div>
//       </div>

//       <p className="text-white-500">© 2024 Adrian Hajdin. All rights reserved.</p>
//     </footer>
//   );
// };

// export default Footer;
// const Footer = () => {
//   return (
//     <footer className="c-space pt-7 pb-3 border-t border-black-300 flex justify-between items-center flex-wrap gap-5">
//       <div className="text-white-500 flex gap-2">
//         <p>Terms & Conditions</p>
//         <p>|</p>
//         <p>Privacy Policy</p>
//       </div>

//       <div className="flex gap-3">
//         <div className="social-icon">
//           <a href="https://github.com/namrata-singh-student" target="_blank" rel="noopener noreferrer">
//             <img src="/assets/github.svg" alt="github" className="w-1/2 h-1/2" />
//           </a>
//         </div>
//         {/* <div className="social-icon">
//           <a href="https://twitter.com/your-twitter-handle" target="_blank" rel="noopener noreferrer">
//             <img src="/assets/twitter.svg" alt="twitter" className="w-1/2 h-1/2" />
//           </a>
//         </div> */}
//         <div className="social-icon">
//           <a href="https://www.instagram.com/_its.namrata__/?next=%2F" target="_blank" rel="noopener noreferrer">
//             <img src="/assets/instagram.svg" alt="instagram" className="w-1/2 h-1/2" />
//           </a>
//         </div>
//         <div className="social-icon">
//           <a href="https://www.linkedin.com/in/namrata-singh-812925266/" target="_blank" rel="noopener noreferrer">
//             <img
//               src="/assets/linkedin.png
//             "
//               alt="linkedin"
//               className="w-1/2 h-1/2"

//             />
//           </a>
//         </div>
//       </div>

//       <p className="text-white-500">© 2025 Nmarata Singh. All rights reserved.</p>
//     </footer>
//   );
// };

// export default Footer;
const Footer = () => {
  return (
    <footer className="c-space pt-7 pb-3 border-t border-black-300 flex justify-between items-center flex-wrap gap-5">
      <div className="text-white-500 flex gap-2">
        <p>Terms & Conditions</p>
        <p>|</p>
        <p>Privacy Policy</p>
      </div>

      <div className="flex gap-3">
        <div className="social-icon flex items-center justify-center">
          <a
            href="https://github.com/namrata-singh-student"
            target="_blank"
            rel="noopener noreferrer"
            className="group">
            <img
              src="/assets/github.svg"
              alt="github"
              className="w-8 h-8 transform transition-transform group-hover:scale-110 group-hover:animate-pulse"
            />
          </a>
        </div>
        {/* <div className="social-icon">
          <a href="https://twitter.com/your-twitter-handle" target="_blank" rel="noopener noreferrer">
            <img src="/assets/twitter.svg" alt="twitter" className="w-1/2 h-1/2" />
          </a>
        </div> */}
        <div className="social-icon flex items-center justify-center">
          <a
            href="https://www.instagram.com/_its.namrata__/?next=%2F"
            target="_blank"
            rel="noopener noreferrer"
            className="group">
            <img
              src="/assets/instagram.svg"
              alt="instagram"
              className="w-8 h-8 transform transition-transform group-hover:scale-110 group-hover:animate-pulse"
            />
          </a>
        </div>
        <div className="social-icon flex items-center justify-center">
          <a
            href="https://www.linkedin.com/in/namrata-singh-812925266/"
            target="_blank"
            rel="noopener noreferrer"
            className="group">
            <img
              src="/assets/linkedin.png"
              alt="linkedin"
              className="w-8 h-8 transform transition-transform group-hover:scale-110 group-hover:animate-pulse"
            />
          </a>
        </div>
      </div>

      <p className="text-white-500">© 2025 Namrata Singh. All rights reserved.</p>
    </footer>
  );
};

export default Footer;
