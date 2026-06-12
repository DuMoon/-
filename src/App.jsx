import React from 'react';
import {
  ArrowUpRight,
  CalendarDays,
  Compass,
  Gem,
  Mail,
  MapPin,
  MessageCircle,
  MoonStar,
  Phone,
  Sparkles,
} from 'lucide-react';
import contactImage from './assets/contact.jpg';
import heroVideo from './assets/hero-bg.mp4';
import heroPoster from './assets/hero-poster.jpg';
import noiseTexture from './assets/noise.png';
import portraitImage from './assets/portrait.jpg';
import practiceAstrology from './assets/practice-astrology.webp';
import practiceBazi from './assets/practice-bazi.webp';
import practiceTarot from './assets/practice-tarot.webp';

const stats = [
  { value: '5 年', label: '神秘学与身心研究' },
  { value: '24h', label: '咨询后复盘窗口' },
  { value: '1:1', label: '私人深度咨询' },
  { value: '3 维', label: '认知 / 情绪 / 行动' },
];

const projects = [
  {
    title: '八字结构分析',
    type: 'Bazi Cognition',
    image: practiceBazi,
    meta: '不把八字当成定论，而是从结构、惯性与阶段节奏中，看见你如何形成选择模式。',
  },
  {
    title: '塔罗心理镜映',
    type: 'Tarot Reflection',
    image: practiceTarot,
    meta: '以牌面作为心理投射的镜子，帮助你辨认情绪、关系动力与尚未说出口的真实需求。',
  },
  {
    title: '占星认知地图',
    type: 'Astrology Mapping',
    image: practiceAstrology,
    meta: '用星盘梳理人格倾向、生命主题与时间压力点，目标不是预言，而是更清醒地回应当下。',
  },
];

function App() {
  return (
    <main
      style={{
        '--noise-image': `url(${noiseTexture})`,
        '--contact-image': `url(${contactImage})`,
      }}
    >
      <section className="hero" id="home">
        <video
          className="heroVideo"
          src={heroVideo}
          autoPlay
          muted
          loop
          playsInline
          preload="metadata"
          poster={heroPoster}
        />
        <div className="videoVeil" />
        <div className="grain" />
        <nav className="nav shell" aria-label="主导航">
          <a className="brand" href="#home">MING&nbsp;ORACLE</a>
          <div className="navLinks">
            <a href="#profile">咨询师</a>
            <a href="#works">修行路径</a>
            <a href="#contact">预约</a>
          </div>
          <a className="navButton" href="#contact">
            <CalendarDays size={17} />
            预约咨询
          </a>
        </nav>

        <div className="heroInner shell">
          <div className="heroKicker">
            <span />
            非宿命论命理咨询 / 心理认知疗愈
          </div>
          <h1>回归本真，才是出口。</h1>
          <p>
            以八字、塔罗与占星作为象征语言，进入心理模式、关系动力与人生选择的分析现场。这里不宣判宿命，只陪你剥开外界噪音，重新靠近真实的自己。
          </p>
          <div className="heroActions">
            <a className="primaryAction" href="#works">
              选择咨询
              <ArrowUpRight size={18} />
            </a>
            <a className="secondaryAction" href="#profile">了解咨询师</a>
          </div>
        </div>
      </section>

      <section className="profile section" id="profile">
        <div className="shell profileGrid">
          <div className="portraitWrap">
            <img src={portraitImage} alt="人物肖像" loading="lazy" decoding="async" />
          </div>
          <div className="profileContent">
            <p className="eyebrow">ABOUT THE CONSULTANT</p>
            <h2>不替命运下结论，只陪你看清内在结构。</h2>
            <p className="intro">
              我有 5 年神秘学与身心研究经验，持续在八字、塔罗、占星、心理认知与情绪疗愈之间做个人修行与实践。咨询不会告诉你“注定如此”，而是把命理作为一套自我观察工具，帮助你识别反复出现的心理脚本、情绪反应与选择惯性，从而更自由地行动。
            </p>
            <div className="contactList" aria-label="联系方式">
              <a href="mailto:1104464064@qq.com">
                <Mail size={18} />
                1104464064@qq.com
              </a>
              <a href="tel:18973392378">
                <Phone size={18} />
                18973392378
              </a>
              <span>
                <MessageCircle size={18} />
                微信 15211135978
              </span>
              <span>
                <MapPin size={18} />
                成都 / 线上咨询
              </span>
            </div>
            <div className="statsGrid">
              {stats.map((item) => (
                <div className="statCard" key={item.label}>
                  <strong>{item.value}</strong>
                  <span>{item.label}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="works section" id="works">
        <div className="shell">
          <div className="sectionHead">
            <p className="eyebrow">PERSONAL PRACTICE</p>
            <h2>修行路径</h2>
          </div>
          <div className="workList">
            {projects.map((project, index) => (
              <article className="workCard" key={project.title}>
                <img src={project.image} alt={project.title} loading="lazy" decoding="async" />
                <div className="workOverlay">
                  <span>0{index + 1}</span>
                  <div>
                    <p>{project.type}</p>
                    <h3>{project.title}</h3>
                    <small>{project.meta}</small>
                  </div>
                  <ArrowUpRight size={24} />
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="contactFinal" id="contact">
        <div className="shell contactShell">
          <div>
            <p className="eyebrow">PRIVATE SESSION</p>
            <h2>当答案尚未出现，先让问题变得清晰。</h2>
          </div>
          <div className="contactPanel">
            <MoonStar size={22} />
            <p>
              咨询适合正在经历关系困惑、职业转折、人生阶段转换，或想重新理解自我模式的人。它不是算命式断言，而是一场关于认知、情绪、关系与行动的深度分析。
            </p>
            <div className="contactModes">
              <span><Compass size={16} /> 八字结构</span>
              <span><Gem size={16} /> 塔罗镜映</span>
              <span><Sparkles size={16} /> 星盘分析</span>
            </div>
            <div className="contactList compact" aria-label="预约联系方式">
              <a href="tel:18973392378"><Phone size={18} /> 18973392378</a>
              <a href="mailto:1104464064@qq.com"><Mail size={18} /> 1104464064@qq.com</a>
              <span><MessageCircle size={18} /> 微信 15211135978</span>
              <span><MapPin size={18} /> 成都</span>
            </div>
            <a className="primaryAction" href="mailto:1104464064@qq.com">
              预约一对一咨询
              <ArrowUpRight size={18} />
            </a>
          </div>
          <div className="footerLine">
            <span>MING ORACLE</span>
            <span>
              <Sparkles size={15} />
              Non-fatalistic consulting for cognition and healing
            </span>
          </div>
        </div>
      </section>
    </main>
  );
}

export default App;
