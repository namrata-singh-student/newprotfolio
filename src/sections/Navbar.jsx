import { useState, useEffect } from 'react';
import resumePdf from '/src/resume/NamrataSinghResume.pdf';
import music from '/src/music/music.mp3';
import { navLinks } from '../constants/index.js';
import ThemeToggle from '../components/ThemeToggle.jsx';

const handleResumeDownload = () => {
  const link = document.createElement('a');
  link.href = resumePdf;
  link.download = 'NamrataSinghResume.pdf';
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
};

const NavItems = ({ active, setActive, onClick }) => (
  <ul className="flex flex-col sm:flex-row sm:items-center sm:gap-6">
    {navLinks.map((item) => (
      <li key={item.id} className="nav-li">
        <a
          href={item.href}
          className={`${
            active === item.name ? 'text-white' : 'text-neutral-400'
          } hover:text-white transition-colors text-[18px] font-medium`}
          onClick={() => {
            setActive(item.name);
            onClick && onClick();
          }}>
          {item.name}
        </a>
      </li>
    ))}
  </ul>
);

const Navbar = () => {
  const [active, setActive] = useState('');
  const [isOpen, setIsOpen] = useState(false);
  const [audio] = useState(new Audio(music));
  const [isMusicPlaying, setIsMusicPlaying] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 100);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMusic = () => {
    if (isMusicPlaying) {
      audio.pause();
    } else {
      audio.play();
    }
    setIsMusicPlaying(!isMusicPlaying);
  };

  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 ${scrolled ? 'bg-black/90' : 'bg-transparent'} transition-colors`}>
      <div className="max-w-7xl mx-auto px-4 py-4 flex justify-between items-center">
        {/* Logo */}
        <a href="/" className="text-neutral-400 font-bold text-xl hover:text-white transition-colors">
          Namrata
        </a>

        {/* Mobile Menu Toggle */}
        <div className="sm:hidden flex items-center gap-4">
          <button onClick={toggleMenu} className="text-neutral-400 hover:text-white focus:outline-none">
            <img src={isOpen ? '/assets/close.svg' : '/assets/menu2.png'} alt="toggle menu" className="w-6 h-6" />
          </button>
          <button onClick={toggleMusic} className="text-neutral-400 hover:text-white">
            {isMusicPlaying ? (
              <img src="/musicico/music.gif" alt="Music Playing" className="w-6 h-6 invert" />
            ) : (
              <img src="/musicico/musicpause.png" alt="Music Paused" className="w-6 h-6 invert" />
            )}
          </button>
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden sm:flex gap-6">
          <NavItems active={active} setActive={setActive} />
        </nav>

        {/* Theme Toggle */}
        <div className="hidden sm:block">
          <ThemeToggle />
        </div>
      </div>

      {/* Mobile Navigation */}
      {isOpen && (
        <div className="sm:hidden bg-white/90 p-6 absolute top-16 left-0 right-0 z-40 flex flex-col items-center gap-4">
          {navLinks
            .filter((nav) => nav.name !== 'Resume' && nav.name !== 'Music')
            .map((nav) => (
              <a
                key={nav.id}
                href={nav.href}
                className={`${
                  active === nav.name ? 'text-white' : 'text-neutral-400'
                } hover:text-white transition-colors text-[18px] font-medium`}
                onClick={() => {
                  setActive(nav.name);
                  setIsOpen(false);
                }}>
                {nav.name}
              </a>
            ))}
          <a
            onClick={() => {
              handleResumeDownload();
              setIsOpen(false);
            }}
            className="cursor-pointer text-neutral-400 hover:text-white text-[18px] font-medium">
            Resume
          </a>
          <button
            onClick={() => {
              toggleMusic();
              setIsOpen(false);
            }}
            className="text-neutral-400 hover:text-white flex items-center">
            {isMusicPlaying ? (
              <img src="/musicico/music.gif" alt="Music Playing" className="w-6 h-6 invert" />
            ) : (
              <img src="/musicico/musicpause.png" alt="Music Paused" className="w-6 h-6 invert" />
            )}
            <span className="ml-2">Music</span>
          </button>
        </div>
      )}
    </header>
  );
};

export default Navbar;

// import { styles } from '../styles';
// import React, { useEffect, useState } from 'react';
// import { navLinks } from '../constants/index.js'; // Import navigation links
// import resumePdf from '/src/resume/NamrataSinghResume.pdf'; // Resume file
// import music from '/src/music/music.mp3'; // Music file

// const Navbar = () => {
//   const [active, setActive] = useState('');
//   const [toggle, setToggle] = useState(false);
//   const [scrolled, setScrolled] = useState(false);
//   const [audio] = useState(new Audio(music));
//   const [isMusicPlaying, setIsMusicPlaying] = useState(false);

//   useEffect(() => {
//     const handleScroll = () => {
//       const scrollTop = window.scrollY;
//       setScrolled(scrollTop > 100);
//     };
//     window.addEventListener('scroll', handleScroll);
//     return () => window.removeEventListener('scroll', handleScroll);
//   }, []);

//   const handleResumeDownload = () => {
//     const link = document.createElement('a');
//     link.href = resumePdf;
//     link.download = 'NamrataSinghResume.pdf';
//     link.click();
//   };

//   const toggleMusic = () => {
//     if (isMusicPlaying) {
//       audio.pause();
//     } else {
//       audio.play();
//     }
//     setIsMusicPlaying(!isMusicPlaying);
//   };

//   return (
//     <header className={`fixed top-0 left-0 right-0 z-50 bg-black/90 ${scrolled ? 'shadow-md' : ''}`}>
//       <div className="max-w-7xl mx-auto">
//         <div className="flex justify-between items-center py-5 mx-auto c-space">
//           {/* Logo */}
//           <a href="/" className="text-neutral-400 font-bold text-xl hover:text-white transition-colors">
//             Namrata
//           </a>

//           {/* Desktop Navigation */}
//           <nav className="hidden sm:flex gap-8">
//             {navLinks.map((nav) => (
//               <a
//                 key={nav.id}
//                 href={`#${nav.id}`}
//                 className={`${
//                   active === nav.title ? 'text-white' : 'text-neutral-400'
//                 } hover:text-white transition-colors text-[18px] font-medium`}
//                 onClick={() => setActive(nav.title)}>
//                 {nav.title}
//               </a>
//             ))}
//             <a
//               onClick={handleResumeDownload}
//               className="cursor-pointer text-neutral-400 hover:text-white text-[18px] font-medium">
//               Resume
//             </a>
//             <button onClick={toggleMusic} className="text-neutral-400 hover:text-white">
//               {isMusicPlaying ? (
//                 <img src="/musicico/music.gif" alt="Music Playing" className="w-6 h-6 invert" />
//               ) : (
//                 <img src="/musicico/musicpause.png" alt="Music Paused" className="w-6 h-6 invert" />
//               )}
//             </button>
//           </nav>

