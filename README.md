# Project Overview

The project is a single page web application build on top of react and tailwind css. The project features a Role-Based Access Control (RBAC) User Interface where an ADMIN or SUPER ADMIN of a project can view user activity, perform CRUD operations on users and permissions of a role.

The project has the following sections:- 1. Header - This section features a logo and a dummy signout button. 2. Role Card Section - This section features cards for each role that can be assigned to aperson in a project. Each role has a set of permissions that can be edited by the Admin. 3. The User Table Display - This section features a table arrangement where the admin can see the details(name, role and status) of every member of the project. The Admin can also add, delete or edit an user according to their choice.

# Dashboard Component

The `Dashboard` component is the main container for a user dashboard interface. It combines multiple subcomponents to provide a cohesive user experience, including a header, main section, modals, and toast notifications for user feedback.

---

## Features

- **Toast Notifications**: Integrates `react-hot-toast` for customizable notifications.
- **Modals**: Includes `CreateUserModal` and `EditUserModal` components for managing user interactions.
- **Header**: Displays the top navigation or branding of the dashboard.
- **Main Section**: Serves as the primary content area for the dashboard.

---

## Component Structure

The `Dashboard` component is structured as follows:

1. **Toast Notifications**:

   - Configured using the `Toaster` component from `react-hot-toast`.
   - Positioned at the top-center of the page.
   - Customizable appearance with a dark background and white text.

2. **Modals**:

   - `CreateUserModal`: Handles the creation of new users.
   - `EditUserModal`: Facilitates editing of existing user information.

3. **Header**:

   - Imported from the `Header` subdirectory and likely contains navigation elements.

4. **MainSection**:
   - The central content area of the dashboard where primary functionality is displayed.

---

## Props

The `Dashboard` component does not accept any props directly. Instead, it relies on its child components to manage specific features and data.

---

## Behavior and Logic

### Toast Notifications

- Configured with `react-hot-toast` to provide real-time feedback to users.
- Default settings include:
  - **Position**: Top-center of the screen.
  - **Duration**: 2000 milliseconds.
  - **Style**: Dark background with white text for high contrast.

### Modal Management

- `CreateUserModal` and `EditUserModal` are included for user management operations.
- Their visibility and functionality are likely controlled at a higher state level, outside of the `Dashboard` component.

### Layout

- Combines modular subcomponents to create a flexible and scalable dashboard.
- Each subcomponent is designed to handle a specific part of the interface.

# RoleCard Component

The `RoleCard` component is a reusable React component designed to display and manage user roles and their associated permissions. It provides a visually appealing interface to toggle permissions (Create, Read, Update, Delete) for a specific role.

## Features

- Dynamically displays role information.
- Showcases the number of accounts (`acn`) associated with the role.
- Enables the user to toggle individual permissions with a checkbox.
- Highlights each permission type with unique background colors for better visibility.
- Supports responsive design to adjust layout for different screen sizes.

---

## Props

The `RoleCard` component accepts the following props:

| Prop                     | Type       | Description                                                              |
| ------------------------ | ---------- | ------------------------------------------------------------------------ |
| `role`                   | `string`   | The name of the role (e.g., "Admin", "Editor").                          |
| `permissions`            | `array`    | A list of active permissions (`create`, `read`, `update`, `delete`).     |
| `acn`                    | `number`   | The number of accounts associated with the role.                         |
| `handlePermissionChange` | `function` | Callback function triggered when a permission is toggled.                |
| `index`                  | `number`   | Index of the current role card (useful for tracking in a list of roles). |

---

## Behavior and Logic

### Permission Colors

The `RoleCard` component assigns specific background colors to permissions for quick identification:

- **Create**: Blue (`bg-blue-300`)
- **Read**: Green (`bg-green-300`)
- **Update**: Yellow (`bg-yellow-300`)
- **Delete**: Red (`bg-red-300`)
- **None**: Gray (`bg-gray-300`)

### Event Handling

The `handleChange` function updates the state when a permission is toggled. It uses the `handlePermissionChange` callback passed via props, enabling the parent component to manage the updated state.

### Responsive Design

The layout adjusts based on screen size:

- **Mobile**: The card stacks elements vertically.
- **Desktop**: Elements are displayed in a row for better use of space.

# Header Component

The `Header` component serves as the top navigation bar for the application. It includes a logo, the application name, and a sign-out button. The component is responsive and dynamically adjusts based on the screen size.

---

## Features

