import { Modal, IconButton } from '@mui/material';
import { Close } from '@mui/icons-material';

interface IModalProps {
    open: boolean;
    handleClose: () => void;
    children: React.ReactNode;
}

export default function ModalComponent({ open, handleClose, children }: IModalProps) {

    children = (
        <>
            <IconButton onClick={handleClose}>
                <Close />
            </IconButton>
            {children}
        </>
    );
    
    return (
        <Modal
            open={open}
            onClose={handleClose}
            aria-labelledby="modal-modal-title"
            aria-describedby="modal-modal-description"
        >
            <div>
                <IconButton onClick={handleClose}>
                    <Close />
                </IconButton>
                
                {children}


            </div>
        </Modal>
    );
}

// src\pages\Orders\index.tsx
// import { useState } from 'react';
// import { Button } from '@mui/material';
// import Modal from '../../components/Modal';
// export default function Orders() {
//     const [open, setOpen] = useState(false);
//     const handleOpen = () => setOpen(true);
//     const handleClose = () => setOpen(false);
//     return (
//         <div>
//             <Button onClick={handleOpen}>Abrir modal</Button>
//             <Modal open={open} handleClose={handleClose}>
//                 <h1>Modal</h1>
//             </Modal>
//         </div>
//     );
// }
// src\pages\Products\index.tsx
// import { useState } from 'react';
// import { Button } from '@mui/material';
// import Modal from '../../components/Modal';
// export default function Products() {
//     const [open, setOpen] = useState(false);
//     const handleOpen = () => setOpen(true);
//     const handleClose = () => setOpen(false);
//     return (
//         <div>
//             <Button onClick={handleOpen}>Abrir modal</Button>
//             <Modal open={open} handleClose={handleClose}>
//                 <h1>Modal</h1>
//             </Modal>
//         </div>
//     );
// }


// src\components\Navbar\index.tsx