//           {/* Mobile Menu Toggle Button */}
//           <button
//             onClick={() => setToggle(!toggle)}
//             className="sm:hidden text-neutral-400 hover:text-white focus:outline-none">
//             <img src={toggle ? '/assets/close.svg' : '/assets/menu2.svg'} alt="Menu Toggle" className="w-6 h-6" />
//           </button>
//         </div>
//       </div>

//       {/* Mobile Navigation */}
//       {toggle && (
//         <div className="sm:hidden bg-black/90 p-6 absolute top-16 left-0 right-0 z-40">
//           <nav className="flex flex-col gap-4">
//             {navLinks.map((nav) => (
//               <a
//                 key={nav.id}
//                 href={`#${nav.id}`}
//                 className={`${
//                   active === nav.title ? 'text-white' : 'text-neutral-400'
//                 } hover:text-white transition-colors text-[18px] font-medium`}
//                 onClick={() => {
//                   setActive(nav.title);
//                   setToggle(false);
//                 }}>
//                 {nav.title}
//               </a>
//             ))}
//             <a
//               onClick={() => {
//                 handleResumeDownload();
//                 setToggle(false);
//               }}
//               className="cursor-pointer text-neutral-400 hover:text-white text-[18px] font-medium">
//               Resume
//             </a>
//             <button
//               onClick={() => {
//                 toggleMusic();
//                 setToggle(false);
//               }}
//               className="text-neutral-400 hover:text-white flex items-center">
//               {isMusicPlaying ? (
//                 <img src="/musicico/music.gif" alt="Music Playing" className="w-6 h-6 invert" />
//               ) : (
//                 <img src="/musicico/musicpause.png" alt="Music Paused" className="w-6 h-6 invert" />
//               )}
//               <span className="ml-2">Music</span>
//             </button>
//           </nav>
//         </div>
//       )}
//     </header>
//   );
// };

// export default Navbar;
