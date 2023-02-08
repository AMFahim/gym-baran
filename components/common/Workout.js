import workoutImg from './../../assets/image/workoutImg.svg';
import Image from "next/image";
import UiButton from '../ui/UiButton';
import ArrowRight from './../../assets/icon/ArrowRight.svg'
const Workout = () => {
    return (
        <div>
            <div className="grid lg:grid-cols-2 md:grid-cols-1 flex-row-reversed sm:grid-cols-1 gap-2 mx-8">
                <div className='mt-16'>
                    <Image src={workoutImg} height={508} width={580} alt="Workout image" />
                </div>
                <div className='sm:pt-32'>
                    <h1 className='text-[46px] font-poppins pt-4'>Best full body <br/> workout to lose fat</h1>
                    <p className='font-poppins font-medium text-gray-500 pt-6 pb-6 text-base mr-16'>Exercise is a very important need for our body. Health and fitness will be obtained if you can do regular exercise and run a healthy routine. Even at home we still have to be diligent in exercising, either alone or with your friends at home. </p>
                    <UiButton label="Get Started" src={ArrowRight}></UiButton>
                </div>
            </div>
        </div>
    );
};

export default Workout;