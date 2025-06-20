import { SVGAttributes } from 'react';
import logo from '@/assets/logo.png';
export default function AppLogoIcon(props: SVGAttributes<SVGElement>) {
    return (
        <div >
            <img {...props}   src={logo} alt="TB Logo"/>
        </div>
        
    );
}
