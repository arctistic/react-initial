# React

## Notes

#### React CDN
    1. src link: what does it have?  
        - React Code

    2. Why 2 script files?  
        - 1st file ->  react.development.js -> core react  
        - 2nd file -> react-dom.development.js -> dom operations  

    3. Why not have 1 file instead?  
        - React does not only work on browers  
            - ReactNative  

#### Basic Code
    **const heading = React.createElement('h1', {id: 'heading, xyz: 'abc'}, 'Hello World');**  

    1st parameter: 'h1' is the tpe of html element  
    2nd parameter: attributes in the from of a object  
    3rd parameter: content/children that goes inside the rendered html element  
    * attributes(2nd parameter) and content(3rd) make up the **props**  


    **const root =  ReactDOM.createRoot(document.getElementById('root'));*
    *  
    **root.render('heading');**  

    render() takes the heading object and converts it into h1 tag and puts it inside the root  

#### console.log(heading);
    `{
        $$ typeof: Symbol(react.element)
        ...
        props: { 
            id: 'heading',
            xyz: 'abc',                     // attributes+children
            children: "Hello World"
        }
    }`

#### JSX is the solution for complicated nested HTML structure

#### 2 links in React CDN
    1. 2 links -  
        - React Core functions  
        - React DOM manupilation func  

    2. Why 2 links and not just consolidate in 1?  
        - React is not only used in browser for DOM manupilation but also for other app development like android/iOS  
        
    3. What is cross-origin in the script tag?  
        - The crossorigin attribute, valid on the <audio>, <img>, <link>, <script>, and <video> elements, provides support for CORS, defining how the element handles cross-origin requests, thereby enabling the configuration of the CORS requests for the element's fetched data.
