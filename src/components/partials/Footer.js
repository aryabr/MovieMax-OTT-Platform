import React from 'react'

function Footer() {
  return (
    <div>
        <footer className='text-white text-center pt-4 mt-3 '>&copy; {new Date().getFullYear()} MovieMax. All rights reserved.</footer>
    </div>
  );
}

export default Footer