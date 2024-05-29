import Head from "next/head";
import React, { Component } from "react";




// ---------------------------------------------------
//            Home 
// ---------------------------------------------------
export default class TheComponent extends Component {

  constructor(props){
    super(props);
  }



  // 
  render(){

    //
    var domain = this.props.data.DOMAIN
    var footer = this.props.data.FOOTER
    var footerTitle = this.props.data.FOOTERTITLE
    var siteTitle = this.props.data.TITLE
 


    //
    return (
      <div>


        <Head>
          
          <meta charSet="utf-8" />
          <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no, user-scalable=no" />
          <meta httpEquiv="x-ua-compatible" content="ie=edge" />
          
          <meta property="og:locale" content="fa_IR" />
          <meta property="og:type" content="article" />
          <meta name='robots' content='index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1' />

              
          {/* <!-- meta tags -->  */}

          {/* <!-- favicon -->  */}
          <link rel="apple-touch-icon" href="/logo/favicon.png" />
          <meta name="msapplication-TileImage" content="/logo/favicon.png" />
          <link rel="icon" type="image/png" href="/logo/favicon.png" />

            <title>{`${siteTitle} | خانه`}</title>
          
  
        </Head> 


        {/* --------------------------------------------------------------------------------------- */}
        {/*             Body          */}
        {/* --------------------------------------------------------------------------------------- */}

        <nav className="navbar fixed-top navbar-expand-lg pt-3 scrolling-navbar double-nav "
        style={{background: "rgba(100,100,100,.5)"}}
        >


          {/* breadcrumb */}
          <div className="breadcrumb-dn "> </div>



          {/* <!-- in case of editing `d-none` should be `d-flex` --> */}
          <div className="d-flex change-mode"> 
            <ul className="nav navbar-nav nav-flex-icons ">


              {/*گزینه های تاپ منو*/}
              {/* -------------------------------------------- */}

              <li  className="nav-item px-3 border-left">
                <a className="nav-link rtl" href={`/panel`} > 
                  حساب کاربری
                </a>
              </li>

              <li  className="nav-item px-3 border-left">
                <a className="nav-link rtl" href={`/article/intro`} > 
                  معرفی منطقه 22
                </a>
              </li>



            </ul>
          </div>


        </nav>

        <section className="container-fluid"> 
    

            {/* <!-- 4 items --> */}
            <div className="row flex-wrap align-items-center" 
            style={{
              direction: "rtl", 
              fontFamily: "IRANSans",
              textAlign: 'right'
            }} > 
                


                {/*  header wide image */}
                <div 
                className="col-md-12 d-md-flex justify-content-center align-items-center rounded green darken-3" 
                style={{
                  height: '60vh',
                  // background: "#aaa",
                  // background: `radial-gradient(rgba(10, 10, 10, 1), rgba(0, 0, 0, 0)), url(https://archive.org/download/background-datavisualizer/background-datavisualizer.png)`
                }}
                >

                    <div className="text-center rounded-circle"  >

                        {/* <!-- logo --> */}
                        <div className="">
                            <img className="home-logo-in-banner-position" width="400" src="/logo/logo.png" alt="Data Visualizer main official logo - d3.js" />
                        </div>

                        {/* <!--  --> */}
                        <p className="font-weight-bold d-none" >
                            شهروند 22
                        </p>
                        <h1 className="h5 font-weight-normal white-text my-4"
                        style={{fontSize: 16}} >
                            شهروند 22 | تبلیغات اینترنتی برای کسب و کار های منطقه 22
                        </h1>

                        <a className="btn btn-primary "
                        href={`${domain}/panel`} 
                        >
                            ثبت کسب و کار جدید
                        </a>

                    </div>

                </div>


                



                
            </div> 
            
        </section>

        {/* --------------------------------------------------------------------------------------- */}
        {/*                footer                 */}
        {/* --------------------------------------------------------------------------------------- */}


        <footer className="p-0 green darken-2">
          {/* Copyright  */}
          <div className="footer-copyright py-3 text-center white-text">
            <div className="container-fluid"  style={{letterSpacing: 3}} >

              <span style={{marginRight: 10}}>
                © {new Date().getFullYear()}
              </span>

              <a className="white-text" href={footer} 
              style={{textDecoration: "none", textTransform: "uppercase"}} > 
                {footerTitle} 
              </a>

            </div>
          </div>

        </footer>


        {/* scripts */}

        {/* <!-- JQuery --> */}
        <script src="/Authorized/index/js/jquery-3.4.1.min.js"></script>
        {/* <!-- Bootstrap tooltips --> */}
        <script type="text/javascript" src="/Authorized/index/js/popper.min.js"></script>
        {/* <!-- Bootstrap core JavaScript --> */}
        <script type="text/javascript" src="/Authorized/index/js/bootstrap.js"></script>
        {/* <!-- MDB core JavaScript --> */}
        <script type="text/javascript" src="/Authorized/index/js/mdb.min.js"></script>

        <script type="text/javascript" src="/Public/Home/script.js"></script>


      </div>
    )
  }

  
}


// 3. getStaticProps 
export function getServerSideProps() {
  return {props: {data: process.env}}
}


// export const getServerSideProps = (async () => {
//   // Fetch data from external API
//   const res = await fetch('https://api.github.com/repos/vercel/next.js')
//   const repo: Repo = await res.json()
//   // Pass data to the page via props
//   return { props: { repo } }
// })