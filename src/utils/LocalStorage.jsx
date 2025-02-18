// localStorage.clear()

const Employees = [
  {
    "id": 1,
    "name": "Ali",
    "email": "e.e@e.com",
    "password": "123",
    "tasks": [
      {
        "taskTitle": "Fix login issue",
        "taskDiscription": "Resolve the authentication error in the login system.",
        "taskDate": "2025-02-14",
        "taskCategory": "Bug Fix",
        "active": true,
        "newTask": true,
        "completed": false,
        "failed": false
      },
      {
        "taskTitle": "Fix login issue",
        "taskDiscription": "Resolve the authentication error in the login system.",
        "taskDate": "2025-02-14",
        "taskCategory": "Bug Fix",
        "active": true,
        "newTask": true,
        "completed": false,
        "failed": false
      },
      {
        "taskTitle": "Update user dashboard",
        "taskDiscription": "Enhance UI/UX for the user dashboard.",
        "taskDate": "2025-02-15",
        "taskCategory": "UI Enhancement",
        "active": true,
        "newTask": false,
        "completed": false,
        "failed": false
      },
      {
        "taskTitle": "Write unit tests",
        "taskDiscription": "Create unit tests for the API endpoints.",
        "taskDate": "2025-02-16",
        "taskCategory": "Testing",
        "active": false,
        "newTask": false,
        "completed": true,
        "failed": false
      }
    ],
    "taskSummary": {
      "completed": 1,
      "active": 3,
      "new": 1,
      "failed": 0
    }
  },
  {
    "id": 2,
    "name": "Jane Smith",
    "email": "jane.smith@example.com",
    "password": "123",
    "tasks": [
      {
        "taskTitle": "Optimize database queries",
        "taskDiscription": "Improve the performance of MySQL queries.",
        "taskDate": "2025-02-14",
        "taskCategory": "Database Optimization",
        "active": false,
        "newTask": false,
        "completed": true,
        "failed": false
      },
      {
        "taskTitle": "Develop API endpoints",
        "taskDiscription": "Create REST API endpoints for the new feature.",
        "taskDate": "2025-02-17",
        "taskCategory": "Backend Development",
        "active": true,
        "newTask": true,
        "completed": false,
        "failed": false
      },
      {
        "taskTitle": "Fix UI bug",
        "taskDiscription": "Resolve issue with UI rendering.",
        "taskDate": "2025-02-18",
        "taskCategory": "Bug Fix",
        "active": true,
        "newTask": false,
        "completed": false,
        "failed": false
      }
    ],
    "taskSummary": {
      "completed": 1,
      "active": 2,
      "new": 1,
      "failed": 0
    }
  },
  {
    "id": 3,
    "name": "Bob Johnson",
    "email": "bob.johnson@example.com",
    "password": "123",
    "tasks": [
      {
        "taskTitle": "Refactor React components",
        "taskDiscription": "Improve code structure and reusability.",
        "taskDate": "2025-02-16",
        "taskCategory": "Frontend Development",
        "active": true,
        "newTask": true,
        "completed": false,
        "failed": false
      },
      {
        "taskTitle": "Fix checkout bug",
        "taskDiscription": "Resolve issue with payment processing.",
        "taskDate": "2025-02-18",
        "taskCategory": "Bug Fix",
        "active": false,
        "newTask": false,
        "completed": false,
        "failed": true
      },
      {
        "taskTitle": "Improve code quality",
        "taskDiscription": "Improve code quality and maintainability.",
        "taskDate": "2025-02-19",
        "taskCategory": "Code Quality",
        "active": true,
        "newTask": false,
        "completed": false,
        "failed": false
      }
    ],
    "taskSummary": {
      "completed": 0,
      "active": 4,
      "new": 1,
      "failed": 1
    }
  },
]

  const Admin = [
    {
        "id": 1,
        "email": "admin@example.com",
        "password":"123"
      }
      
  ]


  export const setlocalStorage = () =>{
    localStorage.setItem('Employees',JSON.stringify(Employees))
    localStorage.setItem('Admin',JSON.stringify(Admin))
    
  }
  export const getlocalStorage = () =>{
    const employees = JSON.parse(localStorage.getItem('Employees'))
 
    const Admin = JSON.parse(localStorage.getItem('Admin'))

return{employees,Admin}

  }
  setlocalStorage()
  getlocalStorage()