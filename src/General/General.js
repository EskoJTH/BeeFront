import React from 'react';
import './General.css';
const general = (props) => {
    return (
        <div className='GeneralStyle'>
            <div style={{ margin: 20, fontSize: 20}}>A test react app</div>
            <div style={{ margin: 5 }}>
                <p>Under you can see a Graph that is not currently interactively loading data but it could be.</p>
                <p>On the right there is a bunch of boxes generated from json data pulled from the rest api at http://jsonplaceholder.typicode.com/</p>
                <p>Addresses that shoud atleas work:</p>
                <ul>
                    <li>http://jsonplaceholder.typicode.com/posts</li>
                    <li>http://jsonplaceholder.typicode.com/comments</li>
                    <li>http://jsonplaceholder.typicode.com/albums</li>
                    <li>http://jsonplaceholder.typicode.com/photos</li>
                    <li>http://jsonplaceholder.typicode.com/todos</li>
                </ul>
                <p>any address that can provide json in the from of a list of objects which have no other objects or lists as children should work</p>
            </div>

        </div>
    )
}

export default general;