const API_BASE_URL = 'http://localhost:3001';

export async function getUsers() {
  const response = await fetch(`${API_BASE_URL}/users`);
  const data = await response.json();
  return data;
}

export async function deleteUser(id) {
  const response = await fetch(`${API_BASE_URL}/users/${id}`, {
    method: 'DELETE',
  });
  const data = await response.json();
  return data;
}
