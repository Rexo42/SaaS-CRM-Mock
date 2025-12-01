import React from "react";
import{auth, currentUser} from '@clerk/nextjs/server'
import type { userData } from "@/app/interfaces/userData";

import { clerkClient } from "@clerk/nextjs/server";

export async function getUser(): Promise<userData | null>
{
    const user = await currentUser();
    if (!user)
    {
        return null;
    }
    return {id: user.id, firstname: user.firstName, email: user.primaryEmailAddress?.emailAddress??null}
}

export async function getAllUsers()
{
// should be used for DB checking for purchase permission
  const clerk = await clerkClient();
  const data = ((await clerk.users.getUserList()).data);
  const filtered = data.map(user => user.firstName);
  return filtered;
}

