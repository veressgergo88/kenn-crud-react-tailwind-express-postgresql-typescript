Steps:

1. npm create vite@latest (- React - Typescript)
2. install Tailwind and DaisyUI
3. Create NavBar DaisyUI component
3. Create TableList component
4. Create Client type
5. Mapping TableList data
6. Create buttons in TableList
7. Create ModalForm component
8. Add Props to the components
9. Create input fields in the ModalForm
10. Handle the input in the ModalForm and finishing the frontend version 1.0
11. Create backend folder, install in the folder typescript, express, dotenv
12. Folder structure
13. Install pgAdmin
14. npm i cors pg
15. pgAdmin: Create Database client_db
            - query:
            CREATE TABLE clients_tb (
                id SERIAL PRIMARY KEY,
                name VARCHAR(100) NOT NULL,
                email VARCHAR(100) UNIQUE NOT NULL,
                job VARCHAR(50),
                rate NUMERIC(10, 2) DEFAULT 100.00,
                isActive BOOLEAN DEFAULT TRUE
            )
16. pgAdmin: Add data to the table
            - query:
            INSERT INTO clients_tb (name, email, job, rate, isActive) VALUES
            ('Alice Johnson', 'alice.johnson@example.com', 'Software Engineer', 120.00, TRUE),
            ('Bob Smith', 'bob.smith@example.com', 'Product Manager', 150.00, TRUE),
            ('Charlie Davis', 'charlie.davis@example.com', 'Designer', 90.00, TRUE),
            ('Dana Lee', 'dana.lee@example.com', 'Data Analyst', 110.00, FALSE),
            ('Eve Martin', 'eve.martin@example.com', 'HR Specialist', 100.00, TRUE);
17. Create .env in the backend source folder
18. Connect the database and api the data
19. Install Axios on the frontend side
20. Api data from PostgreSQL database to TableList
21. Filtered the data in the Search field