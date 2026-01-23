import React from 'react'
import Modulecards from '../utils/Modulecards'



const Hero2 = () => {
    const arr = [
  {
    id: 1,
    title: "Module 01",
    subtitle: "Basic Concepts",
    description: "Learn the core concepts of React and how it works behind the scenes.",
    topics: ["What is React?", "JSX Basics", "Virtual DOM", "Project Setup (Vite / CRA)"],
    totalTopics: 6
  },
  {
    id: 2,
    title: "Module 02",
    subtitle: "Components & Props",
    description: "Understand React components, props, and how to reuse UI elements.",
    topics: ["Functional Components", "Class Components", "Props Overview", "Reusable Components"],
    totalTopics: 5
  },
  {
    id: 3,
    title: "Module 03",
    subtitle: "State & Lifecycle",
    description: "Learn how to manage state and component lifecycle in React.",
    topics: ["useState Hook", "useEffect Hook", "Class Component Lifecycle", "State Management Patterns"],
    totalTopics: 6
  },
  {
    id: 4,
    title: "Module 04",
    subtitle: "Event Handling",
    description: "Master how to handle user interactions in React.",
    topics: ["Handling Click Events", "Forms & Inputs", "Event Binding", "Synthetic Events"],
    totalTopics: 5
  },
  {
    id: 5,
    title: "Module 05",
    subtitle: "Conditional Rendering",
    description: "Render components dynamically based on conditions.",
    topics: ["if-else Statements", "Ternary Operator", "Logical && Operator", "Switch Cases in JSX"],
    totalTopics: 4
  },
  {
    id: 6,
    title: "Module 06",
    subtitle: "Lists & Keys",
    description: "Learn how to render dynamic lists efficiently using keys.",
    topics: ["Rendering Lists", "Unique Keys", "Map Function", "Nested Lists"],
    totalTopics: 5
  },
  {
    id: 7,
    title: "Module 07",
    subtitle: "Forms & Controlled Components",
    description: "Understand forms, input handling, and controlled components in React.",
    topics: ["Controlled Inputs", "Form Submission", "Validation", "useRef Hook"],
    totalTopics: 5
  },
  {
    id: 8,
    title: "Module 08",
    subtitle: "Routing with React Router",
    description: "Add client-side routing to your React application.",
    topics: ["React Router Setup", "Route Component", "Link & NavLink", "Nested Routes"],
    totalTopics: 5
  },
  {
    id: 9,
    title: "Module 09",
    subtitle: "Context API & State Management",
    description: "Learn global state management using Context API.",
    topics: ["Creating Context", "Provider & Consumer", "useContext Hook", "Avoiding Prop Drilling"],
    totalTopics: 4
  },
  {
    id: 10,
    title: "Module 10",
    subtitle: "Hooks & Advanced Patterns",
    description: "Master advanced React patterns and commonly used hooks.",
    topics: ["Custom Hooks", "useReducer Hook", "useMemo & useCallback", "Higher-Order Components"],
    totalTopics: 6
  }
];

    return (

        

        <div className='bg-gray-900 text-center'>
            <h1 className='text-5xl font-semibold font-custom p-11'>Course Modules</h1>
            <p>Learn React through well-structured modules.</p>
            <div className="p-9 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                {arr.map(function(module){
                        return <Modulecards      key={module.id} title={module.title} subtitle={module.subtitle} description={module.description}
                        topics={module.topics} totalTopics={module.totalTopics}/>
})}
                
                
            </div>




        </div>
    )
}

export default Hero2