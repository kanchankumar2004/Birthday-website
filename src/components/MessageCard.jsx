import { gsap } from "gsap";
import { useEffect, useRef, useState } from "react";
import Confetti from "./Confetti";
import "./MessageCard.css";

function MessageCard({ isActive }) {
  const [curtainsOpened, setCurtainsOpened] = useState(false);
  const [showConfetti, setShowConfetti] = useState(false);
  const prevIsActive = useRef(isActive);

  const curtainLeftRef = useRef(null);
  const curtainRightRef = useRef(null);
  const curtainHintRef = useRef(null);
  const messageContentRef = useRef(null);

  const message = `Param Mitraa Ayushi,

ʜᴀᴘᴘɪᴇꜱᴛ ʙɪʀᴛʜᴅᴀʏ ᴛᴏ ᴛʜᴇ ʙᴇᴀᴜᴛɪꜰᴜʟ ꜱᴏᴜʟ👸..       
ɪ ꜰᴇᴇʟ ꜱᴀꜰᴇ ᴛᴇʟʟɪɴɢ ᴀɴʏᴛʜɪɴɢ -ᴛʜᴀɴᴋ ʏᴏᴜ😌 ... 
ᴛʜᴇ ʙᴇꜱᴛ ᴘᴇᴏᴘʟᴇ ᴄᴏᴍᴇ ᴜɴᴇxᴘᴇᴄᴛᴇᴅ , ᴀɴᴅ ɪ ʟᴇᴀʀɴᴇᴅ ᴛʜᴀᴛ  ʙʏ ᴍᴇᴇᴛɪɴɢ ʏᴏᴜ!! 🤝ʙʟᴇꜱꜱᴇᴅ ᴛᴏ ʜᴀᴠᴇ ᴀ ꜰʀɪᴇɴᴅ ʟɪᴋᴇ ᴜʜʜ !! 🤗ɪ ᴘɪɴᴋʏ ᴘʀᴏᴍɪꜱᴇ ᴛᴏ ᴀɴɴᴏʏ ᴜʜʜ ꜰᴏʀᴇᴠᴇʀ ♾️..
ɪ ᴡɪꜱʜ ᴜʀ ʙɪʀᴛʜᴅᴀʏ ᴀɴᴅ ᴇᴠᴇʀʏᴅᴀʏ ᴡɪʟʟ ʙᴇ ꜰɪʟʟᴇᴅ ᴡɪᴛʜ ᴛʜᴇ ᴡᴀʀᴍᴛʜ ᴏꜰ ꜱᴜɴꜱʜɪɴᴇ, ᴛʜᴇ ʜᴀᴘᴘɪɴᴇꜱꜱ ᴏꜰ ʟᴏᴠᴇ, ꜱᴏᴜɴᴅ ᴏꜰ ʟᴀᴜɢʜᴛᴇʀ ᴀɴᴅ ɢᴏᴏᴅ ᴄʜᴇᴇʀ!! 😍🥰
ᴛʜᴀɴᴋ ᴜʜʜ ꜰᴏʀ ʟɪꜱᴛᴇɴɪɴɢ ᴛᴏ ᴍʏ ʙᴀᴋ ʙᴀᴋ.. 
ᴛʜᴀɴᴋ ᴜʜʜ ꜰᴏʀ ʙᴇɪɴɢ ᴛʜᴇ ʙᴇꜱᴛ ᴡʜᴇɴ ɪ ꜰᴇᴇʟ ʟᴏᴡ, ᴅᴇᴘʀᴇꜱꜱᴇᴅ, ᴜʜʜ ꜱᴜᴘᴘᴏʀᴛᴇᴅ ᴍᴇ ᴡɪᴛʜᴏᴜᴛ ᴊᴜᴅɢɪɴɢ ᴍᴇ.. 
ᴇᴠᴇʀʏ ᴍᴏᴍᴇɴᴛ ᴡɪᴛʜ ᴜʜʜ ꜰᴇᴇʟꜱ  ᴡᴀʀᴍ.. ᴛʜᴀɴᴋꜱꜱ ꜰᴏʀ ʙᴇɪɴɢ ᴍʏ ᴜɴᴘᴀɪᴅ ᴛʜᴇʀᴀᴘɪꜱᴛ☺️😇 ...
𝐮𝐡𝐡 𝐫 𝐦𝐲 𝐬𝐚𝐟𝐞 𝐜𝐡𝐚𝐩𝐭𝐞𝐫 𝐢𝐧 𝐭𝐡𝐢𝐬 𝐦𝐞𝐬𝐬𝐲 𝐥𝐢𝐟𝐞...𝐔𝐡𝐡 𝐦𝐚𝐤𝐞𝐬 𝐦𝐞 𝐥𝐚𝐮𝐠𝐡,𝐮𝐡𝐡 𝐦𝐚𝐤𝐞𝐬 𝐦𝐞 𝐬𝐦𝐢𝐥𝐞,𝐚𝐧𝐝 𝐮𝐡𝐡 𝐦𝐚𝐤𝐞𝐬 𝐦𝐲 𝐥𝐢𝐟𝐞 𝐥𝐢𝐭𝐭𝐥𝐞 𝐛𝐞𝐭𝐭𝐞𝐫...𝐈 𝐝𝐨𝐧'𝐭 𝐰𝐚𝐧𝐭 𝐭𝐨 𝐥𝐨𝐬𝐞 𝐮𝐡𝐡 𝐬𝐨 𝐒𝐭𝐚𝐲 𝐟𝐨𝐫𝐞𝐯𝐞𝐫😌⌚...  
𝐓𝐡𝐚𝐧𝐤 𝐮𝐡𝐡 𝐟𝐨𝐫 𝐬𝐭𝐚𝐲𝐢𝐧𝐠 𝐰𝐢𝐭𝐡 𝐦𝐞 𝐰𝐡𝐞𝐧𝐞𝐯𝐞𝐫 𝐈 𝐧𝐞𝐞𝐝𝐞𝐝 𝐮𝐡𝐡𝐡...
𝐓𝐡𝐚𝐧𝐤 𝐮𝐡𝐡 𝐟𝐨𝐫 𝐬𝐡𝐨𝐰𝐢𝐧𝐠 𝐦𝐞 𝐡𝐨𝐰 𝐭𝐫𝐮𝐞 𝐛𝐨𝐧𝐝𝐬 𝐥𝐨𝐨𝐤 𝐥𝐢𝐤𝐞..𝐌𝐚𝐲 𝐠𝐨𝐝 𝐛𝐥𝐞𝐬𝐬 𝐮𝐡𝐡 𝐰𝐢𝐭𝐡 𝐥𝐨𝐭𝐬 𝐨𝐟 𝐡𝐚𝐩𝐩𝐢𝐧𝐞𝐬𝐬 𝐚𝐧𝐝 𝐟𝐫𝐞𝐞 𝐟𝐫𝐨𝐦 𝐞𝐯𝐢𝐥 𝐞𝐲𝐞𝐬🧿...
𝐇𝐚𝐯𝐞 𝐭𝐡𝐞 𝐛𝐞𝐬𝐭 𝐛𝐢𝐫𝐭𝐡𝐝𝐚𝐲 𝐞𝐯𝐞𝐫 💖✨. 𝐓𝐡𝐞 𝐝𝐚𝐲 𝐢𝐬 𝐚𝐥𝐥 𝐲𝐨𝐮𝐫𝐬 𝐡𝐚𝐯𝐞 𝐟𝐮𝐧 😎🥳...
𝐇𝐚𝐩𝐩𝐢𝐞𝐬𝐭 𝐁𝐢𝐫𝐭𝐡𝐝𝐚𝐲 𝐀𝐘𝐔𝐒𝐇𝐈 𝐦𝐢𝐬𝐬 𝐜𝐡𝐚𝐬𝐦𝐢𝐬(𝐏𝐀𝐑𝐀𝐌 𝐌𝐈𝐓𝐑𝐀)💗🫂🐼...


Once Again Happy Birthday! 🎉

— Kanchan`;

  // Handle page transitions
  useEffect(() => {
    // Only trigger on transition to active
    if (isActive && !prevIsActive.current) {
      setTimeout(() => setShowConfetti(true), 10);
      const timer = setTimeout(() => setShowConfetti(false), 5000);
      prevIsActive.current = isActive;
      return () => clearTimeout(timer);
    }

    // Reset curtains when leaving page with smooth animation
    if (!isActive && prevIsActive.current) {
      setTimeout(() => {
        setCurtainsOpened(false);

        // Smooth reset animation
        if (curtainLeftRef.current && curtainRightRef.current) {
          const resetTimeline = gsap.timeline();

          resetTimeline.to([curtainLeftRef.current, curtainRightRef.current], {
            opacity: 1,
            duration: 0.3,
          });

          resetTimeline.to(
            [curtainLeftRef.current, curtainRightRef.current],
            {
              x: "0%",
              rotationY: 0,
              duration: 0.5,
              ease: "power2.inOut",
            },
            0.3
          );
        }

        if (messageContentRef.current) {
          gsap.to(messageContentRef.current, {
            opacity: 0,
            scale: 0.9,
            duration: 0.3,
          });
        }
      }, 300);
    }

    prevIsActive.current = isActive;
    return undefined;
  }, [isActive]);

  const handleOpenCurtains = () => {
    if (!curtainsOpened) {
      setCurtainsOpened(true);

      // Detect screen size for responsive animations
      const isMobile = window.innerWidth <= 768;
      const isSmallMobile = window.innerWidth <= 480;

      // Adjust animation parameters based on screen size
      const duration = isSmallMobile ? 1.2 : isMobile ? 1.4 : 1.5;
      const rotationAngle = isSmallMobile ? 10 : isMobile ? 12 : 15;

      // Animate curtain hint fade out
      gsap.to(curtainHintRef.current, {
        opacity: 0,
        scale: 0.8,
        duration: 0.4,
        ease: "power2.in",
      });

      // Animate curtains opening with 3D effect
      const timeline = gsap.timeline();

      timeline.to(
        curtainLeftRef.current,
        {
          x: "-100%",
          rotationY: -rotationAngle,
          duration: duration,
          ease: "power3.inOut",
        },
        0
      );

      timeline.to(
        curtainRightRef.current,
        {
          x: "100%",
          rotationY: rotationAngle,
          duration: duration,
          ease: "power3.inOut",
        },
        0
      );

      // Fade out curtains
      timeline.to(
        [curtainLeftRef.current, curtainRightRef.current],
        {
          opacity: 0,
          duration: 0.5,
          delay: isMobile ? 0.8 : 1,
        },
        0
      );

      // Reveal message content with smooth animation
      timeline.to(
        messageContentRef.current,
        {
          opacity: 1,
          scale: 1,
          duration: isMobile ? 0.8 : 1,
          ease: "back.out(1.2)",
          delay: isMobile ? 0.6 : 0.8,
        },
        0
      );
    }
  };

  // Handle touch events for mobile
  const handleTouchStart = () => {
    if (!curtainsOpened) {
      // Add subtle scale effect on touch
      gsap.to(curtainHintRef.current, {
        scale: 0.95,
        duration: 0.1,
      });
    }
  };

  const handleTouchEnd = () => {
    if (!curtainsOpened) {
      gsap.to(curtainHintRef.current, {
        scale: 1,
        duration: 0.1,
      });
    }
  };

  return (
    <section className="message">
      <h2>💌 A Message From My Heart</h2>

      <div className="curtain-container">
        <div className="curtain-rod"></div>

        <div
          className={`curtain-wrapper ${
            curtainsOpened ? "opened opening" : ""
          }`}
          onClick={handleOpenCurtains}
          onTouchStart={handleTouchStart}
          onTouchEnd={handleTouchEnd}
          role="button"
          tabIndex={curtainsOpened ? -1 : 0}
          aria-label="Click or tap to open the curtains and reveal the birthday message"
          onKeyDown={(e) => {
            if ((e.key === "Enter" || e.key === " ") && !curtainsOpened) {
              e.preventDefault();
              handleOpenCurtains();
            }
          }}
        >
          <div ref={curtainLeftRef} className="curtain curtain-left"></div>
          <div ref={curtainRightRef} className="curtain curtain-right"></div>
          {!curtainsOpened && (
            <div ref={curtainHintRef} className="curtain-hint">
              ✨ {window.innerWidth <= 768 ? "Tap" : "Click"} to Open ✨
            </div>
          )}
        </div>

        <div
          ref={messageContentRef}
          className="message-content"
          role="article"
          aria-label="Birthday message"
        >
          <p className="typed-text">{message}</p>
        </div>
      </div>

      {showConfetti && <Confetti />}
    </section>
  );
}

export default MessageCard;
