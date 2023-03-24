import React from 'react'
import './portfolio.css'
// import IMG1 from '../../assets/netflix-clone.png'
// import IMG2 from '../../assets/Sports-blog.png'
// import IMG3 from '../../assets/1-Liner.png'
// import IMG4 from '../../assets/meal-recipies.png'
// import IMG5 from '../../assets/personal-blog.png'
// import IMG6 from '../../assets/stories-blog.png'
// import IMG7 from '../../assets/Ecommerce.png'

const data = [
  {
      id: 1,
      image: "https://drive.google.com/uc?export=view&id=1FnAfG-g9lPVTVGX6wCzmRxjWHt7Nxtaz",
      title: 'Abia Tech Hub',
      demo: 'https://abiatechhub.com/',
  },
  {
      id: 2,
      image: "https://drive.google.com/uc?export=view&id=1_HZXgsEYGhSLL5IeCgHO-wG-GPiZq2Pl",
      title: 'Ticked - Productivity App',
      github: 'https://github.com/workshopapps/todoassistant.web',
  },
  {
      id: 3,
      image: "https://drive.google.com/uc?export=view&id=1VKo4b3ynSsMSrnmlFHRwQ9ZSWzv5XZh4",
      title: 'Space App',
      github: 'https://github.com/ElemaGp/foodcourt',
      demo: "https://foodcourt-elema-godspower.netlify.app/",
  },
  {
      id: 4,
      image: "https://drive.google.com/uc?export=view&id=1NmvfGdBsLVGhQYOHI3RYdWlrDkaRWkce",
      title: 'Netflix clone',
      github: 'https://github.com/ElemaGp/netflix-clone-MERN-stack.git',
      
  },
  {
      id: 5,
      image: "https://drive.google.com/uc?export=view&id=1SgrFXenj7neFs_dRvArqvYiXgLJMjJBr",
      title: 'Sports Blog',
      github: 'https://github.com/ElemaGp/Sports-blog-MERN-Stack.git',
      
  },
  {
      id: 6,
      image: "https://drive.google.com/uc?export=view&id=1sb2j3T2jy4jsQjpHhKVqEkCVdmJSsQh6",
      title: 'Clever 1-Liners Journal',
      github: 'https://github.com/ElemaGp/1-Liner-Journal.git',
    
  },
  {
      id: 7,
      image: "https://drive.google.com/uc?export=view&id=1Shqw7u4w2XuDuefhCr2E5Vvkgq8nW0Fb",
      title: 'Meal Recipies',
      github: 'https://github.com/ElemaGp/Meal-Recipies.git',
   
  },
  {
      id: 8,
      image: "https://drive.google.com/uc?export=view&id=1TgoWrSuT1GVOksWQubuqc_l1qAasHioK",
      title: 'Personal blog',
      github: 'https://github.com/ElemaGp/nodejs-blog.git',
  },
  {
      id: 9,
      image: "https://drive.google.com/uc?export=view&id=1iJN-BQvS9UW1iB-87mfH6ky1sZqZlC3h",
      title: 'Stories blog',
      github: 'https://github.com/ElemaGp/story-blog.git',

  },
  {
      id: 10,
      image: "https://drive.google.com/uc?export=view&id=1AU_9LJ9wuTvVxyoZ0DXAEKVQs9Y0Anmr",
      title: 'E-commerce store',
      github: 'https://github.com/ElemaGp/E-commerce-PROJECT-react-redux.git',

  }

]

const Portfolio = () => {
  return (
    <section id='portfolio'>
      <h5>My Recent Work</h5>
      <h2>Portfolio</h2>

      <div className="container portfolio__container">
        {
          data.map(({id, image, title, github, demo}) => {
            return (
              <article key={id} className='portfolio__item'>
              <div className="portfolio__item-image">
                <img src={image} alt={title} className="portfolio__img"/>
              </div>
              <h3 className="portfolio__title"> {title}</h3>
              <div className="portfolio__item-cta">
                {github && <a href={github} className='btn' target='blank'>Github</a>}
                {demo && <a href={demo} className='btn' target='blank'>Live</a>}
              </div>
            </article>
            )
          })
        }
        
      </div>
    </section>
  )
}

export default Portfolio
        