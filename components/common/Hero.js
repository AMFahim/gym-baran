import React from 'react';
import UiButton from '../ui/UiButton';
import heroImg from './../../assets/image/heroImg.svg';
import arrow from './../../assets/icon/vector.svg';
import Image from 'next/image';
import UiLeftIconBtn from '../ui/UiLeftIconBtn';
import playerIcon from './../../assets/icon/playerIcon.svg';
import { BrandIcons } from '../../assets/localDb/local.db';

const Hero = () => {
    return (
        <div className="grid lg:grid-cols-2 md:grid-cols-1 flex-row-reversed sm:grid-cols-1 gap-2 mx-8">
            <div className='pt-28'>
                <h1 className='text-[56px] font-bold font-grotesque pt-4 leading-[73px]'>Healthy in side <br /> <span className='text-[#8382EB]'>fresh</span> out side</h1>
                <p className='font-poppins text-base text-default-color font-normal pt-6 pb-6'>Exercise is a very important need for our body. Health and fitness will be obtained if you can do regular exercise and run a healthy routine.</p>
                <div className='flex gap-3'>
                <UiButton label="Get Started" src={arrow}></UiButton>
                <UiLeftIconBtn label="Learn More" src={playerIcon}/>
                </div>
                <div>
                    <p className='font-poppins mt-8 mb-3'>Brands:</p>
                    <div className='flex gap-2'>
                        {
                            BrandIcons.map(icons => 
                                <div key={icons.id} className="h-[20px]">
                                    <Image src={icons.image} height={30} alt="images"/>
                                </div>
                                )
                        }
                    </div>
                </div>
            </div>
            <div>
                <div className='mt-16'>
                    <Image src={heroImg} height={508} width={580} alt="image"></Image>
                </div>
                
            </div>
        </div>
    );
};

export default Hero;