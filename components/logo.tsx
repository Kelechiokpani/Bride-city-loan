import {FC} from "react";


const Logo:FC = () => {
  return(
      <a href="" className="logo-link">
          <img className="logo-light logo-img" src="/images/logo.png"
               srcSet="/images/logo2x.png 2x" alt="logo"/>
              <img className="logo-dark logo-img" src="/images/logo-dark.png"
                   srcSet="/images/logo-dark2x.png 2x" alt="logo-dark"/>
                  <span className="nio-version">Bride City</span>
      </a>
  )
}

export default Logo