- **Logo and Branding**: Displays an icon and the application name ("Admin Dashboard").
- **Sign-out Button**: Includes an icon and a text label, which adapts based on screen width.
- **Responsiveness**: Uses a custom hook `useWindowSize` to adjust the layout for different screen sizes.
- **Sticky Positioning**: Remains at the top of the viewport as the user scrolls.

---

## Props

The `Header` component does not accept any props. All behavior and content are self-contained.

---

## Behavior and Logic

### Dynamic Screen Size Handling

- The component uses the `useWindowSize` custom hook to determine the current screen width.
- If the screen width exceeds `450px`, the "Signout" label is displayed alongside the sign-out icon. On smaller screens, only the icon is visible.

### Styling and Layout

- **Container**: A `header` element with:
  - Fixed height (`h-16`).
  - Horizontal padding (`px-5`).
  - Sticky positioning (`sticky top-0`) to stay visible during scrolling.
  - Shadow effect (`shadow-md`) and a bottom border (`border-b`).
- **Logo Section**:
  - Includes a speedometer icon from the `@phosphor-icons/react` library.
  - Displays the application name in blue, styled with bold, large text.
- **Sign-out Section**:
  - Contains a sign-out icon and optional label.
  - Animates on hover with a scaling effect for a polished user experience.

---

## Dependencies

- **@phosphor-icons/react**: Provides the `Speedometer` and `SignOut` icons. Install with:
  ```bash
  npm install @phosphor-icons/react
  ```

# MainSection Component

The `MainSection` component serves as the central content area of the dashboard. It organizes and manages roles and user information, providing interactive features such as role-based permission updates, user filtering, and the ability to add new users.

---

## Features

- **Role Management**: Displays and allows editing of roles, their permissions, and associated account numbers.
- **User Information**: Provides a detailed view of project members, including their roles, statuses, and actions.
- **Dynamic Filters**: Allows filtering of users by role or showing all users.
- **Add User Functionality**: Includes a button to open a modal for adding new users.
- **Responsive Design**: Adapts layouts and spacing for various screen sizes.

---

## Props

The `MainSection` component does not accept any props directly. Instead, it interacts with hooks and manages state internally.

---

## Behavior and Logic

### Role Management

- **Initial Roles**:
  - Three roles are pre-defined: **Super Admin**, **Admin**, and **Member**.
  - Each role includes specific permissions (`create`, `read`, `update`, `delete`) and an account number (`acn`).
- **Permission Updates**:
  - Clicking a permission checkbox updates the permissions for the corresponding role dynamically using the `handlePermissionChange` function.
- **Account Count Updates**:
  - Uses a `useEffect` hook to count the number of users associated with each role and updates the `roleArray` state.

### User Information

- **Data Source**:
  - Fetches user data from the `useUser` custom hook.
- **Filtering**:
  - The `handleFilter` function sets the active role filter.
  - A `useEffect` hook dynamically filters users based on the active role or shows all users.
- **Rows**:
  - Each user is rendered as a `Row` component, displaying their details and actions.

### Layout and Styling

- **Main Structure**:
  - Two sections:
    1. **Role Section**: Displays role cards for managing roles and permissions.
    2. **User Info Section**: Shows a table of project members and their details.
- **Styling**:
  - Utilizes responsive spacing, grid layout for the table, and interactive hover effects for buttons.

### Interaction

- **Add User**:
  - The "Add User" button opens a modal using the `useCreateUserModal` hook.
- **Dynamic Content**:
  - Role cards and user rows are generated dynamically based on state data.

---

## Dependencies

- **RoleCard Component**: Handles the display and management of individual roles. Ensure it is implemented in `./RoleCard`.
- **FilterBtn Component**: Provides filter buttons for roles. Implemented in `./FilterBtn`.
- **Row Component**: Displays individual user rows in the table. Implemented in `./Row`.
- **Custom Hooks**:
  - `useCreateUserModal`: Manages the modal state for adding users.
  - `useUser`: Provides access to the current list of users.
- **@phosphor-icons/react**: Provides icons such as `UserCirclePlus`. Install with:
  ```bash
  npm install @phosphor-icons/react
  ```

# RoleCard Component

The `RoleCard` component displays a role with its associated permissions and allows toggling the permissions through checkboxes. This component is used in the dashboard to manage roles and their permissions.

---

## Features

- **Displays Role Information**: Shows the role name and the number of accounts associated with it.
- **Permissions Management**: Each role can have one or more permissions, which can be toggled on or off by interacting with checkboxes.
- **Dynamic Permission Styles**: Each permission has a color-coded background to visually distinguish them (e.g., create, read, update, delete).

