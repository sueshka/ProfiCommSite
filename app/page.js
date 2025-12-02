'use client';
const WHATSAPP_NUMBER = ""; // Replace with Tanya's WhatsApp number +996775971444
import Image from "next/image";
import './globals.css';
import { useState } from "react";

export default function Header() {
  const [form, setForm] = useState({
  firstName: "",
  lastName: "",
  phone: "",
  description: ""
});

const onChange = (e) => {
  const { name, value } = e.target;
  setForm((s) => ({ ...s, [name]: value }));
};

// Handle for WA submission (Written with help of GPT (I am stupid sorry(It works thooo)))
const onSubmit = (e) => {
  e.preventDefault();

  const msg = `Новая заявка:%0A
  Имя: ${form.firstName} ${form.lastName}%0A
  Телефон: ${form.phone}%0A
  Описание: ${form.description}`;


  window.open(
    `https://wa.me/${WHATSAPP_NUMBER.replace("+", "")}?text=${msg}`,
    "_blank"
  );

  
  setForm({ firstName: "", lastName: "", phone: "", description: "" });
};

const inputStyle = {
  height: 64,
  borderRadius: 12,
  border: "2px solid #000",
  padding: "0 18px",
  fontSize: 18,
  boxSizing: "border-box",
  outline: "none",
  width: "100%",
};


  return (
    <div className="page-wrap" style={{width: "100%", height:"873px",margin: 0,padding: "35px 80px ",boxSizing: "border-box"}}>
     
      {/* Block 1 - Intro Section */}
      <div className="intro" style={{display: "flex",justifyContent: "space-between",alignItems: "center",marginBottom: "10px", width: "1"}}>
        <Image style={{position: "relative", top: -18, left: -40}} src="/images/profi_logo.png" alt="Application Logo" width={125} height={50}/>
        <p style={{ fontSize: 28, margin: 0, position: "relative", top: -18, right: -25}}>
          Личный <span style={{ color: "#780F0F" }}>Бренд</span>
        </p>
       </div>


        <div className="hero">
          <h1
            style={{
              fontSize: 123,
              fontWeight: 700,
              color: "#780F0F",
              position: "relative",top: -95,left: -40,
              lineHeight: 1,
            }}
          >
            ТРАНСФОРМИРУЙСЯ
          </h1>
          <p className="p-left"style={{ fontSize: 38, marginBottom: 8, fontWeight: 500, position: "relative",top: -190, left: -15}}>
            Выйди на новый уровень                    
          </p>
      
           <div style={{ textAlign: "right"}}>
          <p className="p-right" style={{ fontSize: 38, marginBottom: 8, fontWeight: 500, position: "relative",top: -274,right:-20}}>
            влияния и масштаба через
          </p>
  
          </div>
          <ul style={{ 
            textAlign: "right",
            listStylePosition: "inside",
            fontSize: 36,
            lineHeight: 1.6,
            margin: 0,
            position: "relative",
            top: -265,
            right: -20}}>
            <li>Систематизацию личной <br/>стратегии ростабик</li>
            <li>Инсайтов образа <br/>мышления</li>
          </ul>
          <p className="p-down" style={{textAlign: "left", fontSize: 36,fontWeight:500,position: "relative", top:-90}}> На базе <br/> трансформационной бизнес <br/>игры <b><span style={{ color: "#780F0F", fontWeight:700 }}>«Я есть Бренд»</span></b></p>

          
        <div>
          <Image
          style={{position: "relative",top:-790, left: 500}}
            src="/images/mama_main.png"
            alt="Main Tanya Image"
            width={820}
            height={670}
          />
        </div>
        </div>
          
          {/* Block 2 - Description */}
        <div className="desc" style={{position:"relative", top:-780}}>
          <p style={{fontSize:36, fontWeight:500,textAlign:"center"}}>Это не просто деловая игра.<br/> Это инструмент трансформации вас и вашего бизнеса.<br/>
             Уникальность - соединение академических протоколов стратегий<br/> бренда со вшитыми инструментами психологии для работы с <br/>
             мышлением и установками. А также инструмент решения вашего <br/> запроса быстро, точечно и «в 360».</p>
          <p style={{fontSize:36, fontWeight:500,textAlign:"center"}}>Симбиоз «твердых» и «мягких» методов, упакованных в трансформационное поле-симуляцию рынка - в
             разы усиливает <br/> эффективность пересборки вашего бренда.</p>
        </div>
          
        <div className="who">
          <p style={{fontWeight:700, fontSize:80, color: "#780F0F",textAlign:"center", position:"relative",top:-800}}>ИГРА ДЛЯ ВАС ЕСЛИ ВЫ:</p>
        </div>

        <div className="cards-container" style={{
            display: "flex",
            flexWrap: "wrap",
            gap: "24px",
            rowGap: "70px",
            justifyContent: "center",
            width: "100%",
            boxSizing: "border-box",
            marginTop: "20px",
            position: "relative",top:-780
        }}>
          {/* Card Rectangles  Card 1*/}
          <div style={{
            width: 429,
            height: 346,
            borderRadius: 27,
            background: "#000",
            position: "relative",          
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "flex-end",
            padding: "24px 16px",
            boxSizing: "border-box",
        }}>

        {/* Circle */}
        <div className="card-circle">
          <img className="bsfix" src="/icons/businessman.png"/>
        </div>

        {/*  Text */}
        <p className="card-p1"
          style={{
            width: 366,
            color: "#fff",
            textAlign: "center",
            fontSize: 34,
            fontWeight: 600,
            lineHeight: 1,
            letterSpacing: "-0.04em",
            margin: 0,
            position: "relative",
            top: -75,
          }}
        >
          Являетесь предпринимателем, управленцем или менеджером
        </p>
      </div>

           {/* Card Rectangles  Card 2*/}
          <div style={{
            width: 429,
            height: 346,
            borderRadius: 27,
            background: "#000",
            position: "relative",          
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "flex-end",
            padding: "24px 16px",
            boxSizing: "border-box",
        }}>

        {/* Circle */}
        <div className="card-circle">
          <img src="/icons/Woman.png"/>
        </div>

        {/*  Text */}
        <p
          className="card-p2"
          style={{
            width: 400,
            color: "#fff",
            textAlign: "center",
            fontSize: 34,
            fontWeight: 600,
            lineHeight: 1,
            letterSpacing: "-0.04em",
            margin: 0,
            position: "relative",
            top: -75,
          }}
        >
         Начинаете осознано  строить свой личный бренд и имидж своего бизнеса
        </p>
      </div>

      {/* Card Rectangles  Crad 3 */}
          <div style={{
            width: 429,
            height: 346,
            borderRadius: 27,
            background: "#000",
            position: "relative",          
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "flex-end",
            padding: "24px 16px",
            boxSizing: "border-box",
        }}>

        {/* Circle */}
        <div className="card-circle">
          <img src="/icons/idea.png" />
        </div>

        {/*  Text */}
        <p
         className="card-p3"
          style={{
            width: 399,
            color: "#fff",
            textAlign: "center",
            fontSize: 34,
            fontWeight: 600,
            lineHeight: 1,
            letterSpacing: "-0.04em",
            margin: 0,
            position: "relative",
            top: -75,
          }}
        >
          Осознали важность личного бренда как инструмента продаж, влияния, монетизации
        </p>
      </div>

      {/* Card Rectangles  Card 4*/}
          <div style={{
            width: 429,
            height: 346,
            borderRadius: 27,
            background: "#000",
            position: "relative",          
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "flex-end",
            padding: "24px 16px",
            boxSizing: "border-box",
        }}>

        {/* Circle */}
        <div className="card-circle">
          <img src="/icons/rocket.png" />
        </div>

        {/*  Text */}
        <p
          className="card-p4"
          style={{
            width: 380,
            color: "#fff",
            textAlign: "center",
            fontSize: 34,
            fontWeight: 600,
            lineHeight: 1,
            letterSpacing: "-0.04em",
            margin: 0,
            position: "relative",
            top: -70,
          }}
        >
          Переосмыслили себя или делает переход в новую профессию, новую роль
        </p>
      </div>

      {/* Card Rectangles Card 5*/}
          <div style={{
            width: 429,
            height: 346,
            borderRadius: 27,
            background: "#000",
            position: "relative",          
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "flex-end",
            padding: "24px 16px",
            boxSizing: "border-box",
        }}>

        {/* Circle */}
        <div className="card-circle">
          <img src="/icons/phone.png" />
        </div>

        {/*  Text */}
        <p
          className="card-p5"
          style={{
            width: 406,
            color: "#fff",
            textAlign: "center",
            fontSize: 34,
            fontWeight: 600,
            lineHeight: 1,
            letterSpacing: "-0.04em",
            margin: 0,
            position: "relative",
            top: -45,
          }}
        >
          Хотите продвинуться по карьере засчет выстроенного имиджа и восприятия своей экспертности
        </p>
      </div>

      {/* Card Rectangles Card 6*/}
          <div style={{
            width: 429,
            height: 346,
            borderRadius: 27,
            background: "#000",
            position: "relative",          
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "flex-end",
            padding: "24px 16px",
            boxSizing: "border-box",
        }}>

        {/* Circle */}
        <div className="card-circle">
          <img src="/icons/thinker.png" />
        </div>

        {/*  Text */}
        <p
          className="card-p6"
          style={{
            width: 407,
            color: "#fff",
            textAlign: "center",
            fontSize: 34,
            fontWeight: 600,
            lineHeight: 1,
            letterSpacing: "-0.04em",
            margin: 0,
            position: "relative",
            top: -75,
          }}
        >
          Хотите проработать внутренние установки и паттерны мышления, мешающие росту
        </p>
        </div>
      </div>

      {/* Block 3 - Structure Section */}
      <div className="structure-left"style={{width:607, height:289, position:"relative", top:-790}}>
        <p className="p1" style={{color: "#780F0F",fontSize:80, fontWeight:700, textAlign:"left"}}>СТРУКТУРА</p>
        <p className="p2"style={{fontSize: 34,fontWeight:600,position:"relative", top:-70, right:-12}}>Проработка вашего запроса по 5 ключевым направлениям:</p>
        <ul style={{
          textAlign: "left",
          listStylePosition: "inside",
          fontSize: 34,
          fontWeight:600,
          lineHeight: 1.6,
          margin: 0,
          position:"relative", top:-100}}>
            <li>Идентификация</li>
            <li>Продукт</li>
            <li>Монетизация </li>
            <li>Команда</li>
            <li>Масштаб</li>
        </ul>
      </div>

      <div className="structure-circles" 
        style={{
          width: "833px",
          height: "484px",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          flexWrap: "wrap",     
          columnGap: "50px",         
          marginTop: "50px",
          position: "relative",
          top:-1120,
          left: 630,
        }}>

        {/* 1 Circle */}
        <div style={{ position: "relative", width: 200, height: 203 }}>
          {/* Black circle */}
          <div className="samallerCircle" style={{
            width: "100%",
            height: "100%",
            background: "#000",
            borderRadius: "50%",
            display: "flex",
            alignItems: "center",
            justifyContent: "center"
          }}>
            <img src="/icons/idishka.png " width={190} height={190}/>
          </div>

          {/* Red circle */}
          <div className="red-circle"> 1 </div>
        </div>

          {/* 2 Circle */}
          <div style={{ position: "relative", width: 200, height: 203 }}>
            {/* Black Circle */}
            <div className="samallerCircle" style={{
              width: "100%",
              height: "100%",
              background: "#000",
              borderRadius: "50%",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}>
              <img src="/icons/computer.png" width={190} height={190}/>
            </div>

            {/* Red Circle */}
            <div className="red-circle"> 2 </div>
          </div>

            {/* 3 Circle */}
              <div style={{ position: "relative", width: 200, height: 203 }}>

                {/* Black Circle */}
                <div className="samallerCircle" style={{
                  width: "100%",
                  height: "100%",
                  background: "#000",
                  borderRadius: "50%",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center"
                }}>
                  <img className="denushka "src="/icons/money.png" width={190} height={190} style={{marginLeft:20}}/>
                </div>

                {/* Red Circle */}
                <div className="red-circle"> 3 </div>
              </div>

            {/* 4 Circle */}
              <div style={{ position: "relative", width: 200, height: 203 }}>
                {/* Black Circle */}
                <div className="samallerCircle" style={{
                    width: "100%",
                    height: "100%",
                    background: "#000",
                    borderRadius: "50%",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center"
                }}>
                  <img className="teama"src="/icons/team.png" width={190} height={190}/>
                </div>

                {/* Red circle */}
                <div className="red-circle"> 4 </div>
              </div>

              {/* 5 Circle */}
              <div style={{ position: "relative", width: 200, height: 203 }}>

                {/* Черный круг */}
                <div className="samallerCircle" style={{
                  width: "100%",
                  height: "100%",
                  background: "#000",
                  borderRadius: "50%",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center"
                }}>
                  <img src="/icons/progress.png" width={190} height={190}/>
                </div>

                {/* Red Circle */}
                <div className="red-circle"> 5 </div>
              </div>
            </div>

            <div className="team-title" style={{position:"relative", top:-1100}}>
              <p style={{fontSize:80,fontWeight:700,textAlign:"center",color: "#780F0F"}}>НАША КОМАНДА</p>
            </div>

            <div className="team-slider" style={{
                  width: "100%",
                  display: "flex",
                  justifyContent: "center",
                  marginTop: "40px",
                  position:"relative",
                  top:-1150
                }}>
                  <div style={{
                    width: "774px",
                    height: "695px",
                    overflowX: "auto",
                    scrollSnapType: "x mandatory",
                    display: "flex",
                    gap: "20px",
                    paddingBottom: "10px"
                  }}>
                    
                    {/* Photo Card Tanya */}
                    <div style={{
                      flex: "0 0 774px",
                      height: "695px",
                      scrollSnapAlign: "center",
                      position: "relative"
                    }}>
                      <Image src="/images/mama_team.JPG" alt="" fill style={{ objectFit: "cover", borderRadius: "20px" }}/>
                    </div>

                      {/* Tanya Info */}
                     <div style={{
                      flex: "0 0 774px",
                      height: "695px",
                      scrollSnapAlign: "center",
                      position: "relative"
                    }}>
                      <Image src="/images/MamaInfo.png" alt="" fill style={{ objectFit: "contain", borderRadius: "20px" }}/>
                    </div>

                    {/* Photo Card Sasha*/}
                    <div style={{
                      flex: "0 0 774px",
                      height: "695px",
                      scrollSnapAlign: "center",
                      position: "relative"
                    }}>
                      <Image src="/images/sasha_team.JPG" alt="" fill style={{ objectFit: "cover", borderRadius: "20px" }}/>
                    </div>

                       {/* Sasha Info */}
                     <div style={{
                      flex: "0 0 774px",
                      height: "695px",
                      scrollSnapAlign: "center",
                      position: "relative"
                    }}>
                      <Image src="/images/SashaInfo.png" alt="" fill style={{ objectFit: "contain", borderRadius: "20px" }}/>
                    </div>

                    {/* Photo Card Jibek */}
                    <div style={{
                      flex: "0 0 774px",
                      height: "695px",
                      scrollSnapAlign: "center",
                      position: "relative"
                    }}>
                      <Image src="/images/Jibek1.jpg" alt="" fill style={{ objectFit: "cover", borderRadius: "20px" }}/>
                    </div> 

                       {/* Jibek Info */}
                     <div style={{
                      flex: "0 0 774px",
                      height: "695px",
                      scrollSnapAlign: "center",
                      position: "relative"
                    }}>
                      <Image src="/images/JibekInfo.jpg" alt="" fill style={{ objectFit: "contain", borderRadius: "20px" }}/>
                    </div>

                  </div>
                </div>

                <div className="mac-text" style={{width:"1271px", height:"346px", position:"relative", top:-1080, left:30}}>
                  <p style={{fontSize:38, fontWeight:600, textAlign:"center"}}>Через психологический инструментарий МАК-карты (метаморфические ассоциативные карты) прорабатываются программы, страхи и убеждения. Карты «Мышление» выявляют подсознательные установки и послания, связанные с личным брендом <br />  <br />
                    Бизнес игра проводиться при наборе участников - не менее 4 человек  <br />  <br />
                    <span style={{color:"#780F0F"}}>*В стоимость игры не входит аренда локации</span></p>
                </div>

                <div className="tariffs-title" style={{position:"relative", top:-890}}>
                  <p style={{fontSize:65, fontWeight:700,textAlign:"center",color:"#780F0F"}}>ТАРИФЫ (ОФЛАЙН И ОНЛАЙН)</p>
                </div>

                {/* Tarifs */}
                <div className="tariffs"
                  style={{
                  display: "flex",
                  flexWrap: "wrap",
                  justifyContent: "center",
                  gap: "32px",
                  marginTop: "40px",
                  position: "relative",
                  top: -890,
              }}
            >
              {/*Card 1 */}
              <div
              className="CardBlack"
                style={{
                  width: 655,
                  height: 700,
                  background: "#000",
                  color: "#fff",
                  borderRadius: 32,
                  padding: "32px 28px",
                  boxSizing: "border-box",
                  position: "relative",
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "space-between",
                }}
              >
                {/* Price circle */}
                <div
                  style={{
                    width: 168,
                    height: 170,
                    background: "#fff",
                    color: "#780F0F",
                    borderRadius: "50%",
                    position: "absolute",
                    top: -30,
                    right: -24,
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    fontWeight: 800,
                    fontSize: 50,
                    transform: "rotate(-15deg)",
                    boxShadow: "0 8px 20px rgba(0,0,0,0.2)",
                  }}
                >
                  150$
                </div>

                <div>
                  <h3 style={{ fontSize: 42, margin: 0, marginBottom: 40, textAlign:"center" }}>Базовый</h3>
                  <ul
                    style={{
                      margin: 0,
                      paddingLeft: 18,
                      fontSize: 30,
                      lineHeight: 1.5,
                      textAlign: "left",
                    }}
                  >
                    <li style={{marginBottom:"10px"}}>Длительность: 3–4 часа</li>
                    <li>Макс-сессия на 1 дополнительный запрос</li>
                  </ul>
                </div>

                <div className="btns1"
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                    gap: 16,
                    marginBottom: 12,
                  }}
                >
                  <button className="tariff-btn"
                    style={{
                      width: 393,
                      height: 84,
                      borderRadius: 30,
                      border: "2px solid #fff",
                      background: "transparent",
                      color: "#fff",
                      fontSize: 24,
                      fontWeight: 700,
                      cursor: "pointer",
                    }}
                    onClick={() => {
                      const formElement = document.getElementById("lead-form");
                      formElement.scrollIntoView({ behavior: "smooth" });
                    }}>
                    Оставить заявку
                  </button>
                  <button className="tariff-btn"
                    style={{
                      width: 393,
                      height: 84,
                      borderRadius: 30,
                      border: "none",
                      background: "#fff",
                      color: "#000",
                      fontSize: 24,
                      fontWeight: 700,
                      cursor: "pointer",
                    }}
                  >
                    Оплатить
                  </button>
                </div>
              </div>

              {/*Card 2*/}
              <div
                className="CardBlack"
                style={{
                  width: 655,
                  height: 700,
                  background: "#000",
                  color: "#fff",
                  borderRadius: 32,
                  padding: "32px 28px",
                  boxSizing: "border-box",
                  position: "relative",
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "space-between",
                }}
              >
                <div
                  style={{
                    width: 168,
                    height: 170,
                    background: "#fff",
                    color: "#780F0F",
                    borderRadius: "50%",
                    position: "absolute",
                    top: -30,
                    right: -24,
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    fontWeight: 800,
                    fontSize: 50,
                    transform: "rotate(-15deg)",
                    boxShadow: "0 8px 20px rgba(0,0,0,0.2)",
                  }}
                >
                  250$
                </div>

                <div>
                  <h3 style={{ fontSize: 42, margin: 0, marginBottom: 40, textAlign:"center" }}>Продвинутый</h3>
                  <ul style={{ margin: 0, paddingLeft: 18, fontSize: 30, lineHeight: 1.5 }}>
                    <li style={{marginBottom:"2px"}}>Длительность: 3–4 часа</li>
                    <li style={{marginBottom:"2px"}}>Макс-сессия на 1 дополнительный запрос</li>
                    <li style={{marginBottom:"2px"}}>Индивидуальная сессия (30 мин)</li>
                    <li>Рекомендации/домашние задания</li>
                  </ul>
                </div>

                <div className="btns2" style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: 16, marginBottom: 12 }}>
                  <button className="b1" style={{
                      width: 393,
                      height: 84,
                      borderRadius: 30,
                      border: "2px solid #fff",
                      background: "transparent",
                      color: "#fff",
                      fontSize: 24,
                      fontWeight: 700,
                      cursor: "pointer",}}
                       onClick={() => {
                      const formElement = document.getElementById("lead-form");
                      formElement.scrollIntoView({ behavior: "smooth" });
                    }}
                      >
                    Оставить заявку
                  </button>
                  <button className="b1" style={{width: 393,
                      height: 84,
                      borderRadius: 30,
                      border: "none",
                      background: "#fff",
                      color: "#000",
                      fontSize: 24,
                      fontWeight: 700,
                      cursor: "pointer", }}>
                    Оплатить
                  </button>
                </div>
              </div>

              {/*Card 3 */}
              <div
               className="CardRed"
                style={{
                  width: 655,
                  height: 800,
                  background: "#7B0E0E",
                  color: "#fff",
                  borderRadius: 32,
                  padding: "32px 28px",
                  boxSizing: "border-box",
                  position: "relative",
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "space-between",
                  marginTop: 8,
                }}
              >
                <div
                  style={{
                    width: 168,
                    height: 170,
                    background: "#fff",
                    color: "#7B0E0E",
                    borderRadius: "50%",
                    position: "absolute",
                    top: -30,
                    right: -24,
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    fontWeight: 800,
                    fontSize: 50,
                    transform: "rotate(-15deg)",
                    boxShadow: "0 8px 20px rgba(0,0,0,0.2)",
                  }}
                >
                  500$
                </div>

                <div>
                  <h3 style={{ fontSize: 42, margin: 0, marginBottom: 40, textAlign:"center" }}>VIP</h3>
                  <ul style={{ margin: 0, paddingLeft: 18, fontSize: 30, lineHeight: 1.5 }}>
                    <li style={{marginBottom:"2px"}}>Длительность: 3–4 часа</li>
                    <li style={{marginBottom:"2px"}}>Макс-сессия на 1 дополнительный запрос</li>
                    <li style={{marginBottom:"2px"}}>Индивидуальная сессия (30 мин)</li>
                    <li>EMDR-сессия - отдельная 3 часовая проработка выявленных на игре негативных установок и паттернов мышления</li>
                  </ul>
                </div>

                <div className="btns3" style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: 16, marginBottom: 12 }}>
                  <button style={{
                     width: 393, 
                     height: 84, 
                     borderRadius: 30, 
                     border: "2px solid #fff",
                     background: "transparent", 
                     color: "#fff", 
                     fontSize: 24, 
                     fontWeight: 700, 
                     cursor: "pointer" }}
                      onClick={() => {
                      const formElement = document.getElementById("lead-form");
                      formElement.scrollIntoView({ behavior: "smooth" });
                    }}
                     >
                    Оставить заявку
                  </button>
                  <button style={{ 
                    width: 393, 
                    height: 84, 
                    borderRadius: 30, 
                    border: "none", 
                    background: "#fff", 
                    color: "#7B0E0E", 
                    fontSize: 24, 
                    fontWeight: 700, 
                    cursor: "pointer" }}>
                    Оплатить
                  </button>
                </div>
              </div>

              {/*Card 4*/}
              <div
               className="CardRed"
                style={{
                  width: 655,
                  height: 800,
                  background: "#7B0E0E",
                  color: "#fff",
                  borderRadius: 32,
                  padding: "32px 28px",
                  boxSizing: "border-box",
                  position: "relative",
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "space-between",
                  marginTop: 8,
                }}
              >
                <div
                  style={{
                    width: 168,
                    height: 170,
                    background: "#fff",
                    color: "#7B0E0E",
                    borderRadius: "50%",
                    position: "absolute",
                    top: -30,
                    right: -24,
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    fontWeight: 800,
                    fontSize: 45,
                    transform: "rotate(-15deg)",
                    boxShadow: "0 8px 20px rgba(0,0,0,0.2)",
                  }}
                >
                  2000$
                </div>

                <div>
                  <h3 style={{ fontSize: 42, margin: 0, marginBottom: 40, textAlign:"center" }}>Elite</h3>
                  <ul style={{ margin: 0, paddingLeft: 18, fontSize: 30, lineHeight: 1.5 }}>
                    <li style={{marginBottom:"2px"}}>Все компоненты VIP + коммуникационная стратегия личного бренда /продукта/ услуги/компании</li>
                    <li>Отдельные три сессии выработки стратегии - картирование бренда, мастермайнд, согласование выработанной стратегии</li>
                  </ul>
                </div>

                <div className="btns4" style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: 16, marginBottom: 12 }}>
                  <button style={{ 
                    width: 393, 
                    height: 84, 
                    borderRadius: 30, 
                    border: "2px solid #fff", 
                    background: "transparent", 
                    color: "#fff", 
                    fontSize: 24, 
                    fontWeight: 700, 
                    cursor: "pointer" }}
                     onClick={() => {
                      const formElement = document.getElementById("lead-form");
                      formElement.scrollIntoView({ behavior: "smooth" });
                    }}
                    >
                    Оставить заявку
                  </button>
                  <button style={{ 
                    width: 393,
                    height: 84, 
                    borderRadius: 30, 
                    border: "none", 
                    background: "#fff", 
                    color: "#7B0E0E", 
                    fontSize: 24, 
                    fontWeight: 700, 
                    cursor: "pointer" }}>
                    Оплатить
                  </button>
                </div>
              </div>
            </div>

            <form
              id="lead-form"
              className="lead-form"
              onSubmit={onSubmit}
              style={{
                width: 768,
                display: "flex",
                flexDirection: "column",
                gap: 25,
                padding: "49px 48px",
                borderRadius: 20,
                background: "#FFFFFF",
                margin: "0 auto",
                boxSizing: "border-box",
                backgroundColor:"#F8F8F8",
                position: "relative",
                top:-760
              }}
            >
              <h2 style={{ margin: 0, fontSize: 40, fontWeight: 800, color: "#780F0F", textAlign: "center" }}>
                Оставьте Заявку
              </h2>

              <div className="name-row" style={{ display: "flex", gap: 10}}>
                <div style={{ flex: 1 }}>
                  <p style={{ marginBottom: 6, fontSize: 18, fontWeight: 700 }}>Имя</p>
                  <input
                    name="firstName"
                    placeholder="Джон"
                    value={form.firstName}
                    onChange={onChange}
                    style={{
                      width: "100%",
                      padding: "12px 16px",
                      borderRadius: 12,
                      border: "1px solid #ffffffff",
                      outline: "none",
                      fontSize: 16,
                      boxSizing: "border-box"}}
                  />
                </div>

                <div style={{ flex: 1 }}>
                  <p style={{ marginBottom: 6, fontSize: 18, fontWeight: 700 }}>Фамилия</p>
                  <input
                    name="lastName"
                    placeholder="Доу"
                    value={form.lastName}
                    onChange={onChange}
                    style={{
                      width: "100%",
                      padding: "12px 16px",
                      borderRadius: 12,
                      border: "1px solid #ffffffff",
                      outline: "none",
                      fontSize: 16,
                      boxSizing: "border-box"
                    }}
                  />
                </div>
              </div>

              <div className="phone-block">
                <p style={{ marginBottom: 6, fontSize: 18, fontWeight: 700 }}>
                  Номер Телефона (WhatsApp)
                </p>
                <input
                  name="phone"
                  placeholder="+996 770 000-00-00"
                  value={form.phone}
                  onChange={onChange}
                  style={{ 
                      width: "100%",
                      padding: "12px 16px",
                      borderRadius: 12,
                      border: "1px solid #ffffffff",
                      outline: "none",
                      fontSize: 16,
                      boxSizing: "border-box"
                  }}
                />
              </div>

              <div className="desc-block">
                <p style={{ marginBottom: 6, fontSize: 18, fontWeight: 700 }}>Описание</p>
                <textarea
                  name="description"
                  placeholder="Кратко опишите ваш вопрос"
                  value={form.description}
                  onChange={onChange}
                  style={{
                      padding: "12px 16px",
                      borderRadius: 12,
                      border: "1px solid #ffffffff",
                      outline: "none",
                      fontSize: 16,
                      boxSizing: "border-box",
                      width: "100%",
                      height: 250,
                      resize: "vertical",
                      paddingTop: 16,
                      paddingBottom: 16,
                  }}
                />
              </div>

              <button
                className="formbtn"
                type="submit"
                style={{
                  width: "100%",
                  height: 84,
                  borderRadius: 30,
                  background: "#7B0E0E",
                  color: "#fff",
                  fontSize: 22,
                  fontWeight: 700,
                  border: "none",
                  cursor: "pointer",
                }}
              >
                Отправить
              </button>
            </form>
            <p className="watermark" style={{color: "#d6cfcfff",textAlign:"center"}}>Powered by @Spizegirlz</p>
  </div>
  );
}

