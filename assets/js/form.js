// DEPENDENCIES===========================

const blogTitleInput = document.querySelector('#blog-titleInput'); // Assuming ID
const blogContentInput = document.querySelector('#blog-contentInput'); // Assuming ID
const blogAuthorInput = document.querySelector('#blog-authorInput'); // Assuming ID
const blogBox = document.querySelector('#blog-box');

const handleLocalStorageData = function () {
  // Use more descriptive local storage keys
  const blogTitle = localStorage.getItem('Title');
  const blogContent = localStorage.getItem('Content');
  const blogAuthor = localStorage.getItem('Text');

  if (blogTitle || blogContent || blogAuthor) {
    // Check for any data existence
    const blogContentDiv = document.createElement('div');
    blogContentDiv.setAttribute('class', 'blog-content');

    const blogInputContainer = document.createElement('span');
    blogInputContainer.setAttribute('class', 'blogInputContainer');

    const blogTitleElement = document.createElement('h2');
    blogTitleElement.setAttribute('class', 'blog-titleInput');

    const blogContentElement = document.createElement('p');
    blogContentElement.setAttribute('class', 'blog-contentInput');

    const blogAuthorElement = document.createElement('p');
    blogAuthorElement.setAttribute('class', 'blog-textInput');

    blogBox.appendChild(blogContentDiv);
    blogContentDiv.appendChild(blogInputContainer);
    blogInputContainer.appendChild(blogTitleElement);
    blogInputContainer.appendChild(blogContentElement);
    blogInputContainer.appendChild(blogAuthorElement);

    if (blogTitle) {
      blogTitleElement.textContent = blogTitle;
    }
    if (blogContent) {
      blogContentElement.textContent = blogContent;
    }
    if (blogAuthor) {
      blogAuthorElement.textContent = blogAuthor;
    }
    // Add similar checks for blogContent and blogAuthor
  } else {
    // Handle the case where no data is found in local storage
    console.log('No blog data found in local storage');
  }
};

handleLocalStorageData();
