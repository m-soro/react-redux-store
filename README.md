# Redux and Redux Toolkit

Redux is a state management tool for React.
Redux Toolkit simplifies the process of working with Redux

It has three parts:

### 1. Actions
* Are objects that are used to send data to the Redux Store
* It usually contains two properties
```
{
  payload: data for store
  type: do something for store
}
```

### 2. Reducers
* Actions. It does something for the store.
* For example: add, remove, update
* Reducers have state and what it intends to do as parameters

### 3. Store
* There is only one store per application
* It keeps the application state
* It can contain one or more slices

**Steps**
1. Install redux and redux toolkit
2. Create store in store folder, configure and export it
3. Provide access to the store my wrapping the main.jsx or index.jsx with the Provider from react-redux
4. Create slice or slices, create all the reducers, export it and then add it to the store.


## Handle Asynchronous code using createAsyncThunk

### To simulate a fetch from a server
* Use `npm install -g json-server`
* serve the json with this format ` json-server '<theDataPath/file>.json'`