---

## Props

| Prop                     | Type       | Description                                                                                   |
| ------------------------ | ---------- | --------------------------------------------------------------------------------------------- |
| `role`                   | `string`   | The name of the role (e.g., "Super Admin", "Admin", "Member").                                |
| `permissions`            | `array`    | An array of permissions for the role (e.g., `["create", "read"]`).                            |
| `acn`                    | `number`   | The number of accounts associated with the role.                                              |
| `handlePermissionChange` | `function` | Function to handle changes in the permissions (called when a checkbox is toggled).            |
| `index`                  | `number`   | The index of the role in the list, used to uniquely identify the role for permission updates. |

---

## Behavior and Logic

### Permissions Management

- The component displays checkboxes for each permission associated with the role: **create**, **read**, **update**, and **delete**.
- **Permission Toggle**:
  - Each permission can be toggled on or off using the checkboxes. The `handlePermissionChange` function is called when a checkbox is clicked, updating the parent component with the new permission state.
  - Permissions are dynamically color-coded:
    - **Create**: Blue
    - **Read**: Green
    - **Update**: Yellow
    - **Delete**: Red

### Account Count

- The `acn` value displays the number of accounts associated with the role. The component conditionally shows "ACCOUNT" or "ACCOUNTS" based on the count.

### Styling

- The component uses Tailwind CSS classes for layout and styling.
  - Each permission has a color-coded background depending on its type.
  - The component is responsive, adjusting its layout from a column to a row on medium-sized screens and larger.

### Permission Color Logic

- The `getPermissionColor` function returns the appropriate background color based on the permission type.
  - `create`: `bg-blue-300`
  - `read`: `bg-green-300`
  - `update`: `bg-yellow-300`
  - `delete`: `bg-red-300`

---

## Dependencies

- **None**: The component relies on props passed from the parent for functionality and does not have any external dependencies.

---

## Notes

- The component expects `handlePermissionChange` to be a function that updates the parent component’s state when a permission is toggled.
- This component is designed for flexibility, allowing roles with various combinations of permissions.

# Row Component

The `Row` component displays individual user information in a table row format, including their profile picture, name, role, status, and actions (edit/delete). It is used within the user management section of the dashboard to manage users efficiently.

---

## Features

- **User Information Display**: Displays the user's profile picture, name, role, and status.
- **Conditional Status Styling**: Status text changes color based on the user’s current status (`active` or otherwise).
- **Actionable Buttons**: Provides edit and delete actions for each user with appropriate permissions and restrictions.

---

## Props

| Prop     | Type     | Description                                                  |
| -------- | -------- | ------------------------------------------------------------ |
| `name`   | `string` | The name of the user.                                        |
| `role`   | `string` | The role of the user (e.g., "Admin", "Super Admin", etc.).   |
| `status` | `string` | The current status of the user (e.g., "Active", "Inactive"). |
| `id`     | `string` | The unique identifier of the user.                           |

---

## Behavior and Logic

### User Actions

- **Delete User**:
  - The `handleDelete` function deletes a user.
  - If the user’s role is "Super Admin", it prevents deletion with an error toast (`toast.error("Cannot delete super admin")`).
  - Otherwise, it triggers the `deleteUser` function and displays a success message (`toast.success("User deleted successfully")`).
- **Edit User**:
  - The `handleEdit` function opens the edit modal for a user.
  - If the user is a "Super Admin", it prevents editing with an error toast (`toast.error("Cannot edit super admin")`).
  - For other users, it triggers the `setUser` function to set the user details in the modal and opens the modal using the `open` function.

### Status Styling

- The user’s status is displayed in different colors based on the value:
  - **Active**: Green (`text-green-500`).
  - **Inactive**: Gray (`text-gray-500`).

### Profile Picture

- The component includes a profile picture (`dp.jpg`), which scales based on the screen size:
  - On screens larger than `768px`, the image is 24px by 24px.
  - On smaller screens, it is 18px by 18px.

### Actions

- The component includes two clickable icons (edit and delete) with hover effects:
  - **Trash Icon**: For deleting the user.
  - **Pencil Icon**: For editing the user’s information.

### Responsiveness

- The component is responsive and adjusts the profile image size based on the screen width.

---

## Dependencies

- **useWindowSize**: Custom hook to get the current screen width and adjust image sizes accordingly.
- **useUser**: Custom hook to interact with the state management for user data (e.g., `deleteUser`).
- **useEditUserModal**: Custom hook to open the user edit modal and set user details.
- **react-hot-toast**: Used for displaying toast messages (success and error).

