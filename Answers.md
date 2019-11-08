1. What problem does the context API help solve?
    We don't have to be prop drilling to give/pass state around. It is like a notebook where we can keep/store all our data/state and whatever needs to read that notebook we can tell it to.

2. In your own words, describe `actions`, `reducers` and the `store` and their role in Redux. What does each piece do? Why is the store known as a 'single source of truth' in a redux application?
    Actions is info that describes events happening in the UI
    Reducers are the pure functions that get our data/state and actions as the argument for the function and they have switch statements.
    Store is like the notebook because all the data is there and not on a bunch of sticky notes everywhere.

3. What is the difference between Application state and Component state? When would be a good time to use one over the other?
    

4. Describe `redux-thunk`, what does it allow us to do? How does it change our `action-creators`?
5. What is your favorite state management system you've learned and this sprint? Please explain why!
