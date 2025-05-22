'use client'; // Needed only for App Router

import React, { ReactNode } from 'react';
import { Modal } from 'antd';

interface CommonModalProps {
  title?: string;
  open: boolean;
  onOk?: () => void;
  onCancel?: () => void;
  okText?: string;
  cancelText?: string;
  children?: ReactNode;
  width?: number;
  footer?: ReactNode | null;
}

const CommonModal: React.FC<CommonModalProps> = ({
  title = 'Modal Title',
  open,
  onOk,
  onCancel,
  okText = 'OK',
  cancelText = 'Cancel',
  children,
  width = 520,
  footer = null,
}) => {
  return (
    <Modal
      title={title}
      open={open}
      onOk={onOk}
      onCancel={onCancel}
      okText={okText}
      cancelText={cancelText}
      width={width}
      footer={footer} 
    >
      {children}
    </Modal>
  );
};

export default CommonModal;
