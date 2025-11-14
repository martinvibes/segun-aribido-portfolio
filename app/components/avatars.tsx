import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";
import user1 from "../../public/nicolas-horn-MTZTGvDsHFY-unsplash.jpg";
import user2 from "../../public/michael-dam-mEZ3PoFGs_k-unsplash.jpg";
import user3 from "../../public/joseph-gonzalez-iFgRcqHznqg-unsplash.jpg";
import user4 from "../../public/diego-hernandez-MSepzbKFz10-unsplash.jpg";
import user5 from "../../public/aiony-haust-3TLl_97HNJo-unsplash.jpg";
import Image from "next/image";

const avatars = [
  { id: 1, img: user1, name: "Avatar 1" },
  { id: 2, img: user2, name: "Avatar 2" },
  { id: 3, img: user3, name: "Avatar 3" },
  { id: 4, img: user4, name: "Avatar 4" },
  { id: 5, img: user5, name: "Avatar 5" },
];

export default function AnimatedAvatars() {
  const [visibleCount, setVisibleCount] = useState(0);
  const [showAll, setShowAll] = useState(false);

  useEffect(() => {
    if (!showAll && visibleCount < avatars.length) {
      // Show avatars one by one
      const timer = setTimeout(() => {
        setVisibleCount((prev) => prev + 1);
        if (visibleCount + 1 === avatars.length) {
          setShowAll(true);
        }
      }, 400); // 400ms delay between each avatar
      return () => clearTimeout(timer);
    } else if (showAll) {
      // After last avatar appears, wait 1 second then vanish
      const timer = setTimeout(() => {
        setShowAll(false);
        setVisibleCount(0);
      }, 1000);
      return () => clearTimeout(timer);
    }
  }, [visibleCount, showAll]);

  return (
    <div className="">
      <div className="flex gap-0">
        <AnimatePresence>
          {avatars.slice(0, visibleCount).map((avatar, index) => (
            <motion.div
              key={avatar.id}
              initial={{ opacity: 0, scale: 0, x: -20 }}
              animate={{
                opacity: 1,
                scale: 1,
                x: 0,
                transition: {
                  duration: 0.4,
                  ease: "easeOut",
                },
              }}
              exit={{
                opacity: 0,
                scale: 0,
                transition: {
                  duration: 0.3,
                },
              }}
              style={{
                marginLeft: index > 0 ? "-20px" : "0",
                zIndex: avatars.length,
              }}
              className="relative"
            >
              <div className="w-14 h-14 rounded-full border-4 border-white shadow-lg overflow-hidden bg-white">
                <Image
                  src={avatar.img}
                  alt={avatar.name}
                  className="w-full h-full object-cover"
                />
              </div>
            </motion.div>
          ))}
        </AnimatePresence>
      </div>
    </div>
  );
}
