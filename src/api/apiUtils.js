export async function http(request) {
  const response = await fetch(request);
  try {
    response.parsedBody = await response.json();
  } catch (ex) {}

  if (!response.ok) {
    throw new Error(response.statusText);
  }
  return response;
}
