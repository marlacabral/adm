import React from 'react';
import './indica.css';

const Indica = () => {

return (
    <div className='indica-pai'>
        <div>
            <p><strong>Inscrição bem-sucedida, você ganhou um ponto. Compartilhe o link abaixo e ganhe mais pontos.</strong></p>

            <p>linkficticio@linkficticio.com</p>
        </div>

        <div >
            <a href='/'>
                <button className='btn-compartilhar' type='submit'>Compartilhar</button>
            </a>
        </div>
    </div>
);
};

export default Indica;