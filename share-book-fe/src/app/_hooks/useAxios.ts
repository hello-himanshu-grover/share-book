import { useState, useEffect } from 'react';
import axios, { AxiosError } from 'axios';
import Swal from 'sweetalert2';

// Custom hook for fetching data
export const useFetch = <T,>(url: string) => {
  const [data, setData] = useState<T | null>(null);
  const [error, setError] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState<boolean>(false);

  useEffect(() => {
    let isMounted = true; // To avoid memory leaks
    setIsLoading(true);
    axios.get<T>(url)
      .then(response => {
        if (isMounted) {
          setData(response.data);
          setError(null);
        }
      })
      .catch(err => {
        if (isMounted) {
          handleError(err, setError);
        }
      })
      .finally(() => {
        if (isMounted) {
          setIsLoading(false);
        }
      });
    return () => {
      isMounted = false;
    };
  }, [url]);

  return { data, error, isLoading };
};

// Function to handle errors
const handleError = (err: AxiosError | Error, setError: React.Dispatch<React.SetStateAction<string | null>>) => {
  Swal.fire({
    icon: "error",
    title: "Oops...",
    text: err?.response?.data?.error.message || "Something went wrong!",
  });
  if (axios.isAxiosError(err)) {
    if (err.response) {
      // Server responded with a status other than 200 range
      setError(err.response.data as string);
    } else if (err.request) {
      // Request was made but no response
      setError('Network error, please try again later.');
    } else {
      // Something else happened
      setError(err.message);
    }
  } else {
    setError(err.message);
  }
};

interface ApiResponse {
  code: string,
  message: string,
  data: any
}
// Function to make a POST request
export const postData = async <T,>(url: string, data: T): Promise<ApiResponse> => {
  try {
    const response = await axios.post<ApiResponse>(url, data);
    return response.data;
  } catch (err) {
    throw handleError(err as AxiosError | Error, (msg) => { throw new Error(msg as string); });
  }
};
