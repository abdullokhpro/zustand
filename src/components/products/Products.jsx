import React from "react";
import useStore from "../../context/storeProducts";
import { useState } from "react";

const Products = () => {
  const users = useStore((state) => state.users);
  const deleteUser = useStore((state) => state.deleteUser);
  const updateUser = useStore((state) => state.updateUser);

  const [editingUser, setEditingUser] = useState(null);

  const DELETE = (userId) => {
    if (confirm("are you sure")) {
      deleteUser(userId);
    }
  };

  const EDIT = (user) => {
    setEditingUser(user);
  };

  const CANCEL = () => {
    setEditingUser(null);
  };

  const CHANGE = (e) => {
    const { name, value } = e.target;
    setEditingUser((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  let userCardData = users?.map((user) => (
    <div class="w-full max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 p-5">
      <div class="flex flex-col items-center pb-10">
        <img
          class="w-24 h-24 mb-3 rounded-full shadow-lg"
          src="https://avatars.githubusercontent.com/u/148059495?s=400&u=9e2bc3b8b0ff1cc553ef1911901ddaf044967d5e&v=4"
          alt="Bonnie image"
        />
        <h5 class="mb-1 text-xl font-medium text-gray-900 dark:text-white">
          {user.name}
        </h5>
        <span class="text-sm text-gray-500 dark:text-gray-400 mb-2">
          {user.profession}
        </span>
        <span class="text-sm text-gray-500 dark:text-gray-400 mb-2">
          {user.age}
        </span>
        <span class="text-sm text-gray-500 dark:text-gray-400 mb-2">
          {user.gender}
        </span>
        <div class="flex mt-4 md:mt-6">
          <button
            href="#"
            class="inline-flex items-center px-4 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
            onClick={() => EDIT(user)}
          >
            edit
          </button>
          <button
            href="#"
            class="py-2 px-4 ms-2 text-sm font-medium text-red-900 focus:outline-none bg-white rounded-lg border border-red-200 hover:bg-red-100 hover:text-red-700 focus:z-10 focus:ring-4 focus:ring-red-100 dark:focus:ring-red-700 dark:bg-red-800 dark:text-red-400 dark:border-red-600 dark:hover:text-white dark:hover:bg-red-700"
            onClick={() => DELETE(user.id)}
          >
            Delete
          </button>
        </div>
      </div>
    </div>
  ));

  const handleSave = (e) => {
    e.preventDefault();
    updateUser(editingUser);
    setEditingUser(null);
  };

  return (
    <div className="products p-12">
      <div className="container">{userCardData}</div>
      {editingUser && (
        <form onSubmit={handleSave}>
          <div class="grid gap-6 mb-6 md:grid-cols-2">
            <div>
              <label
                for="first_name"
                class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
              >
                Name
              </label>
              <input
                type="text"
                value={editingUser.name}
                onChange={CHANGE}
                id="first_name"
                class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                placeholder="Name"
                required
              />
            </div>
            <div>
              <label
                for="last_name"
                class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
              >
                Profession
              </label>
              <input
                type="text"
                value={editingUser.profession}
                onChange={CHANGE}
                id="last_name"
                class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                placeholder="Profession"
                required
              />
            </div>
            <div>
              <label
                for="company"
                class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
              >
                age
              </label>
              <input
                type="number"
                value={editingUser.age}
                onChange={CHANGE}
                id="company"
                class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                placeholder="age"
                required
              />
            </div>
            <select value={editingUser.gender} onChange={CHANGE}>
              <option disabled value="">
                Choose
              </option>
              <option value="male">Male</option>
              <option value="female">Female</option>
            </select>
          </div>
          {/* <button onClick={handleCancel} type="submit">Save</button> */}

          <button
            type="submit"
            class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
          >
            Save
          </button>
        </form>
      )}
    </div>
  );
};

export default Products;
