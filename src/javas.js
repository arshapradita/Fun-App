let myTextBox = document.getElementById("my-text-box");
let result = document.getElementById("result");

//validasi
let isEmpty = () => {
  if (myTextBox.value.length != 0) {
    return false;
  } else {
    return true;
  }
};

let reverse = () => {
  if (isEmpty()) {
    result.innerHTML = "tolong di isi dulu";
  } else {
    let myText = myTextBox.value;
    result.innerHTML = `Kebalikannya adalah : <span>${myText
      .split("")
      .reverse()
      .join("")}</span>`;
  }
};

//

let Palindrome = () => {
  if (isEmpty()) {
    result.innerHTML = "tolong di isi dulu";
  } else {
    let myText = myTextBox.value.replace(/[^a-zA-Z0-9]/g, "").toLowerCase();
    if (myText == myText.split("").reverse().join("")) {
      result.innerHTML = "ini <span>Palindrome</span>";
    } else {
      result.innerHTML = "ini <span>Bukan Palindrome</span>";
    }
  }
};

let hitungHuruf = () => {
  if (isEmpty()) {
    result.innerHTML = "tolong di isi dulu";
  } else {
    let myText = myTextBox.value;
    result.innerHTML = `Jumlah huruf : <span>${myText.length}</span>`;
  }
};

let hitungKalimat = () => {
  if (isEmpty()) {
    result.innerHTML = "tolong di isi dulu";
  } else {
    let myText = myTextBox.value;
    result.innerHTML = `jumlah kalimat :
    <span>${
      myText
        .trim()
        .split(/\s+/)
        .filter((item) => item).length
    }</span>`;
  }
};

let search = () => {
  let searchText = document.getElementById("search-text").value;
  if (isEmpty() || searchText.length == 0) {
    result.innerHTML = "tidak ada";
  } else {
    let myText = myTextBox.value;
    if (myText.includes(searchText)) {
      result.innerHTML = `text <span>'${searchText}'</span> ditemukan `;
    } else {
      result.innerHTML = `text <span>'${searchText}'</span> tidak ditemukan`;
    }
  }
};
