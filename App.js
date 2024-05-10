const heading = React.createElement('h1', {id: 'heading'}, "Hello World from React!");
console.log(heading);

const root = ReactDOM.createRoot(document.getElementById('root'));
console.log(root);

/*
To make this:
<div id="parent">
    <div class="child">
        <h1>I am h1 tag</h1>
        <h2>I am h2 tag<h2/>
    </div>
</div>

ReactElement(which is an Object) => HTML(browser element)

*/
const parent = React.createElement(
    'div', 
    {id: 'parent'},
    React.createElement('div', {id: 'child'}, [
        React.createElement('h1', {}, 'I am h1 tag'),
        React.createElement('h2', {}, 'I am h2 tag'),
    ])
);
console.log(parent);

// is the solution for complicated nested HTML structure is JSX


root.render(parent);