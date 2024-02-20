import { useAuth0 } from "@auth0/auth0-react";
import { useMutation } from "react-query";

const API_BASE_URL = import.meta.env.VITE_API_BASE_URL;

type CreateUserRequest = {
    auth0Id: string;
    email: string;
};


// Custom hook to create a user
export const useCreateMyUser = () => {
    const { getAccessTokenSilently } = useAuth0();// Using useAuth0 hook to get access token

    // Function to send create user request
    const createMyUserRequest = async (user: CreateUserRequest) => {

        const accessToken = await getAccessTokenSilently();

        // Sending POST request to create user
        const response = await fetch(`${API_BASE_URL}/api/my/user`, {
            method: "POST",
            headers: {
                Authorization: `Bearer ${accessToken}`,
                "Content-Type": "application/json",
            },
            body: JSON.stringify(user),

        });

        if (!response.ok) {
            throw new Error("Failed to create User");
        }
    };

    const { mutateAsync: createUser, isLoading, isError, isSuccess } = useMutation(createMyUserRequest);

    return {
        createUser,
        isLoading,
        isError,
        isSuccess,
    };
};