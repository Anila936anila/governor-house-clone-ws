import React from 'react';


interface Props {

}

const Jobs: React.FC<Props> = (props) => {
  return (
    <div>
        <div className="w-full sm:h-[400px] md:h[400px] lg:[400px] xl:[500px] flex flex-col justify-center items-center">
            <div>
            <h1 className="font-bold sm:text-lg md:text-2xl lg:text-2xl">Jobs/ Internships coming soon.</h1>
            </div>
           
        </div>
         
    </div>
  );
}

export default Jobs;