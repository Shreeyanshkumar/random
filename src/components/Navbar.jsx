'use client'

import { useKindeBrowserClient } from "@kinde-oss/kinde-auth-nextjs";
import { RegisterLink, LoginLink, LogoutLink } from "@kinde-oss/kinde-auth-nextjs/components";


const Navbar = () => {

    const { isAuthenticated, user, isLoading } = useKindeBrowserClient();

    if (isLoading) return <p>Loading...</p>

    return (
        <>
            {!isAuthenticated ? (<div>
                <LoginLink>Sign in</LoginLink>
                <RegisterLink>Sign up</RegisterLink>
            </div>) : (<div>
                <span>
                    {user?.email}
                </span>
                <LogoutLink >LG</LogoutLink>
            </div>)
            }
        </>
    )
}


export default Navbar
