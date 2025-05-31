// import { UserData } from "../utils/types";
// import { useState } from "react";
// import { postUser } from "../utils/postUser";

// export const useCreateUser = () => {
//   const [isSubmitting, setIsSubmitting] = useState(false);
//   const [error, setError] = useState<Error | null>(null);
//   const submitNewUser = async (data: UserData) => {
//     setIsSubmitting(true);
//     setError(null);
//     try {
//       const result = await postUser(data);
//       console.log("Submission successful:", result);
//       return true;
//     } catch (err) {
//       if (err instanceof Error) {
//         setError(err);
//       } else {
//         setError(new Error("An unknown error occurred"));
//       }
//       return false;
//     } finally {
//       setIsSubmitting(false);
//     }
//   };
//   return { submitNewUser, isSubmitting, error };
// };
// src/app/components/hooks/useAddUser.ts

import { useState } from "react";
import { postUser } from "../utils/postUser";
import { UserData } from "../utils/types";

export const useAddUser = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [success, setSuccess] = useState(false);

  const submitNewUser = async (data: UserData) => {
    setIsSubmitting(true);
    setError(null);
    setSuccess(false);

    try {
      console.log("Hook: Submitting user data:", data);
      const result = await postUser(data);
      
      if (result.error) {
        setError(result.error);
        console.error("Hook: Submission failed:", result.error);
        return { success: false, data: null, error: result.error };
      }

      console.log("Hook: Submission successful:", result.data);
      setSuccess(true);
      return { success: true, data: result.data, error: null };

    } catch (err) {
      const errorMessage = err instanceof Error ? err.message : "An unknown error occurred";
      setError(errorMessage);
      console.error("Hook: Unexpected error:", err);
      return { success: false, data: null, error: errorMessage };
    } finally {
      setIsSubmitting(false);
    }
  };

  const resetState = () => {
    setError(null);
    setSuccess(false);
    setIsSubmitting(false);
  };

  return { 
    submitNewUser, 
    isSubmitting, 
    error, 
    success,
    resetState 
  };
};