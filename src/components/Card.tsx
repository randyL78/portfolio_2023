import React, { ReactNode } from 'react';
import { Theme } from './enums/theme';

export interface CardProps {
  title: string,
  quote: {
    text: string,
    author: string
  },
  theme?: Theme
  children?: ReactNode
}

const calculateBackgroundDark = (theme: Theme) => {
  switch (theme) {
    case Theme.neutral:
      return 'bg-sage-300';
    case Theme.light:
    default:
      return 'bg-stone-100';
  }
}

const calculateBackgroundLight = (theme: Theme) => {
  switch (theme) {
    case Theme.neutral:
      return 'from-sage-100';
    case Theme.light:
    default:
      return 'from-white';
  }
}

const Card = ({ title, quote, children, theme = Theme.light }: CardProps) => {
  const backgroundDark = calculateBackgroundDark(theme);
  const backgroundLight = calculateBackgroundLight(theme);

  return (
    <div className={`p-12 shadow-theme mt-12 bg-gradient-to-tl ${backgroundLight} ${backgroundDark}`}>
      <section className="container relative m-auto">
        <header className="text-center">
          <h2 className="text-blue-900 text-6xl font-light">{title}</h2>
          <q className="text-xl"><em>{quote.text}</em></q>
          <p>~{quote.author}</p>
        </header>
        <div>
          {children}
        </div>
      </section>
    </div>
  )
}

export default Card;
