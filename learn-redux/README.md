## Important 

This code is based on a youtube tutorial :https://www.youtube.com/watch?v=CVpUuw9XSjY
I also got some help from https://www.youtube.com/watch?v=3Hi6ljgH3ng

### installation
npm install --save redux react-redux redux-thunk redux-devtools-extension 


### Core concept

Redux is used for state management purpose. This is handay when you have have a larger application and many states to track. The following concepts are very important to understand. 


### STORE
	This is a block where you can save your state values across the application. You can fine STORE related code in store.js
### ACTION
	Action represents the type of the action, here you can have the structure of the action but the actual action will not be performed here. 
### REDUCER
	This is bascially handler of the action i.e. where the actual action performs. 
### DISPATCH
	Once you have the action and reducer (action handler) you can push new action to STORE. This you perform via dispatch where you can 'dispatch' new state into STORE





