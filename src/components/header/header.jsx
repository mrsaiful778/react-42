import profile from '../../assets/images/profile.png'

const Header = (props) => {
    return (
        
        <header className='flex justify-between items-center p-4 border-b-2 max-w-7xl mx-auto'>
            <h1 className="text-5xl">knowledge cafe</h1>
            <img src={profile} alt="" />

           
        </header>
    );
};

export default Header;