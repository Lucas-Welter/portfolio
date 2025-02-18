import { Html, Head, Main, NextScript } from 'next/document';
import { DocumentContext, DocumentInitialProps } from 'next/document';

export default function Document({ locale }: { locale: string }) {
  return (
    <Html lang={locale || "en"}>
      <Head>
      <title>Lucas Welter .Dev</title> {/* Altere aqui */}
        {/* Inline script to set the theme before React renders */}
        <script
          dangerouslySetInnerHTML={{
            __html: `
              (function() {
                try {
                  const savedTheme = localStorage.getItem('theme');
                  const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
                  const theme = savedTheme || (prefersDark ? 'dark' : 'light');
                  if (theme === 'dark') {
                    document.documentElement.classList.add('dark');
                  } else {
                    document.documentElement.classList.remove('dark');
                  }
                } catch (e) {
                  console.error('Error applying theme:', e);
                }
              })();
            `,
          }}
        />
      </Head>
      <body className="font-primary">
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}

Document.getInitialProps = async (ctx: DocumentContext): Promise<DocumentInitialProps & { locale: string }> => {
  const initialProps = await ctx.defaultGetInitialProps(ctx);
  const locale = ctx?.req?.headers['accept-language']?.includes('pt-BR') ? 'pt-BR' : 'en';

  return { ...initialProps, locale };
};