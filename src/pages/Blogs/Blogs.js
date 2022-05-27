import React from 'react';

const Blogs = () => {
    return (
        <div className='p-12'>
            <div className="card mt-3 w-[95%] bg-base-100 shadow-xl">
                <div className="card-body">
                    <h2 className="card-title">1. How will you improve the performance of a React Application?</h2>
                    <div>Answer: <p>1.1: Keeping component state local where necessary.</p>
                        <p>1.2: Memoizing React components to prevent unnecessary re-renders.</p>
                        <p>1.3: Code-splitting in React using dynamic import()</p>
                        <p>1.4: Windowing or list virtualization in React.</p>
                        <p>1.5: Lazy loading images in React.</p>
                    </div>

                </div>
            </div>
            <div className="card mt-3    w-[95%] bg-base-100 shadow-xl">
                <div className="card-body">
                    <h2 className="card-title">2. How does prototypical inheritance work?</h2>
                    <div>Answer: <p>2.1:The Prototypal Inheritance is a feature in javascript used to add methods and properties in objects. It is a method by which an object can inherit the properties and methods of another object. Traditionally, in order to get and set the [[Prototype]] of an object, we use Object. getPrototypeOf and Object.</p>
                    </div>

                </div>
            </div>
            <div className="card mt-3    w-[95%] bg-base-100 shadow-xl">
                <div className="card-body">
                    <h2 className="card-title">3.The useState() is a Hook that allows you to have state variables in functional components. React has two types of components, one is class components which are ES6 classes that extend from React and the other is functional components. Class components a Component and can have state and lifecycle methods: class Message extends React. The useState hook is a special function that takes the initial state as an argument and returns an array of two entries. Syntax: The first element is the initial state and the second one is a function that is used for updating the state.</h2>

                    <div>Answer: <p>We can also pass a function as an argument if the initial state has to be computed. And the value returned by the function will be used as the initial state. <span className='font-bold'>Importing: To use useState you need to import useState from react as shown below:
                    </span> </p>
                        <p>A unit test is a way of testing a unit - the smallest piece of code that can be logically isolated in a system. In most programming languages, that is a function, a subroutine, a method or property. The isolated part of the definition is important. In his book "Working Effectively with Legacy Code", author Michael Feathers states that such tests are not unit tests when they rely on external systems: “If it talks to the database, it talks across the network, it touches the file system, it requires system configuration, or it can't be run at the same time as any other test."
                        </p>

                        <p> Modern versions of unit testing can be found in frameworks like JUnit, or testing tools like TestComplete. Look a little further and you will find SUnit, the mother of all unit testing frameworks created by Kent Beck, and a reference in chapter 5 of The Art of Software Testing . Before that, it's mostly a mystery. I asked Jerry Weinberg about his experiences with unit testing -- "We did unit testing in 1956. As far as I knew, it was always done, as long as there were computers".</p>

                        <p>  Regardless of when and where unit testing began, one thing is for sure. Unit testing is here to stay. Let's look at some more practical aspects of unit testing.</p>
                    </div>

                </div>
            </div>
            <div className="card mt-3    w-[95%] bg-base-100 shadow-xl">
                <div className="card-body">
                    <h2 className="card-title">4.What is a unit test? Why should write unit tests?</h2>
                    <div>Answer: <p>4.1: Unit tests are typically automated tests written and run by software developers to ensure that a section of an application (known as the "unit") meets its design and behaves as intended. In procedural programming, a unit could be an entire module, but it is more commonly an individual function or procedure. </p>

                    </div>

                </div>
            </div>
            <div className="card mt-3    w-[95%] bg-base-100 shadow-xl">
                <div className="card-body">
                    <h2 className="card-title">5. What are the different ways to manage a state in a React application?</h2>
                    <div>Answer: <p>5: There are four main types of state i need to properly manage in my React application: </p>
                        <p>5.1: Local state.</p>
                        <p>5.2: Global state.</p>
                        <p>5.3: Server state.</p>
                        <p>5.4: URL state.</p>
                    </div>

                </div>
            </div>
        </div>
    );
};

export default Blogs;