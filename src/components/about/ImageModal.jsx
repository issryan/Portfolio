/**
 * Student's Name: Ryan Arafeh
 * StudentID: 301239052
 * Date: May 31st 2024
 */
import React, { useState } from 'react';
import { Modal, Button } from 'react-bootstrap';
import ImageCarousel from './ImageCarousel'; 
import './modal.css'; 


const ImageModal = ({ images, show, handleClose }) => {
  return (
    <Modal show={show} onHide={handleClose} size="xl" centered>
      <Modal.Header closeButton>
        <Modal.Title>Ryan's Gallery</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <ImageCarousel images={images} />
      </Modal.Body>
    </Modal>
  );
};

export default ImageModal;
