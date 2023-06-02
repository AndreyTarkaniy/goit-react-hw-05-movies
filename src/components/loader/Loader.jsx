import css from 'components/loader/Loader.module.css';

export const Loader = () => {
  return (
    <div className={css.wrap}>
      <div className={css.spinner}></div>
    </div>
  );
};
