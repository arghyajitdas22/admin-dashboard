import React, { useState } from "react";
import useCreateUserModal from "../../hooks/useCreateUserModal";
import Modal from "./Modal";
import useUser from "../../hooks/useUser";
import toast from "react-hot-toast";

const CreateUserModal = () => {
  const isOpen = useCreateUserModal((state) => state.isOpen);
  const close = useCreateUserModal((state) => state.close);
  const addUser = useUser((state) => state.addUser);

  const [formData, setFormData] = useState({
    name: "",
    role: "member",
    status: "active",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    addUser(formData);
    toast.success("User created successfully");
    close();
  };
  return (
    <Modal
      title={"Create User"}
      onClose={close}
      open={isOpen}
      handleSave={() => {}}
    >
      <form onSubmit={handleSubmit} className="">
        <div className="p-3 flex flex-col gap-4">
          {/* Name field */}
          <div className="inp-div">
            <label className="lab" htmlFor="name">
              Name:
            </label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
            />
          </div>

          {/* Role field */}
          <div className="inp-div">
            <label className="lab" htmlFor="role">
              Role:
            </label>
            <select
              id="role"
              name="role"
              value={formData.role}
              onChange={handleChange}
              required
            >
              <option value="super admin">Super Admin</option>
              <option value="admin">Admin</option>
              <option value="member">Member</option>
            </select>
          </div>

          {/* Status field */}
          <div className="inp-div">
            <label className="lab" htmlFor="status">
              Status:
            </label>
            <select
              id="status"
              name="status"
              value={formData.status}
              onChange={handleChange}
              required
            >
              <option value="active">Active</option>
              <option value="inactive">Inactive</option>
            </select>
          </div>
        </div>
        {/* submit */}
        <div className="px-4 py-2 border-t border-gray-500 flex items-center justify-end">
          <button
            type="submit"
            className="block bg-blue-500 text-white rounded-lg py-2 hover:bg-blue-600 transition-all duration-300 ease-in-out px-2"
          >
            Save
          </button>
        </div>
      </form>
    </Modal>
  );
};

export default CreateUserModal;
