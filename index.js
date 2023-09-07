var count = 0;

function increment() {
  count += 1;
  document.getElementById('count-el').textContent = count;
}

function save() {
  // let content = document.getElementById('save-el').textContent;
  // console.log(content);

  // content += count;

  let savedStr = count + ' - ';
  saveEl = document.getElementById('save-el');
  saveEl.textContent += savedStr;
  count = 0;
  document.getElementById('count-el').textContent = count;
}
