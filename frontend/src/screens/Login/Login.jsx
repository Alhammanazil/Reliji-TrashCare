import React, { useState } from 'react';
import { Button } from "../../components/Button";
import { NavbarGuest } from "../../components/NavbarGuest";
import { StateDefaultChangeWrapper } from "../../components/StateDefaultChangeWrapper";

export const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  const validateForm = () => {
    console.log(`Validating form with email: ${email} and password: ${password}`);
    if (!email || !password) {
      setErrorMessage('Email dan password harus diisi');
      return false;
    }
    if (!/\S+@\S+\.\S+/.test(email)) {
      setErrorMessage('Email tidak valid');
      return false;
    }
    return true;
  };

  const handleLogin = async (e) => {
    e.preventDefault();
    console.log(`Submitting form with email: ${email} and password: ${password}`);

    if (!validateForm()) {
      return;
    }

    try {
      const response = await fetch('http://localhost:3001/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email, password }),
      });

      const data = await response.json();

      if (response.ok) {
        // Simpan token ke localStorage atau state global
        localStorage.setItem('token', data.token);
        // Redirect ke halaman yang diinginkan
        window.location.href = '/home';
      } else {
        setErrorMessage(data.error);
      }
    } catch (error) {
      console.error('Error logging in:', error);
      setErrorMessage('Terjadi kesalahan. Silakan coba lagi.');
    }
  };

  return (
    <div className="bg-white flex flex-row justify-center w-full">
      <div className="bg-primary-1 overflow-hidden w-[1440px] h-[1024px] relative">
        <div className="absolute w-[732px] h-[1024px] top-0 left-[708px] bg-primary-2">
          <img
            className="absolute w-[487px] h-[430px] top-[171px] left-[125px] object-cover"
            alt="Waste management"
            src="../../../static/img/waste-management-pana-1.png"
          />
        </div>
        <div className="absolute w-[486px] h-[599px] top-[118px] left-[120px]">
          <div className="flex flex-col w-[486px] items-start gap-[16px] absolute top-0 left-0">
            <div className="relative w-fit mt-[-1.00px] font-heading-2-bold font-[number:var(--heading-2-bold-font-weight)] text-t text-[length:var(--heading-2-bold-font-size)] tracking-[var(--heading-2-bold-letter-spacing)] leading-[var(--heading-2-bold-line-height)] whitespace-nowrap [font-style:var(--heading-2-bold-font-style)]">
              Masuk
            </div>
            <div className="relative w-fit opacity-75 font-body-1-regular font-[number:var(--body-1-regular-font-weight)] text-t text-[length:var(--body-1-regular-font-size)] tracking-[var(--body-1-regular-letter-spacing)] leading-[var(--body-1-regular-line-height)] whitespace-nowrap [font-style:var(--body-1-regular-font-style)]">
              Masuk untuk mengakses akunmu
            </div>
          </div>
          <form onSubmit={handleLogin} className="flex flex-col w-[486px] items-start gap-[24px] absolute top-[135px] left-0">
            <label htmlFor="email">E-mail</label>
            <input
              id="email"
              type="email"
              className="!w-[486px] !tracking-[var(--body-1-regular-letter-spacing)] !text-[length:var(--body-1-regular-font-size)] !whitespace-nowrap ![font-style:var(--body-1-regular-font-style)] !font-[number:var(--body-1-regular-font-weight)] !font-body-1-regular !leading-[var(--body-1-regular-line-height)] !rounded-[10px] !bg-primary-1"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <label htmlFor="password">Password</label>
            <input
              id="password"
              type="password"
              className="!w-[486px] !tracking-[var(--body-1-regular-letter-spacing)] !text-[length:var(--body-1-regular-font-size)] !whitespace-nowrap ![font-style:var(--body-1-regular-font-style)] !font-[number:var(--body-1-regular-font-weight)] !font-body-1-regular !leading-[var(--body-1-regular-line-height)] !rounded-[10px] !bg-primary-1"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            {errorMessage && <p className="text-red-500">{errorMessage}</p>}
            <div className="flex w-[486px] items-center gap-[252px] relative flex-[0_0_auto]">
              <div className="inline-flex items-center gap-[8px] relative flex-[0_0_auto]">
                <input type="checkbox" className="!relative !w-[24px] !h-[24px]" color="#313131" />
                <div className="relative w-fit font-body-2-regular font-[number:var(--body-2-regular-font-weight)] text-t text-[length:var(--body-2-regular-font-size)] tracking-[var(--body-2-regular-letter-spacing)] leading-[var(--body-2-regular-line-height)] whitespace-nowrap [font-style:var(--body-2-regular-font-style)]">
                  Ingat Saya
                </div>
              </div>
              <div className="relative w-[135px] font-body-2-regular font-[number:var(--body-2-regular-font-weight)] text-primary-2 text-[length:var(--body-2-regular-font-size)] text-right tracking-[var(--body-2-regular-letter-spacing)] leading-[var(--body-2-regular-line-height)] [font-style:var(--body-2-regular-font-style)]">
                <a href="/forgotpassword" className="text-black">Lupa Password</a>
              </div>
            </div>
            <Button
              className="!h-[49px] !flex !w-[486px]"
              divClassName="!mt-[unset]"
              property1="default"
              text="Masuk"
              type="submit"
            />
            <StateDefaultChangeWrapper
              changeIcon="none"
              className="!mt-[-17px] !flex-[0_0_auto] !flex !w-[486px]"
              hasFrame={false}
              size="large"
              state="default"
              type="filled"
            />
            <p className="relative w-[486px] mt-[22px] font-body-2-bold font-[number:var(--body-2-bold-font-weight)] text-transparent text-[length:var(--body-2-bold-font-size)] text-center tracking-[var(--body-2-bold-letter-spacing)] leading-[var(--body-2-bold-line-height)] [font-style:var(--body-2-bold-font-style)]">
              <span className="text-[#303030] font-body-2-bold [font-style:var(--body-2-bold-font-style)] font-[number:var(--body-2-bold-font-weight)] tracking-[var(--body-2-bold-letter-spacing)] leading-[var(--body-2-bold-line-height)] text-[length:var(--body-2-bold-font-size)]">
                Tidak punya akun?{" "}
              </span>
              <a className="text-[#235d3a] font-body-2-bold [font-style:var(--body-2-bold-font-style)] font-[number:var(--body-2-bold-font-weight)] tracking-[var(--body-2-bold-letter-spacing)] leading-[var(--body-2-bold-line-height)] text-[length:var(--body-2-bold-font-size)]" href="/signup">
                Daftar
              </a>
            </p>
          </form>
          <div className="flex w-[486px] items-center gap-[16px] relative flex-[0_0_auto] mr-[-1.99px] mt-[500px]">
            <div className="relative flex-1 grow h-px bg-t opacity-25" />
            <div className="relative w-fit mt-[1.00px] opacity-50 font-body-2-regular font-[number:var(--body-2-regular-font-weight)] text-t text-[length:var(--body-2-regular-font-size)] tracking-[var(--body-2-regular-letter-spacing)] leading-[var(--body-2-regular-line-height)] whitespace-nowrap [font-style:var(--body-2-regular-font-style)]">
              Atau masuk dengan
            </div>
            <div className="relative flex-1 grow h-px bg-t opacity-25 mt-10" />
          </div>
          <a href="#">
            <img className="relative w-[486px] flex-[0_0_auto] mr-[-1.99px]" alt="Frame" src="../../../static/img/frame-228.svg" />
          </a>
        </div>
        <NavbarGuest
          className="!fixed !left-[-3px] !top-0"
          logoPlaceholderGroup="../../../static/img/group-7-2.png"
          menuItemDivClassName="!underline !tracking-[0] !text-[16px] ![font-style:unset] !font-bold ![font-family:'Nunito',Helvetica] !leading-[22.4px]"
          to="/login"
        />
      </div>
    </div>
  );
};
