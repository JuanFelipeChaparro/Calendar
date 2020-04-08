import React from 'react';
import { Alert } from 'react-bootstrap';

const NotFound = () => (
    <Alert dismissible={false} variant='danger'>
        <Alert.Heading className="text-center">404 Page Not Found</Alert.Heading>
    </Alert>
);

export default NotFound;