---

## Notes

- The `Row` component provides functionality for user management with restrictions in place for "Super Admin" users, preventing them from being edited or deleted.
- It’s designed for use in a user list or table, where each row represents a user with actionable items (edit and delete).

# FilterBtn Component

The `FilterBtn` component is a button that displays a role name and the number of users associated with that role. It allows the user to filter the user list based on the selected role, highlighting the active filter with an underline.

---

## Features

- **Dynamic Role Display**: Displays a role name along with the count of users assigned to that role.
- **Active Filter Highlight**: The button is visually highlighted with an underline when it is the active filter.
- **Click Handler**: The button triggers a function (`handleClick`) to filter the user list when clicked.

---

## Props

| Prop          | Type       | Description                                                                              |
| ------------- | ---------- | ---------------------------------------------------------------------------------------- |
| `role`        | `string`   | The name of the role (e.g., "Admin", "Super Admin", "Member").                           |
| `number`      | `number`   | The number of users assigned to the role.                                                |
| `handleClick` | `function` | The function to handle the button click, typically used to set the active filter.        |
| `active`      | `boolean`  | A flag indicating if this filter button is currently active (applies underline styling). |

---

## Behavior and Logic

### Role and User Count

- The button displays the role name and the number of users assigned to that role, formatted as:
  - `role (number)`

### Active Filter Styling

- If the button is active, it will be underlined using `underline` CSS class, with an offset applied using `underline-offset-8`.

### Click Action

- When clicked, the `handleClick` function is invoked, which typically updates the filter state (e.g., to display only users of the selected role).

---

## Styling

- **Active Filter**: When the `active` prop is true, the role name is underlined to indicate it is the selected filter.
- **Text Styling**: The button text is styled with a blue color (`text-blue-800`) and adjusts its size based on screen size:
  - Default: `text-sm`
  - On larger screens: `text-base`

---

## Notes

- The `FilterBtn` component is designed to be used in a user management interface where users can filter the list by roles (e.g., Admin, Super Admin).
- It is flexible, allowing any number of roles and user counts to be passed dynamically.

# Modal Component

The `Modal` component displays a modal dialog with a title, content, and a close button. It is conditionally rendered based on the `open` prop. When the `open` prop is true, the modal is shown; otherwise, it remains hidden. The modal includes a close button that triggers the `onClose` function.

---

## Features

- **Conditional Rendering**: The modal is displayed or hidden based on the `open` prop.
- **Close Button**: The modal includes a close button (represented by an "X" icon) that triggers the `onClose` function when clicked.
- **Custom Title and Content**: The modal's title and content are customizable through the `title` and `children` props, respectively.

---

## Props

| Prop       | Type       | Description                                                           |
| ---------- | ---------- | --------------------------------------------------------------------- |
| `title`    | `string`   | The title of the modal, displayed at the top of the modal.            |
| `children` | `node`     | The content to be displayed inside the modal body.                    |
| `onClose`  | `function` | The function that will be triggered when the close button is clicked. |
| `open`     | `boolean`  | A boolean indicating whether the modal is visible or hidden.          |

---

## Behavior and Logic

### Conditional Rendering

- The modal is only rendered when the `open` prop is `true`. If `open` is `false`, the modal will not be displayed.

### Close Functionality

- The close button (`X` icon) triggers the `onClose` function passed as a prop, allowing for the modal to be dismissed.

---

## Styling

- **Overlay**: The modal has a semi-transparent black background overlay (`bg-black bg-opacity-30`) to dim the rest of the screen.
- **Modal Positioning**: The modal is centered both vertically and horizontally using CSS transforms (`top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2`).
- **Modal Box**: The modal has a white background (`bg-white`), rounded corners (`rounded-lg`), and is constrained to a width of `320px`.
- **Close Button**: The close button is styled with a hover effect, changing its scale slightly when hovered (`hover:scale-105`) and transitions smoothly (`transition-all duration-300 ease-in-out`).

---

## Notes

- The modal can be customized with any content passed as `children`. This can be form fields, text, or any other React components.
- The modal's appearance and behavior are flexible and can be further extended with footer buttons or additional functionalities.

# CreateUserModal Component

The `CreateUserModal` component is a modal dialog used for creating a new user. It includes a form where the user can input their name, select a role, and choose their status. Upon form submission, a new user is added to the state, and the modal is closed. The form data is managed with React's `useState` hook.

---

## Features

