const headers = {
  'Content-Type': 'application/json',
  'Access-Control-Allow-Origin': '*',
  'Set-Cookie': 'HttpOnly;Secure;SameSite=None',
};

export function postUser(userId: string) {
  return fetch('/api/user', {
    method: 'POST',
    headers,
    body: JSON.stringify({ userId }),
  });
}

export async function getUser(userId: string) {
  const data = await fetch(`/api/user?userId=${userId}`, {
    method: 'GET',
    headers,
  });
  /** If data convert to json, you can access response data */
  return data.json();
}
