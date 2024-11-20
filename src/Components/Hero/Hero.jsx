import React, { useRef } from "react";
import "./hero.css";
import { motion } from "framer-motion";
const Hero = () => {
  const videoRef = useRef(null); 
  return (
    <div className="hero ">
      <div className="my-container h-100">
        <div className="hero-con h-100">
          <div className="row h-100">
            <div className="col-md-6 col-sm-12 col-12 h-100">
              <div className="hero-left">
                <motion.div
                  initial={{ opacity: 0.1 }}
                  animate={{
                    opacity: 1,
                    transition: {
                      default: { type: "spring" },
                      opacity: { ease: "linear" },
                    },
                  }}
                  className="text-con"
                >
                  <p className="text-center">
                    Uğura gedən yol buradan başlayır!" 
                  </p>
                  <span>Peşəkar təlimlərlə gələcəyini qur!</span>
                  <img className="new-logo" src="../../../public/newLogo.pgn.png" alt="" />
                </motion.div>
              </div>
            </div>
            <div className="col-md-6 col-sm-12 col-12">
              <div className="hero-right w-100">
                <div className="video-block">
                  <video ref={videoRef} className="videoTag" autoPlay muted>
                    <source
                      src={
                        "../../../src/assets/video/WhatsApp Video 2024-11-19 at 18.42.01_ac245bc0.mp4"
                      }
                      type="video/mp4"
                    />
                  </video>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
