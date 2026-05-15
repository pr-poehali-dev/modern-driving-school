import { useState } from "react";
import Icon from "@/components/ui/icon";

const heroImage = "https://cdn.poehali.dev/projects/db520e84-d72d-45b6-8c88-6038a6d66212/files/9cb013a2-e1a4-4b61-9a13-c0327953f954.jpg";

const categories = [
  {
    letter: "А",
    title: "Мотоциклы",
    desc: "Управление мотоциклами, мопедами и квадроциклами. Полный курс от новичка до уверенного водителя.",
    icon: "Bike",
    duration: "3 месяца",
    lessons: "28 занятий",
    price: "от 18 000 ₽",
    gradient: "from-orange-600 to-red-600",
    accent: "#FF5C00",
  },
  {
    letter: "В",
    title: "Легковые авто",
    desc: "Самая популярная категория. Легковые автомобили с механической и автоматической коробкой передач.",
    icon: "Car",
    duration: "3 месяца",
    lessons: "36 занятий",
    price: "от 25 000 ₽",
    gradient: "from-yellow-500 to-orange-500",
    accent: "#FFB800",
  },
  {
    letter: "С",
    title: "Грузовые авто",
    desc: "Профессиональное управление грузовыми транспортными средствами. Открывает карьерные перспективы.",
    icon: "Truck",
    duration: "4 месяца",
    lessons: "44 занятия",
    price: "от 32 000 ₽",
    gradient: "from-red-600 to-orange-700",
    accent: "#FF3D00",
  },
];

const instructors = [
  {
    name: "Александр Морозов",
    exp: "12 лет опыта",
    cats: ["В", "С"],
    desc: "Бывший водитель-испытатель. Спокойный и методичный подход к обучению.",
    avatar: "👨‍✈️",
  },
  {
    name: "Дмитрий Волков",
    exp: "8 лет опыта",
    cats: ["А", "В"],
    desc: "Мастер спорта по мотокроссу. Обучил более 500 мотоциклистов.",
    avatar: "🏍️",
  },
  {
    name: "Сергей Петров",
    exp: "15 лет опыта",
    cats: ["В", "С"],
    desc: "Специалист по вождению в сложных условиях. Эксперт по грузовому транспорту.",
    avatar: "🚛",
  },
  {
    name: "Наталья Смирнова",
    exp: "6 лет опыта",
    cats: ["В"],
    desc: "Терпеливый инструктор. Специализируется на обучении с нуля и работе с тревожными учениками.",
    avatar: "👩‍🏫",
  },
];

const faqs = [
  {
    q: "Можно ли учиться без опыта вождения?",
    a: "Да, абсолютно! Наши инструкторы работают со студентами любого уровня. Большинство наших выпускников приходили с нулевым опытом.",
  },
  {
    q: "Сколько времени занимает получение прав?",
    a: "В среднем 2–4 месяца: теория занимает 1–1,5 месяца, практика — ещё столько же. Сроки зависят от вашей занятости и выбранной программы.",
  },
  {
    q: "Как записаться на первое занятие?",
    a: "Заполните форму обратной связи внизу страницы или позвоните нам. Менеджер свяжется с вами в течение часа и подберёт удобное время.",
  },
  {
    q: "Есть ли рассрочка на оплату обучения?",
    a: "Да! Мы предлагаем беспроцентную рассрочку на весь период обучения. Первый взнос — 30% от стоимости, остальное — равными частями.",
  },
  {
    q: "Что входит в стоимость обучения?",
    a: "Теоретические занятия, практические уроки вождения, учебные материалы и пособия, подготовка к экзамену в ГИБДД. Госпошлина оплачивается отдельно.",
  },
  {
    q: "Можно ли перенести занятие?",
    a: "Да, занятие можно перенести не позднее чем за 24 часа. Мы понимаем, что жизнь непредсказуема, и стараемся быть гибкими.",
  },
];

const stats = [
  { value: "98%", label: "Сдают с 1-й попытки" },
  { value: "2500+", label: "Выпускников" },
  { value: "12 лет", label: "На рынке" },
  { value: "4.9 ★", label: "Средний рейтинг" },
];

