const apiBaseUrl = 'http://localhost:3000/api/v1';

async function fetchEvents() {
  const response = await fetch(`${apiBaseUrl}/events`);
  return response.json();
}
