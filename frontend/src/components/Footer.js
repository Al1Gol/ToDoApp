import React from 'react'

const Footer = ({footer}) => {
    return (
        <footer>
            <div className='footer-name'>
                <li>Разработано</li>
                <li>Корепановым Альбертом</li>
                <li>в 2022 году</li>    
            </div>
            <div>
                <ul className='about-us'>
                    <li>Контакты:</li>
                    <li>тел: +7-961-476-92-19</li>
                    <li>email: <a className='footer-link' href='mailto:al1working@mail.ru'>al1working@mail.ru</a></li>
                    <li>telegram: <a className='footer-link' href='https://t.me/al1gol'>https://t.me/al1gol</a></li>
                </ul>
            </div>
        </footer>
    )
}

export default Footer