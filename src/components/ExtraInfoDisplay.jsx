const ExtraInfoDisplay = ({ Icon, measurement, units }) => {
  return (
    <div className='flex gap-1 items-center'>
      <Icon />
      <div className='flex flex-col items-start justify-center'>
        <p className='text-lg'>{measurement}</p>
        <p className='text-sm'>{units}</p>
      </div>
    </div>
  );
};

export default ExtraInfoDisplay;
