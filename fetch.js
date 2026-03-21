const https = require('https');
const repos = [
  'Group-4-Online-Note-Taking-App',
  'Innovationwebsite',
  'EventFlow',
  'MeInvest',
  'Interviewace'
];
const fetchRepo = (repo) => {
  return new Promise((resolve, reject) => {
    const options = {
      hostname: 'api.github.com',
      path: '/repos/harshkr0011/' + repo,
      headers: { 'User-Agent': 'Node.js' }
    };
    https.get(options, (res) => {
      let data = '';
      res.on('data', chunk => data += chunk);
      res.on('end', () => resolve(JSON.parse(data)));
    }).on('error', reject);
  });
};
Promise.all(repos.map(fetchRepo)).then(results => {
  results.forEach(r => {
    console.log('---');
    console.log('Name:', r.name);
    console.log('Description:', r.description);
    console.log('URL:', r.html_url);
    console.log('Homepage:', r.homepage);
    console.log('Topics:', (r.topics || []).join(', '));
    console.log('Language:', r.language);
  });
}).catch(console.error);
