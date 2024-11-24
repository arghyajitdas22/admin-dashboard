import React, { useEffect, useState } from "react";
import useEditUserModal from "../../hooks/useEditUserModal";
import useUser from "../../hooks/useUser";
import toast from "react-hot-toast";
import Modal from "./Modal";

const EditUserModal = () => {
  const isOpen = useEditUserModal((state) => state.isOpen);
  const user = useEditUserModal((state) => state.user);
  const close = useEditUserModal((state) => state.close);
  const editUser = useUser((state) => state.editUser);

  const [formData, setFormData] = useState(user);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    editUser(user.id, formData);
    toast.success("User edited successfully");
    close();
  };

  useEffect(() => {
    setFormData(user);
  }, [user]);

  if (user && isOpen)
    return (
      <Modal title={"Edit User"} onClose={close} open={isOpen}>
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

export default EditUserModal;
