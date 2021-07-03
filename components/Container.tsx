import React, { ReactNode } from 'react';

export default function Container({
  children,
}: {
  children: ReactNode;
}): JSX.Element {
  return <div className="mx-auto">{children}</div>;
}
