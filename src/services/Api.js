export async function request() {
  try {
    const url = 'que.txt';
    const response = await fetch(url);
    
    if (response.ok === true) {
      return await response.json();
    } else {
      console.error(
        response.url +
        ' ' + response.status +
        ': ' + response.statusText
      );
    }
  }
  catch (error) {
    console.error(error);
  }
}
