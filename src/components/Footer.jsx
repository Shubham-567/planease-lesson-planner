import {
  Facebook,
  Github,
  Linkedin,
  NotebookText,
  Twitter,
} from "lucide-react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className='bg-base-200 border-t border-base-300'>
      <div className='container mx-auto px-6 py-8 divide-y-2 divide-primary/30'>
        <div className='flex max-sm:flex-col justify-between sm:items-start gap-8 w-full pb-8'>
          <div className='space-y-2'>
            <div className='flex items-center justify-start gap-3'>
              <NotebookText className='size-8 text-primary' />
              <span className='text-3xl font-bold font-serif text-neutral'>
                PlanEase
              </span>
            </div>

            <p className='text-neutral-muted'>
              Crafting exceptional lesson plans, effortlessly.
            </p>
          </div>

          {/* Nav and Socials */}
          <div className='space-y-4 sm:text-right'>
            {/* Nav Links */}
            <div className='flex flex-wrap items-center justify-start sm:justify-end gap-6 text-neutral-muted'>
              <Link to={"/"} className='hover:text-primary transition-colors'>
                Home
              </Link>
              <Link
                to={"/planner"}
                className='hover:text-primary transition-colors'>
                Planner
              </Link>
              <Link
                to={"/about"}
                className='hover:text-primary transition-colors'>
                About
              </Link>
              <Link
                to={"/faq"}
                className='hover:text-primary transition-colors'>
                FAQ
              </Link>
            </div>

            <div className='flex justify-start sm:justify-end items-center gap-5 text-neutral-muted'>
              <a
                href='#'
                target='_blank'
                rel='noopener noreferrer'
                aria-label='LinkedIn'>
                <Linkedin className='size-5 hover:text-primary transition-colors' />
              </a>
              <a
                href='#'
                target='_blank'
                rel='noopener noreferrer'
                aria-label='Twitter'>
                <Twitter className='size-5 hover:text-primary transition-colors' />
              </a>
              <a
                href='#'
                target='_blank'
                rel='noopener noreferrer'
                aria-label='Facebook'>
                <Facebook className='size-5 hover:text-primary transition-colors' />
              </a>
              <a
                href='https://github.com/Shubham-567/planease-lesson-planner'
                target='_blank'
                rel='noopener noreferrer'
                aria-label='GitHub'>
                <Github className='size-5 hover:text-primary transition-colors' />
              </a>
            </div>
          </div>
        </div>

        {/* copyright */}
        <p className='text-sm text-neutral-muted pt-8 text-center'>
          © {new Date().getFullYear()} PlanEase. All Rights Reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;


