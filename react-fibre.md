# React DOM and Fiber Algorithm

1. **createRoot Behavior**
   - `createRoot` creates its own DOM and then compares it with the web browser's DOM, updating only those components that have actually changed.

2. **Browser DOM Reload**
   - The browser removes the entire DOM and then recreates it with the updated values. This process is known as a reload.

3. **Virtual DOM**
   - The Virtual DOM tracks the entire DOM in a tree-like structure and updates only those values that have changed.

4. **Network Call Dependency**
   - Some values depend on network calls. If we update a value, it might be updated immediately via a network call. This can result in needing to update the value again.

5. **Avoiding Overhead**
   - To avoid the overhead of updating values immediately, we can drop update calls for values that are updated via network calls.

6. **React Fiber Algorithm**
   - The current algorithm used by React is called the React Fiber algorithm.

7. **Reconciliation**
   - The algorithm React uses to differentiate the web browser's DOM tree and React's DOM tree formed through `createRoot` is called reconciliation.

8. **Virtual DOM and Reconciliation**
   - Reconciliation is the algorithm behind what is popularly known as the Virtual DOM.

9. **UI Updates**
   - In a UI, it is not necessary for every update to be applied immediately.