export default function Index() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);
  const [form, setForm] = useState({ name: "", phone: "", category: "", message: "" });
  const [sent, setSent] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSent(true);
  };

  return (
    <div className="min-h-screen bg-drive-dark font-golos text-white overflow-x-hidden">

      {/* NAV */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-drive-dark/80 backdrop-blur-md border-b border-white/5">
        <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-full bg-gradient-to-br from-drive-orange to-drive-yellow flex items-center justify-center">
              <Icon name="Car" size={20} className="text-white" />
            </div>
            <span className="font-oswald text-xl font-bold tracking-wider text-white">DRIVE<span className="text-drive-orange">PRO</span></span>
          </div>
          <div className="hidden md:flex items-center gap-8 text-sm font-medium text-white/70">
            <a href="#programs" className="hover:text-drive-orange transition-colors">Программы</a>
            <a href="#instructors" className="hover:text-drive-orange transition-colors">Инструкторы</a>
            <a href="#faq" className="hover:text-drive-orange transition-colors">FAQ</a>
            <a href="#contact" className="bg-drive-orange hover:bg-orange-600 text-white px-5 py-2 rounded-full transition-colors font-semibold">
              Записаться
            </a>
          </div>
          <a href="#contact" className="md:hidden bg-drive-orange hover:bg-orange-600 text-white px-4 py-2 rounded-full text-sm font-semibold transition-colors">
            Записаться
          </a>
        </div>
      </nav>

      {/* HERO */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url(${heroImage})` }}
        />
        <div className="absolute inset-0 bg-gradient-to-r from-drive-dark via-drive-dark/80 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-t from-drive-dark via-transparent to-drive-dark/60" />

        <div className="absolute top-1/3 right-10 w-px h-64 bg-gradient-to-b from-transparent via-drive-orange/40 to-transparent" />
        <div className="absolute bottom-1/3 right-20 w-px h-40 bg-gradient-to-b from-transparent via-drive-yellow/30 to-transparent" />

        <div className="relative z-10 max-w-7xl mx-auto px-6 pt-24">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 bg-drive-orange/20 border border-drive-orange/40 rounded-full px-4 py-2 mb-6">
              <div className="w-2 h-2 rounded-full bg-drive-orange animate-pulse" />
              <span className="text-drive-orange text-sm font-semibold">Запись открыта</span>
            </div>

            <h1 className="font-oswald text-6xl md:text-8xl font-bold leading-none mb-6">
              СТАНЬ<br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-drive-orange to-drive-yellow">
                МАСТЕРОМ
              </span><br />
              ДОРОГИ
            </h1>

            <p className="text-white/70 text-lg md:text-xl leading-relaxed mb-10 max-w-xl">
              Профессиональная автошкола с опытными инструкторами. Категории А, В и С — выбирай свой путь к свободе на дороге.
            </p>

            <div className="flex flex-wrap gap-4">
              <a href="#contact" className="bg-gradient-to-r from-drive-orange to-orange-600 hover:from-orange-600 hover:to-drive-orange text-white px-8 py-4 rounded-full font-bold text-lg transition-all duration-300 hover:scale-105 shadow-lg shadow-orange-500/30">
                Записаться сейчас
              </a>
              <a href="#programs" className="border border-white/30 hover:border-drive-orange text-white hover:text-drive-orange px-8 py-4 rounded-full font-semibold text-lg transition-all duration-300">
                Узнать подробнее
              </a>
            </div>
          </div>
        </div>

        <div className="absolute bottom-0 left-0 right-0 bg-drive-gray/90 backdrop-blur-sm border-t border-white/5">
          <div className="max-w-7xl mx-auto px-6 py-5 grid grid-cols-2 md:grid-cols-4 gap-6">
            {stats.map((s, i) => (
              <div key={i} className="text-center">
                <div className="font-oswald text-2xl md:text-3xl font-bold text-drive-orange">{s.value}</div>
                <div className="text-white/50 text-sm mt-1">{s.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* PROGRAMS */}
      <section id="programs" className="py-24 bg-drive-dark">
        <div className="max-w-7xl mx-auto px-6">
          <div className="mb-16">
            <div className="text-drive-orange font-semibold text-sm tracking-widest uppercase mb-3">Наши программы</div>
            <h2 className="font-oswald text-5xl md:text-6xl font-bold text-white">
              КАТЕГОРИИ<br /><span className="text-drive-orange">ОБУЧЕНИЯ</span>
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {categories.map((cat, i) => (
              <div
                key={i}
                className="group relative bg-drive-card rounded-2xl overflow-hidden border border-white/5 hover:border-white/20 transition-all duration-500 hover:-translate-y-2"
              >
                <div className={`absolute inset-0 bg-gradient-to-br ${cat.gradient} opacity-0 group-hover:opacity-10 transition-opacity duration-500`} />

                <div className="p-8">
                  <div className="flex items-start justify-between mb-6">
                    <div
                      className="font-oswald text-8xl font-black leading-none"
                      style={{ color: cat.accent, opacity: 0.15 }}
                    >
                      {cat.letter}
                    </div>
                    <div
                      className="w-14 h-14 rounded-xl flex items-center justify-center"
                      style={{ background: `${cat.accent}20`, border: `1px solid ${cat.accent}40` }}
                    >
                      <Icon name={cat.icon} size={26} style={{ color: cat.accent }} />
                    </div>
                  </div>

                  <div className="mb-2">
                    <span className="font-oswald text-4xl font-bold text-white">Кат. {cat.letter}</span>
                  </div>
                  <div className="text-drive-orange font-semibold text-lg mb-4">{cat.title}</div>
                  <p className="text-white/60 text-sm leading-relaxed mb-8">{cat.desc}</p>

                  <div className="grid grid-cols-2 gap-3 mb-8">
                    {[
                      { icon: "Clock", val: cat.duration },
                      { icon: "BookOpen", val: cat.lessons },
                    ].map((item, j) => (
                      <div key={j} className="bg-white/5 rounded-xl p-3 flex items-center gap-2">
                        <Icon name={item.icon} size={16} className="text-white/40" />
                        <span className="text-white/70 text-sm">{item.val}</span>
                      </div>
                    ))}
                  </div>

                  <div className="flex items-center justify-between">
                    <span className="font-oswald text-2xl font-bold" style={{ color: cat.accent }}>{cat.price}</span>
                    <a
                      href="#contact"
                      className="text-sm font-semibold px-5 py-2.5 rounded-full transition-all duration-300 hover:scale-105"
                      style={{ background: `${cat.accent}20`, color: cat.accent, border: `1px solid ${cat.accent}40` }}
                    >
                      Записаться →
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* WHY US */}
      <section className="py-20 bg-drive-gray">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <div>
              <div className="text-drive-orange font-semibold text-sm tracking-widest uppercase mb-3">Почему мы</div>
              <h2 className="font-oswald text-5xl font-bold text-white mb-8">
                ВАША БЕЗОПАСНОСТЬ —<br /><span className="text-drive-orange">НАШ ПРИОРИТЕТ</span>
              </h2>
              <div className="space-y-5">
                {[
                  { icon: "Shield", title: "Лицензия ГИБДД", desc: "Официальная аккредитация. Все документы в порядке." },
                  { icon: "Users", title: "Малые группы", desc: "Не более 8 человек — максимум внимания каждому." },
                  { icon: "Star", title: "Современный автопарк", desc: "Новые учебные автомобили 2023–2024 года выпуска." },
                  { icon: "MapPin", title: "Удобное расположение", desc: "Собственный автодром и учебные классы в центре города." },
                ].map((item, i) => (
                  <div key={i} className="flex gap-4 group">
                    <div className="w-12 h-12 rounded-xl bg-drive-orange/10 border border-drive-orange/20 flex items-center justify-center flex-shrink-0 group-hover:bg-drive-orange/20 transition-colors">
                      <Icon name={item.icon} size={20} className="text-drive-orange" />
                    </div>
                    <div>
                      <div className="font-semibold text-white mb-1">{item.title}</div>
                      <div className="text-white/50 text-sm">{item.desc}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="relative">
              <div className="absolute -inset-4 bg-gradient-to-br from-drive-orange/20 to-drive-yellow/10 rounded-3xl blur-2xl" />
              <div className="relative bg-drive-card rounded-2xl p-8 border border-white/10">
                <div className="font-oswald text-4xl font-black text-white mb-2">Как проходит обучение?</div>
                <div className="text-white/50 mb-8">Простой путь к правам за 3 шага</div>
                {[
                  { num: "01", title: "Теория", desc: "Онлайн и офлайн занятия по ПДД. Тесты и разбор сложных ситуаций." },
                  { num: "02", title: "Практика", desc: "Занятия на автодроме, затем выезды в город с инструктором." },
                  { num: "03", title: "Экзамен", desc: "Подготовка и сдача экзамена в ГИБДД. Мы сопровождаем вас." },
                ].map((step, i) => (
                  <div key={i} className="flex gap-5 mb-6 last:mb-0">
                    <div className="font-oswald text-4xl font-black text-drive-orange/30 leading-none w-12 flex-shrink-0">{step.num}</div>
                    <div className="border-l border-white/10 pl-5">
                      <div className="font-semibold text-white mb-1">{step.title}</div>
                      <div className="text-white/50 text-sm">{step.desc}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* INSTRUCTORS */}
      <section id="instructors" className="py-24 bg-drive-dark">
        <div className="max-w-7xl mx-auto px-6">
          <div className="mb-16">
            <div className="text-drive-orange font-semibold text-sm tracking-widest uppercase mb-3">Команда</div>
            <h2 className="font-oswald text-5xl md:text-6xl font-bold text-white">
              ВАШИ<br /><span className="text-drive-orange">ИНСТРУКТОРЫ</span>
            </h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-5">
            {instructors.map((inst, i) => (
              <div
                key={i}
                className="group bg-drive-card rounded-2xl p-6 border border-white/5 hover:border-drive-orange/30 transition-all duration-300 hover:-translate-y-1"
              >
                <div className="text-5xl mb-4">{inst.avatar}</div>
                <div className="font-oswald text-xl font-bold text-white mb-1">{inst.name}</div>
                <div className="text-drive-orange text-sm font-semibold mb-3">{inst.exp}</div>
                <div className="flex gap-2 mb-4">
                  {inst.cats.map((c) => (
                    <span key={c} className="text-xs font-bold px-2.5 py-1 rounded-full bg-drive-orange/10 text-drive-orange border border-drive-orange/20">
                      Кат. {c}
                    </span>
                  ))}
                </div>
                <p className="text-white/50 text-sm leading-relaxed">{inst.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section id="faq" className="py-24 bg-drive-gray">
        <div className="max-w-4xl mx-auto px-6">
          <div className="mb-16 text-center">
            <div className="text-drive-orange font-semibold text-sm tracking-widest uppercase mb-3">FAQ</div>
            <h2 className="font-oswald text-5xl md:text-6xl font-bold text-white">
              ЧАСТЫЕ <span className="text-drive-orange">ВОПРОСЫ</span>
            </h2>
          </div>

          <div className="space-y-3">
            {faqs.map((faq, i) => (
              <div
                key={i}
                className="bg-drive-card rounded-xl border border-white/5 overflow-hidden"
              >
                <button
                  onClick={() => setOpenFaq(openFaq === i ? null : i)}
                  className="w-full flex items-center justify-between px-7 py-5 text-left hover:bg-white/3 transition-colors"
                >
                  <span className="font-semibold text-white pr-4">{faq.q}</span>
                  <div className={`flex-shrink-0 w-8 h-8 rounded-full border border-white/10 flex items-center justify-center transition-all duration-300 ${openFaq === i ? 'bg-drive-orange border-drive-orange rotate-45' : ''}`}>
                    <Icon name="Plus" size={16} className={openFaq === i ? 'text-white' : 'text-white/40'} />
                  </div>
                </button>
                {openFaq === i && (
                  <div className="px-7 pb-5">
                    <div className="border-t border-white/5 pt-4 text-white/60 leading-relaxed">{faq.a}</div>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CONTACT */}
      <section id="contact" className="py-24 bg-drive-dark">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-16 items-start">
            <div>
              <div className="text-drive-orange font-semibold text-sm tracking-widest uppercase mb-3">Контакты</div>
              <h2 className="font-oswald text-5xl md:text-6xl font-bold text-white mb-6">
                НАЧНИ<br /><span className="text-drive-orange">СЕГОДНЯ</span>
              </h2>
              <p className="text-white/60 text-lg leading-relaxed mb-10">
                Оставь заявку — мы перезвоним в течение часа и ответим на все вопросы
              </p>

              <div className="space-y-6">
                {[
                  { icon: "Phone", label: "Телефон", val: "+7 (800) 000-00-00" },
                  { icon: "Mail", label: "Email", val: "info@drivepro.ru" },
                  { icon: "MapPin", label: "Адрес", val: "ул. Примерная, 42, Москва" },
                  { icon: "Clock", label: "Часы работы", val: "Пн–Вс: 8:00 – 21:00" },
                ].map((item, i) => (
                  <div key={i} className="flex items-center gap-4">
                    <div className="w-11 h-11 rounded-xl bg-drive-orange/10 border border-drive-orange/20 flex items-center justify-center">
                      <Icon name={item.icon} size={18} className="text-drive-orange" />
                    </div>
                    <div>
                      <div className="text-white/40 text-xs uppercase tracking-wider">{item.label}</div>
                      <div className="text-white font-semibold">{item.val}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-drive-card rounded-2xl p-8 border border-white/10">
              {sent ? (
                <div className="text-center py-10">
                  <div className="w-20 h-20 rounded-full bg-green-500/20 border border-green-500/40 flex items-center justify-center mx-auto mb-5">
                    <Icon name="Check" size={36} className="text-green-400" />
                  </div>
                  <div className="font-oswald text-3xl font-bold text-white mb-3">Отлично!</div>
                  <p className="text-white/60">Ваша заявка принята. Мы свяжемся с вами в течение часа.</p>
                </div>
              ) : (
                <>
                  <div className="font-oswald text-3xl font-bold text-white mb-2">Оставить заявку</div>
                  <p className="text-white/40 text-sm mb-8">Заполните форму — мы перезвоним</p>
                  <form onSubmit={handleSubmit} className="space-y-4">
                    <div>
                      <label className="block text-white/60 text-sm mb-2">Ваше имя *</label>
                      <input
                        required
                        type="text"
                        value={form.name}
                        onChange={e => setForm({ ...form, name: e.target.value })}
                        placeholder="Иван Иванов"
                        className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white placeholder-white/20 focus:outline-none focus:border-drive-orange transition-colors"
                      />
                    </div>
                    <div>
                      <label className="block text-white/60 text-sm mb-2">Телефон *</label>
                      <input
                        required
                        type="tel"
                        value={form.phone}
                        onChange={e => setForm({ ...form, phone: e.target.value })}
                        placeholder="+7 (999) 000-00-00"
                        className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white placeholder-white/20 focus:outline-none focus:border-drive-orange transition-colors"
                      />
                    </div>
                    <div>
                      <label className="block text-white/60 text-sm mb-2">Категория</label>
                      <select
                        value={form.category}
                        onChange={e => setForm({ ...form, category: e.target.value })}
                        className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-drive-orange transition-colors"
                      >
                        <option value="" className="bg-drive-dark">Выберите категорию</option>
                        <option value="A" className="bg-drive-dark">Категория А — Мотоциклы</option>
                        <option value="B" className="bg-drive-dark">Категория В — Легковые авто</option>
                        <option value="C" className="bg-drive-dark">Категория С — Грузовые авто</option>
                      </select>
                    </div>
                    <div>
                      <label className="block text-white/60 text-sm mb-2">Сообщение</label>
                      <textarea
                        value={form.message}
                        onChange={e => setForm({ ...form, message: e.target.value })}
                        placeholder="Ваш вопрос или пожелание..."
                        rows={3}
                        className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white placeholder-white/20 focus:outline-none focus:border-drive-orange transition-colors resize-none"
                      />
                    </div>
                    <button
                      type="submit"
                      className="w-full bg-gradient-to-r from-drive-orange to-orange-600 hover:from-orange-600 hover:to-drive-orange text-white py-4 rounded-xl font-bold text-lg transition-all duration-300 hover:scale-[1.02] shadow-lg shadow-orange-500/20"
                    >
                      Отправить заявку
                    </button>
                    <p className="text-white/20 text-xs text-center">Нажимая кнопку, вы соглашаетесь с политикой конфиденциальности</p>
                  </form>
                </>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="py-8 bg-black border-t border-white/5">
        <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 rounded-full bg-gradient-to-br from-drive-orange to-drive-yellow flex items-center justify-center">
              <Icon name="Car" size={14} className="text-white" />
            </div>
            <span className="font-oswald font-bold tracking-wider text-white">DRIVE<span className="text-drive-orange">PRO</span></span>
          </div>
          <div className="text-white/30 text-sm">© 2024 DrivePro. Все права защищены.</div>
          <div className="flex gap-4 text-white/40 text-sm">
            <a href="#" className="hover:text-white transition-colors">Политика конфиденциальности</a>
          </div>
        </div>
      </footer>
    </div>
  );
}