- **Modal Display**: The component utilizes the `Modal` component to display the form in a modal dialog.
- **Form Fields**: The form includes three fields: Name, Role, and Status, which are required for submission.
- **Toast Notifications**: Upon successful submission, a success toast is displayed.
- **State Management**: Form data is managed using `useState`, and the user is added via the `addUser` function from the `useUser` hook.

---

## Props

No props are passed directly to the `CreateUserModal` component, but it relies on the `isOpen` and `close` states from the `useCreateUserModal` hook to control the modal's visibility.

---

## Behavior and Logic

### Form Data Management

- **Name Field**: Users are required to input their name in a text field. The name is managed in the `formData.name` state.
- **Role Field**: A dropdown menu allows the user to select a role for the new user. The options available are "Super Admin", "Admin", and "Member". The selected role is stored in the `formData.role` state.
- **Status Field**: A dropdown menu lets the user choose the status of the user as either "Active" or "Inactive". This choice is saved in the `formData.status` state.

### Form Submission

- Upon form submission, the `handleSubmit` function is triggered. It prevents the default form submission, invokes the `addUser` function to add the new user, displays a success toast message (`toast.success("User created successfully")`), and closes the modal using the `close` function from the `useCreateUserModal` hook.

---

## Styling

- The form fields are styled using Tailwind CSS classes. Each field has padding (`p-3`), flex layout (`flex flex-col`), and gap (`gap-4`) for spacing.
- Labels are styled with the `lab` class, and inputs have basic styling with a focus on accessibility (`required` attribute).
- The submit button is styled with a blue background (`bg-blue-500`), white text (`text-white`), and hover effects for interactivity (`hover:bg-blue-600`).

---

## Notes

- The `CreateUserModal` component makes use of hooks like `useCreateUserModal` and `useUser` to control state and manage the visibility of the modal and the addition of users.
- The modal is only visible when `isOpen` from `useCreateUserModal` is `true`.
- If the form is filled correctly, the `Save` button is enabled to submit the data and close the modal.

# EditUserModal Component

The `EditUserModal` component is used for editing the details of an existing user. It opens as a modal and allows users to update the name, role, and status of a user. Upon submission, the user’s information is updated, and the modal closes. The component is integrated with state management and hooks to handle form data, modal visibility, and user editing.

---

## Features

- **Modal Display**: The component utilizes the `Modal` component to show the user-editing form.
- **Form Fields**: The form includes three fields: Name, Role, and Status, which are required for submission.
- **Toast Notifications**: Upon successful form submission, a success toast message is shown.
- **State Management**: The form data is managed using React’s `useState` hook, and user data is updated via the `editUser` function from the `useUser` hook.

---

## Props

No props are passed directly to the `EditUserModal` component. However, it relies on the `isOpen` and `user` values from the `useEditUserModal` hook to control the modal's visibility and pre-fill the form with the current user's data.

---

## Behavior and Logic

### Form Data Management

- **Name Field**: Users can modify their name using an input field. The field is managed with the `formData.name` state.
- **Role Field**: The role of the user can be modified using a dropdown menu with the options "Super Admin", "Admin", and "Member". The selected role is stored in the `formData.role` state.
- **Status Field**: Users can select their status (either "Active" or "Inactive") from a dropdown. This choice is saved in the `formData.status` state.

### Form Submission

- Upon submission, the `handleSubmit` function is triggered, which:
  - Prevents the default form submission behavior.
  - Uses the `editUser` function to update the user’s data.
  - Displays a success toast message (`toast.success("User edited successfully")`).
  - Closes the modal using the `close` function from `useEditUserModal`.

### Synchronization with `user`

- The `useEffect` hook ensures that the form data (`formData`) is always synchronized with the user data passed from `useEditUserModal`. If the `user` object changes, the form data is updated accordingly.

---

## Styling

- The form fields are styled using Tailwind CSS classes, including padding (`p-3`), flexbox layout (`flex flex-col`), and spacing (`gap-4`).
- Labels are styled with the `lab` class, and input fields have basic styling with a `required` attribute.
- The submit button is styled with a blue background (`bg-blue-500`), white text (`text-white`), and hover effects for interactivity (`hover:bg-blue-600`).

---

## Notes

- The `EditUserModal` component makes use of hooks like `useEditUserModal` and `useUser` to manage the user data, modal visibility, and user editing functionality.
- The modal is only displayed when the `isOpen` value from `useEditUserModal` is `true`, and it is pre-filled with the data of the selected user (`user`).
- The `Save` button is enabled once all form fields are correctly filled.
