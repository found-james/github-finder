// import { getToken } from './users-service';
 
const sndReq = async (url, method = 'GET', payload = null) =>
{
  const options = { method };
  
        if (payload) {
        options.headers = { 'Content-Type': 'application/json' };
        options.body = JSON.stringify(payload);
        }

  const res = await fetch(url, options);
  
  if (res.ok) return res.json();
  throw new Error('Bad Request');
  
}

export { sndReq }


// res.ok will be false if the status code set to 4xx in the controller action

/*
const token = getToken();
  
if (token) {
  options.headers = options.headers || {};
 
  options.headers.Authorization = `Bearer ${token}`;
}
// Ensure headers object exists
// Add token to an Authorization header
// Prefacing with 'Bearer' is recommended in the HTTP specification

*/