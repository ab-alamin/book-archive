const searchBook = () => {
    const searchField = document.getElementById('search-field');
    const searchText = searchField.value;
  // clear data
    searchField.value = '';

    //   // Error Handing

    // const errorDiv = document.getElementById('error');
    // if (books.message === "Not Found") {
    //   errorDiv.innerText = "NO Result Found";
    // } else {
    //   errorDiv.innerText = "";
    // }
   
      const url = `https://openlibrary.org/search.json?q=${searchText}`;
      fetch(url)
      .then(res => res.json())
      .then(data => displayBooks(data));
  
    }

  const displayBooks = books => {
    const searchResult = document.getElementById('search-result');
    searchResult.textContent = '';

   
  
    books.docs.forEach((book) => {
        
        const div = document.createElement('div');
  
        div.innerHTML = `
            <div class="col">
                <div class="card">
                    <div class="row g-0">

                        <div class="col-md-4 p-2">
                            <img src="https://covers.openlibrary.org/b/id/${book.cover_i}-M.jpg" class="card-img-top" alt="...">
                        </div>
                        <div class="col-md-6">
                            <div class="card-body">
                                <h2 class="card-title">${book.title}</h2>
                                <br>
                                <p class="card-text"><span>Author Name:</span> ${(book.author_name === undefined) ? 'Not found' : book.author_name}</p>
                                <p class="card-text"><span>Publisher Name:</span> ${(book.publisher === undefined) ? 'Not found' : book.publisher.slice(0, 5)}</p>
                                <p class="card-text">First Publish in ${(book.first_publish_year === undefined) ? 'Not found' : book.first_publish_year}</p>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
            `;
          searchResult.appendChild(div);
        
    });
  }

  