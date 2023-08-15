import { useLocation } from "react-router-dom";

const InPageHeader = () => {
  const { pathname } = useLocation()

  return (
    <div className="pt-28 pb-32 flex justify-center uppercase font-medium tracking-wider">
      {pathname.split('/')[2] === 'library' ?
        <h1>Library</h1> :
        <h1>My collection</h1>
      }

    </div>
  );
};

export default InPageHeader;
