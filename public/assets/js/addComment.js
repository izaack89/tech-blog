const commentFormHandler = async (event) => {
    event.preventDefault();
    const comments = document.querySelector('#comments').value.trim();
    const postId = document.querySelector('#postId').value.trim();
  
    if (comments) {
      const response = await fetch('/api/comments', {
        method: 'POST',
        body: JSON.stringify({ comments, postId }),
        headers: { 'Content-Type': 'application/json' },
      });
  
      if (response.ok) {
        document.location.reload();
      } else {
        alert('Failed to add Comments');
      }
    }
  };
  
  document.querySelector('#comment-form').addEventListener('submit', commentFormHandler);   