import React from 'react';
import './Popup.css';

interface PopupProps {
  sectionContent: React.ReactNode;
  onClose: () => void;
}

const Popup: React.FC<PopupProps> = ({ sectionContent, onClose }) => {
  return (
    <div className="popup-overlay">
      <div className="popup-content">
        {sectionContent}
        <button className="close-button" onClick={onClose}>x</button>
      </div>
    </div>
  );
};

export default Popup;
