import React, { useState } from 'react';

const Background_Changer = () => {
  const [color, setColor] = useState('');

  const colorValue = {
    red: 'bg-red-600',
    blue: 'bg-blue-600',
    green: 'bg-green-600',
    slate: 'bg-slate-600',
    default: 'bg-gray-100',
  };

  return (
    <>
      <div className={`min-h-screen ${colorValue[color] }`}>
        <nav className='p-6 bg-white flex items-center justify-center gap-2'>

          <button onClick={() => setColor('red')}
            className='bg-red-600 px-6 py-1 text-xl rounded-xl text-white'>Red
             </button>

          <button  onClick={() => setColor('blue')}
            className='bg-blue-600 px-6 py-1 text-xl rounded-xl text-white'> Blue
          </button>

          <button onClick={() => setColor('green')}
            className='bg-green-600 px-6 py-1 text-xl rounded-xl text-white'> Green
          </button>
          
          <button onClick={() => setColor('slate')}
            className='bg-slate-600 px-6 py-1 text-xl rounded-xl text-white'>Slate
          </button>

        </nav>
      </div>
    </>
  );
};

export default Background_Changer;
