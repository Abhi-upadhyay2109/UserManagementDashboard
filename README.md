# User Management Dashboard

A modern **User Management Dashboard** built with **React** and **TailwindCSS**.  
This project allows you to manage users with basic CRUD operations using a mock backend API (**JSONPlaceholder**) and supports locally added users.

---

## Features

- View a list of users with details: **ID, First Name, Last Name, Email, Department**  
- Add new users with **auto-incrementing ID**  
- Edit existing users (locally added users included)  
- Delete users  
- **Pagination** with dynamic limit selection (10, 25, 50, 100)  
- **Search** by name  
- **Filter** by department, first name, last name, and email  
- **Toast notifications** on add, edit, and delete actions  
- Fully **responsive UI** with TailwindCSS  

---
1. **Install dependencies**

   ```npm install```

2. **Run the development server**

   ```npm run dev```

## Technologies Used
- React 18

- TailwindCSS

- Axios

- react-hot-toast


## Challenges Faced

- JSONPlaceholder API only provides 10 users, so pagination and ID auto-increment had to be simulated on the frontend.
- Managing state for add, edit, delete operations efficiently.
- Ensuring responsive UI for different screen sizes.
- Implementing toast notifications for feedback on actions.

## Future Improvements

- Integrate with a real backend (Node.js + MongoDB) for persistent storage.
- Add role-based authentication for admin and regular users.
- Enhance filter and search functionality with multiple fields.
- Implement server-side pagination for large datasets.
- Add animations and improved UI/UX feedback for better user experience.