import React from "react";
import{auth, currentUser} from '@clerk/nextjs/server'
// import { useAuth } from "@clerk/nextjs";

export async function getUser()
{
    const user = await currentUser();
    if (!user)
    {
        return null;
    }
    return {id: user.id, firstname: user.firstName, email: user.primaryEmailAddress?.emailAddress}
}

