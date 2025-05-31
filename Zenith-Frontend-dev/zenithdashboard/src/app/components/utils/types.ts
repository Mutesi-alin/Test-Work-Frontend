
export interface UserData {
  first_name: string;
  last_name: string;
  phone_number: string;
  email: string;
  password: string;
  role: string;
}

export interface ApiResponse<T> {
  data: T | null;
  error: string | null;
}