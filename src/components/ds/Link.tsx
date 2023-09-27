import { Link as GatsbyLink } from 'gatsby';
import React, { ReactNode } from 'react';

export function Link({
  children,
  href,
}: {
  children: ReactNode;
  href: string;
}) {
  // Any internal link (intended for Gatsby) will start with exactly one slash, and that anything else is external.
  const internal = /^\/(?!\/)/.test(href);

  // Use Gatsby Link for internal links, and <a> for others
  if (internal) {
    return <GatsbyLink to={href}>{children}</GatsbyLink>;
  }

  return <a href={href}>{children}</a>;
}
