import { FC } from 'react';
import Link from 'next/link';

interface Props {}

const Footer: FC<Props> = (props): JSX.Element => {
  return (
    <footer className="footer footer-center p-10 bg-base-300 text-base-content rounded mt-1">
      <nav className="grid grid-flow-col gap-4">
        <Link href={'/about'}>About</Link>
        <Link href={'/contact'}>Contact</Link>
        <Link href={'/feedback'}>Feedback</Link>
      </nav>
      <nav>
        <div className="grid grid-flow-col gap-4">{/* Social icons */}</div>
      </nav>
      <aside>
        <p>
          Copyright © 2023 - All rights reserved by
          <a
            href="https://nextport-alpha.vercel.app/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <span> Ryan Wilson</span>
          </a>
        </p>
      </aside>
    </footer>
  );
};

export default Footer;