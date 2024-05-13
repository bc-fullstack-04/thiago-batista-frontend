import React from "react";
import logo from '../../assets/logo.svg';
import { useNavigate } from "react-router-dom";
import { Button } from '../ui/button';

interface Props {
    isAuth?: boolean;
}

export function Header({ isAuth = false}: Props) {
    const _navigate = useNavigate();
  
    return (
      <>
        <section className="flex w-full h-[75px] justify-between pl-25 pr-25 bg-white bg-opacity-30  px-[100px]">
            <div className="flex w-[164px] h-full justify-center items-center gap-2">
              <img src={logo} className="h-12" />
              <h1 className="text-md text-white">BootPlay</h1>
            </div>
         
            {isAuth ? (
              <div className="flex flex-wrap justify-center items-center gap-4">
                <Button onClick={() => _navigate('/myDiscs')} variant="default" size="default" className="text-white">Meus Discos</Button>
                <Button onClick={() => _navigate('/wallet')} variant="default" size="default" className="text-white">Carteira</Button>
                <img src={logo} className="h-12" />
              </div>
            ) : (
              <div className="flex flex-wrap justify-center items-center gap-4">
                <Button onClick={() => _navigate('/login')} variant="default" size="default" className="bg-zinc-900 text-white font-semibold text-xl rounded-3xl h-12 w-[200px]">Entrar</Button>
                <Button onClick={() => _navigate('/signup')} className="text-black bg-sysmapLight font-semibold text-2xl rounded-[32px] h-16 w-[269px]">Insctição</Button>
              </div>
            )}  
        </section>
      </>
    );
  }
