import React, {Component} from 'react';
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";

const EmailModal = (props) => {
    {
        return (
            <div>
                <Modal
                    open={props.open}
                    onClose={props.handleClose}
                    aria-labelledby="modal-modal-title"
                    aria-describedby="modal-modal-description"
                >
                    <Box className="modal-box">
                       <div><span class="modal-title">Reset Password</span> <button className="btnClose" onClick={props.handleClose}>X</button></div>

                        <input type="email" className="form-input" name="email" placeholder="Enter your registered Email Address"/>
                        <button class="form-button"> Send Password Reset Link</button>

                    </Box>
                </Modal>
            </div>
        );
    }
}

export default EmailModal;