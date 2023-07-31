import React from 'react'

export default function HomePage() {
  return (
    <main id="main" className='PageLayoutWrapper'>
        <div className="SectionCenter SectionFlex">
            <div className="FirstWrapper">

                <div className="ImageContainer">
                    <picture className="NextGenImage">
                        <img src="https://images.ctfassets.net/c5bd0wqjc7v0/5oEZBTPlhzKLA5OrNpRmsl/763c828277bea2afdb4c981441dd700f/HeroImg.webp?fl=progressive&q=100&w=1180" alt="" />
                    </picture>
                </div>

                <div className="TextWrapper SectionFlex SectionCenter">
                    <div className='TitleWrapper SectionFlex SectionRow'>
                        <div className="SectionFlex SectionMaxWidthHundred">
                            <h1>The future of money is here</h1>
                        </div>

                    </div>
                </div>

            </div>

        </div>


    </main>
  )
}
