import React from 'react';
const users = [];


export class Main extends React.Component {
    render (){
        return <main className='main'>
            {users.map(user=> <UserComponent user={user} />)}
        </main>
    }
}