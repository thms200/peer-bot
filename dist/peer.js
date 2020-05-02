(() => {
  //root 생성
  const body = document.querySelector('body');
  const newDiv = document.createElement('div');
  newDiv.setAttribute('id', 'peer-root');
  body.appendChild(newDiv);

  //consultant id, name
  const consultantId = document.querySelector('.consultant-id');
  const consultantName = document.querySelector('.consultant-name');
  localStorage.setItem('consultantId', consultantId.id);
  localStorage.setItem('consultantName', consultantName.id);
  consultantId.remove();
  consultantName.remove();
})();
