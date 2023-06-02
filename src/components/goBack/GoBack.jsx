import { Link } from 'react-router-dom';

export const GoBackBtn = ({ path }) => {
  return <Link to={path}>Go back</Link>;
};

// className='uppercase inline-block font-black py-2 shadow-md px-4 rounded-lg bg-transparent border-2 border-indigo-700 bg-indigo-500  text-slate-50 hover:bg-indigo-600 hover:text-slate-100 text-md focus:bg-indigo-600 focus:text-slate-100 tracking-wider transition-colors mb-5'
