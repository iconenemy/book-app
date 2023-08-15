type Props = {
  title: string;
};

const BookItemImage = ({ title }: Props) => {

  return (
    <div className="w-1/2 h-full flex justify-center ">
      <img src={`https://placehold.co/475x600/000000/FFF?text=${title}`} />
    </div>
  );
};

export default BookItemImage;