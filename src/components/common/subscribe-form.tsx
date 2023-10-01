import React, { FC } from "react";

const HPSubscribeForm: FC = () => {
  return (
    <section className="subscribe">
      <form action="" autoComplete="off" className="subscribe-form">
        <div className="subscribe-inner">
          <label htmlFor="subscribe-form" className="form-group__label subscribe-form__label">
            Join our monthly newsletter
          </label>
          <div className="subscribe-form__text-btn">
            <input
              type="text"
              id="email"
              className="form-group__input subscribe-form__input"
              placeholder="Email*"
            />
            <div className="subscribe-form__btn">
              <button className="btn subscribe-form__btn-cta" type="submit">
                Subscribe
              </button>
            </div>
          </div>
        </div>
      </form>
    </section>
  );
};

export default HPSubscribeForm;
