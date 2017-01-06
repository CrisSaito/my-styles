// FILE INPUT CHOOSED FILE NAME
var $input    = document.getElementById('fileUpload'),
    $fileName = document.getElementById('file-name');

$input.addEventListener('change', function() {
  $fileName.innerHTML = this.value;
}, false);