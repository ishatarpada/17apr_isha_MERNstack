import React from 'react'
import Function from './Function'
import Class from './Class'

export default function Answer() {
  return (
    <div>
        <div className="container w-8/12 text-white mt-10 mx-auto">
            <div className="container mb-5">
                <h1 className='text-3xl underline font-bold mb-5'>1. Class Component Life Cycle:</h1>
                <p className='text-xl'>
                    <ul className='list-decimal ms-10'>
                        <li>
                            <p className='font-bold'>Mounting: <span className='font-normal'> When a component is being inserted into the DOM.</span>
                            </p>
                           
                        </li>
                        <br />
                        <li>
                            <p className='font-bold'>Updating: <span className='font-normal'>When a component is being re-rendered due to changes in props or state.</span></p>
                        </li>
                        <br />
                        <li>
                            <p className='font-bold'>Unmounting <span className='font-normal'>When a component is being removed from the DOM.</span></p>
                        </li>
                        <br />
                        <li>
                            <p className='font-bold'>Error Handling: <span className='font-normal'>When an error is thrown in a descendant component.</span></p>
                        </li>
                    </ul>
                </p>

               <h2 className='text-xl font-bold mt-5'>&#10149; Example:</h2> 
               <Class/>
            </div>
            <hr />
            <div className="container my-5">
                <h1 className='text-3xl underline font-bold mb-5'>2. Function Component Life Cycle With Hooks:</h1>
                <p className='text-xl'>
                    <ul className='list-decimal ms-10'>
                        <li>
                            <p className='font-bold'>Mounting and Updating: <span className='font-normal'> Handled by the 'useEffect' hook.</span>
                            </p>
                            <br />
                            <ul className='ms-10 list-disc'>
                                <li>
                                    <span className='font-bold'>useEffect(callback, dependencies): </span>Runs the callback after the component renders. If dependencies (an array) are provided, the effect runs only when one of the dependencies changes. Without dependencies, it runs after every render.  <br />
                                    <br />
                                    <ul className='ms-10 list-disc'>
                                        <li>Mounting: <span className='font-bold'>useEffect(() =&gt; &#123; /* initialization code */ &#125; , []); </span>(empty dependency array means it runs only once after the initial render)</li>
                                        <li>Updating: <span className='font-bold'>useEffect(() =&gt; &#123; /* updating code */ &#125; , [dependencies]); </span>(runs when any dependency changes)</li>
                                    </ul>
                                </li>
                               
                            </ul>
                           
                        </li>
                        <br />
                        <li>
                            <p className='font-bold'>Unmounting: <span className='font-normal'>Also handled by useEffect.</span></p>
                            <br />

                            <ul className='ms-10 list-disc'>
                                <li>
                                Cleanup:Return a function from the <span className='font-bold'>'useEffect'</span>  callback to handle cleanup. This function runs before the component unmounts or before the effect runs again.<br />
                                    <br />
                                    <ul className='ms-10 list-disc'>
                                        <li> <span className='font-bold'>useEffect(() =&gt; &#123; return () = &gt; &#123; /* cleanup code */ &#125; &#125;, [dependencies]);</span></li>
                                    </ul>
                                </li>
                               
                            </ul>

                        </li>
                        <br />
                        <li>
                            <p className='font-bold'>Error Handling: <span className='font-normal'>Can be handled using the ErrorBoundary component in class components. </span></p>
                        </li>
                    </ul>
                </p>
                <h2 className='text-xl font-bold mt-5'>&#10149; Example:</h2> 
                <Function/>
            </div>
        </div>
    </div>
  )
}