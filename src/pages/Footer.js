import React from 'react';
import Link from '@docusaurus/Link';

function Footer() {
  return (
    <footer>
      <div>
        <h4>Links</h4>
        <ul>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/docs/introduction">Docs</Link></li>
        </ul>
      </div>
      <div>
        <h4>Community</h4>
        <ul>
          <li><a href="https://github.com/willblev/fun-with-fungi">GitHub</a></li>
        </ul>
      </div>
    </footer>
  );
}

export default Footer;
