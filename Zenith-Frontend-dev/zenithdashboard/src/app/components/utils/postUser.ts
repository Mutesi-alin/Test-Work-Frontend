// src/app/components/utils/postUser.ts

export interface UserData {
  first_name: string;
  last_name: string;
  phone_number: string;
  email: string;
  password: string;
  role: string;
}

export const postUser = async (userData: UserData) => {
  try {
    console.log('Sending data to API:', userData);
    
    const response = await fetch('https://posinnove.onrender.com/api/users/register/', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(userData),
    });

    const data = await response.json();
    console.log('API response:', data);
    
    if (!response.ok) {
      throw new Error(data.error || 'Registration failed');
    }

    return { data, error: null };
  } catch (error) {
    console.error('postUser error:', error);
    return { 
      data: null, 
      error: error instanceof Error ? error.message : 'Unknown error occurred' 
    };
  }
};