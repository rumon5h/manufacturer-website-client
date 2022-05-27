import React from 'react';

const Blogs = () => {
    return (
        <div>
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
                    <h2 className="card-title">3. You have an array of products. Each product has a name, price, description, etc. How will you implement a search to find products by name?</h2>
                    <div>Answer: <p>3.1: </p>
                        
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