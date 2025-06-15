import React from 'react';

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  children: React.ReactNode;
}

const Modal: React.FC<ModalProps> = ({ isOpen, onClose, children }) => {
  if (!isOpen) return null;
  return (
    <div
      className="fixed inset-0 z-[10000] flex items-center justify-center bg-black/60 backdrop-blur-sm px-2 md:px-0"
      style={{ pointerEvents: 'auto' }}
      onClick={onClose}
    >
      <div
        className="relative w-full max-w-md mx-auto bg-black rounded-2xl shadow-2xl p-6 md:p-8 flex flex-col gap-6"
        style={{ zIndex: 10001 }}
        onClick={e => e.stopPropagation()}
      >
        <button
          className="absolute top-3 right-3 text-white/80 hover:text-white p-2 rounded-full focus:outline-none focus:ring-2 focus:ring-futurity-orange"
          onClick={onClose}
          aria-label="Close"
        >
          <svg width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path d="M18 6 6 18M6 6l12 12"/></svg>
        </button>
        <div style={{ minHeight: 200, color: 'white' }}>
          {children ? children : <div>Modal content missing</div>}
        </div>
      </div>
    </div>
  );
};

export default Modal;
