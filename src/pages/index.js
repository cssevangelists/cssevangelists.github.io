import React from "react"
import { graphql, Link } from "gatsby"
import 'normalize.css'
import '../styles/global.css'

export default ({ data }) => {

  return (
    <div> 
      {/* { data.site.siteMetadata.title  } */}
      <header className = "header">

        <h1 className = "header__title"> CSS Evangelists </h1>
        <h2 className = "header__sub-title"> Seus problemas com CSS acabam aqui! </h2>

        <div className = "header__btns">
          <button className = "btn"> Preciso de ajuda com CSS </button>
          <button className = "btn"> Quer ser um evangelista </button>
        </div>

      </header>

      <section className = "section">
        <h2 className = "section__title"> O que é? </h2>
        <p className = "section__text">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam ac facilisis lectus, at semper eros. Vestibulum vel tempor lorem. Nullam vel hendrerit nunc, at euismod erat. Vivamus diam ipsum, ornare ac quam sed, malesuada efficitur sem. Curabitur sit amet congue nulla, non gravida nisl.
        </p>
      </section>

      <div className = "section-container">
        <section className = "section">
          <h2 className = "section__title"> Projetos </h2>
          <p className = "section__text">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam ac facilisis lectus, at semper eros. Vestibulum vel tempor lorem. Nullam vel hendrerit nunc, at euismod erat. Vivamus diam ipsum, ornare ac quam sed, malesuada efficitur sem. Curabitur sit amet congue nulla, non gravida nisl.
          </p>
          <article className = "article">

            <div className = "article-box"> 
              <img className = "article-box__image" src = "https://i.pinimg.com/originals/7d/aa/d5/7daad52d070f2e222d7096bb2c897b46.png" />
              <h3 className = "article-box__title"> Roadmap </h3>
              <p className = "article-box__description">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam ac facilisis lectus, at semper eros.
              </p>
              <button className = "btn btn--dark"> Visitar </button>
            </div>

            <div className = "article-box"> 
              <img className = "article-box__image" src = "https://i.pinimg.com/originals/7d/aa/d5/7daad52d070f2e222d7096bb2c897b46.png" />
              <h3 className = "article-box__title"> Blog </h3>
              <p className = "article-box__description">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam ac facilisis lectus, at semper eros.
              </p>
              <button className = "btn btn--dark"> Visitar </button>
            </div>

            <div className = "article-box"> 
              <img className = "article-box__image" src = "https://i.pinimg.com/originals/7d/aa/d5/7daad52d070f2e222d7096bb2c897b46.png" />
              <h3 className = "article-box__title"> FAQ </h3>
              <p className = "article-box__description">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam ac facilisis lectus, at semper eros.
              </p>
              <button className = "btn btn--dark"> Visitar </button>
            </div>

            <div className = "article-box"> 
              <img className = "article-box__image" src = "https://i.pinimg.com/originals/7d/aa/d5/7daad52d070f2e222d7096bb2c897b46.png" />
              <h3 className = "article-box__title"> Crash Course </h3>
              <p className = "article-box__description">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam ac facilisis lectus, at semper eros.
              </p>
              <button className = "btn btn--dark"> Visitar </button>
            </div>

          </article>
        </section>
      </div>

      <section className = "section">
        <h2 className = "section__title"> Evangelistas </h2>
        <p className = "section__text">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam ac facilisis lectus, at semper eros. Vestibulum vel tempor lorem. Nullam vel hendrerit nunc, at euismod erat. Vivamus diam ipsum, ornare ac quam sed, malesuada efficitur sem. Curabitur sit amet congue nulla, non gravida nisl.
        </p>
        <article className = "article">

          <div className = "article-box article-box--circle"> 
            <img className = "article-box__image" src = "https://i.pinimg.com/originals/7d/aa/d5/7daad52d070f2e222d7096bb2c897b46.png" />
            <h3 className = "article-box__title"> @afonsopacifer </h3>
            <p className = "article-box__description">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam ac facilisis lectus, at semper eros.
            </p>
          </div>

          <div className = "article-box article-box--circle"> 
            <img className = "article-box__image" src = "https://i.pinimg.com/originals/7d/aa/d5/7daad52d070f2e222d7096bb2c897b46.png" />
            <h3 className = "article-box__title"> @afonsopacifer </h3>
            <p className = "article-box__description">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam ac facilisis lectus, at semper eros.
            </p>
          </div>

          <div className = "article-box article-box--circle"> 
            <img className = "article-box__image" src = "https://i.pinimg.com/originals/7d/aa/d5/7daad52d070f2e222d7096bb2c897b46.png" />
            <h3 className = "article-box__title"> @afonsopacifer </h3>
            <p className = "article-box__description">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam ac facilisis lectus, at semper eros.
            </p>
          </div>

          <div className = "article-box article-box--circle"> 
            <img className = "article-box__image" src = "https://i.pinimg.com/originals/7d/aa/d5/7daad52d070f2e222d7096bb2c897b46.png" />
            <h3 className = "article-box__title"> @afonsopacifer </h3>
            <p className = "article-box__description">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam ac facilisis lectus, at semper eros.
            </p>
          </div>

        </article>

      </section>

      <div className = "section-container">
        <section className = "section">
          <h2 className = "section__title"> Parceiros </h2>
          <p className = "section__text">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam ac facilisis lectus, at semper eros. Vestibulum vel tempor lorem. Nullam vel hendrerit nunc, at euismod erat. Vivamus diam ipsum, ornare ac quam sed, malesuada efficitur sem. Curabitur sit amet congue nulla, non gravida nisl.
          </p>
          <article className = "article">

            <div className = "article-box"> 
              <img className = "article-box__image" src = "https://i.pinimg.com/originals/7d/aa/d5/7daad52d070f2e222d7096bb2c897b46.png" />
            </div>

            <div className = "article-box"> 
              <img className = "article-box__image" src = "https://i.pinimg.com/originals/7d/aa/d5/7daad52d070f2e222d7096bb2c897b46.png" />
            </div>

            <div className = "article-box"> 
              <img className = "article-box__image" src = "https://i.pinimg.com/originals/7d/aa/d5/7daad52d070f2e222d7096bb2c897b46.png" />
            </div>

            <div className = "article-box"> 
              <img className = "article-box__image" src = "https://i.pinimg.com/originals/7d/aa/d5/7daad52d070f2e222d7096bb2c897b46.png" />
            </div>

          </article>
        </section>
      </div>
    
      <footer className = "footer">
        <span className = "footer__text">
          Feito com <span class="heart"></span> e CSS
        </span>
      </footer>

    </div>
  )
}

export const query = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
  }
`