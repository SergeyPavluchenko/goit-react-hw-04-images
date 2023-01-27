import { WindowModal, Overlay } from 'components/Modal/Modal.styled';

import { useEffect } from 'react';
import PropTypes from 'prop-types';

export const Modal = ({ largeImageURL, tags, onClose }) => {
  useEffect(() => {
    window.addEventListener('keydown', closeModalByEsc);
    return () => {
      window.removeEventListener('keydown', closeModalByEsc);
    };
  });

  const closeModalByEsc = event => {
    if (event.code === 'Escape') {
      onClose();
    }
  };
  const closeModalOverlay = event => {
    if (event.currentTarget === event.target) {
      onClose();
    }
  };

  return (
    <Overlay onClick={closeModalOverlay}>
      <WindowModal>
        <img src={largeImageURL} alt={tags} width="850" />
      </WindowModal>
    </Overlay>
  );
};

Modal.propTypes = {
  onClose: PropTypes.func.isRequired,
};
