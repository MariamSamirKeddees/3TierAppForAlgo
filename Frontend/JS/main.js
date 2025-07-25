fetch('/api')
  .then(res => res.json())
  .then(data => {
    document.getElementById('api-message').innerText = data.message;
  })
  .catch(err => {
    document.getElementById('api-message').innerText = 'Failed to fetch API!';
  });
