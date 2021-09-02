const searchBook = () => {
    const searchField = document.getElementById('search-field');
    const searchText = searchField.value;
    console.log(searchText);
  // clear data
    searchField.value = '';
    //  // Error Handing
    // // if(books.docs.length === 0);
    //   // console.log(books);
    
  
      const url = `https://openlibrary.org/search.json?q=${searchText}`;
      fetch(url)
      .then(res => res.json())
      .then(data => displayBooks(data.docs));
  
    }

  
  
  const displayBooks = (data) => {
    const searchResult = document.getElementById('search-result');
    searchResult.textContent = '';

   
  
    data.docs.forEach(book => {
        console.log(books);
        const div = document.createElement('div');
        div.classList.add('col');
        div.innerHTML= `
        <div onclick="loadBookDetail(${book.numFound})" class="card h-100">
            <img src="${book.cover_i}" class="card-img-top" alt="...">
            <div class="card-body">
              <h5 class="card-title">${book.strMeal}</h5>
              <p class="card-text">${book.strInstructions.slice(0, 250)}</p>
            </div>
          </div>
          `;
          searchResult.appendChild(div);
        
    });
  }
  const loadBookDetail = _book => {
    const url = `https://covers.openlibrary.org/b/id/${cover_i}`;
    fetch(url)
    .then(res=>res.json())
    .then(data =>displayBookDetail(data.books[0]));
  }
  
  const displayBookDetail = book => {
    console.log(book);
    const bookDetails = document.getElementById('book-details');
    const div = document.createElement('div');
    div.classList.add('card');
    div.innerHTML = `
    <img src="${book.cover_i}" class="card-img-top" alt="...">
            <div class="card-body">
              <h5 class="card-title">${book.title}</h5>
              <p class="card-text">${book.author_name}</p>
              <p class="card-text">${book.publish_date}</p>
            </div>
    
    `;
    bookDetails.appendChild(div);
  }