import * as React from "react";
import { StaticImage } from "gatsby-plugin-image";
import "./index.css";

const HeroPage = () => {
  return (
    <>
      <section className="black">
        <nav class="navbar navbar-expand-lg">
          <div class="container-fluid">
            <a class="navbar-brand">Navbar</a>
            <div class="d-flex">
              <a class="nav-link active" aria-current="page">
                Home
              </a>
              <a class="nav-link">Link</a>
              <a class="nav-link disabled">Disabled</a>
            </div>
          </div>
        </nav>

        <div class="w-50 container-fluid">
          <StaticImage
            alt="Clifford, a reddish-brown pitbull, posing on a couch and looking stoically at the camera"
            src="../images/profile.png"
            formats={["auto", "webp", "avif"]}
            transformOptions={{ fit: "cover", cropFocus: "attention" }}
            quality={90}
          />
        </div>
      </section>
    </>
    // <nav class="navbar navbar-expand-lg bg-light">
    //   <div class="container-fluid">
    //     <button
    //       class="navbar-toggler"
    //       type="button"
    //       data-bs-toggle="collapse"
    //       data-bs-target="#navbarTogglerDemo03"
    //       aria-controls="navbarTogglerDemo03"
    //       aria-expanded="false"
    //       aria-label="Toggle navigation"
    //     >
    //       <span class="navbar-toggler-icon"></span>
    //     </button>
    //     <a class="navbar-brand" href="#">
    //       Navbar
    //     </a>
    //     <div class="collapse navbar-collapse" id="navbarTogglerDemo03">
    //       <ul class="navbar-nav me-auto mb-2 mb-lg-0">
    //         <li class="nav-item">
    //           <a class="nav-link active" aria-current="page" href="#">
    //             Home
    //           </a>
    //         </li>
    //         <li class="nav-item">
    //           <a class="nav-link" href="#">
    //             Link
    //           </a>
    //         </li>
    //         <li class="nav-item">
    //           <a class="nav-link disabled">Disabled</a>
    //         </li>
    //       </ul>
    //       <form class="d-flex" role="search">
    //         <input
    //           class="form-control me-2"
    //           type="search"
    //           placeholder="Search"
    //           aria-label="Search"
    //         ></input>
    //         <button class="btn btn-outline-success" type="submit">
    //           Search
    //         </button>
    //       </form>
    //     </div>
    //   </div>
    // </nav>
  );
};

export default HeroPage;
