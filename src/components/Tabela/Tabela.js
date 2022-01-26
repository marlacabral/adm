import React from 'react';
import './tabela.css';

const Tabela = () => {

return (
    <div className='ranking-pai'>
        <div className='ranking'>
            <p><strong>Ranking</strong></p>
        </div>

        <div>
            <a href='/'>
                <button className='btn-voltar' type='submit'>Voltar</button>
            </a>
        </div>
    </div>
);
};

export default Tabela;