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

  //cdn
  const cdnUrl = 'https://cdn.jsdelivr.net';
  const github = 'gh/thms200/peer-bot/dist';
  const mainHashChuck = `${github}/main.67389550.chunk.js`;
  const mainStyleHaschChuck = `${github}/main.99441111.chunk.css`;
  const numberHashChuck = `${github}/2.bd7b69aa.chunk.js`;
  const runtimeMainHash = `${github}/runtime-main.21811c53.js`;

  const head = document.querySelector('head');
  const link = document.createElement('link');
  link.setAttribute('rel', 'stylesheet');
  link.setAttribute('type', 'text/css');
  link.setAttribute('href', `${cdnUrl}/${mainStyleHaschChuck}`);
  head.appendChild(link);

  const script = document.createElement('script');
  script.setAttribute('src', `${cdnUrl}/combine/${mainHashChuck},${numberHashChuck},${runtimeMainHash}`);
  body.appendChild(script);
})();
