
import Link from 'next/link'  

export default function Home () {
  return (
    <div className="flex justify-center items-center">
    <div className="flex-col space-x-10">
      <HomeBody />
    </div>
  </div>
  
    
    
      
    
  )
};

function Header(){
  return (
    <div className  ="bg-black-500 py-4">
      <ul className="flex-col justify-center space-x-10">
        <li className="text-white">Home</li>
        <li className="text-white">Projects</li>
        <li className="text-white">About me</li>
        <li className="text-white">Contact</li>
      </ul>
    </div>
  );
};

function HomeBody(){
  return (
    <div className='flex'>
      <div className='w-1/2'>
          
      <img src="/magicstudio-art(3).jpg" alt="an image of a tree" className='rounded-full drop-shadow-lg'/></div>
      <div className='w-1/2'>
      <Header></Header>
      </div>
    </div>
  
  )
}


