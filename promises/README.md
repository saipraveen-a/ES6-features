# Promises is ES6

The code sample demonstrates 
    
    1.  Usage of Promises in ES6.

    Promises are a better way of handling asynchronous tasks (e.g. API calls that fetch data). They are an alternative to callbacks that were extensively used in ES5.
    However, with callbacks when you have multiple handlers that need to be chained, the code gets too clumsy (called as the Callback Hell - http://callbackhell.com/).

    A promise typically has success handlers and error handlers that the caller can register using .then and .error chaining methods. The promise internally maintains a 
    list of the success and failure handlers that are queued and invoked whenever a Promise is either resolved or rejected. A handler can either handle the resolved response
    within a function or return a Promise again (or a Thenable). This way we can combine synchronous and asynchronous tasks together depending on the use case.

    **References:**

    https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise