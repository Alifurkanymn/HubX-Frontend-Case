import { Menu, User } from 'lucide-react';

const Header = () => {
    return (
        <header className="bg-blue-secondary text-white shadow-md p-4">
            <div className="flex justify-between items-center gap-10">
                <button className="lg:hidden p-2">
                    <Menu className="h-6 w-6" />
                </button>

                <h1 className="text-xl font-semibold">HUBX</h1>

                <div className="hidden lg:flex items-center space-x-4 flex-1">
                    <ul className='flex space-x-6 >li:text-sm font-medium cursor-pointer'>
                        <li>
                            <a href='#'>Anasayfa</a>
                        </li>
                        <li>
                            <a href='#'>Hakkımızda</a>
                        </li>
                        <li>
                            <a href='#'>İletişim</a>
                        </li>
                    </ul>
                </div>
            </div>
        </header>
    );
};

export default Header;
