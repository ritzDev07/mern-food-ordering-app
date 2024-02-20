import { useCreateMyUser } from "@/api/MyUserApi";
import { AppState, Auth0Provider, User } from "@auth0/auth0-react";

type Props = {
    children: React.ReactNode;
}

const Auth0ProviderWithNavigate = ({ children }: Props) => {
    const { createUser } = useCreateMyUser();
    const domain = import.meta.env.VITE_AUTH0_DOMAIN;
    const clientId = import.meta.env.VITE_AUTH0_CLIENT_ID;
    const redirectUri = import.meta.env.VITE_AUTH0_CALLBACK_URL;


    // Checking if any configuration value is missing
    if (!domain || !clientId || !redirectUri) {
        throw new Error("Unable to initialise auth");
    }

    // Callback function invoked upon authentication redirect
    const onRedirectCallback = (appState?: AppState, user?: User) => {
        // Logging the authenticated user
        console.log("User:", user);

        if (user?.sub && user?.email) {
            createUser({
                auth0Id: user.sub,
                email: user.email
            });
        }
    };

    // Rendering Auth0Provider with configured properties
    return (
        <Auth0Provider
            domain={domain}
            clientId={clientId}
            authorizationParams={{
                redirect_uri: redirectUri,
            }}
            onRedirectCallback={onRedirectCallback}
        >
            {children}
        </Auth0Provider>
    )
};

export default Auth0ProviderWithNavigate;