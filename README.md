# Gitlab Access Checker

## Description

This application is used to verify users' access to various groups and projects in Gitlab. It is a tool with a simple interface that, based on the ID of the top-level group, retrieves information about users and their access rights using the Gitlab REST API and displays them in a human-readable format.

## Technologies Used

The application was built using Next.js version 14 and React Query.

## How the Application Works

The user enters the ID of the top-level group as an input argument, and the application retrieves information about users, their memberships in groups and projects, and their access rights using the Gitlab REST API. This information is then processed and displayed in a human-readable format.

## Running the Application

To run the application, follow these steps:

1. Install dependencies using the command:
   ```
   npm install
   ```
   or
   ```
   yarn install
   ```
2. Start the application using the command:
   ```
   npm run dev
   ```
   or
   ```
   yarn dev
   ```

## Required Data in the Output

The output of the application is a list of users with their details, including:

- Full name (first name and last name)
- Username
- List of groups the user is a member of and their permissions
- List of projects the user is a member of and their permissions

This enhancement provides more clarity on the level of access each user has within the groups and projects.

The total number of users is also provided at the end of the output.

## Sample Output

```

Jan Konáš (@jan.konas)
Groups: [apploud-external/testovaci-zadani (Owner)]
Projects: []

Jan Konáš (@jankonas1)
Groups: [apploud-external/testovaci-zadani (Owner)]
Projects: []

Michal Pham (@KhanhPhams)
Groups: [apploud-external/testovaci-zadani/skupina-3 (Guest)]
Projects: [apploud-external/testovaci-zadani/uloha-1 (Guest)]

Martin Špicar (@martin.spicar)
Groups: []
Projects: [apploud-external/testovaci-zadani/uloha-1 (Developer), apploud-external/testovaci-zadani/skupina-2/skupina-4/projekt-3 (Guest), apploud-external/testovaci-zadani/skupina-3/projekt-2 (Guest)]

Michal Bílý (@MichalBily)
Groups: [apploud-external/testovaci-zadani/skupina-1 (Guest)]
Projects: []

Total Users: 5

```

## Scalability

The application was tested on a test environment with 5 users, 5 groups, and 4 projects. However, it is designed to work in a real environment with a much larger number of projects, groups, and users.

## Development Access Information

For development, a read-only test environment is available with the following details:

- ID of the top-level group: `10975505`
- Access token: `naRAbrD8qPXaXVASQ8Zy`
- App URL: `http://localhost:3000` - change PORT depending on your current available if needed
