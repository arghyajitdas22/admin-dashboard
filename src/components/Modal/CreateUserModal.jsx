import React, { useEffect } from "react";
import useCreateUserModal from "../../hooks/useCreateUserModal";
import Modal from "./Modal";

const CreateUserModal = () => {
  const isOpen = useCreateUserModal((state) => state.isOpen);
  const close = useCreateUserModal((state) => state.close);
  return (
    <Modal
      title={"Create User"}
      onClose={close}
      open={isOpen}
      handleSave={() => {}}
    >
      <p>Create user</p>
    </Modal>
  );
};

export default CreateUserModal;
