const admin= {
  "id": 0,
  "name": "Admin",
  "email": "admin@task.com",
  "password": "123"
}

const employees= [
  {
    "id": 1,
    "name": "Rahul",
    "email": "emp1@task.com",
    "password": "123",
    "taskCounts": {
      "active": 0,
      "newTask": 1,
      "completed": 1,
      "failed": 1
    },
    "tasks": [
      {
        "title": "Design Login UI",
        "description": "Create a clean login page UI",
        "date": "2026-02-20",
        "category": "design",
        "active": false,
        "newTask": true,
        "completed": false,
        "failed": false
      },
      {
        "title": "Fix Navbar Bug",
        "description": "Resolve alignment issue in navbar",
        "date": "2026-02-18",
        "category": "dev",
        "active": false,
        "newTask": false,
        "completed": true,
        "failed": false
      },
      {
        "title": "Test Dashboard",
        "description": "Perform UI testing",
        "date": "2026-02-19",
        "category": "testing",
        "active": false,
        "newTask": false,
        "completed": false,
        "failed": true
      }
    ]
  },
  {
    "id": 2,
    "name": "Aman",
    "email": "emp2@task.com",
    "password": "123",
    "taskCounts": {
      "active": 1,
      "newTask": 1,
      "completed": 1,
      "failed": 1
    },
    "tasks": [
      {
        "title": "Build Signup Page",
        "description": "Create signup form",
        "date": "2026-02-21",
        "category": "dev",
        "active": true,
        "newTask": false,
        "completed": false,
        "failed": false
      },
      {
        "title": "API Integration",
        "description": "Connect frontend with backend",
        "date": "2026-02-22",
        "category": "dev",
        "active": false,
        "newTask": false,
        "completed": true,
        "failed": false
      },
      {
        "title": "Write Test Cases",
        "description": "Add unit tests",
        "date": "2026-02-23",
        "category": "testing",
        "active": false,
        "newTask": false,
        "completed": false,
        "failed": true
      },
      {
        "title": "UI Improvements",
        "description": "Enhance button styles",
        "date": "2026-02-24",
        "category": "design",
        "active": false,
        "newTask": true,
        "completed": false,
        "failed": false
      }
    ]
  },
  {
    "id": 3,
    "name": "Sahil",
    "email": "emp3@task.com",
    "password": "123",
    "taskCounts": {
      "active": 1,
      "newTask": 0,
      "completed": 1,
      "failed": 1
    },
    "tasks": [
      {
        "title": "Create Dashboard",
        "description": "Build main dashboard layout",
        "date": "2026-02-20",
        "category": "dev",
        "active": true,
        "newTask": false,
        "completed": false,
        "failed": false
      },
      {
        "title": "Bug Fixing",
        "description": "Fix console errors",
        "date": "2026-02-18",
        "category": "dev",
        "active": false,
        "newTask": false,
        "completed": true,
        "failed": false
      },
      {
        "title": "Test APIs",
        "description": "Check API responses",
        "date": "2026-02-19",
        "category": "testing",
        "active": false,
        "newTask": false,
        "completed": false,
        "failed": true
      }
    ]
  },
  {
    "id": 4,
    "name": "Neha",
    "email": "emp4@task.com",
    "password": "123",
    "taskCounts": {
      "active": 0,
      "newTask": 1,
      "completed": 1,
      "failed": 1
    },
    "tasks": [
      {
        "title": "Landing Page Design",
        "description": "Design hero section",
        "date": "2026-02-20",
        "category": "design",
        "active": false,
        "newTask": true,
        "completed": false,
        "failed": false
      },
      {
        "title": "Optimize Images",
        "description": "Reduce image size",
        "date": "2026-02-18",
        "category": "dev",
        "active": false,
        "newTask": false,
        "completed": true,
        "failed": false
      },
      {
        "title": "Cross Browser Testing",
        "description": "Test on multiple browsers",
        "date": "2026-02-19",
        "category": "testing",
        "active": false,
        "newTask": false,
        "completed": false,
        "failed": true
      }
    ]
  },
  {
    "id": 5,
    "name": "Priya",
    "email": "emp5@task.com",
    "password": "123",
    "taskCounts": {
      "active": 1,
      "newTask": 0,
      "completed": 1,
      "failed": 1
    },
    "tasks": [
      {
        "title": "Profile Page",
        "description": "Build user profile UI",
        "date": "2026-02-21",
        "category": "dev",
        "active": true,
        "newTask": false,
        "completed": false,
        "failed": false
      },
      {
        "title": "Update CSS",
        "description": "Refactor styles",
        "date": "2026-02-22",
        "category": "design",
        "active": false,
        "newTask": false,
        "completed": true,
        "failed": false
      },
      {
        "title": "Bug Testing",
        "description": "Find UI bugs",
        "date": "2026-02-23",
        "category": "testing",
        "active": false,
        "newTask": false,
        "completed": false,
        "failed": true
      }
    ]
  },
  {
    "id": 6,
    "name": "Arjun",
    "email": "emp6@task.com",
    "password": "123",
    "taskCounts": {
      "active": 1,
      "newTask": 0,
      "completed": 1,
      "failed": 1
    },
    "tasks": [
      {
        "title": "Notifications UI",
        "description": "Design notification panel",
        "date": "2026-02-24",
        "category": "design",
        "active": true,
        "newTask": false,
        "completed": false,
        "failed": false
      },
      {
        "title": "Backend Fix",
        "description": "Fix API errors",
        "date": "2026-02-22",
        "category": "dev",
        "active": false,
        "newTask": false,
        "completed": true,
        "failed": false
      },
      {
        "title": "Testing Flow",
        "description": "Check user flow",
        "date": "2026-02-23",
        "category": "testing",
        "active": false,
        "newTask": false,
        "completed": false,
        "failed": true
      }
    ]
  },
  {
    "id": 7,
    "name": "Karan",
    "email": "emp7@task.com",
    "password": "123",
    "taskCounts": {
      "active": 1,
      "newTask": 2,
      "completed": 0,
      "failed": 0
    },
    "tasks": [
      {
        "title": "Settings Page",
        "description": "Create settings UI",
        "date": "2026-02-25",
        "category": "dev",
        "active": true,
        "newTask": false,
        "completed": false,
        "failed": false
      },
      {
        "title": "Improve UX",
        "description": "Enhance user experience",
        "date": "2026-02-24",
        "category": "design",
        "active": false,
        "newTask": true,
        "completed": false,
        "failed": false
      },
      {
        "title": "Test Performance",
        "description": "Check app speed",
        "date": "2026-02-23",
        "category": "testing",
        "active": false,
        "newTask": true,
        "completed": false,
        "failed": false
      }
    ]
  }
]


  export const SetLocalStorage = ()=>{
    localStorage.setItem("admin",JSON.stringify(admin))
    localStorage.setItem("employees", JSON.stringify(employees))
  }
  
  export const GetLocalStorage=()=>{
    const admin =JSON.parse(localStorage.getItem("admin"))
   const employees = JSON.parse(localStorage.getItem("employees"))

   return {admin:admin|| null,employees: employees|| []}
  }