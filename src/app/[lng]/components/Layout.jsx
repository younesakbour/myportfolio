'use client';

export async function generateStaticParams() {
    return languages.map((lng) => ({ lng }))
}

export default function Layout(props) {
    return (
      <html  lang={props.params}>
        <body className={props.inter}>{props.children}</body>
      </html>
    )
  }