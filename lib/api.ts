const API_BASE_URL = process.env.NEXT_PUBLIC_GHSTMAIL_API;

export async function signUp(email: string, password: string) {
  const response = await fetch(`${API_BASE_URL}/signup`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ email, password }),
  });

  if (!response.ok) {
    const errorData = await response.json();
    throw new Error(errorData.error || "Failed to register");
  }

  return response.json();
}

export async function login(email: string, password: string) {
  const response = await fetch(`${API_BASE_URL}/login`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ email, password }),
  });

  if (!response.ok) {
    const errorData = await response.json();
    throw new Error(errorData.error || "Failed to login");
  }

  return response.json();
}

export async function getDummyEmail(token: string) {
  const response = await fetch(`${API_BASE_URL}/get-dummy-mail`, {
    method: "GET",
    headers: {
      "Authorization": token,
    },
  });

  if (!response.ok) {
    const errorData = await response.json();
    throw new Error(errorData.error || "Failed to generate dummy email");
  }

  return response.json();
}

export async function listAllEmails(token: string) {
  const response = await fetch(`${API_BASE_URL}/list-all-mail`, {
    method: "GET",
    headers: {
      "Authorization": token,
    },
  });

  if (!response.ok) {
    const errorData = await response.json();
    throw new Error(errorData.error || "Failed to fetch dummy emails");
  }

  return response.json();
}

export async function deleteDummyEmail(token: string, dummyEmail: string) {
  const response = await fetch(`${API_BASE_URL}/delete-mail`, {
    method: "DELETE",
    headers: {
      "Authorization": token,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ dummyEmail }),
  });

  if (!response.ok) {
    const errorData = await response.json();
    throw new Error(errorData.error || "Failed to delete dummy email");
  }

  return response.json();
}
