function create(words) {
   const content = document.getElementById('content');

   for (const word of words) {
      const newDiv = document.createElement('div');

      const newPAragraph = document.createElement('p');
      newPAragraph.textContent = word;
      newPAragraph.style.display = 'none';

      newDiv.addEventListener('click', () => {
         newPAragraph.style.display = 'block';
      });

      newDiv.appendChild(newPAragraph);
      content.appendChild(newDiv);
   }

}