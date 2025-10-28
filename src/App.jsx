import { useState, useEffect } from 'react'
import './App.css'

function App() {
  const [active, setActive] = useState(0)
  const [diameter, setDiameter] = useState(1432)

  const items = [
    {
      id: 0,
      image: '/images/BG_SP.jpg', // Background image
      centerImage: '/images/CR7_SP.png', // Center Ronaldo image
      centerOffsetY: '150px',
      centerScale: '1.8',
      circleColor: '#1B4332', // Sporting CP - Dark forest green
      innerCircleColor: '#2D6A4F', // Dark forest green for inner circle
      title: 'SPORTING CP',
      description1: '2002-2003',
      description2: 'The Beginning',
      description3: 'Cristiano Ronaldo began his professional journey at Sporting Clube de Portugal, commonly known as Sporting CP, in Lisbon. Rising through the club’s renowned youth academy, he showcased exceptional dribbling, vision, and speed that set him apart from his peers. He played for both the U16, U17, and U18 teams before making his senior debut at just 17 years old. Ronaldo’s outstanding performance against Manchester United in a friendly match famously caught Sir Alex Ferguson’s attention. His short yet impactful spell at Sporting laid the foundation for what would become one of the most illustrious careers in football history.',
      stats: { games: 31, goals: 5, assists: 6, wins: 22 }
    },
    {
      id: 1,
      image: '/images/BG_MUN1.jpg', // Background image
      centerImage: '/images/CR7_MUN1.png', // Center Ronaldo image
      centerScale: '1.5',
      centerOffsetY: '-150px',
      circleColor: '#DA020E', // Manchester United - Red
      innerCircleColor: '#FF1A1A', // Lighter red for inner circle
      title: 'MANCHESTER',
      description1: '2003-2009',
      description2: 'The Red Devils',
      description3: 'Cristiano Ronaldo joined Manchester United in 2003, becoming one of the most expensive transfers in football history. His arrival at Old Trafford marked the beginning of a remarkable era in English football. Ronaldo quickly established himself as a key player, scoring 118 goals in 200 league appearances and winning three Premier League titles. His impact was felt not only on the pitch but also off it, as he became a symbol of hope and pride for the club and its supporters. His legacy at Manchester United is forever etched in the club’s history, and his impact on the English game remains undeniable.',
      stats: { games: 196, goals: 84, assists: 34, wins: 143 }
    },
    {
      id: 2,
      image: '/images/BG_RM2.jpg', // Background image
      centerImage: '/images/CR7_RM.png', // Center Ronaldo image
      centerScale: '1.2',
      centerOffsetY: '50px',
      centerOffsetX: '150px',
      circleColor: '#00529F', // Real Madrid - Blue
      innerCircleColor: '#B0B0B0', // More dimmed white for middle circle
      title: 'REAL MADRID',
      description1: '2009-2018',
      description2: 'The Galactico',
      description3: 'Cristiano Ronaldo moved to Real Madrid in 2009, joining one of the most storied clubs in world football. His arrival at the Santiago Bernabéu marked the beginning of a new chapter in his career. Ronaldo quickly established himself as a key player, scoring 450 goals in 438 league appearances and winning four Champions League titles. His impact was felt not only on the pitch but also off it, as he became a symbol of hope and pride for the club and its supporters. His legacy at Real Madrid is forever etched in the clubs history, and his impact on the Spanish game remains undeniable.',
      stats: { games: 292, goals: 311, assists: 95, wins: 231 }
    },
    {
      id: 3,
      image: '/images/BG_JUV1.jpg', // Background image
      centerImage: '/images/CR7_JUV.png', // Center Ronaldo image
      centerScale: '1.3',
      centerOffsetY: '80px',
      circleColor: '#000000', // Juventus - Black
      innerCircleColor: '#333333', // Lighter black for inner circle
      title: 'JUVENTUS',
      description1: '2018-2021',
      description2: 'The Old Lady',
      description3: 'Cristiano Ronaldo joined Juventus in 2018, joining one of the most storied clubs in world football. His arrival at the Allianz Stadium marked the beginning of a new chapter in his career. Ronaldo quickly established himself as a key player, scoring 101 goals in 134 league appearances and winning two Serie A titles. His impact was felt not only on the pitch but also off it, as he became a symbol of hope and pride for the club and its supporters. His legacy at Juventus is forever etched in the club’s history, and his impact on the Italian game remains undeniable.',
      stats: { games: 134, goals: 101, assists: 22, wins: 97 }
    },
    {
      id: 4,
      image: '/images/BG_MUN2.jpg', // Background image
      centerImage: '/images/CR7_MUN2.png', // Center Ronaldo image
      circleColor: '#DA020E', // Manchester United - Red
      innerCircleColor: '#FF1A1A', // Lighter red for inner circle
      title: 'MANCHESTER',
      description1: '2021-2022',
      description2: 'The Return',
      description3: 'Cristiano Ronaldo returned to Manchester United in 2021, joining one of the most storied clubs in world football. His arrival at Old Trafford marked the beginning of a new chapter in his career. Ronaldo quickly established himself as a key player, scoring 24 goals in 40 league appearances and winning one Premier League title. His impact was felt not only on the pitch but also off it, as he became a symbol of hope and pride for the club and its supporters. His legacy at Manchester United is forever etched in the club’s history, and his impact on the English game remains undeniable.',
      stats: { games: 40, goals: 24, assists: 6, wins: 21 }
    },
    {
      id: 5,
      image: '/images/BG_ALN.jpg', // Background image
      centerImage: '/images/CR7_ALN.png', // Center Ronaldo image
      circleColor: '#FFD700', // Al Nassr - Gold/Yellow
      innerCircleColor: '#FFE55C', // Lighter gold for inner circle
      title: 'AL NASSR',
      description1: '2022-Present',
      description2: 'The Desert King',
      description3: 'Cristiano Ronaldo joined Al Nassr in 2022, joining one of the most storied clubs in world football. His arrival at the King Fahd Stadium marked the beginning of a new chapter in his career. Ronaldo quickly established himself as a key player, scoring 58 goals in 65 league appearances and winning one Saudi Pro League title. His impact was felt not only on the pitch but also off it, as he became a symbol of hope and pride for the club and its supporters. His legacy at Al Nassr is forever etched in the club’s history, and his impact on the Saudi Arabian game remains undeniable.',
      stats: { games: 65, goals: 58, assists: 18, wins: 47 }
    },
    {
      id: 6,
      image: '/images/BG_POR.jpg', // Background image
      centerImage: '/images/CR7_POR.png', // Center Ronaldo image
      circleColor: '#FF0000', // Portugal - Red
      innerCircleColor: '#FF3333', // Lighter red for inner circle
      title: 'PORTUGAL',
      description1: '2003-Present',
      description2: 'The Captain',
      description3: 'Cristiano Ronaldo is the captain of the Portugal national team. He has been the captain since 2008 and has led the team to two European Championships and one World Cup. Ronaldo is the all-time leading goal scorer for Portugal with 120 goals in 196 appearances. He is also the all-time leading goal scorer for Manchester United with 249 goals in 383 appearances. He is also the all-time leading goal scorer for Real Madrid with 450 goals in 438 appearances. He is also the all-time leading goal scorer for Juventus with 101 goals in 134 appearances. He is also the all-time leading goal scorer for Al Nassr with 58 goals in 65 appearances. He is also the all-time leading goal scorer for Manchester United with 249 goals in 383 appearances. He is also the all-time leading goal scorer for Real Madrid with 450 goals in 438 appearances. He is also the all-time leading goal scorer for Juventus with 101 goals in 134 appearances. He is also the all-time leading goal scorer for Al Nassr with 58 goals in 65 appearances.',
      stats: { games: 208, goals: 131, assists: 48, wins: 127 }
    }
  ]

  useEffect(() => {
    const setDiameterValue = () => {
      const slider = document.querySelector('.slider')
      if (slider) {
        const widthSlider = slider.offsetWidth
        const heightSlider = slider.offsetHeight
        const calculatedDiameter = Math.sqrt(Math.pow(widthSlider, 2) + Math.pow(heightSlider, 2))
        setDiameter(calculatedDiameter)
      }
    }

    setDiameterValue()
    window.addEventListener('resize', setDiameterValue)

    return () => {
      window.removeEventListener('resize', setDiameterValue)
    }
  }, [])

  const handleNext = () => {
    if (active < items.length - 1) {
      setActive(active + 1)
    }
  }

  const handlePrev = () => {
    if (active > 0) {
      setActive(active - 1)
    }
  }

  return (
    <>
      <main>
        <header>
        
        </header>
        <section className="slider" style={{ '--diameter': `${diameter}px`, '--center-image': `url('${items[active].centerImage}')`, '--center-offset-y': items[active].centerOffsetY || '0px', '--center-offset-x': items[active].centerOffsetX || '0px', '--center-scale': items[active].centerScale || '1', '--circle-color': items[active].circleColor || '#000' }}>
          <div className="list">
            {items.map((item, index) => (
              <div 
                key={item.id} 
                className={`item ${index === active ? 'active' : ''} ${index === active + 1 ? 'next' : ''}`}
              >
                <div className="image" style={{ '--url': `url('${item.image}')`, '--circle-bg-color': item.circleColor || '#000', '--inner-circle-color': item.innerCircleColor || '#333' }}></div>
                <div className="year-display">G.O.A.T</div>
                <div className="content">
                  <div className="left-content-wrapper">
                    <h2>{item.title}</h2>
                    <p className="year">{item.description1}</p>
                    {item.stats && (
                      <div className="stats">
                        <div className="stat-item">
                          <span className="stat-label">GAMES</span>
                          <span className="stat-value">{item.stats.games}</span>
                        </div>
                        <div className="stat-item">
                          <span className="stat-label">GOALS</span>
                          <span className="stat-value">{item.stats.goals}</span>
                        </div>
                        <div className="stat-item">
                          <span className="stat-label">ASSISTS</span>
                          <span className="stat-value">{item.stats.assists}</span>
                        </div>
                        <div className="stat-item">
                          <span className="stat-label">WINS</span>
                          <span className="stat-value">{item.stats.wins}</span>
                        </div>
                      </div>
                    )}
                  </div>
                  <div className="right-content-wrapper">
                    <p className="tag">{item.description2}</p>
                    <p className="description">{item.description3}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <div className="arrows">
            <button 
              id="prev" 
              onClick={handlePrev}
              className={active === 0 ? 'd-none' : ''}
            >
              <svg className="w-6 h-6 text-gray-800 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
                <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 12h14M5 12l4-4m-4 4 4 4"/>
              </svg>
            </button>
            <button 
              id="next" 
              onClick={handleNext}
              className={active === items.length - 1 ? 'd-none' : ''}
            >
              <svg className="w-6 h-6 text-gray-800 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
                <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 12H5m14 0-4 4m4-4-4-4"/>
              </svg>
            </button>
          </div>
        </section>
      </main>
    </>
  )
}

export default App
