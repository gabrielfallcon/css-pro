import { CounterBox } from './styles';


export const Counter = () => {
  const timerDay = Date();

  const days = '20';
  const hours = '20';
  const minute = '20';
  return (
    <CounterBox>
        <h2>
          <span>Prepare-se</span> para o melhor ano da sua carreira de dev front-end
        </h2>

        <div className='timer'>
          <div className='timer__item'>
            <div className='box-number'>
              <div>2</div>
              <div>0</div>
            </div>

            <span>Dias</span>
          </div>

          <div className='timer__item'>
            <div className='box-number'>
              <div>2</div>
              <div>2</div>
            </div>

            <span>Horas</span>
          </div>

          <div className='timer__item'>
            <div className='box-number'>
              <div>5</div>
              <div>6</div>
            </div>

            <span>Minutos</span>
          </div>
        </div>
    </CounterBox>
  )
}