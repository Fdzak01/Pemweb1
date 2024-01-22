function displayImage() {
    let dropdown = document.getElementById("imageDropdown");
    let selectedImage = document.getElementById("selectedImage");
    let alertBox = document.getElementById("alertBox");

    let selectedOption = dropdown.options[dropdown.selectedIndex];
    let imageName = selectedOption.text;
    let imagePath = selectedOption.value;

    selectedImage.src = imagePath;

    alertBox.innerHTML = "This Picture: " + imageName;
}
