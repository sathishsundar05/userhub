import { apiBaseUrl, bearerToken } from "../constants/index";
import { UserProfileType } from "../types";

export const getUserDetails = async (by?: string, name?: string, location?: string): Promise<UserProfileType[]> => {
  try {
    //https://api.github.com/search/users?q=jonathan+location:france
    let apiUrl = `${apiBaseUrl}users`;
    if(name && location) {
      apiUrl = `${apiBaseUrl}search/users?q=${name}+location:${location}`
    } else if(name) {
      apiUrl = `${apiBaseUrl}search/users?q=${name}`
    }
    else if(location) {
      apiUrl = `${apiBaseUrl}search/users?q=location:${location}`
    }
    const response = await fetch(apiUrl);

    // use if request limit reached
    // const response = await fetch(`${apiBaseUrl}users`, {
    //   headers: {
    //     Authorization: bearerToken,
    //   },
    // });

    if (!response.ok) {
      throw new Error("Failed to fetch users");
    }

    const data: UserProfileType[] = await response.json();
    return by ? data.items : data;
  } catch (error) {
    console.error("Error fetching users:", error);
    throw error;
  }
};

export const getUserDetail = async (payload: string): Promise<UserProfileType> => {
  try {
    // const response = await fetch(`${apiBaseUrl}users/${payload}`);

    // use if request limit reached
    const response = await fetch(`${apiBaseUrl}users/${payload}`, {
      headers: {
        Authorization: bearerToken,
      },
    });

    if (!response.ok) {
      throw new Error("Failed to fetch user");
    }

    const data: UserProfileType = await response.json();
    return data;
  } catch (error) {
    console.error("Error fetching user:", error);
    throw error;
  }
};
