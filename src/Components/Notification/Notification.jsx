import React from 'react';
import PropTypes from 'prop-types';
import { NotificationP } from './Notification.styled';


const Notification = ({ message }) => <NotificationP>{message}</NotificationP>;

export default Notification;

Notification.prototypes = {
  message: PropTypes.number.isRequired,
};