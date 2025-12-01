import React from 'react';
import './page.css';
// import{auth, currentUser} from '@clerk/nextjs/server'
import { getUser } from '@/app/api/clerkAPI/clerkAPI';
import { getAllUsers } from '@/app/api/clerkAPI/clerkAPI';

export default async function Home()
{
    const userData = await getUser();
    const allData = await getAllUsers();
    console.log("all user data: "+allData);
    console.log("id " + userData?.id + "  firstname: " +userData?.firstname+"  email: "+userData?.email);
    return(
        <main className='homePageContainer'>
            <h1 className='title'>HomePage</h1>
        </main>
    );
}   