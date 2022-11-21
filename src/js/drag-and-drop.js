const dragArea = document.querySelector('.drag-area');
const dragText = document.querySelector('.header');

let button = document.querySelector('.button')
let input = document.querySelector('.inputFile')

let file;

button.onclick = () => {
  input.click();
}

// when browse
input.addEventListener('change', function() {
  file = this.files[0]
  dragArea.classList.add('drag-active')
  displayFile();
})

// when files is inside the drag area
dragArea.addEventListener('dragover', (event) => {
  event.preventDefault();
  dragText.textContent = 'Release to Upload File';
  dragArea.classList.add('drag-active')
});

//when file leaves the drag area
dragArea.addEventListener('dragleave', () => {
    dragText.textContent = 'Drag & Drop to Upload File';
    dragArea.classList.remove('drag-active')

});

dragArea.addEventListener('drop', (event) => {
  event.preventDefault();
  
  file = event.dataTransfer.files[0];

  displayFile();

});

function displayFile(){
  let fileType = file.type;

  let validExtensions = ['image/jpeg', 'image/jpg', 'image/png'];

    if (validExtensions.includes(fileType)) {
        let fileREader = new FileReader();     
        fileREader.onload = () => {
            let fileURL = fileREader.result; 
            let imgTag = `<img src="${fileURL}" alt="">`;
            dragArea.innerHTML = imgTag;
        }                   

        fileREader.readAsDataURL(file);
    }else{
        alert('This is not an Image File!');
        dragArea.classList.remove('drag-active');
  }
}
