1. What problem does the context API help solve?
    We don't have to be prop drilling to give/pass state around. It is like a notebook where we can keep/store all our data/state and whatever needs to read that notebook we can tell it to.

2. In your own words, describe `actions`, `reducers` and the `store` and their role in Redux. What does each piece do? Why is the store known as a 'single source of truth' in a redux application?
    Actions is info that describes events happening in the UI
    Reducers are the pure functions that get our data/state and actions as the argument for the function and they have switch statements.
    Store is like the notebook because all the data is there and not on a bunch of sticky notes everywhere.

3. What is the difference between Application state and Component state? When would be a good time to use one over the other?
    Application State = stored globally, the component can sort of go into the store to look for the data it needs. This is very useful when we have a ton of components using the same state, makes managing all that flow of state really easy (lol at easy).

    Component State = State/data is stored inside (locally) each component. We then have to pass it around to other components where we need it.

4. Describe `redux-thunk`, what does it allow us to do? How does it change our `action-creators`?
    It is middleware and it lets us use asynchronous ops. It changes the action and creates so we can run actions depending on state in the api call.

5. What is your favorite state management system you've learned and this sprint? Please explain why!
    For me it is hard to say whether or not I have a favorite but I will go with Redux just because I think it does make sense why it was created for large applications however I am looking into GraphQL on udemy and I have read some drawbacks as well as a ton of people really loving it.
