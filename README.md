The Name of my Project id "Dev Stack"

-->This Project is mainly works with all the Development tools we use in our day to day devlopments.

Technology that i have used are => React, Node, TailwindCss, typeScript, vite, vercel, github etc

3 features about your project are-->
1.Shows all the techknowlogies available with proper description
2.we can select the tech. as our choice and add them on the stack
3.we can also remove from the stack and see the toast notification 
and many more



 1. What is JSX, and why is it used in React?
Answer: JSX (JavaScript XML) is a syntax extension that allows us to write HTML-like markup inside JavaScript files. It is used in React because it makes UI structure clean, intuitive, and easy to read while combining HTML structure directly with JavaScript logic.

---

 2. What is the difference between props and state?
Answer: 
- Props (Properties) are read-only data passed from a parent component down to a child component.
- State is internal data managed within a component that can change over time in response to user actions, causing React to re-render the UI when updated.

---

 3. What does the useState hook do, and where did you use it in this project?
Answer: The useState hook allows functional components to create and update local state variables. In this project:
- Used in Techs.tsx to store and update the array of selected technologies (selectedStack).
- Used in Nav.tsx to toggle the mobile hamburger navigation menu (isMenuOpen).

---

 4. What does the useEffect hook do, and why did you need it to load the JSON data?
Answer: The useEffect hook executes side effects in a component, such as data fetching or subscriptions. It is used to fetch data from a JSON file when the component loads so that data fetching happens asynchronously without blocking the initial page render.

---

 5. Why does every item in a .map() list need a unique key prop?
Answer: React uses the key prop during reconciliation to track individual items in a list. A unique key helps React identify which items have changed, been added, or removed, allowing efficient DOM updates without re-rendering the entire list.

---

 6. What is conditional rendering? Show one place you used it.
Answer: Conditional rendering means displaying different UI components or elements depending on certain conditions (like checking if an array is empty).  
Example in this project: In SelectedTech.tsx, conditional rendering is used to display an "Your stack is empty" message when selectedStack.length === 0, and the list of selected tech items with a "Clear All" button when items exist.

---

 7. How do you pass data from a parent component to a child component, and how does a child send something back to the parent?
Answer: 
- Parent to Child: Data is passed down as props ( passing selectedStack from Techs to AvailableTech).
- Child to Parent: The parent passes a callback function as a prop to the child, and the child invokes that function with data when an action occurs ( TechCard calling onAddToStack(tech)).
