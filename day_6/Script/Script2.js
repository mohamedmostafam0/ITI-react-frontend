document.addEventListener('DOMContentLoaded', function() {
  const params = new URLSearchParams(window.location.search);

  const jobTitle = params.get('title'); 
  const name = params.get('name');
  const email = params.get('email');
  const gender = params.get('gender');
  const address = params.get('address'); 
  const mobile = params.get('mobile'); 


  document.getElementById('name').textContent = name;
  document.getElementById('email').textContent = email;
  document.getElementById('job_title').textContent = jobTitle;
  document.getElementById('gender').textContent = gender;
  document.getElementById('address').textContent = address;
  document.getElementById('mobile').textContent = mobile;

  
});
