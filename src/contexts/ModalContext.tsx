import React, { createContext, useContext, useState, ReactNode } from 'react';
import Modal from '@/components/ui/Modal';

interface ModalContextType {
  openModal: (content: ReactNode) => void;
  closeModal: () => void;
}

const ModalContext = createContext<ModalContextType | undefined>(undefined);

export const useModal = () => {
  const ctx = useContext(ModalContext);
  if (!ctx) throw new Error('useModal must be used within a ModalProvider');
  return ctx;
};

export const ModalProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [modalContent, setModalContent] = useState<ReactNode>(null);
  const [isOpen, setIsOpen] = useState(false);

  const openModal = (content: ReactNode) => {
    setModalContent(content);
    setIsOpen(true);
  };
  const closeModal = () => {
    setIsOpen(false);
    setTimeout(() => setModalContent(null), 300); // for animation if needed
  };

  return (
    <ModalContext.Provider value={{ openModal, closeModal }}>
      {children}
      <Modal isOpen={isOpen} onClose={closeModal}>
        {modalContent}
      </Modal>
    </ModalContext.Provider>
  );
};
