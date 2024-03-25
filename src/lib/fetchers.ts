const headers = {
  'Content-Type': 'application/json',
  'Access-Control-Allow-Origin': '*',
  'Set-Cookie': 'HttpOnly;Secure;SameSite=None',
};

export async function postUser(userId: string) {
  const data = await fetch('/api/user', {
    method: 'POST',
    headers,
    body: JSON.stringify({ userId }),
  });
  return data.json();
}

export async function getUser(userId: string) {
  const data = await fetch(`/api/user?userId=${userId}`, {
    method: 'GET',
    headers,
  });
  /** If data convert to json, you can access response data */
  return data.json();
}
