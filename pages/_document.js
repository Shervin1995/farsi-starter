import { Html, Head, Main, NextScript } from 'next/document'


// 
export default function Document() {
  return (
    <Html>
      <Head>

          {/* favicon */}
          <link rel="icon" type="image/png" href="/logo/favicon.png" />

          {/* Bootstrap */}
          <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-QWTKZyjpPEjISv5WaRU9OFeRpok6YctnYmDr5pNlyT2bRjXh0JMhjY6hW+ALEwIH" crossorigin="anonymous"></link>
          
          {/* <!-- Font Awesome --> */}
          <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.8.2/css/all.css" /> 
          
          {/* <!-- farsi font --> */}
          <link rel="stylesheet" href="/font/iransans.css" />

          {/* custom css */}


      </Head>
      <body>
        
        
        <Main />
        
        
        <NextScript />

        {/* <!-- JQuery --> */}
        <script src="/jquery-3.4.1.min.js"></script> 

        {/* Bootstrap */}
        <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/js/bootstrap.bundle.min.js" integrity="sha384-YvpcrYf0tY3lHB60NNkmXc5s9fDVZLESaAA55NDzOxhy9GkcIdslK1eN7N6jIeHz" crossorigin="anonymous"></script>

        {/* custom scripts */}
        



      </body>
    </Html>
  )
}