async function handleRequest(request) {
  // console.log(request.url);  // Log the incoming request URL
  // console.log(request.method);  // Log the HTTP method

    
  // Fetch the EPG content and return it
  const epgUrl = 'https://link.to/yourfile.xml';  // Replace with your actual URL
  const epgResponse = await fetch(epgUrl);
  const epgContent = await epgResponse.text();
  
  return new Response(epgContent, {
    headers: {
      'Access-Control-Allow-Origin': '*',
      'Access-Control-Allow-Methods': 'GET, POST, OPTIONS, HEAD',
      'Access-Control-Allow-Headers': 'Range',
      'Access-Control-Expose-Headers': 'Accept-Ranges, Content-Encoding, Content-Length, Content-Range',
      'Content-Type': 'text/xml',
      'Content-Encoding': 'identity' // No compression
    }
  });
}

// This is the event listener that triggers when a request comes in
addEventListener('fetch', event => {
  event.respondWith(handleRequest(event.request));
});
