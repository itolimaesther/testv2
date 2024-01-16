import { useState, ReactNode } from "react";

type ModalProps = {
	isVisible: boolean;
	onClose: () => void;
	children: ReactNode;
};

const Modal = ({ isVisible, onClose, children }: ModalProps) => {
	//   const [formData, setFormData] = useState({
	//     surname: '',
	//     phoneNumber: '',
	//     address: '',
	//   });

	if (!isVisible) return null;

	const handleClose = (e: React.MouseEvent<HTMLDivElement>) => {
		const target = e.currentTarget as HTMLDivElement;

		if (target.id === "wrapper") onClose();
	};

	//   const handleSubmit = (e) => {
	//     e.preventDefault();

	//     // Perform any necessary actions with the form data
	//     console.log('Form submitted with:', formData);
	//   };

	//   const handleInputChange = (e) => {
	//     const { name, value } = e.target;
	//     setFormData((prevData) => ({
	//       ...prevData,
	//       [name]: value,
	//     }));
	//   };

	return (
		<>
			<div
				onClick={handleClose}
				id="wrapper"
				className="fixed inset-0 z-[100] overflow-auto bg-black bg-opacity-10 backdrop-blur-[1px]   flex flex-col items-center justify-center py-10 "
			>
				<div className="w-full overflow-auto">{children}</div>
			</div>
		</>
	);
};

export default Modal;
