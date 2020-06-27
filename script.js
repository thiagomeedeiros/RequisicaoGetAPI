document.getElementById('fetchUserDataBtn').addEventListener('click', fetchUserData);
  function fetchUserData(){
      fetch('https://jsonplaceholder.typicode.com/posts')
      .then(response => response.json())
      .then(users => {
        let output = '<h2>Lists of Users</h2>';
        output += '<ul>';
        users.forEach(function(user) {
            output += `
                <li style='list-style:none;'>
                    User Id: ${user.userId} <br /> Id: ${user.id} <br /> Title: ${user.title} <br /> Body: ${user.body}
                </li><br />
            `;
        });
        output += '</ul>'
        document.getElementById("response").innerHTML = output;
      });
  }

  document.getElementById('fetchUserDataPostBtn').addEventListener('click', fetchUserDataPost);
  const url = 'https://jsonplaceholder.typicode.com/posts';

  // post body data 
  const user = {
      userId: '999',
      id: '999',
      title: 'Lorem ipsum',
      body: 'Lorem ipsum'
  };

  // request options
  const options = {
      method: 'POST',
      body: JSON.stringify(user),
      headers: {
          'Content-Type': 'application/json'
      }
  }

  function fetchUserDataPost() {
    // send POST request
    fetch(url, options)
          .then(res => res.json())
          .then(res => {
            alert('data enviada, consulte o console');
            console.log(res)
            }
          );
  }