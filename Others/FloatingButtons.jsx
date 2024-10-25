import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { FaWhatsapp, FaArrowUp, FaTimes } from 'react-icons/fa';

const FloatingButtons = () => {
  const [showButtons, setShowButtons] = useState(false);

  const toggleButtons = () => {
    setShowButtons((prev) => !prev);
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div style={{ position: 'fixed', bottom: '20px', right: '20px' }}>
      <motion.div
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ duration: 0.3 }}
        style={{
          position: 'relative',
          backgroundColor: '#007bff',
          color: '#fff',
          borderRadius: '50%',
          width: '50px',
          height: '50px',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          cursor: 'pointer',
          boxShadow: '0 4px 8px rgba(0, 0, 0, 0.2)',
        }}
        onClick={toggleButtons}
      >
        <FaTimes />
      </motion.div>

      {showButtons && (
        <div style={{ marginTop: '10px' }}>
          <motion.div
            initial={{ opacity: 0, translateY: 20 }}
            animate={{ opacity: 1, translateY: 0 }}
            transition={{ duration: 0.3 }}
            style={{
              display: 'flex',
              flexDirection: 'column',
              gap: '10px',
              alignItems: 'center',
            }}
          >
            <motion.a
              href="https://wa.me/9063073480"
              target="_blank"
              rel="noopener noreferrer"
              style={{
                backgroundColor: '#25D366',
                color: '#fff',
                borderRadius: '8px',
                width: '50px',
                height: '50px',
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                boxShadow: '0 4px 8px rgba(0, 0, 0, 0.2)',
              }}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
            >
              <FaWhatsapp />
            </motion.a>

            <motion.div
              onClick={scrollToTop}
              style={{
                backgroundColor: '#007bff',
                color: '#fff',
                borderRadius: '8px',
                width: '50px',
                height: '50px',
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                boxShadow: '0 4px 8px rgba(0, 0, 0, 0.2)',
                cursor: 'pointer',
              }}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
            >
              <FaArrowUp />
            </motion.div>
          </motion.div>
        </div>
      )}
    </div>
  );
};

export default FloatingButtons;